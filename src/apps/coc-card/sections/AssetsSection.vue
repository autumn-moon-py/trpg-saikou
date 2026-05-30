<script setup lang="ts">
import PaperSection from '../components/PaperSection.vue';
import WritableArea from '../components/WritableArea.vue';

import { usePC } from '../hooks/useProviders';

const pc = usePC();
</script>

<template>
  <PaperSection
    v-if="pc"
    title="资产"
  >
    <div class="section-body">
      <WritableArea
        label="货币"
        :rows="1"
        :maxlength="15"
        v-model="pc.assets.currency"
      />
      <WritableArea
        label="资产"
        :rows="6"
        :maxlength="17 * 6 - 2"
        v-model="pc.assets.assets"
      />
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.section-body {
  padding: 0.4em 0.6em 0.6em;
}
</style>
