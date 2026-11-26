// TRPG 赛高 · 发布脚本
// 入口：双击项目根目录的 一键打包.bat
// 交互流程：阶段 1 版本号 → 阶段 2 选择打包目标 → 阶段 3 选择发布目标（后两步可多选）
// 非交互：node scripts/cli.mjs [--version=x.y.z] [--build=exe,apk] [--publish=web,apk] [--yes] [--force]

import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  copyFileSync,
  createReadStream,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import readline from 'node:readline/promises';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(SCRIPT_DIR, '..');
const DIST = join(ROOT, 'dist');
const RELEASE = join(ROOT, 'release');
const APK_DIR = join(RELEASE, 'apk');
const PUBLISH_DIR = join(RELEASE, 'publish');
const ANDROID_DIR = join(ROOT, 'android');
const GRADLE_FILE = join(ANDROID_DIR, 'app', 'build.gradle');
const STATE_FILE = join(ROOT, '.publish-state.json');
const CONFIG_FILE = join(SCRIPT_DIR, 'publish.config.local.json');
const LANZOU_URL = 'https://pc.woozooo.com/mydisk.php';
const PGYER_API = 'https://api.pgyer.com/apiv2';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- 通用输出与进程 ----------

function title(text) {
  console.log(`\n== ${text} ==`);
}

function assert(cond, message) {
  if (!cond) throw new Error(message);
}

function mb(bytes) {
  return (bytes / 1024 / 1024).toFixed(1);
}

function stamp() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}

let rl;
function getRl() {
  rl ??= readline.createInterface({ input: process.stdin, output: process.stdout });
  return rl;
}

async function ask(question) {
  return (await getRl().question(question)).trim();
}

async function confirm(question) {
  return /^(y|yes|是)$/i.test(await ask(question));
}

// 整行交给 cmd 执行，避免 Windows 下参数转义问题
function run(commandLine, options = {}) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(commandLine, {
      cwd: options.cwd ?? ROOT,
      stdio: options.stdio ?? 'inherit',
      shell: true,
      env: { ...process.env, ...(options.env ?? {}) },
    });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0 || options.ignoreExitCode) resolvePromise(code);
      else reject(new Error(`命令失败（退出码 ${code}）：${commandLine}`));
    });
  });
}

function runQuiet(commandLine, cwd = ROOT) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(commandLine, { cwd, shell: true, stdio: ['ignore', 'pipe', 'pipe'] });
    let output = '';
    child.stdout.on('data', (chunk) => (output += chunk));
    child.stderr.on('data', (chunk) => (output += chunk));
    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) resolvePromise(output.trim());
      else reject(new Error(output.trim() || `命令失败（退出码 ${code}）：${commandLine}`));
    });
  });
}

function openTarget(target) {
  const child = spawn('explorer.exe', [target], { stdio: 'ignore', detached: true });
  child.on('error', () => {});
  child.unref();
}

// ---------- 文件与版本 ----------

function readJson(file, fallback) {
  try {
    return JSON.parse(readFileSync(file, 'utf8'));
  } catch {
    return fallback;
  }
}

function latestFile(dir, ext) {
  if (!existsSync(dir)) return null;
  const files = readdirSync(dir)
    .filter((name) => name.toLowerCase().endsWith(ext))
    .map((name) => join(dir, name))
    .sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
  return files[0] ?? null;
}

function sha256(file) {
  return new Promise((resolvePromise, reject) => {
    const hash = createHash('sha256');
    createReadStream(file)
      .on('data', (chunk) => hash.update(chunk))
      .on('error', reject)
      .on('end', () => resolvePromise(hash.digest('hex')));
  });
}

function cleanWeb() {
  for (const dir of [DIST, join(ROOT, 'dist-electron')]) {
    if (existsSync(dir)) rmSync(dir, { recursive: true, force: true });
  }
}

