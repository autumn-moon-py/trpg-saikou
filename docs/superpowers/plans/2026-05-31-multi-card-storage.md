# 多角色卡存储系统 实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 重构存储系统，实现高速自动保存 + 多角色卡管理 + 双端响应式 UI（电脑端 / 移动端）

**架构：** 将单个 `autoSaved` 结构升级为 `cards: Record<id, CardEntry>` 多卡存储，新建 `useCardManager` hook 统一管理卡片 CRUD 与防抖自动保存，在 sticky-footer 顶部添加卡片标签页 UI。CardManager 组件通过 CSS 媒体查询（断点 1024px）区分电脑端完整布局与移动端紧凑横向滚动布局。

**技术栈：** Vue 3 + TypeScript + @vueuse/core (useDebounceFn) + localStorage

---

## 文件结构

| 文件 | 职责 |
|------|------|
| `src/apps/coc-card/hooks/useAppLs.ts` | Store 接口更新，添加 `cards` / `activeCardId`，保留 `autoSaved` 供迁移 |
| `src/apps/coc-card/hooks/useCardManager.ts` (新建) | 卡片 CRUD + 300ms 防抖自动保存 + 旧数据迁移 + beforeunload 刷新 save |
| `src/apps/coc-card/components/CardManager.vue` (新建) | 卡片标签页 UI——切换/新建/删除卡片 |
| `src/apps/coc-card/AppView.vue` | 集成 `useCardManager`，启用自动保存，渲染 CardManager |
| `src/apps/coc-card/sections/ControlSection.vue` | `actResetCard` 改用 cardManager.resetCurrentCard()；移除旧 `ls.removeItem('autoSaved')` |

## 存储结构

```ts
// 单张卡片条目
interface CardEntry {
  id: string;                                // 唯一 ID
  name: string;                              // 取自 pc.name，用于列表展示
  pc: COCPlayerCharacter;
  viewData: COCCardViewData;
  lastModified: number;                      // Date.now()
  createdAt: number;
}

// Store（整个 $sox-trpg#$coc-card key 的值）
interface Store {
  showTotalSeparation?: boolean;
  activeCardId?: string;
  cards?: Record<string, CardEntry>;
  autoSaved?: { pc; viewData; lastModified };  // 旧格式，仅迁移用
}
```

## 数据流

```
用户编辑 → pcRef / viewData 变更
  → useCardManager.watch (deep, importing 时跳过)
    → useDebounceFn(300ms) → ls.setItem('cards', ...)
  → beforeunload → flush 立即写入

新建卡片 → saveCurrentCard() → createPC() → 加入 cards → 激活
切换卡片 → flush auto-save → 加载目标卡片到 pcRef / viewData
删除卡片 → 从 cards 移除 → 若删的是当前卡则切到其他卡
导入数据 → 覆盖当前卡片内容（不新建卡）
重置卡片 → 当前卡回退为空白 createPC()
```

---

# 多角色卡存储系统 实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 重构存储系统，实现高速自动保存 + 多角色卡管理 + 双端响应式 UI（电脑端 / 移动端）

**架构：** 参考 Edgerunners-CharacterSheet 的多角色卡存储模式，采用**元数据与角色数据分离**的 split-key 设计。元数据列表存于主 key（轻量、快速列表），每个角色卡的完整数据存于独立 key（按需加载、独立保存）。新建 `useCardManager` hook 统一管理卡片 CRUD + 300ms 防抖自动保存 + 旧数据迁移 + 僵尸数据清理。

**技术栈：** Vue 3 + TypeScript + @vueuse/core (useStorage, useDebounceFn) + localStorage

**参考项目：** `D:\project\web\Edgerunners-CharacterSheet`——其 `multi-character-storage.ts` 提供了元数据/数据分离、存档名、迁移、僵尸清理等成熟模式。

---

## 文件结构

