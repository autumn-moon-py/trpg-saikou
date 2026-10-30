<script setup lang="ts">
import { ref, reactive, computed, watch, nextTick, onMounted, onActivated } from 'vue';
import { ElMessage, MessageHandler } from 'element-plus';

import PaperSection from '../components/PaperSection.vue';
import WritableArea from '../components/WritableArea.vue';

import { usePC, usePageData, useRules } from '../hooks/useProviders';

import type { COCPlayerCharacter } from '../types/character';

interface AreaConfig {
  label: string;
  fieldName: keyof COCPlayerCharacter['stories'];
  size?: 'small' | 'base';
}

const pc = usePC();
const pageData = usePageData();
const rules = useRules();

// 修订版：重要之人与意义非凡之地合并为一个字段
const personPlace = computed({
  get: () => {
    if (!pc) return '';
    const { IPerson, IPlace } = pc.value.stories;
    return [IPerson, IPlace].filter((text) => text && text.trim()).join('\n');
  },
  set: (value: string) => {
    if (!pc) return;
    pc.value.stories.IPerson = value;
    pc.value.stories.IPlace = '';
  },
});

const BASE_ROWS = 3;
const SMALL_ROWS = 4;
const leftConfigs: AreaConfig[] = reactive([
  { label: '形象描述', fieldName: 'app' },
  { label: '思想与信念', fieldName: 'belief' },
  { label: '重要之人', fieldName: 'IPerson' },
  { label: '意义非凡之地', fieldName: 'IPlace' },
  { label: '宝贵之物', fieldName: 'IItem' },
  { label: '伤口与疤痕', fieldName: 'scar' },
  { label: '精神症状', fieldName: 'mad' },
  { label: '特质', fieldName: 'trait' },
]);
const rightConfigs: AreaConfig[] = reactive([]);
import { useIsMobileLayout } from '../hooks/usePlatform';

const isMobile = useIsMobileLayout();

const restConfig = reactive<Partial<AreaConfig>>({ fieldName: 'desc', size: 'base' });
const restRows = computed(() => {
  const configLength = leftConfigs.length - rightConfigs.length;
  const basic = configLength * ~~(restConfig.size === 'base' ? BASE_ROWS : SMALL_ROWS);
  const additional = restConfig.size === 'base' ? 0 : ~~(configLength / 6);
  const total = basic + additional;
  return isMobile.value ? Math.ceil(total / 2) : total;
});

// 修订版背景故事少一行，把“特质”行数动态扩展到填满右列剩余高度
const leftColumnRef = ref<HTMLElement | null>(null);
const rightColumnRef = ref<HTMLElement | null>(null);
const traitRowsOverride = ref<number | null>(null);

function getAreaRows(config: AreaConfig) {
  const base = config.size === 'small' ? SMALL_ROWS : BASE_ROWS;
  if (!rules?.value.revisedStory || config.fieldName !== 'trait') return base;
  return traitRowsOverride.value ?? base;
}

/** 测量左右列实际高度，把“特质”扩展到与右列底部对齐 */
async function syncTraitRows() {
  await nextTick();
  const left = leftColumnRef.value;
  const right = rightColumnRef.value;
  if (!rules?.value.revisedStory || !left || !right) {
    traitRowsOverride.value = null;
    return;
  }
  const areas = [...left.querySelectorAll<HTMLElement>('.writable-area')];
  const traitArea = areas.find(
    (el) => el.querySelector('.label')?.textContent?.trim() === '特质',
  );
  const textarea = traitArea?.querySelector('textarea');
  if (!traitArea || !textarea) return;

  const targetHeight = [...right.querySelectorAll<HTMLElement>('.writable-area')].reduce(
    (sum, el) => sum + el.getBoundingClientRect().height,
    0,
  );
  if (!targetHeight) return;
  const leftWithoutTrait = areas
    .filter((el) => el !== traitArea)
    .reduce((sum, el) => sum + el.getBoundingClientRect().height, 0);
  const lineHeight = parseFloat(getComputedStyle(textarea).lineHeight) || 24;
  const traitConfig = leftConfigs.find((config) => config.fieldName === 'trait');
  const baseRows = traitConfig?.size === 'small' ? SMALL_ROWS : BASE_ROWS;
  const targetRows = Math.max(
    baseRows,
    Math.ceil((targetHeight - leftWithoutTrait) / lineHeight),
  );
  if (traitRowsOverride.value !== targetRows) {
    traitRowsOverride.value = targetRows;
  }
}

watch(
  () => [
    pc?.value.stories,
    rules?.value.revisedStory,
    pageData?.printing,
    restConfig.size,
    isMobile.value,
    leftConfigs.map((config) => `${config.fieldName}:${config.size}`).join('|'),
  ],
  () => {
    nextTick(syncTraitRows);
  },
  { deep: true },
);

onMounted(() => {
  nextTick(syncTraitRows);
});
onActivated(() => {
  nextTick(syncTraitRows);
});

const showingAlert = ref<MessageHandler>();
function onResizeConfig(config: Partial<AreaConfig>) {
  showingAlert.value?.close();
  if (!pageData?.printing) {
    if (config.size === 'small') {
      showingAlert.value = ElMessage.error('文字内容超出可显示的尺寸，如需打印，建议删减内容');
    } else {
      showingAlert.value = ElMessage.warning('检测到内容较多，已为您调整文字为小尺寸');
    }
  }
  config.size = 'small';
}

watch(
  () => pc?.value.stories,
  () => {
    [...leftConfigs, ...rightConfigs, restConfig].forEach((config) => {
      if (config.fieldName && !pc?.value.stories[config.fieldName]) {
        config.size = 'base';
      }
    });
    nextTick(syncTraitRows);
  },
  {
    deep: true,
  },
);
</script>

<template>
  <PaperSection
    v-if="pc"
    title="背景故事"
  >
    <div class="story-section-body">
      <div
        ref="leftColumnRef"
        class="story-section-column col-2"
      >
        <!-- :maxlength="config.rows * 23 - config.label.length - 1" -->
        <template
          v-for="config in leftConfigs"
          :key="config.fieldName"
        >
          <WritableArea
            v-if="rules?.revisedStory && config.fieldName === 'IPerson'"
            label="重要之人与之地"
            v-model="personPlace"
            :rows="getAreaRows(config)"
            :size="config.size"
            @oversize="() => onResizeConfig(config)"
          />
          <WritableArea
            v-else-if="!(rules?.revisedStory && config.fieldName === 'IPlace')"
            :label="config.label"
            v-model="pc.stories[config.fieldName]"
            :rows="getAreaRows(config)"
            :size="config.size"
            @oversize="() => onResizeConfig(config)"
          />
        </template>
      </div>
      <div
        ref="rightColumnRef"
        class="story-section-column col-3"
      >
        <WritableArea
          v-for="config in rightConfigs"
          :key="config.fieldName"
          :label="config.label"
          v-model="pc.stories[config.fieldName]"
          :rows="config.size === 'small' ? SMALL_ROWS : BASE_ROWS"
          :size="config.size"
        />
        <!-- :maxlength="restRows * 29 - 5" -->
        <WritableArea
          label="个人介绍"
          v-model="pc.stories.desc"
          :rows="restRows"
          :size="restConfig.size"
          @oversize="() => onResizeConfig(restConfig)"
        />
      </div>
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.story-section-body {
  padding: 0.4em 0.6em 0.6em;
  display: flex;
  gap: 1em;
}
</style>

<style lang="scss">
@media screen and (orientation: portrait) {
  .papers-editing {
    .story-section-body {
      flex-direction: column;
      gap: 0;
    }
  }
}
</style>
