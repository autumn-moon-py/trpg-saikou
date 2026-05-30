<script setup lang="ts">
import PaperSection from '../components/PaperSection.vue';
import WritableArea from '../components/WritableArea.vue';

import { usePC } from '../hooks/useProviders';

const pc = usePC();
</script>

<template>
  <PaperSection
    v-if="pc"
    title="背包"
  >
    <div class="section-body">
      <WritableArea
        label=""
        :rows="7"
        :maxlength="18 * 7"
        v-model="pc.assets.items"
      />
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.section-body {
  padding: 0.4em 0.6em 0.6em;
}
</style>