| 文件 | 职责 |
|------|------|
| `src/apps/coc-card/hooks/useAppLs.ts` | 主 Store 接口更新：`showTotalSeparation` + `activeCardId` + `cardMetaList` + 旧 `autoSaved` 迁移字段 |
| `src/apps/coc-card/hooks/useCardStorage.ts` (新建) | 独立角色卡原始 localStorage CRUD：`saveCard(id, pc, viewData)` / `loadCard(id)` / `deleteCard(id)` |
| `src/apps/coc-card/hooks/useCardManager.ts` (新建) | 核心 hook：卡片 CRUD + 300ms 防抖自动保存 + 旧数据迁移 + 僵尸清理 + beforeunload 刷新 |
| `src/apps/coc-card/components/CardManager.vue` (新建) | 卡片标签页 UI（双端适配）—— 切换/新建/删除/重命名/复制卡片 |
| `src/apps/coc-card/AppView.vue` | 集成 `useCardManager`，启用自动保存，渲染 CardManager |
| `src/apps/coc-card/sections/ControlSection.vue` | `actResetCard` 改用 cardManager.resetCurrentCard() |

## 存储结构（Split-Key 设计）

```
┌─────────────────────────────────────────────────────────────┐
│  Key: $sox-trpg#$coc-card           (via useStorage)       │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ {                                                   │   │
│  │   showTotalSeparation: boolean                     │   │
│  │   activeCardId: string                             │   │
│  │   cardMetaList: CardMeta[]      ← 轻量元数据列表     │   │
│  │   autoSaved?: { pc, viewData }  ← 旧格式(仅迁移)    │   │
│  │ }                                                   │   │
│  └─────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  Key: $sox-trpg#$coc-card:card:{id}   (via raw localStorage)│
│  ┌─────────────────────────────────────────────────────┐   │
│  │ {                                                   │   │
│  │   pc: COCPlayerCharacter                           │   │
│  │   viewData: COCCardViewData                        │   │
│  │   lastModified: number                             │   │
│  │ }                                                   │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**为什么 split-key？**
- 列表展示只需读元数据，无需加载所有卡片数据
- 自动保存只需序列化当前卡片（10-50KB），而非全部卡片
- 单卡损坏不影响其他卡片（故障隔离）
- 与参考项目 `Edgerunners-CharacterSheet` 模式一致

**类型定义：**

```ts
// 轻量元数据（存于主 key）
interface CardMeta {
  id: string;              // UUID v4
  name: string;            // 来自 pc.name，每次保存时同步
  saveName: string;        // 用户命名的存档名，创建时设定，可修改
  lastModified: number;    // Date.now()
  createdAt: number;
}

// 完整卡片数据（存于独立 key: $sox-trpg#$coc-card:card:{id}）
interface CardEntry {
  pc: COCPlayerCharacter;
  viewData: COCCardViewData;
  lastModified: number;
}
```

## 数据流

```
用户编辑 → pcRef / viewData 变更
  → useCardManager.watch (deep, importing 时跳过)
    → useDebounceFn(300ms) → cardStorage.saveCard(id, pc, viewData)
    → 同步更新 cardMetaList 中的 name + lastModified
  → beforeunload → flush 立即写入

新建卡片 → flushSave() → generateId() → 写入 meta + card → 激活
切换卡片 → flushSave() → 加载目标 card → replaceSheetData()
删除卡片 → 删除 meta → 删除 card key → 若为当前卡则切到其他
导入数据 → 覆盖当前卡片内容（不新建卡）
重置卡片 → 当前卡回退为空白 createPC()
复制卡片 → 加载源卡数据 → 新 UUID → 写入新卡
重命名 → 修改 cardMeta.saveName
```

---

### 任务 1：更新 `useAppLs` Store 接口 + 创建 `useCardStorage`

**文件：**
- 修改：`src/apps/coc-card/hooks/useAppLs.ts`
- 创建：`src/apps/coc-card/hooks/useCardStorage.ts`

- [ ] **步骤 1：更新 `useAppLs.ts` Store 接口**

```typescript
// src/apps/coc-card/hooks/useAppLs.ts
import useLocalStorage from '@/hooks/useLocalStorage';
import { LSApp } from '@/types/ls';
import type { COCPlayerCharacter } from '../types/character';
import type { COCCardViewData } from '../types/viewData';

export interface CardMeta {
  id: string;
  name: string;
  saveName: string;
  lastModified: number;
  createdAt: number;
}

interface Store {
  showTotalSeparation?: boolean;
  activeCardId?: string;
  cardMetaList?: CardMeta[];
  // 旧格式——仅用于迁移
  autoSaved?: {
    pc: COCPlayerCharacter;
    viewData: COCCardViewData;
    lastModified: number;
  };
}

const ls = useLocalStorage<Store>({
  app: LSApp.COCCard,
  versionChecker() { return 1.1; },
});

