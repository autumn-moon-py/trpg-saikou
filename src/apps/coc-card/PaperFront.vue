<script setup lang="ts">
import type { VNodeRef } from 'vue';
import { computed } from 'vue';

import PaperLayout from './layouts/PaperLayout.vue';
import InvestigatorSection from './sections/InvestigatorSection.vue';
import AttributesSection from './sections/AttributesSection.vue';
import AvatarSection from './sections/AvatarSection.vue';
import DeriveSections from './sections/DeriveSections.vue';
import HintSection from './sections/HintSection.vue';
import SkillSection from './sections/SkillSection.vue';
import WeaponSection from './sections/WeaponSection.vue';
import BattleSection from './sections/BattleSection.vue';

import PaperSection from './components/PaperSection.vue';
import WritableUnit from './components/WritableUnit.vue';
import WritableDivider from './components/WritableDivider.vue';
import { usePC } from './hooks/useProviders';
import type { COCDeriveAttributes } from './types/character';

const pc = usePC();

import { useIsMobileLayout } from './hooks/usePlatform';
const isMobile = useIsMobileLayout();

function updateAttr(
  key: keyof COCDeriveAttributes,
  cKey: 'now' | 'start',
  value: string,
): void {
  if (!pc || !pc.value.deriveAttributes) return;
  pc.value.deriveAttributes[key][cKey] = value ? value : undefined;
}

const sanMax = computed(() => {
  if (!pc) return '';
  if (!pc.value.attributes.pow) return '';
  const cthulu = pc.value.skillPoints.find(([name]) => {
    return name === '克苏鲁神话';
  })?.[1];
  const { p = 0, i = 0, g = 0 } = cthulu || {};
  const cthuluPoint = cthulu ? p + i + g : 0;
  return `${99 - cthuluPoint}`;
});

interface Props {
  setRef?: VNodeRef;
}
defineProps<Props>();
</script>

<template>
  <PaperLayout :setRef="setRef">
    <div class="section-row">
      <InvestigatorSection class="investigator-section" />
      <AttributesSection class="attributes-section" />
      <div class="derive-column sanity-column">
        <PaperSection title="理智值">
          <div class="units-section">
            <WritableUnit
              :label="isMobile ? '当前' : '当前理智'"
              :modelValue="`${pc?.deriveAttributes?.sanity?.now ?? ''}`"
              @update:modelValue="(val) => updateAttr('sanity', 'now', val)"
            />
            <WritableDivider />
            <WritableUnit
              :label="isMobile ? '最大' : '最大理智'"
              :modelValue="sanMax"
              readonly
            />
          </div>
        </PaperSection>
        <DeriveSections />
      </div>
      <div class="derive-column hp-mp-column">
        <PaperSection title="生命值">
          <div class="units-section">
            <WritableUnit
              label="当前生命"
              :modelValue="`${pc?.deriveAttributes?.hp?.now ?? ''}`"
              @update:modelValue="(val) => updateAttr('hp', 'now', val)"
            />
            <WritableDivider />
            <WritableUnit
              label="最大生命"
              :modelValue="`${pc?.deriveAttributes?.hp?.start ?? ''}`"
              @update:modelValue="(val) => updateAttr('hp', 'start', val)"
            />
          </div>
        </PaperSection>
        <PaperSection title="魔法值">
          <div class="units-section">
            <WritableUnit
              label="当前魔法"
              :modelValue="`${pc?.deriveAttributes?.mp?.now ?? ''}`"
              @update:modelValue="(val) => updateAttr('mp', 'now', val)"
            />
            <WritableDivider />
            <WritableUnit
              label="最大魔法"
              :modelValue="`${pc?.deriveAttributes?.mp?.start ?? ''}`"
              @update:modelValue="(val) => updateAttr('mp', 'start', val)"
            />
          </div>
        </PaperSection>
      </div>
      <AvatarSection />
    </div>
    <HintSection />
    <SkillSection />
    <div class="section-row">
      <WeaponSection class="col-0" />
      <BattleSection />
    </div>
  </PaperLayout>
</template>

<style scoped lang="scss">
.section-row {
  display: flex;
  gap: 0.8em;
  align-items: stretch;
  flex-wrap: nowrap;
  justify-content: space-between;

  & > * {
    min-width: 0;
  }
}

.units-section {
  padding: 0.4em 0.6em;
  display: flex;
  gap: 0.4em;
  justify-content: space-around;
}

.derive-column {
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  flex: 0 0 auto;
  justify-content: space-between;
}

.sanity-column {
  width: 16em;
}

@media screen and (orientation: portrait) {
  .papers-editing .sanity-column .units-section {
    gap: 6px;
    padding: 0.4em 6px;
  }
  .papers-editing .sanity-column :deep(.writable-unit .input) {
    width: 100%;
    min-width: 0;
    margin: 0;
  }
}

.investigator-section {
  min-width: 19.5em;
  max-width: 19em;
}

.attributes-section {
  max-width: 14em;
}
</style>

<style lang="scss">
@media screen and (orientation: portrait) {
  .papers-editing {
    .investigator-section {
      min-width: 0;
      max-width: 100%;
    }
    .attributes-section {
      max-width: 100%;
    }
    .hp-mp-column {
      flex-direction: row;
      gap: 0.4em;

      > * {
        flex: 1;
      }
    }
    .sanity-column {
      width: auto;
      flex-direction: row;
      gap: 0.4em;

      > :first-child {
        flex: 3.5;
      }
      > :last-child {
        flex: 5.5;
      }
      > * {
        min-width: 0;
      }

      > :first-child .heading {
        position: relative;
        left: 2px;
      }

      > :first-child .body {
        justify-content: center;
      }

      .units-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0;
        padding: 0.4em 0;
      }

      .writable-divider {
        display: none;
      }
    }
  }
}
</style>
