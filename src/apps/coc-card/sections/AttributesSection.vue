<script setup lang="ts">
import { computed } from 'vue';

import PaperSection from '../components/PaperSection.vue';
import WritableRow from '../components/WritableRow.vue';

import type { COCAttributesKey } from '../types/character';

import { usePC } from '../hooks/useProviders';

const pc = usePC();

interface RenderListItem {
  key: COCAttributesKey;
  label: string;
  hint: string;
}
const leftList: RenderListItem[] = [
  { key: 'str', label: '力量', hint: 'STR' },
  { key: 'con', label: '体质', hint: 'CON' },
  { key: 'dex', label: '敏捷', hint: 'DEX' },
];
const midList: RenderListItem[] = [
  { key: 'app', label: '外貌', hint: 'APP' },
  { key: 'pow', label: '意志', hint: 'POW' },
  { key: 'siz', label: '体型', hint: 'SIZ' },
];
const rightList: RenderListItem[] = [
  { key: 'edu', label: '教育', hint: '知识 EDU' },
  { key: 'int', label: '智力', hint: '灵感 INT' },
  { key: 'luc', label: '幸运', hint: 'LUK' },
];

const sum = computed(() => {
  if (!pc) return 0;
  const { str, con, dex, app, pow, siz, edu, int } = pc.value.attributes;
  const vals = [str, con, dex, app, pow, siz, edu, int];
  const filled = vals.every((v) => v);
  if (!filled) return 0;
  return vals.reduce<number>((sum, cur) => sum + (cur || 0), 0);
});

function updateAttr(key: COCAttributesKey, value: string) {
  if (!pc) return;
  pc.value.attributes[key] = value ? +value : undefined;
}
</script>

<template>
  <PaperSection
    title="属性"
    subTitle="Characteristics"
    v-if="pc"
  >
    <div class="info-section">
      <div class="attributes-group">
        <WritableRow
          v-for="item in leftList"
          :key="item.key"
          :label="item.label"
          :modelValue="`${pc?.attributes[item.key] ?? ''}`"
          @update:modelValue="(newValue) => updateAttr(item.key, newValue)"
        />
      </div>
      <div class="divider"></div>
      <div class="attributes-group">
        <WritableRow
          v-for="item in midList"
          :key="item.key"
          :label="item.label"
          :modelValue="`${pc?.attributes[item.key] ?? ''}`"
          @update:modelValue="(newValue) => updateAttr(item.key, newValue)"
        />
      </div>
      <div class="divider"></div>
      <div class="attributes-group">
        <WritableRow
          v-for="item in rightList"
          :key="item.key"
          :label="item.label"
          :modelValue="`${pc?.attributes[item.key] ?? ''}`"
          @update:modelValue="(newValue) => updateAttr(item.key, newValue)"
        />
        <template v-if="sum">
          <div class="ponits-sum">总点数 {{ sum }}</div>
        </template>
      </div>
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.info-section {
  display: flex;
  padding: 0.4em 0.6em 0.6em;
  gap: 0.8em;
}
.divider {
  border-right: 1px solid var(--color-border);
}
.attributes-group {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2em;

  & :deep(.label) {
    flex: 0 1 2.8em;
  }
}
.ponits-sum {
  text-align: center;
  opacity: 0.8;
  line-height: 1;
  transform: scale(0.88);
  transform-origin: center bottom;
}
</style>
