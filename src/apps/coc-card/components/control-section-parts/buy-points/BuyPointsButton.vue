<script setup lang="ts">
import { ref } from 'vue';

import { Bicycle } from '@element-plus/icons-vue';

// components
import ControlButton from '../../ControlButton.vue';
import BuyPointsModal from './BuyPointsModal.vue';

// models

const modalVisible = ref(false);

function onButtonClick() {
  modalVisible.value = true;
}
</script>

<template>
  <ControlButton
    label="属性点"
    :icon="Bicycle"
    @click="onButtonClick"
  />

  <BuyPointsModal
    :isOpen="modalVisible"
    @close="modalVisible = false"
  />
</template>

<style scoped lang="scss"></style>
