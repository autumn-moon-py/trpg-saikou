<script setup lang="ts">
import { computed } from 'vue';

// components
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
  { key: 'app', label: '外貌', hint: 'APP' },
  { key: 'pow', label: '意志', hint: 'POW' },
];
const rightList: RenderListItem[] = [
  { key: 'siz', label: '体型', hint: 'SIZ' },
  { key: 'edu', label: '教育', hint: '知识 EDU' },
  { key: 'int', label: '智力', hint: '灵感 INT' },
  { key: 'luc', label: '幸运', hint: 'LUK' },
];
const allList: RenderListItem[] = [...leftList, ...rightList];

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
    v-if="pc"
  >
    <div class="info-section">
      <!-- 竖屏：3栏网格布局 -->
      <div class="attributes-grid">
        <WritableRow
          v-for="item in allList"
          :key="item.key"
          :label="item.label"
          :modelValue="`${pc?.attributes[item.key] ?? ''}`"
          @update:modelValue="(newValue) => updateAttr(item.key, newValue)"
        />
      </div>
      <!-- 横屏：左右两列布局 -->
      <div class="attributes-group attributes-group--left">
        <WritableRow
          v-for="item in leftList"
          :key="item.key"
          :label="item.label"
          :modelValue="`${pc?.attributes[item.key] ?? ''}`"
          @update:modelValue="(newValue) => updateAttr(item.key, newValue)"
        />
      </div>
      <div class="divider"></div>
      <div class="attributes-group attributes-group--right">
        <WritableRow
          v-for="item in rightList"
          :key="item.key"
          :label="item.label"
          :modelValue="`${pc?.attributes[item.key] ?? ''}`"
          @update:modelValue="(newValue) => updateAttr(item.key, newValue)"
        />
        <div class="attributes-actions">
          <template v-if="sum">
            <div class="ponits-sum">总点数 {{ sum }}</div>
          </template>
        </div>
      </div>
      <!-- 竖屏：总点数（在网格下方） -->
      <div
        v-if="sum"
        class="ponits-sum ponits-sum--mobile"
      >总点数 {{ sum }}</div>
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.info-section {
  display: flex;
  padding: 0.4em 0.6em 0.6em;
  gap: 0.8em;
  flex-wrap: wrap;
}

/* 竖屏3栏网格——默认隐藏，竖屏时显示 */
.attributes-grid {
  display: none;
}

/* 横屏左右两列——默认显示 */
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
  & :deep(.input) {
    width: 3em !important;
  }
}
.attributes-actions {
  margin-top: 10px;
  margin-bottom: 10px;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4em;
  width: 0;
  white-space: nowrap;

  --color-button-border: #b2b2b2;
  --color-button-border-hover: #9a9a9a;
  --color-button-bg: #fff;
  --color-button-bg-hover: #fafafa;
  --color-button-bg-active: #f5f5f5;
  --color-button-text: #4b4e53;
  --color-button-text-hover: #2e2e2e;
}

.ponits-sum {
  text-align: center;
  opacity: 0.8;
  line-height: 1;
  transform: scale(0.88);
  transform-origin: center bottom;
}
.ponits-sum--mobile {
  display: none;
}

.dice-hint {
  align-self: flex-start;
  font-size: 0.8em;
  margin: 0 0 -0.3em 0.6em;
}

/* when print */
@mixin printing-styles {
  .web-only {
    display: none;
  }
}
.printing-image {
  @include printing-styles;
}
@media print {
  @include printing-styles;
}
</style>

<style lang="scss">
@media screen and (orientation: portrait) {
  .papers-editing {
    /* 竖屏：显示3栏网格，隐藏横屏两列 */
    .attributes-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.3em 0.4em;
      padding: 0.4em 0.6em;
      width: 100%;

      .writable-row {
        justify-self: center;
      }

      .input {
        width: 3.6em !important;
        text-align: center;
      }
    }
    .attributes-group--left,
    .attributes-group--right,
    .divider {
      display: none;
    }
    .ponits-sum--mobile {
      display: block;
      width: 100%;
      text-align: center;
      margin-top: 0;
      opacity: 0.8;
      line-height: 1;
      transform: scale(0.88);
      transform-origin: center bottom;
    }
    .attributes-actions {
      display: none;
    }
    .info-section {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
