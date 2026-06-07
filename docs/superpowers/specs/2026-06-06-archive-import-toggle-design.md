# 存档管理：导入覆写开关 + 清空存档

> 日期：2026-06-06

## 需求

1. 在「存档管理」弹窗标题右侧新增**覆写模式开关**（el-switch）
   - 默认关闭：导入数据时自动新建存档，保留原卡
   - 开启后：导入数据直接覆盖当前活跃存档（现有行为）
2. 在标题右侧新增**清空存档按钮**
   - 二次确认后删除所有存档，回到空白初始状态

## 触发路径

- 剪贴板读取 → `processText()` → `applyInData()`
- 拖拽文件导入 → `processText()` → `applyInData()`

## 改动文件

| 文件 | 改动 |
|------|------|
| `useAppLs.ts` | Store 接口增加 `importOverwriteMode?: boolean` |
| `useCardManager.ts` | 新增 `clearAllCards()` 方法 |
| `ControlDialog.vue` | `el-dialog` 使用 `#header` 插槽，暴露 `header-actions` 插槽 |
| `ControlSection.vue` | 标题栏右侧放开关+按钮；`applyInData` 中根据开关分支逻辑 |

## 数据流

```
[导入触发]
    │
    ▼
importOverwriteMode?
├── false → flushSave() → createCard() → apply 数据（新存档）
└── true  → 直接覆盖 pc.value + viewData（现有行为）
```

## UI 布局

```
┌──────────────────────────────────────────┐
│ 存档管理     [覆盖模式 ○] [🗑 清空存档]  │
├──────────────────────────────────────────┤
│ [+新建] [存档1 ×] [存档2 ×] ...          │
└──────────────────────────────────────────┘
```
