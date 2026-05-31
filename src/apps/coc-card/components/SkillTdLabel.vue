<script setup lang="ts">
import { ref, inject, computed, watch, nextTick, onMounted } from 'vue';
// @ts-ignore
import vClickOutside from '@/directives/clickOutside';
import { usePC } from '../hooks/useProviders';
import type { ChildSkill } from '../types/skill';
import type { COCCardViewData } from '../types/viewData';
import type { COCPCSkill } from '../types/character';

import SoxCheckbox from '@/components/SoxCheckbox.vue';

interface Props {
  skillName: string;
  displaySkillName: string;
  comments?: string;
  childSkillData?: {
    name: string;
    place: number;
    list?: ChildSkill[];
  };
}
const props = defineProps<Props>();

const pc = usePC();
const viewData = inject<COCCardViewData>('viewData');

interface Emits {
  (event: 'selectChildSkill', childSkill: ChildSkill): void;
}
const emit = defineEmits<Emits>();

const isOptionsShowing = ref(false);
const childInputRef = ref<HTMLInputElement | null>(null);
const mirrorRef = ref<HTMLSpanElement | null>(null);
const currentData = computed(() => viewData?.showingChildSkills[props.skillName]);
// 仅当有可选子技能列表时才启用自适应宽度
const autoWidth = computed(() => !!props.childSkillData?.list?.length);
// 当前子技能的文本值
const childText = computed(() => currentData.value?.[props.childSkillData?.place ?? -1] ?? '');
const existedData = computed(() => {
  if (['母语', '外语'].includes(props.skillName)) {
    return [
      ...(viewData?.showingChildSkills['母语'] || []),
      ...(viewData?.showingChildSkills['外语'] || []),
    ];
  }
  return currentData.value;
});
// select skill as pro (checkbox)
const isProSkill = computed(() => {
  if (!pc || !viewData) return false;

  return pc.value.proSkills.some((skillInfo) => {
    // 基础技能
    if (typeof skillInfo === 'string') {
      return skillInfo === props.skillName;
    }
    // 二级技能
    const [skillName, _, childSkillPlace] = skillInfo;
    return skillName === props.skillName && childSkillPlace === props.childSkillData?.place;
  });
});

function updateCurrentData(value: string) {
  if (!props.childSkillData || !currentData.value) return;
  // update pro data
  if (isProSkill.value && pc) {
    const skillInfo = pc.value.proSkills.find(([skillName, _, childSkillPlace]) => {
      return skillName === props.skillName && childSkillPlace === props.childSkillData?.place;
    });
    if (skillInfo && typeof skillInfo !== 'string') {
      skillInfo[1] = value;
    }
  }
  // update view data
  currentData.value[props.childSkillData.place] = value;
}
function selectChildSkill(childSkill: ChildSkill) {
  updateCurrentData(childSkill.name);
  emit('selectChildSkill', childSkill);
  isOptionsShowing.value = false;
}

/** 读取镜像 span 宽度并应用到 input */
function syncInputWidth() {
  const input = childInputRef.value;
  const mirror = mirrorRef.value;
  if (!input || !mirror) return;
  input.style.width = `${Math.max(mirror.offsetWidth + 2, 24)}px`;
}

// 文本变化后等 DOM 更新再同步宽度
watch(childText, () => nextTick(syncInputWidth));
// 挂载后初始化
onMounted(() => nextTick(syncInputWidth));

function changeProSkill(value: boolean) {
  if (!pc) return;
  if (value) {
    let skillInfo: COCPCSkill = props.skillName;
    if (props.childSkillData)
      skillInfo = [props.skillName, props.childSkillData.name, props.childSkillData.place];
    pc.value.proSkills.push(skillInfo);
  } else {
    pc.value.proSkills = pc.value.proSkills.filter((skillInfo) => {
      if (!props.childSkillData) return skillInfo !== props.skillName;
      const [skillName, _, childSkillPlace] = skillInfo;
      return skillName !== props.skillName || childSkillPlace !== props.childSkillData.place;
    });
  }
}
</script>