if (import.meta.env.DEV) {
  console.log(`ls:${ls.appName}:${ls.version}`, ls);
  // @ts-ignore
  window.ls = ls;
}

export default function () { return ls; }
```

- [ ] **步骤 2：创建 `useCardStorage.ts`**

```typescript
// src/apps/coc-card/hooks/useCardStorage.ts
import type { COCPlayerCharacter } from '../types/character';
import type { COCCardViewData } from '../types/viewData';

const CARD_KEY_PREFIX = '$sox-trpg#$coc-card:card:';

export interface CardEntry {
  pc: COCPlayerCharacter;
  viewData: COCCardViewData;
  lastModified: number;
}

/** 保存单张角色卡到独立 localStorage key */
export function saveCard(id: string, pc: COCPlayerCharacter, viewData: COCCardViewData): void {
  try {
    const entry: CardEntry = {
      pc: JSON.parse(JSON.stringify(pc)),
      viewData: JSON.parse(JSON.stringify(viewData)),
      lastModified: Date.now(),
    };
    localStorage.setItem(CARD_KEY_PREFIX + id, JSON.stringify(entry));
  } catch (e) {
    console.error(`[CardStorage] Save failed for ${id}:`, e);
  }
}

/** 加载单张角色卡 */
export function loadCard(id: string): CardEntry | null {
  try {
    const raw = localStorage.getItem(CARD_KEY_PREFIX + id);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error(`[CardStorage] Load failed for ${id}:`, e);
    return null;
  }
}

/** 删除单张角色卡 */
export function deleteCard(id: string): void {
  try {
    localStorage.removeItem(CARD_KEY_PREFIX + id);
  } catch (e) {
    console.error(`[CardStorage] Delete failed for ${id}:`, e);
  }
}

/** 清理所有在 meta 列表中不存在的僵尸卡片数据 */
export function cleanupOrphanedCards(validIds: Set<string>): number {
  let count = 0;
  const keysToRemove: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(CARD_KEY_PREFIX)) {
      const id = key.substring(CARD_KEY_PREFIX.length);
      if (!validIds.has(id)) {
        keysToRemove.push(key);
      }
    }
  }
  keysToRemove.forEach(k => { localStorage.removeItem(k); count++; });
  if (count > 0) console.log(`[CardStorage] Cleaned ${count} orphaned cards`);
  return count;
}

export { CARD_KEY_PREFIX };
```

- [ ] **步骤 3：Commit**

```bash
git add src/apps/coc-card/hooks/useAppLs.ts src/apps/coc-card/hooks/useCardStorage.ts
git commit -m "feat: update useAppLs for split-key storage; add useCardStorage"
```

---

### 任务 2：创建 `useCardManager` hook（split-key 版本）

**文件：**
- 创建：`src/apps/coc-card/hooks/useCardManager.ts`

- [ ] **步骤 1：创建 `useCardManager.ts`**

```typescript
// src/apps/coc-card/hooks/useCardManager.ts
import { watch, computed } from 'vue';
import type { Ref } from 'vue';
import { useDebounceFn } from '@vueuse/core';

import type { COCPlayerCharacter } from '../types/character';
import type { COCCardViewData } from '../types/viewData';
import type { PageData } from '../types/pageData';
import { createPC } from '../models/character';
import { createViewData } from '../models/viewData';

import useAppLs, { type CardMeta } from './useAppLs';
import { saveCard, loadCard, deleteCard as deleteCardStorage, cleanupOrphanedCards } from './useCardStorage';

const ls = useAppLs();

function generateCardId(): string {
  try { return crypto.randomUUID(); } catch {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
  }
}

/**
 * 多角色卡管理器 + 防抖自动保存 + 迁移 + 僵尸清理
 */
