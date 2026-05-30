<script setup lang="ts">
interface Props {
  value?: string;
  options?: {
    value: string;
    label: string;
  }[];
  disabled?: boolean;
}
withDefaults(defineProps<Props>(), {
  value: '',
  disabled: false,
});

interface Emits {
  (event: 'change', value: string): void;
}
defineEmits<Emits>();
</script>

<template>
  <select
    class="base-td-select"
    :value="value"
    :disabled="disabled"
    @change="$emit('change', ($event.target as HTMLInputElement).value)"
  >
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<style scoped lang="scss">
.base-td-select {
  width: 100%;
  font-size: 0.88em;
  line-height: 1;
  background-color: transparent;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;

  &:disabled {
    cursor: default;
    opacity: 1;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 1px 1px #534565;
  }

  &::after {
    content: '';
    display: none;
  }
}
</style>