<template>
  <div class="skill-td-label">
    <label class="skill-td-checkbox-label">
      <SoxCheckbox
        :checked="isProSkill"
        @check="changeProSkill"
      />
    </label>
    <div>{{ displaySkillName }}</div>
    <div
      v-if="!!childSkillData"
      class="child-skill-display"
    >
      <div v-if="skillName">:</div>
      <div
        class="child-skill-input-container"
        :class="{ 'child-skill-input-container--auto': autoWidth }"
        v-click-outside="() => (isOptionsShowing = false)"
      >
        <input
          ref="childInputRef"
          type="text"
          class="child-skill-input"
          :class="{ 'child-skill-input--auto': autoWidth }"
          :value="currentData?.[childSkillData.place]"
          @input="updateCurrentData(($event.target as HTMLInputElement).value)"
          @focus="isOptionsShowing = true"
        />
        <!-- 镜像 span：与 input 同字号同字体，用于测量文本宽度 -->
        <span
          v-if="autoWidth"
          ref="mirrorRef"
          class="child-skill-mirror"
        >{{ currentData?.[childSkillData.place] }}</span>
        <div
          class="child-skill-options"
          v-if="childSkillData.list?.length"
          v-show="isOptionsShowing"
        >
          <div
            v-for="childSkill in childSkillData.list"
            :key="childSkill.name"
            class="child-skill-option"
            :class="{
              'child-skill-option-existed': existedData?.includes(childSkill.name),
            }"
            @click="selectChildSkill(childSkill)"
          >
            {{ childSkill.name }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="comments"
      class="skill-td-label-comments"
    >
      {{ comments }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.skill-td-label {
  display: flex;
  align-items: center;
  white-space: nowrap;

  --color-line: #8a8a8a;
}
.skill-td-checkbox-label {
  width: var(--th-line-height);
  height: var(--td-line-height);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 0.12em;
}

.child-skill-display {
  flex: 1 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  position: relative;
}
.child-skill-input-container {
  position: relative;
  flex: 1 1 2em;
  width: 2em;
  display: flex;
}
.child-skill-input-container--auto {
  width: auto;
  min-width: 2em;
}
.child-skill-input {
  min-width: 2em;
  font-size: 0.96em;
  line-height: 1.2em;
  text-align: center;
  background-color: transparent;
  border-bottom: 1px solid var(--color-line);

  &:hover,
  &:focus {
    border-color: var(--color-black);
  }
}
.child-skill-input--auto {
  width: auto;
  font-family: inherit;
}
/* 镜像 span：与 input 同字号同字体，隐藏但保持尺寸 */
.child-skill-mirror {
  position: absolute;
  visibility: hidden;
  white-space: pre;
  font-size: 0.96em;
  font-family: inherit;
  letter-spacing: inherit;
  pointer-events: none;
}

.child-skill-options {
  position: absolute;
  right: 0;
  top: 100%;
  z-index: 1;
  box-sizing: content-box;
  width: 14.4em;
  margin: 0 -5em;
  text-align: center;
  background-color: var(--color-white);
  border: 1px solid var(--color-black);
  display: flex;
  flex-wrap: wrap;
}
.child-skill-option {
  box-sizing: content-box;
  width: 4em;
  padding: 0 0.4em;
  cursor: pointer;
  &:hover {
    opacity: 1;
    background-color: var(--color-background-mute);
  }
}
.child-skill-option-existed {
  opacity: 0.8;
  background-color: var(--color-background-mute);
  color: var(--color-line);
}

.skill-td-label-comments {
  display: inline-block;
  line-height: 1;
  margin-left: 0.4em;
  opacity: 0.72;
  width: 0;
  transform: scale(0.75);
}
</style>