export default function useCardManager(
  pcRef: Ref<COCPlayerCharacter>,
  viewData: COCCardViewData,
  pageData: PageData,
) {
  // ---------- 元数据列表（轻量，仅 ID+名称+时间） ----------
  const cardMetaList = computed<CardMeta[]>(
    () => ls.getItem('cardMetaList') ?? [],
  );

  const activeCardId = computed<string>(
    () => ls.getItem('activeCardId') ?? '',
  );

  // 排序后用于 UI
  const sortedMetaList = computed<CardMeta[]>(() =>
    [...cardMetaList.value].sort((a, b) => b.lastModified - a.lastModified),
  );

  // 当前卡片的元数据
  const currentMeta = computed<CardMeta | undefined>(() =>
    cardMetaList.value.find(m => m.id === activeCardId.value),
  );

  // ---------- 持久化 ----------

  /** 保存当前卡片到独立 key + 同步元数据 */
  function flushSave() {
    const id = activeCardId.value;
    if (!id || pageData.importing) return;

    // 1. 保存完整卡片数据到独立 key
    saveCard(id, pcRef.value, viewData);

    // 2. 同步更新元数据列表中的 name 和 lastModified
    const list = [...cardMetaList.value];
    const idx = list.findIndex(m => m.id === id);
    if (idx !== -1) {
      list[idx] = {
        ...list[idx],
        name: pcRef.value.name || '未命名角色卡',
        lastModified: Date.now(),
      };
      ls.setItem('cardMetaList', list);
    }
  }

  const debouncedSave = useDebounceFn(() => {
    if (!pageData.importing) flushSave();
  }, 300);

  // ---------- 卡片操作 ----------

  /** 创建新卡片并激活 */
  function createCard(saveName?: string): string {
    flushSave();

    const id = generateCardId();
    const meta: CardMeta = {
      id,
      name: '未命名角色卡',
      saveName: saveName || `存档 ${cardMetaList.value.length + 1}`,
      lastModified: Date.now(),
      createdAt: Date.now(),
    };

    // 写入元数据
    const list = [...cardMetaList.value, meta];
    ls.setItem('cardMetaList', list);
    ls.setItem('activeCardId', id);

    // 写入空卡片
    const newPC = createPC();
    const newVD = createViewData();
    saveCard(id, newPC, newVD);

    // 替换当前状态
    pcRef.value = newPC;
    Object.assign(viewData, newVD);

    return id;
  }

  /** 切换到指定卡片 */
  function switchCard(id: string) {
    if (id === activeCardId.value) return;
    flushSave();

    const card = loadCard(id);
    if (!card) return;

    ls.setItem('activeCardId', id);

    pageData.importing = true;
    pcRef.value = createPC(card.pc);
    Object.keys(card.viewData).forEach(key => {
      const k = key as keyof COCCardViewData;
      (viewData as any)[k] = (card.viewData as any)[k];
    });
    setTimeout(() => { pageData.importing = false; }, 50);
  }

  /** 删除卡片 */
  function deleteCardById(id: string) {
    const list = cardMetaList.value.filter(m => m.id !== id);
    ls.setItem('cardMetaList', list);
    deleteCardStorage(id);  // 删除独立 key

    if (id === activeCardId.value) {
      if (list.length > 0) {
        switchCard(list[0].id);
      } else {
        createCard();
      }
    }
  }

  /** 复制卡片 */
  function duplicateCard(id: string): string | null {
    const source = loadCard(id);
    if (!source) return null;

    flushSave();

    const newId = generateCardId();
    const sourceMeta = cardMetaList.value.find(m => m.id === id);
    const meta: CardMeta = {
      id: newId,
      name: source.pc.name || '未命名角色卡',
      saveName: `${sourceMeta?.saveName || '存档'} (副本)`,
      lastModified: Date.now(),
      createdAt: Date.now(),
    };

    const list = [...cardMetaList.value, meta];
    ls.setItem('cardMetaList', list);
    saveCard(newId, source.pc, source.viewData);
    ls.setItem('activeCardId', newId);

    // 替换当前状态
    pageData.importing = true;
    pcRef.value = createPC(source.pc);
    Object.keys(source.viewData).forEach(key => {
      const k = key as keyof COCCardViewData;
      (viewData as any)[k] = (source.viewData as any)[k];
    });
    setTimeout(() => { pageData.importing = false; }, 50);

    return newId;
  }

  /** 重命名存档 */
  function renameCard(id: string, newSaveName: string) {
    const list = [...cardMetaList.value];
    const idx = list.findIndex(m => m.id === id);
    if (idx === -1) return;
    list[idx] = { ...list[idx], saveName: newSaveName };
    ls.setItem('cardMetaList', list);
  }

  /** 重置当前卡片为空白 */
  function resetCurrentCard() {
    pageData.importing = true;
    pcRef.value = createPC();
    Object.assign(viewData, createViewData());
    setTimeout(() => {
      pageData.importing = false;
      flushSave();
    }, 50);
  }

  // ---------- 初始化 & 迁移 ----------

  function init() {
    const existingList = ls.getItem('cardMetaList');

    // 情况 1：已有元数据列表
    if (existingList && existingList.length > 0) {
      // 僵尸清理
      const validIds = new Set(existingList.map(m => m.id));
      cleanupOrphanedCards(validIds);

      const activeId = activeCardId.value || existingList[0].id;
      const card = loadCard(activeId);
      if (card) {
        ls.setItem('activeCardId', activeId);
        switchCard(activeId);
      } else {
        // 卡片数据丢失，加载第一个有效的
        const firstValid = existingList.find(m => loadCard(m.id) != null);
        if (firstValid) switchCard(firstValid.id);
        else createCard();
      }
      return;
    }

    // 情况 2：无元数据但有旧 autoSaved → 迁移
    const legacy = ls.getItem('autoSaved');
    if (legacy?.pc) {
      const id = generateCardId();
      const meta: CardMeta = {
        id,
        name: legacy.pc.name || '未命名角色卡',
        saveName: '迁移的存档',
        lastModified: legacy.lastModified || Date.now(),
        createdAt: Date.now(),
      };
      ls.setItem('cardMetaList', [meta]);
      ls.setItem('activeCardId', id);
      saveCard(id, legacy.pc, legacy.viewData || createViewData());
      ls.removeItem('autoSaved');
      switchCard(id);
      return;
    }

    // 情况 3：什么都没有 → 创建默认卡
    createCard();
  }

  // ---------- 自动保存 watch ----------

  let unwatch: (() => void) | null = null;

  function startAutoSave() {
    unwatch = watch(
      () => [pcRef.value, viewData],
      () => { if (!pageData.importing) debouncedSave(); },
      { deep: true },
    );
  }

  function stopAutoSave() { unwatch?.(); }

  // ---------- beforeunload ----------

  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', flushSave);
  }

  return {
    metaList: sortedMetaList,
    activeCardId,
    currentMeta,
    createCard,
    switchCard,
    deleteCard: deleteCardById,
    duplicateCard,
    renameCard,
    resetCurrentCard,
    flushSave,
    init,
    startAutoSave,
    stopAutoSave,
  };
}
```

- [ ] **步骤 2：Commit**

```bash
git add src/apps/coc-card/hooks/useCardManager.ts
git commit -m "feat: add useCardManager with split-key storage, debounced auto-save, migration, orphan cleanup"
```

---

### 任务 3：创建 `CardManager.vue` UI 组件（含双端适配 + 复制/重命名）

**文件：**
- 创建：`src/apps/coc-card/components/CardManager.vue`

**Props 变更**：使用 `CardMeta[]` 而非完整 `CardEntry`（元数据与数据分离）。
**新增功能**：重命名存档（内联编辑）、复制卡片（右键菜单或按钮）。

- [ ] **步骤 1：创建 `CardManager.vue`**

```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import { Plus, Delete, Copy } from '@element-plus/icons-vue';
import { ElMessageBox } from 'element-plus';

