# 数据弹窗新增"分享"按钮 — 设计规格

> 日期：2026-06-07
> 版本：1.0
> 状态：已批准

## 1. 需求概述

在 COC 人物卡编辑器的"数据"弹窗（`ControlSection.vue`）中，竖屏端左侧导出面板的"复制以上内容"按钮右边，新增一个"分享"按钮。点击后自动复制导出内容到剪贴板，并调用系统分享面板分享文本。

## 2. 目标环境

| 环境 | 分享 API | 实现方式 |
|------|----------|----------|
| UniApp (APK) | `uni.share()` | 检测 `typeof uni !== 'undefined'` |
| 浏览器移动端 | `navigator.share()` | Web Share API（需 HTTPS + 用户手势） |
| 不支持时 | 无 | 提示"已复制，当前环境不支持系统分享" |

## 3. 架构

### 3.1 新增文件

`src/utils/share.ts` — 系统分享文本工具函数

```typescript
// shareText(text: string): Promise<boolean>
// 返回 true 表示分享成功或被用户取消，false 表示不支持
```

职责：
- 封装环境检测逻辑（uni / navigator.share）
- 统一异常处理（用户取消不算错误）
- 不可用时回退并提示

### 3.2 修改文件

`src/apps/coc-card/sections/ControlSection.vue`：

- 新增 `shareOutData()` 函数：先 `copy()` 再 `shareText()`
- 模板中"复制以上内容"按钮右侧添加 `<el-button @click="shareOutData" v-if="isMobile()">分享</el-button>`
- 导入 `isMobile` 和 `shareText`

## 4. 数据流

```
用户点击"分享"
  → shareOutData()
    → copy(outData.value)                      // 剪贴板
    → ElMessage.success('已复制到剪贴板')
    → shareText(outData.value)                 // 系统分享
      → UniApp 环境: uni.share({ content })
      → 浏览器环境: navigator.share({ text })
      → 不可用: ElMessage.info('...')
```

## 5. UI 规格

- **按钮文案**：`分享`
- **按钮类型**：`el-button` 默认样式（不设 `type="primary"`，与主按钮区分）
- **显示条件**：仅 `isMobile() === true`（竖屏端）
- **位置**：与"复制以上内容"在同一行，用 flex 横向排列

## 6. 边界情况

| 场景 | 处理 |
|------|------|
| 用户取消分享 | 静默忽略（`AbortError`），不弹错误提示 |
| 不支持 Web Share API | 提示"已复制，当前环境不支持系统分享" |
| 导出内容为空 | 正常执行（空字符串也可复制和分享） |
| 打印中 | 不影响，分享按钮独立于打印状态 |

## 7. 检查清单

- [ ] `src/utils/share.ts` 新增文件
- [ ] `ControlSection.vue` 新增 `shareOutData` 函数和按钮
- [ ] 竖屏端可见"分享"按钮
- [ ] 横屏端隐藏
- [ ] 点击后剪贴板有内容
- [ ] 浏览器移动端能调起系统分享面板
