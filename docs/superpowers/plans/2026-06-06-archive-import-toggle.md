# 存档管理：导入覆写开关 + 清空存档 实现计划

> **面向 AI 代理的工作者：** 使用 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 在存档管理弹窗标题栏添加覆写模式开关和清空存档按钮，控制导入行为

**架构：** 覆写模式状态存 localStorage；ControlDialog 暴露 header-actions 插槽；ControlSection 中 applyInData 根据开关分支

**技术栈：** Vue 3 + TypeScript + Element Plus

---

### 文件结构

| 文件 | 职责 | 操作 |
|------|------|------|
| `src/apps/coc-card/hooks/useAppLs.ts` | Store 类型定义，新增 `importOverwriteMode` | 修改 |
| `src/apps/coc-card/hooks/useCardManager.ts` | 卡片管理逻辑，新增 `clearAllCards()` | 修改 |
| `src/apps/coc-card/components/ControlDialog.vue` | 弹窗组件，支持 `header-actions` 插槽 | 修改 |
| `src/apps/coc-card/sections/ControlSection.vue` | 控制面板，开关/按钮 UI + applyInData 分支 | 修改 |

---

### 任务 1：useAppLs.ts — Store 接口增加 importOverwriteMode

**文件：** `src/apps/coc-card/hooks/useAppLs.ts`

- [ ] **步骤 1：在 Store 接口中添加字段**

在 `Store` 接口中，`showTotalSeparation` 之后添加：

```typescript
interface Store {
  showTotalSeparation?: boolean;
  importOverwriteMode?: boolean;  // ← 新增：导入覆写模式（默认 false=新建存档）
  activeCardId?: string;
  cardMetaList?: CardMeta[];
  // 旧格式——仅用于迁移
  autoSaved?: {
    pc: COCPlayerCharacter;
    viewData: COCCardViewData;
    lastModified: number;
  };
}
```

- [ ] **步骤 2：验证**

运行类型检查：
```bash
npx vue-tsc --noEmit src/apps/coc-card/hooks/useAppLs.ts
```
预期：无新增类型错误。

- [ ] **步骤 3：Commit**

```bash
git add src/apps/coc-card/hooks/useAppLs.ts
git commit -m "feat: add importOverwriteMode to Store interface"
```

---

### 任务 2：useCardManager.ts — 新增 clearAllCards() 方法

**文件：** `src/apps/coc-card/hooks/useCardManager.ts`

- [ ] **步骤 1：添加 clearAllCards 函数**

在 `resetCurrentCard()` 函数之后（第 218 行后），`init()` 之前，添加：

```typescript
  /** 清空所有存档，回到初始空白状态 */
  function clearAllCards() {
    // 删除所有卡片的持久化数据
    cardMetaList.value.forEach(m => deleteCardStorage(m.id));
    // 清空元数据列表
    ls.setItem('cardMetaList', []);
    // 创建一个新的空白卡
    createCard();
  }
```

- [ ] **步骤 2：在 return 对象中暴露 clearAllCards**

在 `return` 块（约第 309-323 行）中添加：

```typescript
  return {
    metaList: cardMetaList,
    activeCardId,
    currentMeta,
    createCard,
    switchCard,
    deleteCard: deleteCardById,
    duplicateCard,
    renameCard,
    resetCurrentCard,
    clearAllCards,       // ← 新增
    flushSave,
    init,
    startAutoSave,
    stopAutoSave,
  };
```

- [ ] **步骤 3：验证**

运行类型检查：
```bash
npx vue-tsc --noEmit src/apps/coc-card/hooks/useCardManager.ts
```
预期：无新增类型错误。

- [ ] **步骤 4：Commit**

```bash
git add src/apps/coc-card/hooks/useCardManager.ts
git commit -m "feat: add clearAllCards method to useCardManager"
```

---

### 任务 3：ControlDialog.vue — 支持 header-actions 插槽

**文件：** `src/apps/coc-card/components/ControlDialog.vue`

- [ ] **步骤 1：修改模板，使用 el-dialog 的 #header 插槽**

将当前模板中的 `:title="$props.title"` 替换为自定义 header：

```vue
<template>
  <el-dialog
    class="coc-card-control-dialog"
    append-to-body
    align-center
    :modelValue="$props.modelValue"
    @update:modelValue="(value: boolean) => $emit('update:modelValue', value)"
  >
    <template #header>
      <div class="control-dialog-header">
        <span class="control-dialog-title">{{ $props.title }}</span>
        <div class="control-dialog-header-actions">
          <slot name="header-actions"></slot>
        </div>
      </div>
    </template>
    <slot></slot>
  </el-dialog>
</template>
```

- [ ] **步骤 2：添加样式**

在 `<style lang="scss">` 块末尾添加：

```scss
.control-dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.control-dialog-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--el-text-color-primary);
}

.control-dialog-header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}
```

- [ ] **步骤 3：验证**

运行类型检查：
```bash
npx vue-tsc --noEmit src/apps/coc-card/components/ControlDialog.vue
```
预期：无类型错误。

- [ ] **步骤 4：Commit**

```bash
git add src/apps/coc-card/components/ControlDialog.vue
git commit -m "feat: add header-actions slot to ControlDialog"
```

---

### 任务 4：ControlSection.vue — UI + applyInData 分支逻辑

