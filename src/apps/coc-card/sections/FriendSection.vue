<script setup lang="ts">
import { computed } from 'vue';
import PaperSection from '../components/PaperSection.vue';
import WritableArea from '../components/WritableArea.vue';

import { usePC } from '../hooks/useProviders';
import { useIsMobileLayout } from '../hooks/usePlatform';

const pc = usePC();

const isMobile = useIsMobileLayout();
const rows = computed(() => isMobile.value ? 6 : 11);
</script>

<template>
  <PaperSection
    v-if="pc"
    title="人物关系"
  >
    <div class="section-body">
      <WritableArea
        label=""
        :rows="rows"
        v-model="pc.friends"
      />
    </div>
  </PaperSection>
</template>

<style scoped lang="scss">
.section-body {
  padding: 0.4em 0.6em 0.6em;
}
</style>