function syncAndroidVersion(version) {
  assert(existsSync(GRADLE_FILE), `未找到 ${GRADLE_FILE}`);
  const text = readFileSync(GRADLE_FILE, 'utf8');
  const next = text
    .replace(/versionCode \d+/, `versionCode ${version.code}`)
    .replace(/versionName "[^"]*"/, `versionName "${version.name}"`);
  if (next !== text) writeFileSync(GRADLE_FILE, next);
}

// package.json 版本号：默认 patch +1，也可手动输入；同步到 Android 工程
async function bumpVersion(options = {}) {
  const file = join(ROOT, 'package.json');
  const text = readFileSync(file, 'utf8');
  const pkg = readJson(file, null);
  const current = /^(\d+)\.(\d+)\.(\d+)$/.exec(pkg?.version ?? '');
  assert(current, `无法解析 package.json 版本号：${pkg?.version ?? '(缺失)'}`);

  const currentParts = current.slice(1).map(Number);
  const suggested = `${currentParts[0]}.${currentParts[1]}.${currentParts[2] + 1}`;

  let next = options.version ?? suggested;
  if (!options.version && options.interactive) {
    const input = await ask(`新版本号（回车使用 ${suggested}）：`);
    if (input) next = input;
  }

  const matched = /^(\d+)\.(\d+)\.(\d+)$/.exec(next);
  assert(matched, `版本号格式应为 x.y.z：${next}`);
  const nextParts = matched.slice(1).map(Number);
  const isNewer =
    nextParts[0] > currentParts[0] ||
    (nextParts[0] === currentParts[0] &&
      (nextParts[1] > currentParts[1] ||
        (nextParts[1] === currentParts[1] && nextParts[2] > currentParts[2])));
  assert(isNewer, `新版本号必须大于当前版本 ${pkg.version}`);

  const updated = text.replace(/("version"\s*:\s*")[^"]*(")/, `$1${next}$2`);
  assert(updated !== text, '写入新版本号失败，请检查 package.json');
  writeFileSync(file, updated);

  const version = {
    name: next,
    // versionCode 由 semver 推导：major*10000 + minor*100 + patch
    code: nextParts[0] * 10000 + nextParts[1] * 100 + nextParts[2],
  };
  syncAndroidVersion(version);
  console.log(`版本号：${pkg.version} → ${next}（versionCode ${version.code}）`);
  return version;
}

// ---------- Web ----------

async function buildWeb() {
  title('清理旧构建产物');
  cleanWeb();

  title('构建 Web 产物');
  await run('yarn build');
  assert(existsSync(join(DIST, 'index.html')), `构建产物缺失：${join(DIST, 'index.html')}`);
  console.log(`构建完成：${DIST}`);
}

// allow: 'ask' 询问 / 'yes' 直接执行 / 'no' 跳过
async function gitRelease(version, allow = 'ask') {
  const tag = `v${version.name}`;
  const exists = await runQuiet(`git tag -l ${tag}`);
  assert(!exists, `标签 ${tag} 已存在，请先删除或手动处理后再发布`);

  const commands = [
    'git add package.json android/app/build.gradle',
    `git commit -m "chore: release ${tag}"`,
    `git tag ${tag}`,
    'git push',
    `git push origin ${tag}`,
  ];

  console.log('\nWeb 发布将执行：');
  commands.forEach((cmd) => console.log(`  ${cmd}`));

  if (allow === 'ask') allow = (await confirm('确认执行以上 git 命令？(y/N)：')) ? 'yes' : 'no';
  if (allow !== 'yes') {
    console.log('[跳过] 未执行 git 发布，如需发布请手动运行上述命令');
    return false;
  }

  for (const command of commands) {
    console.log(`\n> ${command}`);
    await run(command);
  }
  console.log(`[Web] 已推送 ${tag}，GitHub Actions 将构建并发布到 deploy 分支`);
  return true;
}

// ---------- EXE ----------

async function buildExe({ reuseWebBuild = false } = {}) {
  if (reuseWebBuild) {
    title('打包 Windows 安装包（复用 Web 产物）');
    await run('npx electron-builder');
  } else {
    title('打包 Windows 安装包');
    await run('yarn buildexe');
  }
  const exe = latestFile(RELEASE, '.exe');
  assert(exe, '未在 release 目录找到 EXE，请检查上方输出');
  console.log(`打包完成：${exe}（${mb(statSync(exe).size)} MB）`);
  return exe;
}

async function publishExe(exe, state, force) {
  const hash = await sha256(exe);
  if (!force && state.exe?.hash === hash) {
    console.log(`[跳过] ${basename(exe)} 已准备过，如需重新准备请加 --force`);
    return;
  }

  title(`准备蓝奏云上传：${basename(exe)}（${mb(statSync(exe).size)} MB）`);
  mkdirSync(PUBLISH_DIR, { recursive: true });
  const dest = join(PUBLISH_DIR, basename(exe));
  copyFileSync(exe, dest);

  let copied = false;
  try {
    // PowerShell 7 的 Set-Clipboard 没有 -Path，改用 WinForms 写入文件拖放列表
    const escaped = dest.replace(/'/g, "''");
    const script =
      'Add-Type -AssemblyName System.Windows.Forms; ' +
      '$files = New-Object System.Collections.Specialized.StringCollection; ' +
      `$files.Add('${escaped}'); ` +
      '[System.Windows.Forms.Clipboard]::SetFileDropList($files); ' +
      'if ([System.Windows.Forms.Clipboard]::GetFileDropList().Count -lt 1) { exit 1 }';
    await run(`pwsh -NoProfile -Command "${script}"`, { stdio: 'ignore' });
    copied = true;
  } catch {
    // pwsh 不可用或剪贴板被占用时回退为手动上传
  }

  openTarget(LANZOU_URL);
  if (copied) {
    console.log('[EXE] 已复制到剪贴板，在蓝奏云上传页按 Ctrl+V 即可');
  } else {
    console.log(`[EXE] 复制剪贴板失败，请手动上传：${dest}`);
    openTarget(PUBLISH_DIR);
  }

  state.exe = { hash, name: basename(exe), preparedAt: new Date().toISOString() };
  saveState(state);
}

// ---------- APK ----------

function prepareAndroidEnv() {
  const jdk = ['C:\\Program Files\\Java\\jdk-21', 'C:\\Program Files\\Java\\jdk-17'].find(existsSync);
  if (jdk) process.env.JAVA_HOME = jdk;
  if (!process.env.ANDROID_HOME && !process.env.ANDROID_SDK_ROOT) {
    const sdk = ['D:\\develop\\android_sdk', join(process.env.LOCALAPPDATA ?? '', 'Android', 'Sdk')].find(
      existsSync,
    );
    if (sdk) process.env.ANDROID_HOME = sdk;
  }
  console.log(`JAVA_HOME=${process.env.JAVA_HOME ?? '(未设置)'}`);
  console.log(`ANDROID_HOME=${process.env.ANDROID_HOME ?? process.env.ANDROID_SDK_ROOT ?? '(未设置)'}`);
}

async function buildApk(version, { reuseWebBuild = false } = {}) {
  prepareAndroidEnv();

  if (!reuseWebBuild) {
    title('构建前端产物');
    await run('yarn build');
    assert(existsSync(join(DIST, 'index.html')), '构建产物缺失：dist\\index.html');
  }

  title('同步 Web 产物与插件');
  await run('npx cap sync android');

  title('Gradle 打包');
  await run('gradlew.bat assembleRelease', { cwd: ANDROID_DIR });

  const apk = join(ANDROID_DIR, 'app', 'build', 'outputs', 'apk', 'release', 'app-release.apk');
  assert(existsSync(apk), `未找到打包产物：${apk}`);

  mkdirSync(APK_DIR, { recursive: true });
  const target = join(APK_DIR, `COC车卡_${version.name}_${stamp()}.apk`);
  copyFileSync(apk, target);
  console.log(`打包完成：${target}（${mb(statSync(target).size)} MB）`);
  openTarget(APK_DIR);
  return target;
}

function readState() {
  return readJson(STATE_FILE, {});
}

function saveState(state) {
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), 'utf8');
}

function getPgyerKey(cliKey) {
  if (cliKey) return cliKey;
  if (process.env.PGYER_API_KEY) return process.env.PGYER_API_KEY;
  return readJson(CONFIG_FILE, {}).pgyerApiKey ?? '';
}

async function publishApk(apk, version, state, options) {
  const key = getPgyerKey(options.apiKey);
  if (!key) {
    console.log('[跳过] 未配置蒲公英 API Key，请填入 scripts\\publish.config.local.json 的 pgyerApiKey');
    return;
  }

  const hash = await sha256(apk);
  if (!options.force && state.apk?.hash === hash) {
    console.log(`[跳过] ${basename(apk)} 已上传过`);
    if (state.apk.url) console.log(`[APK] 安装页：${state.apk.url}`);
    return;
  }

  title(`上传蒲公英：${basename(apk)}（${mb(statSync(apk).size)} MB）`);

  // 1. 获取上传凭证
  const tokenForm = new FormData();
  tokenForm.append('_api_key', key);
  tokenForm.append('buildType', 'android');
  tokenForm.append('buildInstallType', '1');
  tokenForm.append('buildUpdateDescription', `v${version.name}`);

  const token = await (await fetch(`${PGYER_API}/app/getCOSToken`, { method: 'POST', body: tokenForm })).json();
  if (token.code !== 0) {
    throw new Error(`获取上传凭证失败：${token.message}（code=${token.code}）`);
  }

  // 2. 上传文件到云存储（file 放最后，兼容 COS 表单）
  const uploadForm = new FormData();
  uploadForm.append('key', token.data.params.key);
  uploadForm.append('signature', token.data.params.signature);
  uploadForm.append('x-cos-security-token', token.data.params['x-cos-security-token']);
  uploadForm.append('x-cos-meta-file-name', basename(apk));
  uploadForm.append('file', new Blob([readFileSync(apk)]), basename(apk));

  const uploaded = await fetch(token.data.endpoint, { method: 'POST', body: uploadForm });
  if (!uploaded.ok) throw new Error(`上传文件失败：HTTP ${uploaded.status}`);

  // 3. 轮询发布结果（1246/1247 表示仍在处理）
  console.log('已上传，等待蒲公英发布...');
  const buildKey = token.data.key;
  let info = null;
  for (let i = 0; i < 60; i++) {
    await sleep(3000);
    const uri =
      `${PGYER_API}/app/buildInfo?_api_key=${encodeURIComponent(key)}` +
      `&buildKey=${encodeURIComponent(buildKey)}`;
    const resp = await (await fetch(uri)).json();
    if (resp.code === 0) {
      info = resp.data;
      break;
    }
    if (resp.code !== 1246 && resp.code !== 1247) {
      throw new Error(`发布失败：${resp.message}（code=${resp.code}）`);
    }
  }
  assert(info, '发布超时，请到蒲公英后台确认结果');

  const url = `https://www.pgyer.com/${info.buildShortcutUrl}`;
  console.log(`[APK] 发布完成：${info.buildName} ${info.buildVersion}`);
  console.log(`[APK] 安装页：${url}`);
  console.log(`[APK] 二维码：${info.buildQRCodeURL}`);

  state.apk = { hash, name: basename(apk), url, uploadedAt: new Date().toISOString() };
  saveState(state);
}

// ---------- 执行计划 ----------

const TARGETS = ['web', 'exe', 'apk'];
const TARGET_LABELS = { web: 'Web', exe: 'EXE', apk: 'APK' };

async function executePlan(plan, options) {
  const { version, builds, publishes } = plan;
  const buildExeSelected = builds.has('exe');
  const buildApkSelected = builds.has('apk');

  title('开始打包');
  if (!buildExeSelected && !buildApkSelected) {
    console.log('未选择本地打包目标，跳过（Web 由远端 CI 构建）');
  } else if (buildExeSelected && buildApkSelected) {
    // 同时打包时只构建一次 Web 产物，两个平台复用
    await buildWeb();
    await buildExe({ reuseWebBuild: true });
    await buildApk(version, { reuseWebBuild: true });
  } else if (buildExeSelected) {
    await buildExe();
  } else {
    await buildApk(version);
  }

  title('开始推送发布');
  if (publishes.size === 0) {
    console.log('未选择发布目标，跳过');
    return;
  }

  const state = readState();

  // 固定按 Web → EXE → APK 的内置顺序执行
  if (publishes.has('web')) await gitRelease(version, plan.yes ? 'yes' : 'ask');

  if (publishes.has('exe')) {
    const exe = latestFile(RELEASE, '.exe');
    assert(exe, '未找到 EXE，请在第 2 阶段选择 EXE 打包');
    await publishExe(exe, state, options.force);
  }

  if (publishes.has('apk')) {
    const apk = latestFile(APK_DIR, '.apk');
    assert(apk, '未找到 APK，请在第 2 阶段选择 APK 打包');
    await publishApk(apk, version, state, options);
  }

  console.log(`\n发布完成：v${version.name}`);
}

// ---------- 交互流程 ----------

function parseChoice(input) {
  const picked = new Set();
  for (const token of input.split(/[\s,，、]+/).filter(Boolean)) {
    const index = Number(token);
    if (Number.isInteger(index) && index >= 1 && index <= TARGETS.length) picked.add(TARGETS[index - 1]);
    else console.log(`[忽略] 无效选项：${token}`);
  }
  return picked;
}

function parseTargetList(value) {
  const picked = new Set();
  for (const token of (value ?? '').split(/[\s,，、]+/).filter(Boolean)) {
    const target = token.toLowerCase();
    if (TARGETS.includes(target)) picked.add(target);
    else throw new Error(`无效目标：${token}（可选 web/exe/apk）`);
  }
  return picked;
}

async function pickTargets(stage, hints = {}) {
  console.log(`\n${stage}（可多选，逗号分隔，回车跳过）`);
  TARGETS.forEach((target, index) => {
    const hint = hints[target];
    console.log(`  ${index + 1}. ${TARGET_LABELS[target]}${hint ? `（${hint}）` : ''}`);
  });
  return parseChoice(await ask('选择：'));
}

async function wizard() {
  console.log('\n========================================');
  console.log('  TRPG 赛高 · 发布流程');
  console.log('========================================');

  console.log('\n阶段 1/3 · 版本号');
  const version = await bumpVersion({ interactive: true });

  const builds = await pickTargets('阶段 2/3 · 选择打包目标', {
    web: '远端 CI 构建，本地跳过',
  });

  const publishes = await pickTargets('阶段 3/3 · 选择推送发布目标', {
    web: 'git commit + tag + push',
    exe: '蓝奏云',
    apk: '蒲公英',
  });

  return { version, builds, publishes, yes: false };
}

// ---------- 入口 ----------

async function main() {
  const args = process.argv.slice(2);
  const buildFlag = args.find((a) => a.startsWith('--build='));
  const publishFlag = args.find((a) => a.startsWith('--publish='));
  const versionFlag = args.find((a) => a.startsWith('--version='));
  const interactive = !buildFlag && !publishFlag && !versionFlag;

  const options = {
    force: args.includes('--force'),
    apiKey: args.find((a) => a.startsWith('--api-key='))?.slice('--api-key='.length),
  };

  let plan;
  if (interactive) {
    plan = await wizard();
  } else {
    const version = await bumpVersion({
      interactive: false,
      version: versionFlag?.slice('--version='.length),
    });
    plan = {
      version,
      builds: parseTargetList(buildFlag?.slice('--build='.length)),
      publishes: parseTargetList(publishFlag?.slice('--publish='.length)),
      yes: args.includes('--yes'),
    };
  }

  await executePlan(plan, options);

  if (interactive) await ask('\n按回车退出...');
  if (rl) rl.close();
}

main().catch((err) => {
  console.error(`\n[错误] ${err.message}`);
  process.exit(1);
});