import { usePageData } from '../hooks/useProviders';
import useZhTimeAgo from '@/hooks/useZhTimeAgo';

import type { CardMeta } from '../hooks/useAppLs';

interface Props {
  metaList: CardMeta[];
  activeCardId: string;
  currentMeta: CardMeta | undefined;
}
const props = defineProps<Props>();

interface Emits {
  (event: 'create-card'): void;
  (event: 'switch-card', id: string): void;
  (event: 'delete-card', id: string): void;
  (event: 'duplicate-card', id: string): void;
  (event: 'rename-card', id: string, newName: string): void;
}
const emit = defineEmits<Emits>();

const pageData = usePageData();

// 正在编辑存档名的卡片 ID（用于内联编辑）
const editingId = ref<string | null>(null);
const editingName = ref('');

// 当前卡片的最后修改时间
const lastModifiedText = computed(() => {
  if (!props.currentMeta) return '';
  const { timeAgo } = useZhTimeAgo(props.currentMeta.lastModified);
  return timeAgo.value;
});

async function confirmDelete(id: string) {
  try {
    await ElMessageBox.confirm('确定要删除该角色卡吗？此操作不可撤销。', '警告', {
      confirmButtonText: '删除',
      cancelButtonText: '取消',
      type: 'warning',
    });
    emit('delete-card', id);
  } catch { /* 取消 */ }
}

