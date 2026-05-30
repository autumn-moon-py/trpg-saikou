<script setup lang="ts">
import PaperSection from '../components/PaperSection.vue';
import WritableArea from '../components/WritableArea.vue';

import { usePC } from '../hooks/useProviders';

const pc = usePC();
</script>

<template>
  <PaperSection
    v-if="pc"
    title="经历过的模组"
  >
    <div class="section-body">
      <WritableArea
        label=""
        :rows="11"
        v-model="pc.experiencedModules"
      />
      <WritableArea
        label=""
        :rows="11"
        v-model="pc.experiencedModules2"
      />
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.section-body {
  padding: 0.4em 0.6em 0.6em;
  display: flex;
  gap: 0.4em;
}

.section-body > * {
  flex: 1;
  min-width: 0;
}
</style>
