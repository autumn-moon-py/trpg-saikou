# 数据弹窗分享按钮 — 实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 在数据弹窗竖屏导出面板中，为"复制以上内容"按钮右侧添加"分享"按钮，点击后复制导出内容并调用系统分享。

**架构：** 新增 `src/utils/share.ts` 封装系统分享逻辑（环境检测 + API 调用），在 `ControlSection.vue` 中新增按钮和点击处理函数。

**技术栈：** Vue 3 + TypeScript，Web Share API + UniApp share

---

### 任务 1：创建系统分享工具函数

**文件：**
- 创建：`src/utils/share.ts`

- [ ] **步骤 1：编写 `shareText` 函数**

```typescript
// src/utils/share.ts
import { ElMessage } from 'element-plus';

declare global {
  interface Window {
    uni?: {
      share?: (options: { content: string }) => Promise<void>;
    };
  }
}

/**
 * 调用系统分享面板分享文本。
 * 自动检测 UniApp / 浏览器环境，选择对应的分享 API。
 * @param text 要分享的文本内容
 * @returns true 表示成功调起或被用户取消，false 表示环境不支持
 */
export async function shareText(text: string): Promise<boolean> {
  // 1) UniApp 环境优先
  if (typeof window !== 'undefined' && window.uni?.share) {
    try {
      await window.uni.share({ content: text });
      return true;
    } catch {
      // 用户取消或其他异常，静默处理
      return true;
    }
  }

  // 2) 浏览器 Web Share API
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share({ text });
      return true;
    } catch (err: unknown) {
      const e = err as DOMException | undefined;
      if (e?.name !== 'AbortError') {
        ElMessage.error('分享失败');
      }
      return true;
    }
  }

  // 3) 不支持
  ElMessage.info('已复制，当前环境不支持系统分享');
  return false;
}
```

- [ ] **步骤 2：验证 TypeScript 类型检查**

运行：`npx vue-tsc --noEmit src/utils/share.ts`
预期：无类型错误

- [ ] **步骤 3：Commit**

```bash
git add src/utils/share.ts
git commit -m "feat: 新增系统分享文本工具函数 shareText"
```

---

### 任务 2：在 ControlSection 添加分享按钮

**文件：**
- 修改：`src/apps/coc-card/sections/ControlSection.vue`

- [ ] **步骤 1：修改 script 部分 — 添加 import 和函数**

在 `<script setup>` 中新增两处：

**新增 import（在现有 import 区域末尾）：**
```typescript
import { shareText } from '@/utils/share';
import { isMobile } from '@/utils/platform';
```

**新增函数（在 `copyOutData` 函数后面）：**
```typescript
async function shareOutData() {
  copy(outData.value);
  ElMessage.success('已复制到剪贴板');
  await shareText(outData.value);
}
```

- [ ] **步骤 2：修改 template 部分 — 添加分享按钮**

将现有的：
```html
<el-button
  type="primary"
  @click="copyOutData"
>
  复制以上内容
</el-button>
```

改为：
```html
<div class="in-out-modal-actions">
  <el-button
    type="primary"
    @click="copyOutData"
  >
    复制以上内容
  </el-button>
  <el-button
    v-if="isMobile()"
    @click="shareOutData"
  >
    分享
  </el-button>
</div>
```

- [ ] **步骤 3：修改 style 部分 — 添加 actions 行样式**

在 `.in-out-modal-panel` 样式之后添加：

```scss
.in-out-modal-actions {
  display: flex;
  gap: 12px;
}
```

- [ ] **步骤 4：验证类型检查**

运行：`npx vue-tsc --noEmit`
预期：无类型错误

- [ ] **步骤 5：Commit**

```bash
git add src/apps/coc-card/sections/ControlSection.vue
git commit -m "feat: 数据弹窗增加竖屏分享按钮"
```
