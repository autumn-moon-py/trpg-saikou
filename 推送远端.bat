@echo off
setlocal enabledelayedexpansion
set "TARGET=D:\project\web\trpg-tool"

if not exist "%TARGET%\.git" (
  echo [错误] 目标目录不是 git 仓库: %TARGET%
  goto :fail
)

pushd "%TARGET%"

for /f "delims=" %%b in ('git rev-parse --abbrev-ref HEAD') do set "BRANCH=%%b"
for /f "delims=" %%u in ('git remote get-url origin') do set "REMOTE=%%u"
for /f "delims=" %%t in ('pwsh -NoProfile -Command "Get-Date -Format yyyy-MM-dd_HH-mm"') do set "STAMP=%%t"
echo 部署目录: %TARGET%
echo 远端地址: !REMOTE!
echo 当前分支: !BRANCH!
echo.

git add -A
git diff --cached --quiet
if !errorlevel! equ 0 (
  echo 没有新的变更，直接推送。
) else (
  git commit -m "chore: update build output !STAMP!"
  if !errorlevel! neq 0 goto :fail
)

echo.
echo 正在推送到 origin !BRANCH! ...
git push origin "!BRANCH!"
if !errorlevel! neq 0 goto :fail

echo.
echo ================= 推送结果 =================
echo 仓库: %TARGET%
echo 分支: !BRANCH!
echo 状态: 推送成功
git log -1 --pretty=oneline
echo ==========================================
echo.
echo 线上地址:
echo   https://autumn-trpg.netlify.app
echo   https://vercel-trpg.subrecovery.top
echo   https://cf-trpg.subrecovery.top
echo   https://trpg-tool.vercel.app
echo.
popd
pause
exit /b 0

:fail
echo.
echo 推送失败，请检查上方 git 输出。
popd
pause
exit /b 1
