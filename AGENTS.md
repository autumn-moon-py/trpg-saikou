# AGENTS.md — TRPG 赛高 项目开发规范

> 本文件为 AI Agent 与人类开发者提供项目全景认知，减少幻觉、规范后续开发。
> 最后更新：2026-05-29

---

## 1. 项目概述

**项目名称**：trpg-autumnmoon（TRPG 秋月）
**版本**：0.4.0
**定位**：COC（克苏鲁的呼唤）TRPG 人物卡（角色卡）在线编辑器，支持属性生成、技能分配、武器管理、导出/导入、打印为图片等功能。
**技术栈**：Vue 3 + TypeScript + Vite 5 + Element Plus + Electron + UniApp

### 构建产物与垃圾目录（不要分析、不要修改）

| 目录 | 说明 |
|------|------|
| `dist-electron/` | Electron 构建产物 |
| `uniapp/` | UniApp 构建产物与缓存，含 `assets/`、`libs/`、`unpackage/` |
| `uniapp/unpackage/` | UniApp 打包缓存，绝对不要碰 |

---

## 0. 平台检测（全局通用）

**文件**：`src/utils/platform.ts`

| 运行环境 | 判定方式 | 布局 |
|----------|----------|------|
| EXE (Electron) | UA 含 `Electron` 或 `process.versions.electron` | 电脑端 → 横屏 |
| APK (UniApp WebView) | UA 含 `Mobile/Android/iPhone` | 移动端 → 竖屏 |
| 浏览器 | UA 含移动端标识 → 移动端；否则电脑端 | 对应布局 |

**组件中使用方式**：
```typescript
import { isMobile } from '@/utils/platform';
import { usePageData } from '../hooks/useProviders';
const pageData = usePageData();
// 打印时始终用桌面布局
const isMobileLayout = computed(() => !pageData?.printing && isMobile());
```

**重要**：所有移动端布局判断必须通过 `computed(() => !pageData?.printing && isMobile())`，保存/打印时自动回退到横屏桌面布局。

---

## 2. 目录结构（仅源码）

```
src/
├── main.ts                    # 应用入口，挂载 Vue + ElementPlus + Router
├── App.vue                    # 根组件，仅 <RouterView />
├── router/index.ts            # 路由，单页应用仅 coc-card 一个路由
├── components/SoxCheckbox.vue # 全局共享复选框组件
├── directives/clickOutside.ts # v-clickOutside 指令
├── hooks/
│   ├── useLocalStorage.ts     # 通用 LocalStorage 封装（基于 @vueuse/core）
│   └── useZhTimeAgo.ts        # 中文时间 ago 格式化
├── types/
│   ├── dice.ts                # 骰子类型定义
│   ├── ls.ts                  # LocalStorage 命名空间枚举
│   └── index.d.ts             # 全局类型声明
├── utils/
│   ├── file.ts                # 文件下载（兼容 Electron）
│   ├── image.ts               # 图片尺寸获取与下载
│   ├── random.ts              # 骰子投掷详细逻辑（含 pick/align）
│   └── ui.ts                  # useToggle 工具函数
└── apps/
    └── coc-card/              # ★ COC 人物卡应用（核心业务）
        ├── AppView.vue        # 应用视图根组件（状态中心）
        ├── PaperFront.vue     # 人物卡正面
        ├── PaperBack.vue      # 人物卡背面
        ├── components/        # 通用 UI 组件
        ├── constants/         # 静态数据常量
        ├── hooks/             # 业务 hooks
        ├── layouts/           # 布局组件
        ├── models/            # 数据模型与业务逻辑
        ├── sections/          # 人物卡各区块组件
        ├── types/             # 类型定义
        └── utils/             # 业务工具函数
```

---

## 3. 核心数据模型

### 3.1 COCPlayerCharacter（人物卡数据）

**文件**：`src/apps/coc-card/types/character.ts`
**创建函数**：`src/apps/coc-card/models/character.ts` → `createPC()`

