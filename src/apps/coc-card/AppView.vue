<script setup lang="ts">
import { reactive, provide, ref, watch } from 'vue';
import qs from 'qs';

import { createPC } from './models/character';
import { createViewData } from './models/viewData';

import type { COCPlayerCharacter } from './types/character';
import type { COCCardViewData } from './types/viewData';
import type { PageData } from './types/pageData';

import useDerives from './hooks/useDerives';
import useSuggestion from './hooks/useSuggestion';
import useAutoSave from './hooks/useAutoSave';
import useAppLs from './hooks/useAppLs';

import ControlSection from './sections/ControlSection.vue';
import PaperFront from './PaperFront.vue';
import PaperBack from './PaperBack.vue';
import { ElMessage } from 'element-plus';

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
const controlSectionRef = ref(null);

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

useAutoSave(pcRef, {
  viewData,
  pageData,
});

provide('pc', pcRef);
provide('viewData', viewData);
provide('pageData', pageData);
provide('suggestion', suggestion);

const paperEls = reactive<{ front?: HTMLElement; back?: HTMLElement }>({});

const handleDragOver = (event) => {
  // 防止默认处理（默认不允许放置）
  event.preventDefault();
};

const handleDrop = (event) => {
  event.preventDefault();
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0];
    if (file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        processText(text);
      };
      reader.readAsText(file);
    } else {
      console.error('不支持的文件类型');
    }
  }
};

const processText = (text) => {
  ElMessage.success('导入卡数据中');
  if (controlSectionRef.value) {
    controlSectionRef.value.inData = text;
    controlSectionRef.value.applyInData();
  }
};
</script>

<template>
  <main class="page theme-dark">
    <div
      class="paper-container theme-light"
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
        @switch-paper="() => (pageData.paperInFront = !pageData.paperInFront)"
      />
    </div>
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
  width: 65.625em; // 210mm / 3.2mm
  min-height: 92.8125em; // 297mm / 3.2mm
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

@media screen and (max-width: 1024px) {
  .papers-animation-container.papers-editing {
    width: auto;
    height: auto;
  }
}

/* when print */
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