**文件：** `src/apps/coc-card/sections/ControlSection.vue`

- [ ] **步骤 1：在 script 中获取覆写模式状态和 cardManager 的 clearAllCards**

在 `<script setup lang="ts">` 中，找到现有 `const ls = useAppLs();`（第 48 行附近），在其后添加覆写模式的响应式引用：

```typescript
const ls = useAppLs();
// 覆写模式：默认 false（新建存档）
const importOverwriteMode = computed({
  get: () => ls.getItem('importOverwriteMode') ?? false,
  set: (val: boolean) => ls.setItem('importOverwriteMode', val),
});
```

同时更新 `CardManagerAPI` 接口（第 55-64 行），添加 `clearAllCards`：

```typescript
interface CardManagerAPI {
  metaList: ComputedRef<{ id: string; name: string; saveName: string; lastModified: number; createdAt: number }[]>;
  activeCardId: ComputedRef<string>;
  createCard: () => void;
  switchCard: (id: string) => void;
  deleteCard: (id: string) => void;
  duplicateCard: (id: string) => void;
  renameCard: (id: string, name: string) => void;
  resetCurrentCard: () => void;
  clearAllCards: () => void;  // ← 新增
}
```

- [ ] **步骤 2：添加清空存档确认函数**

在 `applyInData` 函数之后（约第 187 行），`defineExpose` 之前添加：

```typescript
async function actClearAllCards() {
  try {
    await ElMessageBox.confirm(
      '确定要清空所有存档吗？此操作不可撤销，所有角色卡数据将被删除。',
      '警告',
      {
        confirmButtonText: '清空',
        cancelButtonText: '取消',
        type: 'warning',
      },
    );
    cardManager.clearAllCards();
    ElMessage.success('已清空所有存档');
  } catch {
    // 用户取消
  }
}
```

- [ ] **步骤 3：修改 applyInData，根据覆写模式分支**

修改 `applyInData()` 函数（第 159-187 行），在数据验证通过后、写入数据前加入分支逻辑：

```typescript
function applyInData() {
  const json = LZString.decompressFromEncodedURIComponent(inData.value);
  const data = JSON.parse(json);
  pageData && (pageData.importing = true);
  if (data && data.viewData && data.pc && viewData && pc) {
    try {
      // 覆写模式关闭时：先创建新存档再写入
      if (!importOverwriteMode.value) {
        cardManager.createCard();
      }

      const { pc: newPC, showingChildSkillsPatch } = createPC(data.pc, true);
      pc.value = newPC;
      Object.keys(data.viewData).forEach((key) => {
        const k = key as keyof COCCardViewData;
        viewData[k] = data.viewData[k];
      });
      if (showingChildSkillsPatch) {
        for (const [key, value] of Object.entries(showingChildSkillsPatch)) {
          viewData.showingChildSkills[key] = value;
        }
      }
      ElMessage.success(
        importOverwriteMode.value ? '已覆盖当前角色卡' : '已导入到新存档',
      );
      inOutModalVisible.value = false;
      morePanelVisible.value = false;
    } catch (_) {
      ElMessage.error('数据有误，无法导入。页面可能因此受损，建议刷新');
    }
  } else {
    ElMessage.error('数据有误，无法导入');
  }
  pageData && (pageData.importing = false);
}
```

- [ ] **步骤 4：在存档管理弹窗中添加 header-actions 插槽内容**

修改模板中 `cardManagerModalVisible` 对应的 `ControlDialog`（第 337-350 行）：

```vue
    <!-- 角色卡存档管理弹窗 -->
    <ControlDialog
      v-model="cardManagerModalVisible"
      title="存档管理"
    >
      <template #header-actions>
        <div class="archive-header-actions">
          <span class="archive-toggle-label">覆盖模式</span>
          <el-switch v-model="importOverwriteMode" size="small" />
          <el-button
            type="danger"
            size="small"
            plain
            @click="actClearAllCards"
          >
            清空存档
          </el-button>
        </div>
      </template>
      <CardManager
        :metaList="cardManager.metaList.value"
        :activeCardId="cardManager.activeCardId.value"
        @create-card="cardManager.createCard"
        @switch-card="cardManager.switchCard"
        @delete-card="cardManager.deleteCard"
        @duplicate-card="cardManager.duplicateCard"
        @rename-card="(id, name) => cardManager.renameCard(id, name)"
      />
    </ControlDialog>
```

- [ ] **步骤 5：添加样式**

在 `<style scoped lang="scss">` 块末尾添加：

```scss
.archive-header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.archive-toggle-label {
  font-size: 13px;
  color: var(--color-text);
  opacity: 0.72;
}
```

- [ ] **步骤 6：验证**

运行类型检查和构建：
```bash
npx vue-tsc --noEmit
```
预期：无新增类型错误。

- [ ] **步骤 7：Commit**

```bash
git add src/apps/coc-card/sections/ControlSection.vue
git commit -m "feat: add import overwrite toggle and clear-all button to archive manager"
```

---

### 自检

- [x] 规格覆盖度：覆写开关、清空按钮、applyInData 分支、UI 布局 — 全部有对应任务
- [x] 无占位符：所有步骤含完整代码
- [x] 类型一致性：`importOverwriteMode` 在 Store 接口、computed getter、模板中名称一致；`clearAllCards` 在 useCardManager 返回和 CardManagerAPI 接口中一致
