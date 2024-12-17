<script setup lang="ts">
import { ref } from 'vue';

import { IceCream } from '@element-plus/icons-vue';

// components
import ControlButton from '../../ControlButton.vue';
import NoticeBoardModal from './NoticeBoardModal.vue';

// models

// const modalVisible = ref(false);
const modalVisible = ref(true);

function onButtonClick() {
  modalVisible.value = true;
}
</script>

<template>
  <ControlButton
    label="公告栏"
    :icon="IceCream"
    @click="onButtonClick"
  />

  <NoticeBoardModal
    :isOpen="modalVisible"
    @close="modalVisible = false"
  />
</template>

<style scoped lang="scss"></style>