function startRename(meta: CardMeta) {
  editingId.value = meta.id;
  editingName.value = meta.saveName;
}

function commitRename() {
  if (editingId.value && editingName.value.trim()) {
    emit('rename-card', editingId.value, editingName.value.trim());
  }
  editingId.value = null;
}

function cancelRename() {
  editingId.value = null;
}
</script>

<template>
  <div class="card-manager" :class="{ 'printing-image': pageData?.printing }">
    <!-- 电脑端：时间信息 -->
    <div v-if="lastModifiedText" class="card-time card-time-desktop">
      {{ lastModifiedText }}编辑
    </div>

    <div class="card-tabs">
      <div
        v-for="meta in metaList"
        :key="meta.id"
        class="card-tab"
        :class="{ 'card-tab-active': meta.id === activeCardId }"
        @click="emit('switch-card', meta.id)"
        @dblclick="startRename(meta)"
      >
        <!-- 内联编辑存档名 -->
        <input
          v-if="editingId === meta.id"
          class="card-tab-input"
          v-model="editingName"
          @blur="commitRename"
          @keyup.enter="commitRename"
          @keyup.escape="cancelRename"
          @click.stop
          ref="renameInput"
        />
        <span v-else class="card-tab-name">{{ meta.saveName }}</span>

        <!-- 复制按钮 -->
        <span class="card-tab-btn" @click.stop="emit('duplicate-card', meta.id)" title="复制">
          <el-icon :size="10"><Copy /></el-icon>
        </span>
        <!-- 删除按钮 -->
        <span
          class="card-tab-btn card-tab-delete"
          :class="{ 'card-tab-delete-mobile': meta.id !== activeCardId }"
          @click.stop="confirmDelete(meta.id)"
          title="删除"
        >
          <el-icon :size="12"><Delete /></el-icon>
        </span>
      </div>

      <!-- 新建按钮 -->
      <div class="card-tab card-tab-new" @click="emit('create-card')">
        <el-icon :size="14"><Plus /></el-icon>
        <span class="card-tab-new-text">新建</span>
      </div>
    </div>

    <!-- 移动端：时间信息在标签下方独立一行 -->
    <div v-if="lastModifiedText" class="card-time card-time-mobile">
      {{ lastModifiedText }}编辑
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-manager {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4px 12px;
  border-bottom: 1px solid var(--color-border);
  gap: 12px;
}

/* ====== 时间信息 ====== */
.card-time-desktop { display: flex; }
.card-time-mobile  { display: none; }
.card-time {
  font-size: 12px;
  color: var(--color-text);
  opacity: 0.6;
  white-space: nowrap;
  flex-shrink: 0;
}

/* ====== 标签容器 ====== */
.card-tabs {
  display: flex;
  gap: 4px;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  &::-webkit-scrollbar { display: none; }
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* ====== 单个标签 ====== */
.card-tab {
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 4px 10px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-action-bg);
  cursor: pointer;
  transition: background-color 0.15s, border-color 0.15s;
  white-space: nowrap;
  user-select: none;

  &:hover { background-color: var(--color-action-bg-hover); }
  &:active { background-color: var(--color-action-bg-active); }
}

.card-tab-active {
  border-color: var(--color-white);
  color: var(--color-white);
  background-color: var(--color-action-bg-active);
}