```typescript
interface COCPlayerCharacter {
  // 基本信息
  name: string; playerName: string; time: string; job: string;
  age: string; gender: string; location: string; hometown: string;
  avatar?: string; sdAvatar?: string;
  // 属性
  attributes: Partial<COCAttributes>;       // str/dex/con/app/pow/siz/edu/int/luc
  deriveAttributes?: COCDeriveAttributes;   // sanity/hp/mp (now + start)
  battleAttributes: COCBattleAttributes;    // db/size/mov
  status: COCStatus;                        // mental 状态
  // 技能与点数
  pointValues: { pro?: string; interest?: string };
  proSkills: COCPCSkill[];                  // 本职技能列表
  skillPoints: [COCPCSkill, SkillPoint][];  // 技能点数映射
  // 武器
  weapons: Weapon[];
  // 故事
  stories: { app/belief/IPerson/IPlace/IItem/trait/scar/mad/desc: string };
  // 资产
  assets: { currency/assets/items/magicItems/magics/touches: string };
  // 经历与关系
  experiencedModules: string; experiencedModules2: string; friends: string;
}
```

**关键子类型**：

| 类型 | 说明 |
|------|------|
| `COCAttributes` | 9 大属性：str/dex/con/app/pow/siz/edu/int/luc |
| `COCAttributesKey` | `keyof COCAttributes`，用于属性遍历 |
| `COCDeriveAttributes` | 派生属性 sanity/hp/mp，各有 now + start |
| `COCBattleAttributes` | 战斗属性 db/size/mov |
| `COCPCSkill` | `string \| [string, string, number]`——技能名或 [技能名, 子技能名, 子技能位置] |
| `SkillPoint` | `{ b?, p?, i?, g?, c? }`——初始/职业/兴趣/成长/是否有成长 |

### 3.2 COCCardViewData（视图状态）

**文件**：`src/apps/coc-card/types/viewData.ts`
**创建函数**：`src/apps/coc-card/models/viewData.ts` → `createViewData()`

```typescript
interface COCCardViewData {
  showingChildSkills: Record<string, string[]>;  // 分组技能当前显示的子技能
  jobSkills?: JobSkills;                          // 临时：职业推荐技能
  skillLimits: { pro: number; interest: number }; // 技能上限
}
```

**重要**：`showingChildSkills` 是子技能显示的 source of truth，`COCPCSkill` 中的子技能名仅作占位。

### 3.3 PageData（页面状态）

**文件**：`src/apps/coc-card/types/pageData.ts`

```typescript
interface PageData {
  paperInFront: boolean;      // 正面/背面
  printing: boolean;          // 正在打印
  importing: boolean;         // 正在导入
  showTotalSeparation: boolean; // 显示半值/五分之一值
}
```

### 3.4 其他核心类型

| 类型 | 文件 | 说明 |
|------|------|------|
| `Skill` / `ChildSkill` | `types/skill.ts` | 技能定义（含分组 group） |
| `SkillGroup` / `SkillGroups` | `types/formattedSkill.ts` | 格式化后的技能分组 |
| `SkillGroupName` | `types/skillGroup.ts` | 分组名联合类型 |
| `Job` / `JobSkills` | `types/job.ts` | 职业定义（含属性计算方式、信用评级、技能列表） |
| `Weapon` / `WeaponGroups` | `types/weapon.ts` | 武器定义 |
| `Suggestion` | `types/suggestion.ts` | 职业推荐（财富范围、多选技能） |
| `ThrowDiceDetail` | `@/types/dice.ts` | 骰子投掷详细结果 |

---

## 4. 状态管理架构

**本项目没有使用 Pinia/Vuex，状态管理完全基于 Vue 3 的 provide/inject + reactive/ref。**

### 4.1 状态中心：AppView.vue

`AppView.vue` 是整个 COC 人物卡的状态中心，所有核心状态在此创建并通过 `provide` 向下传递：

```
AppView.vue
├── pcRef = ref<COCPlayerCharacter>(createPC())     → provide('pc')
├── viewData = reactive<COCCardViewData>(...)        → provide('viewData')
├── pageData = reactive<PageData>(...)               → provide('pageData')
├── suggestion = useSuggestion(pcRef, ...)           → provide('suggestion')
└── useDerives(pcRef)  // watch attributes → 自动计算 HP/MP/SAN
    useAutoSave(pcRef, ...)  // watch pc+viewData → 自动保存到 localStorage
```

### 4.2 状态消费：useProviders

**文件**：`src/apps/coc-card/hooks/useProviders.ts`

所有子组件通过 `useProviders` 中的 4 个函数获取状态：

```typescript
usePC()         → inject<Ref<COCPlayerCharacter>>('pc')
useViewData()   → inject<COCCardViewData>('viewData')
usePageData()   → inject<PageData>('pageData')
useSuggestion() → inject<ComputedRef<Suggestion>>('suggestion')
```

**开发规范**：任何需要访问人物卡数据的组件，必须通过 `useProviders` 获取，不要自行创建新的状态实例。

