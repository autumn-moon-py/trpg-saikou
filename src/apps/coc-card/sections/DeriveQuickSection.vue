<script setup lang="ts">
import PaperSection from '../components/PaperSection.vue';
import WritableRow from '../components/WritableRow.vue';
import type { COCDeriveAttributes } from '../types/character';

import { usePC } from '../hooks/useProviders';

const pc = usePC();

function updateAttr(
  key: keyof COCDeriveAttributes,
  cKey: 'now' | 'start',
  value: string,
): void {
  if (!pc || !pc.value.deriveAttributes) return;
  pc.value.deriveAttributes[key][cKey] = value ? value : undefined;
}
</script>

<template>
  <PaperSection
    v-if="pc"
    class="derive-quick-wrapper"
    title="衍生属性"
    subTitle="Derived"
  >
    <div class="derive-quick-section">
      <WritableRow
        label="理智值"
        :char="3"
        :modelValue="`${pc.deriveAttributes?.sanity?.now ?? ''}`"
        @update:modelValue="(val) => updateAttr('sanity', 'now', val)"
      />
      <WritableRow
        label="理智上限"
        :char="2"
        :modelValue="`${pc.deriveAttributes?.sanity?.start ?? ''}`"
        @update:modelValue="(val) => updateAttr('sanity', 'start', val)"
      />
      <WritableRow
        label="生命值"
        :char="3"
        :modelValue="`${pc.deriveAttributes?.hp?.now ?? ''}`"
        @update:modelValue="(val) => updateAttr('hp', 'now', val)"
      />
      <WritableRow
        label="魔法值"
        :char="3"
        :modelValue="`${pc.deriveAttributes?.mp?.now ?? ''}`"
        @update:modelValue="(val) => updateAttr('mp', 'now', val)"
      />
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.derive-quick-wrapper {
  flex: 0 0 auto;
  min-width: 0;
}
.derive-quick-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.4em 0.4em 0.6em;
  gap: 0.2em 0.4em;
  flex: 1;
  align-content: space-evenly;

  & :deep(.label) {
    flex: 0 1 4em;
  }
  & :deep(.writable-row) {
    justify-content: center;
  }
}
</style>
