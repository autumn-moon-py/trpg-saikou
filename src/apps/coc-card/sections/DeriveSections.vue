<script setup lang="ts">
import PaperSection from '../components/PaperSection.vue';
import StatusCheckbox from '../components/StatusCheckbox.vue';
import type { COCMentalStatus } from '../types/character';

import { usePC } from '../hooks/useProviders';

const pc = usePC();

function getMentalStatus(key: keyof COCMentalStatus): boolean {
  if (!pc) return false;
  return !!pc.value.status?.mental?.[key];
}

function updateMentalStatus(key: keyof COCMentalStatus, value: boolean): void {
  if (!pc) return;
  pc.value.status.mental[key] = value;
}
</script>

<template>
  <div
    v-if="pc"
    class="computed-sections"
  >
    <PaperSection
      title="精神状态"
      class="col-0"
    >
      <div class="san-status-section">
        <StatusCheckbox
          label="精神固化"
          :checked="getMentalStatus('hardened')"
          @check="(val) => updateMentalStatus('hardened', val)"
        />
        <StatusCheckbox
          label="永久疯狂"
          :checked="getMentalStatus('permanentMadness')"
          @check="(val) => updateMentalStatus('permanentMadness', val)"
        />
        <StatusCheckbox
          label="不定期疯狂"
          :checked="getMentalStatus('indefiniteMadness')"
          @check="(val) => updateMentalStatus('indefiniteMadness', val)"
        />
      </div>
    </PaperSection>
  </div>
</template>

<style scoped lang="scss">
.computed-sections {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8em;
  align-items: stretch;
}

.san-status-section {
  display: grid;
  grid-template:
    '1 2'
    '3 .' / 6fr 5fr;
  color: var(--color-black);

  & > .status-checkbox {
    background-color: #f5f5f5;
    &:nth-child(2),
    &:nth-child(3) {
      background-color: #ddd;
    }
  }
}
</style>