### 4.3 数据流向

```
用户输入 → 修改 pc.value / viewData 属性
         → useDerives watch → 自动更新 deriveAttributes (HP/MP/SAN)
         → useAutoSave watch → 自动保存到 localStorage
         → useSuggestion watch(job) → 自动更新职业推荐技能
```

---

## 5. 核心 Hooks

| Hook | 文件 | 说明 |
|------|------|------|
| `useDerives` | `hooks/useDerives.ts` | deep watch `pc.attributes`，计算 HP = floor((con+siz)/10)、MP = floor(pow/5)、SAN = pow |
| `useAutoSave` | `hooks/useAutoSave.ts` | deep watch `pc + viewData`，自动保存到 localStorage；启动时检测并提示恢复 |
| `useSuggestion` | `hooks/useSuggestion.ts` | watch `pc.job`，根据职业自动填充 proSkills 和 showingChildSkills |
| `useAppLs` | `hooks/useAppLs.ts` | 封装 `useLocalStorage`，命名空间 `$sox-trpg#$coc-card` |
| `usePrintPaper` | `hooks/usePrintPaper.ts` | 使用 `html-to-image` 将人物卡 DOM 转为 JPEG（210×297mm @8x） |
| `useProviders` | `hooks/useProviders.ts` | provide/inject 桥接，4 个 inject 函数 |

---

## 6. 组件体系

### 6.1 页面结构

```
AppView.vue
├── ControlSection.vue          # 控制面板（导入导出、打印、重置、更多功能）
│   ├── BuyPointsButton → BuyPointsModal    # 属性生成（枫笛式/天命式/购点式）
│   ├── DiceMaid                            # 骰娘录卡指令生成
│   ├── NoticeBoardButton → NoticeBoardModal # 公告板（开发中）
│   └── RandNameRow                         # 随机姓名生成
├── PaperFront.vue              # 人物卡正面
│   ├── InvestigatorSection     # 调查员基本信息
│   ├── AttributesSection       # 属性区（含随机投骰）
│   ├── AvatarSection           # 头像区
│   ├── DeriveSections          # 派生属性（HP/MP/SAN/DB/SZ/MOV）
│   ├── HintSection             # 提示区
│   ├── SkillSection            # 技能区
│   ├── WeaponSection           # 武器区
│   └── BattleSection           # 战斗属性区
└── PaperBack.vue               # 人物卡背面
    ├── StorySection            # 故事区
    ├── ItemSection             # 物品区
    ├── AssetsSection           # 资产区
    ├── MythosSection           # 神话区
    ├── ExperienceSection       # 经历区
    └── FriendSection           # 关系区
```

### 6.2 关键通用组件

| 组件 | 说明 |
|------|------|
| `PaperSection` | 区块容器，统一标题与样式 |
| `PaperLayout` | 纸张布局容器（A4 比例） |
| `WritableRow/Unit/Area/Divider` | 可写行/单元/区域/分隔线 |
| `BaseTdInput/BaseTdSelect` | 表格单元格输入/选择 |
| `SkillTable` | 技能表格（核心复杂组件，含分组、子技能、点数计算） |
| `SkillTdInput/SkillTdLabel` | 技能单元格输入/标签（含本职勾选、子技能选择） |
| `WeaponList/WeaponSectionRow` | 武器列表/行（含武器树选择器） |
| `ControlButton/ControlDialog` | 控制面板按钮/弹窗 |
| `DownloaderItem` | 下载项（图片预览+下载） |
| `UploadAvatarButtonWrapper` | 头像上传（含图片压缩） |
| `FlattenTree` | 扁平化树选择器 |
| `StatusCheckbox` | 精神状态复选框 |
| `JobList` | 职业列表选择 |
| `SoxCheckbox` | 全局自定义复选框 |

---

## 7. 业务逻辑关键点

### 7.1 属性生成

**文件**：`src/apps/coc-card/models/attribute.ts`

- **随机生成**：`generateRandomAttributes()`——普通属性 3d6×5，高属性 2d6+6×5，幸运 3d6×5
- **年龄修正**：`modifyAttributesByAge()`——根据年龄段调整 str/con/dex/app/edu
- **购点式**：总点数 460（含幸运），在 BuyPointsModal 中操作
- **枫笛式**：生成一组属性，玩家将每个属性值分配到对应位置
- **天命式**：生成多组属性，选一组

### 7.2 技能系统

