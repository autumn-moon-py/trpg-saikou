<script setup lang="ts">
import { ref } from 'vue';

import ControlDialog from '../components/ControlDialog.vue';

const isModalShown = ref(false);
</script>

<template>
  <ControlDialog
    class="coc-card-avatar-modal"
    title="设置形象"
    v-model="isModalShown"
  >
    <AvatarModalContent @finished="isModalShown = false" />
  </ControlDialog>
</template>

<style scoped lang="scss">
.avatar-section {
  flex: 1 1 auto;
  position: relative;
  width: 10.94em;
  min-height: 12em;
  border: 1px solid var(--color-black);
  padding: 1em;
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--color-white);
  &:hover {
    background-color: var(--color-background-soft);
  }
  &:active {
    background-color: var(--color-background-mute);
  }
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8em;
  color: #777;
}

/* when print image & print */
@mixin printing-styles {
  .avatar-placeholder {
    display: none;
  }
}
.printing-image {
  @include printing-styles;
}
@media print {
  @include printing-styles;
}
</style>

<style lang="scss">
.coc-card-avatar-modal {
  /* half of footer control height */
  transform: translateY(-32px);
  max-width: 420px;

  & .el-dialog__body {
    padding-top: 10px;
  }
}
</style>
