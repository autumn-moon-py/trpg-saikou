<script setup lang="ts">
import type { VNodeRef } from 'vue';

import PaperLayout from './layouts/PaperLayout.vue';
import StorySection from './sections/StorySection.vue';
import AssetsSection from './sections/AssetsSection.vue';
import ItemSection from './sections/ItemSection.vue';
import MythosSection from './sections/MythosSection.vue';
import FriendSection from './sections/FriendSection.vue';
import ExperienceSection from './sections/ExperienceSection.vue';

interface Props {
  setRef?: VNodeRef;
}
defineProps<Props>();
</script>

<template>
  <PaperLayout :setRef="setRef">
    <StorySection />
    <div class="section-row">
      <div class="section-row col-2">
        <ItemSection class="col-0" />
        <AssetsSection class="col-0" />
      </div>
      <MythosSection class="col-1" />
    </div>
    <div class="section-row">
      <ExperienceSection class="col-2" />
      <FriendSection class="col-1" />
    </div>
  </PaperLayout>
</template>

<style scoped lang="scss">
.section-row {
  display: flex;
  gap: 1em;
  align-items: stretch;
}
</style>

<style lang="scss">
@media screen and (orientation: portrait) {
  .papers-editing {
    .section-row {
      flex-wrap: wrap;

      > * {
        flex-basis: 100%;
      }
    }
  }
}
</style>