.card-tab-name {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-tab-input {
  width: 80px;
  padding: 1px 4px;
  font-size: 13px;
  border: 1px solid var(--color-white);
  border-radius: 2px;
  background: transparent;
  color: var(--color-white);
  outline: none;
}

.card-tab-btn {
  display: flex;
  align-items: center;
  opacity: 0.4;
  flex-shrink: 0;
  &:hover { opacity: 1; }
}
.card-tab-delete:hover { opacity: 1; color: #e04040; }

.card-tab-new {
  padding: 4px 8px;
  flex-shrink: 0;
}
.card-tab-new-text { display: none; }

/* ====== 打印隐藏 ====== */
.printing-image { display: none; }
@media print { .card-manager { display: none; } }

/* ====== 移动端 (≤1024px) ====== */
@media screen and (max-width: 1024px) {
  .card-manager {
    flex-direction: column;
    align-items: stretch;
    padding: 2px 8px;
    gap: 4px;
  }
  .card-time-desktop { display: none; }
  .card-time-mobile { display: flex; font-size: 11px; padding-left: 4px; }

  .card-tabs { gap: 6px; padding-bottom: 2px; }

  .card-tab {
    padding: 6px 12px;
    min-height: 36px;
    font-size: 14px;
  }
  .card-tab-name { max-width: 64px; }
  .card-tab-delete-mobile { display: none; }

  .card-tab-new { padding: 6px 12px; }
  .card-tab-new-text { display: inline; }
}
</style>
```

- [ ] **步骤 2：Commit**

```bash
git add src/apps/coc-card/components/CardManager.vue
git commit -m "feat: add CardManager with dual-platform UI, rename, duplicate support"
```

- [ ] **步骤 2：Commit**

```bash
git add src/apps/coc-card/components/CardManager.vue
git commit -m "feat: add CardManager component for multi-card tab UI"
```

---

### 任务 4：集成到 `AppView.vue`

**文件：**
- 修改：`src/apps/coc-card/AppView.vue`

- [ ] **步骤 1：修改 `<script setup>` 部分**

**4.1 添加 import（在第 15 行 `import useAppLs` 之后）：**

```typescript
import useCardManager from './hooks/useCardManager';
import CardManager from './components/CardManager.vue';
```

**4.2 替换 TODO 注释块（第 47-49 行）：**

替换为：
```typescript
// 多角色卡管理 + 自动保存
const cardManager = useCardManager(pcRef, viewData, pageData);
cardManager.init();
cardManager.startAutoSave();
```

**4.3 在 provide 块之后导出 cardManager：**

```typescript
provide('cardManager', cardManager);
```

- [ ] **步骤 2：修改 `<template>` 部分**

在 `<div class="sticky-footer web-only">` 内部的 `<ControlSection>` 上方插入：

```vue
<div class="sticky-footer web-only">
  <CardManager
    :metaList="cardManager.metaList.value"
    :activeCardId="cardManager.activeCardId.value"
    :currentMeta="cardManager.currentMeta.value"
    @create-card="cardManager.createCard"
    @switch-card="cardManager.switchCard"
    @delete-card="cardManager.deleteCard"
    @duplicate-card="cardManager.duplicateCard"
    @rename-card="(id, name) => cardManager.renameCard(id, name)"
  />
  <ControlSection ... />
</div>
```

> **注意：** 模板中 ComputedRef 由 Vue 自动解包，但显式 `.value` 在某些 Edge 场景下更安全。推荐使用 `cardManager.metaList.value`。

- [ ] **步骤 3：Commit**

```bash
git add src/apps/coc-card/AppView.vue
git commit -m "feat: integrate CardManager with split-key storage and auto-save into AppView"
```

---

### 任务 5：更新 `ControlSection.vue` 重置逻辑

**文件：**
- 修改：`src/apps/coc-card/sections/ControlSection.vue`

- [ ] **步骤 1：修改 `actResetCard` 函数**

```typescript
// 在 <script setup> 顶部添加 inject：
import { computed, nextTick, ref, reactive, defineExpose, inject } from 'vue';

// 替换 actResetCard 函数：
function actResetCard() {
  if (!pc || !viewData) return;

  const cardManager = inject<{
    resetCurrentCard: () => void
  } | null>('cardManager', null);

  if (cardManager) {
    cardManager.resetCurrentCard();
  } else {
    pc.value = reactive(createPC());
    resetViewData(viewData);
    nextTick(() => { ls.removeItem('autoSaved'); });
  }

  ElMessage.info('已重置人物卡');
  morePanelVisible.value = false;
}
```

- [ ] **步骤 2：Commit**

```bash
git add src/apps/coc-card/sections/ControlSection.vue
git commit -m "feat: update reset logic to use cardManager when available"
```

---

### 任务 6：端到端验证

- [ ] **步骤 1：启动开发服务器**

```bash
cd D:\project\web\trpg-saikou; npm run dev
```

- [ ] **步骤 2：手动验证清单**

| # | 平台 | 验证项 | 操作 | 预期 |
|---|------|--------|------|------|
| 1 | 通用 | 首次加载 | 打开页面 | 自动创建一张默认空白卡（存档名"存档 1"） |
| 2 | 通用 | 新建卡片 | 点击 + 按钮 | 新增"存档 N"并激活，旧卡自动保存 |
| 3 | 通用 | 切换卡片 | 点击不同卡片标签 | 内容即时切换，之前编辑不丢失 |
| 4 | 通用 | 自动保存 | 编辑任意字段等待 300ms，刷新页面 | 编辑内容完整保留 |
| 5 | 通用 | 删除卡片 (最后一张) | 删除最后一张 → 自动创建空卡 | 始终保持至少 1 张卡 |
| 6 | 通用 | 删除卡片 (非最后) | 删除中间卡片，确认弹窗 | 卡片删除，自动切换到第一张 |
| 7 | 通用 | 复制卡片 | 点击复制图标 | 创建 "(存档名) (副本)" 副本并激活 |
| 8 | 通用 | 重命名存档 | 双击卡片标签 → 输入新名 → Enter | 存档名更新 |
| 9 | 通用 | 导入数据 | 粘贴旧 LZString 压缩字符串 → 导入 | 当前卡片内容被替换 |
| 10 | 通用 | 导出数据 | 复制导出字符串 | LZString 压缩的 {pc, viewData} |
| 11 | 通用 | 重置卡片 | 点击"重置人物卡" | 当前卡回退为空白 |
| 12 | 通用 | 打印为图片 | 点击"正面"/"背面"下载 | 图片正常，CardManager 不出现 |
| 13 | 通用 | 旧数据迁移 | 手动写入旧 `autoSaved` 格式到 localStorage，刷新 | 自动迁移为"迁移的存档"卡片；旧 key 清除 |
| 14 | 通用 | 僵尸清理 | 元数据删除某卡但 card key 残留 → 刷新 | 残留 card key 被自动清理 |
| 15 | 通用 | localStorage 结构 | DevTools → Application → Local Storage | 元数据在 `$sox-trpg#$coc-card`；每张卡独立 key `$sox-trpg#$coc-card:card:{id}` |
| 16 | 移动 | 横向滚动 | 创建 4+ 张卡片，缩至 375px | 标签可横向滑动，+ 固定可见 |
| 17 | 移动 | 删除按钮 | 移动端视口 | 仅激活卡显示 ×，非激活卡隐藏 |
| 18 | 移动 | 时间显示 | 移动端视口 | 时间信息在标签下方独立一行 |
| 19 | 移动 | 触摸 | 手指点击标签 | 标签高度 ≥36px |
| 20 | 移动 | 新建文字 | 移动端 + 按钮 | 显示"新建"文字 + 图标 |
| 21 | 电脑 | 完整布局 | ≥1025px | 标签水平排列 + 全显删除/复制 + 时间在左 |

- [ ] **步骤 3：Split-Key 验证**

打开 DevTools → Application → Local Storage，确认：

```
$sox-trpg#$coc-card              → {"showTotalSeparation":false,"activeCardId":"xxx","cardMetaList":[...]}
$sox-trpg#$coc-card:card:xxx     → {"pc":{...},"viewData":{...},"lastModified":...}
$sox-trpg#$coc-card:card:yyy     → {"pc":{...},"viewData":{...},"lastModified":...}
```

确认：meta 列表不含完整 pc/viewData 数据；每张卡独占一个 key。

---

## 自检

- [x] 规格覆盖度：多卡管理 ✓ / 高速自动保存(防抖 300ms + split-key 单卡序列化) ✓ / beforeunload ✓ / 旧数据迁移 ✓ / 僵尸清理 ✓ / 复制卡片 ✓ / 存档重命名(双击内联编辑) ✓ / 电脑端布局 ✓ / 移动端布局(横向滚动+触摸+时间下行) ✓
- [x] 参考项目模式：split-key 设计 ✓ / CardMeta vs CardEntry 分离 ✓ / saveName 存档名 ✓ / orphan cleanup ✓ / UUID 生成 ✓ / 迁移后清理旧 key ✓
- [x] 无占位符：所有步骤含完整代码，无 TODO/待定
- [x] 类型一致性：`CardMeta` 在 `useAppLs.ts` 导出；`CardEntry` 在 `useCardStorage.ts` 导出；`useCardManager.ts` 引用两者
- [x] 双端适配：电脑端 flex row + 全显按钮；移动端 flex column + 横向滚动 + 仅激活卡显示删除 + 触摸 36px
- [x] 故障隔离：单卡数据损坏不影响其他卡片（独立 key）；元数据损坏不影响卡数据恢复
