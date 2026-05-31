<script setup lang="ts">
import { ref, computed, watch } from 'vue';

// components
import PaperSection from '../components/PaperSection.vue';
import WritableRow from '../components/WritableRow.vue';
import FlattenTree from '../components/FlattenTree.vue';

// models
import formattedJobs from '../models/job';

// @ts-ignore
import vClickOutside from '@/directives/clickOutside';
import { usePC, usePageData } from '../hooks/useProviders';

import type { FlattenTreeData } from '../types/flattenTree';

const pc = usePC();
const pageData = usePageData();

const { jobGroups } = formattedJobs;

const isJobSeletorShowing = ref(false);
const jobSearchInput = ref('');

function openJobSelector() {
  isJobSeletorShowing.value = true;
}
function closeJobSelector() {
  isJobSeletorShowing.value = false;
}
watch(
  () => isJobSeletorShowing.value,
  () => {
    jobSearchInput.value = '';
  },
);

import { useIsMobileLayout } from '../hooks/usePlatform';

const isMobile = useIsMobileLayout();

const jobTree = computed(() => {
  const filterText = jobSearchInput.value;
  const filteredData = jobGroups.reduce((result, jobGroup) => {
    const { name: groupName, pinyin: groupPinyin, jobs } = jobGroup;
    const label = isMobile.value ? groupName.replace(/\//g, ' ') : groupName;
    const filteredChildren = jobs.reduce(
      (result, job) => {
        if (
          !filterText ||
          groupName.includes(filterText) ||
          groupPinyin.includes(filterText) ||
          job.name.includes(filterText) ||
          job.pinyin.includes(filterText)
        ) {
          result.push({ label: job.name, key: job.name });
        }
        return result;
      },
      [] as { label: string; key: string }[],
    );
    if (filteredChildren.length) {
      result.push({
        label,
        key: groupName,
        children: filteredChildren,
      });
    }
    return result;
  }, [] as FlattenTreeData);
  return filteredData;
});

function onSelectJob(jobName: string) {
  if (!pc) return;
  pc.value.job = jobName;
  closeJobSelector();
}
</script>

<template>
  <PaperSection
    title="调查员"
    v-if="pc"
  >
    <div
      class="info-section"
      :class="{
        'printing-image': pageData?.printing,
      }"
    >
      <div class="info-row">
        <WritableRow
          label="姓名"
          :char="5.5"
          v-model="pc.name"
        />
        <WritableRow
          label="玩家"
          :char="5.5"
          v-model="pc.playerName"
        />
      </div>
      <WritableRow
        class="full-width"
        label="时代"
        v-model="pc.time"
      />
      <!-- pc job selector -->
      <div
        class="rel full-width"
        v-click-outside="closeJobSelector"
      >
        <WritableRow
          label="职业"
          v-model="pc.job"
          @focus="openJobSelector"
        />
        <Transition name="slide-up">
          <div
            v-if="isJobSeletorShowing"
            class="job-selector"
          >
            <div class="job-selector-header">
              <input
                class="job-search-input"
                type="text"
                placeholder="输入职业名称或拼音可以进行搜索"
                v-model="jobSearchInput"
              />
            </div>
            <FlattenTree
              :tree="jobTree"
              @select="(item) => onSelectJob(item.label)"
            />
          </div>
        </Transition>
      </div>
      <div class="info-row">
        <div class="info-col">
          <WritableRow
            label="年龄"
            :char="4"
            v-model="pc.age"
          />
          <WritableRow
            label="性别"
            :char="4"
            v-model="pc.gender"
          />
        </div>
        <div class="info-col">
          <WritableRow
            label="住地"
            :char="5"
            v-model="pc.location"
          />
          <WritableRow
            label="故乡"
            :char="5"
            v-model="pc.hometown"
          />
        </div>
      </div>
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.info-row {
  display: flex;
  gap: 1em;
  min-width: 0;

  & :deep(.writable-row) {
    flex: 1 1 auto;
    min-width: 0;
  }
  & :deep(.input) {
    width: 100% !important;
    flex: 1 0 0;
    min-width: 0;
  }
  & :deep(.label-title) {
    white-space: nowrap;
  }
}

.info-col {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  align-items: flex-start;
  min-width: 0;

  & :deep(.writable-row) {
    min-width: 0;
  }
}

.info-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.2em;
  padding: 0.4em 0.6em 0.6em;
  align-items: flex-start;
  min-width: 0;
}

.full-width {
  align-self: stretch;
  width: 100%;
}

.name-row {
  display: flex;
  gap: 0.6em;
  align-items: center;
}

.job-selector {
  position: absolute;
  width: calc(65.625em - 2em); // 210mm - 2em
  left: -1.6em;
  margin-top: 1em;
  border: 1px solid #777;
  padding: 1em;
  background-color: #fff;
  z-index: 1;
}

.job-selector-header {
  padding-bottom: 1em;
  margin-bottom: 1em;
  border-bottom: 1px solid var(--color-border);
}
.job-search-input {
  border: 1px solid var(--color-border);
  width: 100%;
  padding: 0.6em 0.8em;
}

.only-compact {
  display: none;
}

/* when print image & print */
@mixin printing-styles {
  .job-selector {
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
    .job-selector {
      position: absolute;
      left: 0;
      right: 0;
      width: auto;
      max-height: 50vh;
      overflow: auto;
      z-index: 100;
      padding: 0.5em;

      .group-label {
        flex-basis: auto;
        writing-mode: vertical-rl;
        text-align: left;
        letter-spacing: 1.5px;
        padding-top: 5px;
      }

      .group {
        padding-bottom: 0.3em;
        gap: 0.2em;
      }

      .flatten-tree {
        gap: 0.3em;
      }

      .job-selector-header {
        padding-bottom: 0.5em;
        margin-bottom: 0.5em;
      }

      .options {
        gap: 0.2em 0.25em;
      }
    }
    .rel .writable-row .input {
      width: auto !important;
    }
    .info-section .input {
      text-align: center;
    }
  }
}
</style>
