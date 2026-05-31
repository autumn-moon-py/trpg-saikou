<script setup lang="ts">
import { ref } from 'vue';
import { Plus, Delete, CopyDocument } from '@element-plus/icons-vue';
import { ElMessageBox } from 'element-plus';

import { usePageData } from '../hooks/useProviders';

import type { CardMeta } from '../hooks/useAppLs';

interface Props {
  metaList: CardMeta[];
  activeCardId: string;
}
defineProps<Props>();

interface Emits {
  (event: 'create-card'): void;
  (event: 'switch-card', id: string): void;
  (event: 'delete-card', id: string): void;
  (event: 'duplicate-card', id: string): void;
  (event: 'rename-card', id: string, newName: string): void;
}
const emit = defineEmits<Emits>();

const pageData = usePageData();

// 正在编辑存档名的卡片 ID
const editingId = ref<string | null>(null);
const editingName = ref('');

async function confirmDelete(id: string) {
  try {
    await ElMessageBox.confirm('确定要删除该角色卡吗？此操作不可撤销。', '警告', {
      confirmButtonText: '删除',
      cancelButtonText: '取消',
      type: 'warning',
    });
    emit('delete-card', id);
  } catch {
    // 用户取消
  }
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

function displayName(meta: CardMeta): string {
  if (meta.name && meta.name !== '未命名角色卡') return meta.name;
  return meta.saveName;
}

function cancelRename() {
  editingId.value = null;
}
</script>

<template>
  <div class="card-manager" :class="{ 'printing-image': pageData?.printing }">
    <div class="card-tabs">
      <!-- 新建按钮 —— 居左 -->
      <div class="card-tab card-tab-new" @click="emit('create-card')">
        <el-icon :size="14"><Plus /></el-icon>
        <span class="card-tab-new-text">新建</span>
      </div>

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
        />
        <span v-else class="card-tab-name">{{ displayName(meta) }}</span>

        <!-- 复制按钮 -->
        <span class="card-tab-btn" @click.stop="emit('duplicate-card', meta.id)" title="复制">
          <el-icon :size="10"><CopyDocument /></el-icon>
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
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-manager {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4px 12px;
  border-bottom: 1px solid var(--color-border);
  gap: 12px;
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
@media screen and (orientation: portrait) {
  .card-manager {
    padding: 2px 8px;
  }

  .card-tabs { gap: 6px; }

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
