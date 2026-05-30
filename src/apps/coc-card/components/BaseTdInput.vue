<script setup lang="ts">
interface Props {
  value?: string;
  readonly?: boolean;
}
withDefaults(defineProps<Props>(), {
  value: '',
  readonly: false,
});

interface Emits {
  (event: 'input', value: string): void;
  (event: 'focus', $event: FocusEvent): void;
}
const emit = defineEmits<Emits>();

function handleFocus(event: FocusEvent) {
  const target = event.target as HTMLInputElement;
  target.select();
  emit('focus', event);
}
</script>

<template>
  <input
    type="text"
    class="base-td-input"
    :value="value"
    :readonly="readonly"
    :tabindex="readonly ? '-1' : undefined"
    @input="$emit('input', ($event.target as HTMLInputElement).value)"
    @focus="readonly ? undefined : handleFocus"
  />
</template>

<style scoped lang="scss">
.base-td-input {
  width: 100%;
  height: 100%;
  text-align: center;
  min-width: 0;
  padding: 0 0.14em;
  background-color: transparent;

  &:read-only {
    cursor: default;
    user-select: none;
  }
}
</style>
