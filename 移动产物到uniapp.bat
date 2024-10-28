@echo off
cd uniapp
for /r %%i in (*) do (
  if "%%~nxi" neq "manifest.json" (
    if "%%~xi" neq ".js" (
      del "%%i"
    )
  )
)
for /d %%d in (*) do if not "%%~nd"=="unpackage" if not "%%~nd"=="js" rmdir "%%d" /s /q
xcopy /s /i /y ..\dist\*.* .\
echo Done.
pause