**核心概念**：
- **技能分组**：技能按 `SkillGroupName`（特殊/探索/社交/战斗/医疗/运动/知识/技术/操纵/其它）分组
- **子技能**：部分技能有 `group` 属性，包含多个子技能（如"外语"下有汉语/英语/日语等）
- **动态初始值**：`dynamicInitFormulas` 对象定义了依赖 PC 属性的技能初始值（如闪避=DEX/2，母语=EDU）
- **技能点**：`SkillPoint` 含 b(初始)/p(职业)/i(兴趣)/g(成长)/c(是否有成长)
- **COCPCSkill**：`string | [string, string, number]`——简单技能用字符串，子技能用三元组 [技能名, 子技能名, 位置索引]

**关键函数**：
- `findSkillPoints(skillInfo)` —— 在 `pc.skillPoints` 中查找技能点数
- `getTotal(points, init)` —— 计算技能总值
- `resetShowingChildSkills(viewData)` —— 重置子技能显示状态
- `getDiceMaidStString(pc, viewData)` —— 生成骰娘录卡指令字符串

### 7.3 职业系统

**文件**：`src/apps/coc-card/constants/job.ts`、`models/job.ts`、`models/suggestion.ts`

- `Job.point`：属性计算方式，如 `[['edu', 4]]` 表示教育×4
- `Job.wealth`：信用评级范围 `[min, max]`
- `Job.skills`：职业推荐技能列表，支持普通技能、子技能 `{格斗: '斗殴'}`、多选技能 `['取悦', '话术']`
- `useSuggestion` watch `pc.job` 变化时自动填充 proSkills

### 7.4 武器系统

**文件**：`src/apps/coc-card/constants/weapon.ts`、`types/weapon.ts`

- `Weapon` 接口：name/skill/dam/tho/range/round/num/err/time/price
- `WeaponGroups`：按类型分组（常规/手枪/半自动步枪/全自动步枪/霰弹枪/冲锋枪/狙击步枪/机枪/其它）
- `WeaponSectionRow`：武器行组件，含战斗技能下拉选择和武器树选择器

### 7.5 导入导出

**文件**：`src/apps/coc-card/sections/ControlSection.vue`

- **导出**：`JSON.stringify({pc, viewData})` → `LZString.compressToEncodedURIComponent` → 压缩字符串
- **导入**：`LZString.decompressFromEncodedURIComponent` → `JSON.parse` → `createPC(data.pc)` + 恢复 viewData
- **打印**：`html-to-image` 的 `toJpeg` 将 DOM 转为图片（A4 尺寸 210×297mm @8x 像素比）
- **URL 参数**：`qs.parse(location.search)` 支持 `turn`/`debug`/`sep`/`limitp`/`limiti` 参数

### 7.6 自动保存

**文件**：`src/apps/coc-card/hooks/useAutoSave.ts`

- deep watch `pc + viewData`，每次变更写入 localStorage
- 启动时检测 `autoSaved` 数据，弹窗提示恢复
- 使用 `useZhTimeAgo` 显示中文时间（"X分钟前编辑的人物卡"）

---

## 8. 构建与部署

### 8.1 构建配置

| 配置文件 | 用途 |
|----------|------|
| `vite.config.ts` | 主构建配置，含 Vue + Electron 插件，base='./' |
| `vite.libs.config.ts` | 库模式构建，入口 `AppView.vue`，输出 `COCCardView` UMD/ESM |

### 8.2 NPM Scripts

| 命令 | 说明 |
|------|------|
| `dev` | 开发服务器（host 0.0.0.0） |
| `build` | 类型检查 + 构建 + 库模式构建 |
| `build-lib` | 仅库模式构建 |
| `buildexe` | 构建 + Electron 打包 |
| `type-check` | `vue-tsc --noEmit` |
| `lint` | ESLint 检查+修复 |
| `format` | Prettier 格式化 src/ |

### 8.3 路径别名

- `@` → `src/`

### 8.4 Electron

- 入口：`electron/main/index.js`
- 预加载：`electron/preload/index.js`
- 文件下载兼容：`window.downloadAndSaveFile`（Electron 环境）vs `<a>` 标签下载（浏览器环境）

---

## 9. 依赖关系图

