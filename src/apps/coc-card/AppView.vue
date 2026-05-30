<script setup lang="ts">
import { reactive, provide, ref, watch, computed } from 'vue';
import qs from 'qs';

import { createPC } from './models/character';
import { createViewData } from './models/viewData';

import type { COCPlayerCharacter } from './types/character';
import type { COCCardViewData } from './types/viewData';
import type { PageData } from './types/pageData';

import useDerives from './hooks/useDerives';
import useSuggestion from './hooks/useSuggestion';
import useAppLs from './hooks/useAppLs';
import useCardManager from './hooks/useCardManager';

import ControlSection from './sections/ControlSection.vue';
import PaperFront from './PaperFront.vue';
import PaperBack from './PaperBack.vue';
import { ElMessage } from 'element-plus';
import { DocumentCopy } from '@element-plus/icons-vue';

const qsObject = qs.parse(location.search.slice(1));
const pcRef = ref<COCPlayerCharacter>(createPC());
const ls = useAppLs();
const viewData = reactive<COCCardViewData>(createViewData(qsObject));
const pageData = reactive<PageData>({
  paperInFront: qsObject.turn === 'back' ? false : true,
  printing: qsObject.debug === 'true',
  importing: false,
  showTotalSeparation: qsObject.sep === 'true' || ls.getItem('showTotalSeparation') || false,
});
const controlSectionRef = ref(ControlSection);

watch(
  () => pageData.showTotalSeparation,
  (value) => {
    ls.setItem('showTotalSeparation', value);
  },
);

useDerives(pcRef);
const suggestion = useSuggestion(pcRef, {
  viewData,
  pageData,
});

// 多角色卡管理 + 自动保存
const cardManager = useCardManager(pcRef, viewData, pageData);
cardManager.init();
cardManager.startAutoSave();

provide('pc', pcRef);
provide('viewData', viewData);
provide('pageData', pageData);
provide('suggestion', suggestion);
provide('cardManager', cardManager);

const paperEls = reactive<{ front?: HTMLElement; back?: HTMLElement }>({});

const handleDragOver = (event: DragEvent) => {
  event.preventDefault();
};

const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  if (!event.dataTransfer) {
    console.error('数据传输对象为空');
    return;
  }
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];
    if (file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target!.result;
        processText(text);
      };
      reader.readAsText(file);
    } else {
      console.error('不支持的文件类型');
    }
  }
};

const processText = (text: string | ArrayBuffer | null) => {
  ElMessage.success('导入卡数据中');
  if (controlSectionRef.value) {
    controlSectionRef.value.inData = text;
    controlSectionRef.value.applyInData();
    controlSectionRef.value.inData = '';
  }
};

import { isDesktop } from '@/utils/platform';
const isFull = computed(() => isDesktop());

async function actReadClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    processText(text);
  } catch (err) {
    ElMessage.error('无法读取剪贴板');
  }
}
</script>

<template>

  <main class="page theme-dark">
    <div
      class="paper-container theme-light"
      :class="{ 'is-mobile': !pageData.printing }"
      @drop="handleDrop"
      @dragover.prevent="handleDragOver"
    >
      <div class="papers-animation-container papers-editing web-only">
        <Transition name="swipe-paper">
          <KeepAlive>
            <PaperFront v-if="pageData.paperInFront" />
            <PaperBack v-else />
          </KeepAlive>
        </Transition>
      </div>
      <div
        class="papers-animation-container papers-printing"
        :class="{
          'papers-printing-active': pageData.printing,
        }"
      >
        <PaperFront
          :setRef="
            (el) => {
              paperEls.front = el as HTMLElement;
            }
          "
        />
        <PaperBack
          :setRef="
            (el) => {
              paperEls.back = el as HTMLElement;
            }
          "
        />
      </div>
    </div>
    <div class="sticky-footer web-only">
      <ControlSection
        ref="controlSectionRef"
        :paperEls="paperEls"
        :isFull="isFull"
        @switch-paper="() => (pageData.paperInFront = !pageData.paperInFront)"
      />
    </div>
    <button
      v-if="isFull"
      class="fab-clipboard web-only"
      title="读取剪贴板"
      @click="actReadClipboard"
    >
      <el-icon :size="20">
        <DocumentCopy />
      </el-icon>
    </button>
  </main>
</template>

<style scoped lang="scss">
.page {
  min-height: 100vh;
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  margin-top: constant(safe-area-inset-top);
  margin-top: env(safe-area-inset-top);
}
.title {
  font-size: 28px;
  line-height: 1.2;
  text-align: center;
  margin: 18px;
}

.paper-container {
  /* 一个奇怪的 ios bug，必须同时存在这两条才不会出现横向滚动条 */
  perspective: 900em;
  overflow: hidden;
}
.papers-animation-container.papers-editing {
  width: 65.625em;
  min-height: 92.8125em;
  margin: auto;
}
.papers-editing {
  --base-size: 15px;
}
.papers-printing {
  --base-size: 3.2mm;
  display: none;
}
.papers-printing-active {
  display: block;
}

.sticky-footer {
  position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
  margin-top: 24px;
  background-color: rgba(22, 22, 22, 0.92);
}

.fab-clipboard {
  position: fixed;
  right: 24px;
  bottom: 88px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background-color: var(--color-control-bg);
  color: var(--color-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, background-color 0.15s;
  z-index: 10;

  &:hover {
    transform: scale(1.06);
    background-color: var(--color-control-bg-hover);
  }
  &:active {
    transform: scale(0.94);
    background-color: var(--color-control-bg-active);
  }
}

@media screen and (max-width: 1024px) {
  .papers-animation-container.papers-editing {
    width: auto;
    height: auto;
  }
  .paper-container.is-mobile {
    overflow: visible;
    perspective: none;
  }
}

@media print {
  .page {
    width: auto;
    min-width: auto;
    display: block;
    padding: 0;
  }
  .paper-container {
    margin: auto;
  }
  .web-only {
    display: none;
  }
  .papers-printing {
    display: block;
  }
}
</style>
