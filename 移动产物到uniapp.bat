@echo off
cd uniapp
:: 删除文件时排除 manifest.json、.js 文件、以及图标文件
for /r %%i in (*) do (
  if "%%~nxi" neq "manifest.json" (
    if "%%~xi" neq ".js" (
      if "%%~xi" neq ".png" (
        if "%%~xi" neq ".jpg" (
          if "%%~xi" neq ".jpeg" (
            if "%%~xi" neq ".gif" (
              if "%%~xi" neq ".svg" (
                if "%%~xi" neq ".ico" (
                  if "%%~xi" neq ".webp" (
                    del "%%i"
                  )
                )
              )
            )
          )
        )
      )
    )
  )
)
:: 删除目录时排除 unpackage 和 js
for /d %%d in (*) do if not "%%~nd"=="unpackage" if not "%%~nd"=="js" rmdir "%%d" /s /q
:: 复制新产物（图标文件已存在会跳过或覆盖，不影响）
xcopy /s /i /y ..\dist\*.* .\
echo Done.
pause