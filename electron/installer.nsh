; 在资源管理器右键菜单中加入“用 COC车卡 打开角色卡”
; 与主进程运行时的自动注册使用同一组注册表项

!define TRPG_CTX_VERB "TrpgSaikouOpenCard"
!define TRPG_CTX_LABEL "用 COC车卡 打开角色卡"

!macro TrpgRegisterOpenCardVerb CLASS_KEY
  WriteRegStr HKCU "${CLASS_KEY}\shell\${TRPG_CTX_VERB}" "" "${TRPG_CTX_LABEL}"
  WriteRegStr HKCU "${CLASS_KEY}\shell\${TRPG_CTX_VERB}" "Icon" '"$INSTDIR\${APP_EXECUTABLE_FILENAME}",0'
  WriteRegStr HKCU "${CLASS_KEY}\shell\${TRPG_CTX_VERB}\command" "" '"$INSTDIR\${APP_EXECUTABLE_FILENAME}" "%1"'
!macroend

!macro customInstall
  !insertmacro TrpgRegisterOpenCardVerb "Software\Classes\SystemFileAssociations\.txt"
  !insertmacro TrpgRegisterOpenCardVerb "Software\Classes\lnkfile"
!macroend

!macro customUnInstall
  DeleteRegKey HKCU "Software\Classes\SystemFileAssociations\.txt\shell\${TRPG_CTX_VERB}"
  DeleteRegKey HKCU "Software\Classes\lnkfile\shell\${TRPG_CTX_VERB}"
!macroend
