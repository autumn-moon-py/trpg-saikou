<template>
  <div class="file-selector-container">
    <input
      type="file"
      webkitdirectory
      directory
      multiple
      @change="handleFileSelect"
    />

    <ul>
      <li
        v-for="file in txtFiles"
        :key="file.name"
        @click="readFile(file)"
      >
        <div>{{ file.name.split('.')[0] }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'FileList',
  props: {
    processText: {
      type: Function as PropType<(text: string) => void>,
      required: true,
    },
  },
  setup(props) {
    const txtFiles = ref<File[]>([]);

    const fileInput = ref<HTMLInputElement | null>(null);

    const triggerFileSelect = () => {
      fileInput.value?.click();
      console.log('fileInput.value', fileInput.value);
    };

    const handleFileSelect = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target && target.files) {
        const files = Array.from(target.files);
        txtFiles.value = files.filter((file) => file.name.endsWith('.txt'));
      }
    };

    const readFile = (file: File) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        console.log('文件内容读取完成，正在处理...');
        props.processText(content);
      };
      reader.readAsText(file);
    };

    onMounted(() => {
      triggerFileSelect();
    });

    return {
      txtFiles,
      handleFileSelect,
      readFile,
      triggerFileSelect,
    };
  },
});
</script>

<style scoped>
.file-selector-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 1000;
  overflow-x: hidden;
  overflow-y: scroll;
}

.file-selector-container input[type='file'] {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

ul {
  width: 100%;
  padding: 0;
  list-style: none;
}

li {
  width: 100%;
  text-align: left;
  padding: 10px;
  word-wrap: break-word;
  border-bottom: 1px solid #444;
}
</style>
