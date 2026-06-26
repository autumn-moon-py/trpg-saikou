<script setup lang="ts">
import PaperSection from '../components/PaperSection.vue';
import StatusCheckbox from '../components/StatusCheckbox.vue';

import { usePC } from '../hooks/useProviders';

const pc = usePC();
</script>

<template>
  <PaperSection
    v-if="pc"
    title="精神状态"
  >
    <div class="san-status-section">
      <StatusCheckbox
        label="精神固化"
        :checked="!!pc.status?.mental?.hardened"
        @check="(val) => { if (pc) pc.status.mental.hardened = val; }"
      />
      <StatusCheckbox label="临时疯狂" />
      <StatusCheckbox label="永久疯狂" />
      <StatusCheckbox label="不定性疯狂" />
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.san-status-section {
  display: grid;
  grid-template:
    '1 2'
    '3 4' / 5fr 5fr;
  color: var(--color-black);
  padding: 0.35em;

  & > .status-checkbox {
    background-color: #f5f5f5;
    &:nth-child(2),
    &:nth-child(3) {
      background-color: #ddd;
    }
  }
  & :deep(.label) {
    text-align: center;
    flex: 1;
  }
}

@media screen and (orientation: portrait) {
  .papers-editing .san-status-section :deep(.label) {
    font-size: 0.78em;
  }
}
</style>
