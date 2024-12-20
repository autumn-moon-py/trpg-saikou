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
      <FriendSection class="col-2" />
      <ExperienceSection class="col-1" />
    </div>
  </PaperLayout>
</template>

<style scoped lang="scss">
.section-row {
  display: flex;
  gap: 1em;
  align-items: stretch;
}
.inspiration-row {
  flex: 1 0 0;
  display: flex;
  align-items: flex-end;
  color: #888;
  line-height: 1;
}
.inspiration-item {
  white-space: nowrap;
  overflow: visible;
  width: 0px;
  transform: scale(0.8);
  transform-origin: left bottom;
}
.special-thanks {
  flex: 3 0 0;
}
.inspiration {
  flex: 3 0 0;
  text-align: right;
  transform-origin: center bottom;
}
.copyright {
  flex: 4 0 0;
  text-align: right;
  transform-origin: right bottom;
}
</style>

<style lang="scss">
@media screen and (max-width: 1024px) {
  .papers-editing {
    .inspiration-row {
      display: flex;
      flex-direction: column;
      gap: 0;
      align-items: center;
      /* align-items: flex-start; */

      .inspiration-item {
        flex: 1 1 0;
        width: 125%;
        transform-origin: center bottom;
        text-align: center;
      }
    }
  }
  .papers-editing {
    .section-row {
      flex-wrap: wrap;
    }
  }
}
</style>
