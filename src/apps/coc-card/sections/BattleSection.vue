<script setup lang="ts">
import { watch } from 'vue';

import PaperSection from '../components/PaperSection.vue';
import WritableRow from '../components/WritableRow.vue';

import { usePC, useRules } from '../hooks/useProviders';
import { calculateDB, calculateMOV } from '../models/attribute';

const pc = usePC();
const rules = useRules();

watch(
  [() => pc?.value.attributes, () => rules?.value],
  () => {
    if (!pc) return;
    const { str, siz, dex } = pc.value.attributes;
    // calculate DB
    const dbResult = calculateDB(str, siz);
    if (dbResult) {
      pc.value.battleAttributes.db = dbResult.db;
      pc.value.battleAttributes.size = dbResult.size;
    }
    // calculate mov
    const movResult = calculateMOV(str, siz, dex, rules?.value);
    if (movResult) {
      pc.value.battleAttributes.mov = movResult;
    }
  },
  { deep: true },
);
</script>

<template>
  <PaperSection
    title="战斗"
  >
    <div
      class="battle-section-body"
      v-if="pc"
    >
      <WritableRow
        label="DB"
        v-model="pc.battleAttributes.db"
        :char="4"
      />
      <WritableRow
        label="体格"
        v-model="pc.battleAttributes.size"
        :char="4"
      />
      <WritableRow
        label="移动力"
        v-model="pc.battleAttributes.mov"
        :char="4"
      />
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.battle-section-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.3em;
  padding: 0.6em 0.6em 1.2em 0.2em;

  &:deep(.label) {
    width: 4.4em;
    flex: 0 1 auto;
  }
}
</style>
