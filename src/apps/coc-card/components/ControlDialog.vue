<script setup lang="ts">
interface Props {
  title: string;
  modelValue?: boolean;
}
defineProps<Props>();

interface Emits {
  (event: 'update:modelValue', value: boolean): void;
}
defineEmits<Emits>();
</script>

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

<style lang="scss">
.coc-card-control-dialog {
  max-width: 720px;
  background-color: rgba(0, 0, 0, 0.88);
  --el-dialog-width: 80%;
  --el-text-color-primary: var(--color-white);
  --color-border: #8a8a8a;
  --color-action-bg: #3a3a3a;
  --color-action-bg-hover: #444;
  --color-action-bg-active: #4b4e53;
}
.control-dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 40px;
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
</style>