```
main.ts
  → App.vue
    → router (单路由: coc-card → AppView.vue)
      → AppView.vue
        → createPC (models/character)
        → createViewData (models/viewData)
        → useDerives (hooks) → watch attributes → update deriveAttributes
        → useSuggestion (hooks) → watch job → update proSkills + showingChildSkills
        → useAutoSave (hooks) → watch pc+viewData → localStorage
        → provide: pc, viewData, pageData, suggestion
        → ControlSection (consume all 4 provides)
        → PaperFront (consume pc)
        → PaperBack (consume pc via sections)
```

---

## 10. 开发规范

### 10.1 数据修改规范

1. **修改 PC 数据**：通过 `usePC()` 获取 `pc` ref，直接修改 `pc.value.xxx`
2. **修改 ViewData**：通过 `useViewData()` 获取，直接修改属性
3. **修改 PageData**：通过 `usePageData()` 获取，直接修改属性
4. **禁止**在 AppView.vue 之外创建新的 `createPC()` / `createViewData()` 实例（导入恢复除外）
5. **导入数据时**：必须设置 `pageData.importing = true` 防止 watch 副作用，完成后设为 `false`

### 10.2 组件开发规范

1. 新组件放在对应的 `components/` 或 `sections/` 目录下
2. 使用 `<script setup lang="ts">` + `defineProps<T>()` + `defineEmits<T>()`
3. 通过 `useProviders` 获取全局状态，不要用 `inject` 直接调用
4. 样式使用 `<style scoped lang="scss">`
5. 打印时需隐藏的元素添加 `.printing-image` class 和 `@media print` 规则

### 10.3 类型定义规范

1. 所有业务类型放在 `src/apps/coc-card/types/` 下
2. 全局共享类型放在 `src/types/` 下
3. 修改 `COCPlayerCharacter` 接口时，必须同步更新 `createPC()` 函数
4. 修改 `COCCardViewData` 接口时，必须同步更新 `createViewData()` 和 `resetViewData()`

### 10.4 常量数据规范

1. 职业数据在 `constants/job.ts`，格式严格遵循 `Job` 接口
2. 技能数据在 `constants/skill.ts`，格式严格遵循 `Skill` 接口
3. 武器数据在 `constants/weapon.ts`
4. 姓名数据在 `constants/name.ts`
5. 修改常量后需验证对应的 model 函数是否兼容

### 10.5 高风险区域

修改以下区域需格外谨慎，影响面广：

| 区域 | 风险 |
|------|------|
| `COCPlayerCharacter` 类型 | 影响所有组件、导入导出、自动保存、骰娘指令 |
| `COCPCSkill` 联合类型 | 影响技能点查找、子技能显示、骰娘指令 |
| `SkillPoint` 接口 | 影响技能总值计算、职业/兴趣点数剩余 |
| `createPC()` | 影响新建卡、导入恢复、重置 |
| `useDerives` | 影响所有派生属性自动计算 |
| `useSuggestion` | 影响职业切换时的技能自动填充 |
| `getDiceMaidStString` | 影响骰娘录卡指令格式 |
| `LZString` 压缩格式 | 影响导入导出兼容性 |
| `useAutoSave` localStorage 格式 | 影响自动保存恢复 |

### 10.6 已知 TODO 与未完成功能

- `NoticeBoardModal`：内容为占位符（"123"），功能未实现
- `viewData.skillLimits`：有 TODO 注释"技能上限"，当前仅存储默认值 80/70
- `constants/skill.ts`：部分技能被注释掉（爆破/炮术/潜水/催眠/驯兽/通灵/电子学/人类学/估价/会计/法律）
- `constants/weapon.ts`：武器数据量巨大（1400+ 行），含年代与价格信息

---

## 11. 双构建模式

本项目有两种构建模式，服务于不同场景：

### Web 应用模式（vite.config.ts）
- 完整 Vue 应用，含 Electron 支持
- 输出到 `dist/` 和 `dist-electron/`
- 用于独立网站或 Electron 桌面应用

### 组件库模式（vite.libs.config.ts）
- 将 `AppView.vue` 打包为 `COCCardView` 组件
- 输出 UMD + ESM 到 `dist/libs/`
- 外部化 `vue` 和 `element-plus`
- 用于 UniApp 等第三方嵌入场景

---

## 12. 测试

**当前项目无自动化测试。** 修改核心逻辑后需手动验证：
1. 新建人物卡 → 属性随机生成 → 技能分配 → 武器添加
2. 导出 → 清空 → 导入 → 数据一致性
3. 切换职业 → 技能自动填充
4. 打印为图片 → 图片完整性
5. 自动保存 → 刷新页面 → 恢复提示
6. 骰娘指令 → 格式正确性
