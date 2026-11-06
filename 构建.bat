@echo off
setlocal
cd /d "%~dp0"

set "DIST=%~dp0dist"
set "TARGET=D:\project\web\trpg-tool"

echo [1/4] 清理旧构建产物...
if exist "%DIST%" rmdir /s /q "%DIST%"

echo [2/4] 执行 yarn build...
call yarn build
if errorlevel 1 goto :fail

if not exist "%DIST%\index.html" (
  echo [错误] 构建产物缺失: %DIST%\index.html
  goto :fail
)

if not exist "%TARGET%\.git" (
  echo [错误] 目标目录不是 git 仓库: %TARGET%
  goto :fail
)

echo [3/4] 清空部署目录（保留 .git）...
pwsh -NoProfile -Command "Get-ChildItem -LiteralPath '%TARGET%' -Force | Where-Object { $_.Name -ne '.git' } | Remove-Item -Recurse -Force -ErrorAction Stop"
if errorlevel 1 goto :fail

echo [4/4] 复制构建产物到部署目录...
robocopy "%DIST%" "%TARGET%" /E /NFL /NDL /NJH /NJS /NC /NS /NP >nul
if errorlevel 8 goto :fail

echo.
echo 构建与迁移完成: %DIST%  --^>  %TARGET%
echo 如需发布，请执行 推送远端.bat
pause
exit /b 0

:fail
echo.
echo 构建或迁移失败，请检查上方输出。
pause
exit /b 1
