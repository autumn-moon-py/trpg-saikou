<script setup lang="ts">
import { computed, nextTick, ref, reactive, defineExpose, inject, onMounted, onUnmounted } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import LZString from 'lz-string';
import copy from 'copy-to-clipboard';

import {
  Reading,
  Download,
  More,
  Refresh,
  DocumentCopy,
  FolderOpened,
} from '@element-plus/icons-vue';

// components
import ControlButton from '../components/ControlButton.vue';
import ControlDialog from '../components/ControlDialog.vue';
import DownloaderItem from '../components/DownloaderItem.vue';
import JobList from '../components/JobList.vue';
import WeaponList from '../components/WeaponList.vue';
import DiceMaid from '../components/control-section-parts/dice-maid/DiceMaid.vue';

// models
import { createPC } from '../models/character';
import { resetViewData } from '../models/viewData';

import { usePC, useViewData, usePageData } from '../hooks/useProviders';
import usePrintPaper from '../hooks/usePrintPaper';
import useAppLs from '../hooks/useAppLs';
import CardManager from '../components/CardManager.vue';
import { shareText } from '@/utils/share';
import { useIsMobileLayout } from '../hooks/usePlatform';

import type { COCCardViewData } from '../types/viewData';

interface Props {
  paperEls: {
    front?: HTMLElement;
    back?: HTMLElement;
  };
}
const props = defineProps<Props>();

interface Emits {
  (event: 'switch-paper'): void;
}
const emit = defineEmits<Emits>();

const ls = useAppLs();

// 覆写模式：默认 true（覆盖当前存档），保持与旧版行为一致
const importOverwriteMode = computed({
  get: () => ls.getItem('importOverwriteMode') ?? true,
  set: (val: boolean) => ls.setItem('importOverwriteMode', val),
});

const pc = usePC();
const viewData = useViewData();
import type { ComputedRef } from 'vue';

const pageData = usePageData();
const isMobileLayout = useIsMobileLayout();

// DevTools 模拟竖屏：platform API 优先读取物理方向，不反映模拟视口，
// 补充视口比例检测使开发者工具中的竖屏模拟也能生效
const _isPortraitViewport = ref(window.innerHeight > window.innerWidth);
function _onViewportResize() {
  _isPortraitViewport.value = window.innerHeight > window.innerWidth;
}
onMounted(() => window.addEventListener('resize', _onViewportResize));
onUnmounted(() => window.removeEventListener('resize', _onViewportResize));

const showShareButton = computed(
  () => isMobileLayout.value || (!pageData?.printing && _isPortraitViewport.value),
);

interface CardManagerAPI {
  metaList: ComputedRef<{ id: string; name: string; saveName: string; lastModified: number; createdAt: number }[]>;
  activeCardId: ComputedRef<string>;
  createCard: () => void;
  switchCard: (id: string) => void;
  deleteCard: (id: string) => void;
  duplicateCard: (id: string) => void;
  renameCard: (id: string, name: string) => void;
  resetCurrentCard: () => void;
  clearAllCards: () => void;
}

const cardManager = inject<CardManagerAPI>('cardManager')!;

const inData = ref('');
const outData = computed(() => {
  // const showingChildSkills: Record<string, string[]> = {};
  // viewData?.showingChildSkills.forEach((value, key) => {
  //   showingChildSkills[key] = value;
  // });
  const json = JSON.stringify({
    pc: pc?.value,
    viewData: {
      ...viewData,
      // showingChildSkills,
    },
  });
  const str = LZString.compressToEncodedURIComponent(json);
  return str;
});
const outDataUrl = computed(() => {
  const file = new Blob([outData.value], { type: 'text/plain;charset=utf-8' });
  return URL.createObjectURL(file);
});

const inOutModalVisible = ref(false);
const downloadModalVisible = ref(false);
const morePanelVisible = ref(false);
const morePanelActiveTab = ref('features');
const cardManagerModalVisible = ref(false);

function actSwitchPaper() {
  emit('switch-paper');
}

const { paperImages, printPaper } = usePrintPaper(props.paperEls);
const downloadName = computed(() => {
  const { name, playerName } = pc?.value || {};
  const prefix = '';
  const suffix = [name, playerName].filter((v) => v).join('-');
  return `${prefix}${suffix}${suffix ? '-' : ''}`;
});
function actPrintPaper(paperKey?: 'front' | 'back') {
  if (!pageData) return;
  if (pageData.printing) {
    ElMessage.info('已经在运行啦，请不要同时多次生成图片');
    return;
  }
  pageData.printing = true;

  ElMessage.info({
    message: '图片生成中，页面会有轻微抖动，请稍候…',
    duration: 1000,
    onClose() {
      printPaper(paperKey).then(() => {
        downloadModalVisible.value = true;
        pageData.printing = false;
      });
    },
  });
}

function actToggleMorePanel() {
  morePanelVisible.value = !morePanelVisible.value;
}

function actResetCard() {
  if (!pc || !viewData) return;

  const cardManager = inject<{
    resetCurrentCard: () => void
  } | null>('cardManager', null);

  if (cardManager) {
    cardManager.resetCurrentCard();
  } else {
    // 回退：旧式重置
    pc.value = reactive(createPC());
    resetViewData(viewData);
    nextTick(() => {
      ls.removeItem('autoSaved');
    });
  }

  ElMessage.info('已重置人物卡');
  morePanelVisible.value = false;
}

function actOpenInOutModal() {
  inOutModalVisible.value = true;
}
function copyOutData() {
  copy(outData.value);
  ElMessage.success('已复制到剪贴板');
}
async function shareOutData() {
  copy(outData.value);
  await shareText(outData.value);
}
function applyInData() {
  const json = LZString.decompressFromEncodedURIComponent(inData.value);
  const data = JSON.parse(json);
  if (data && data.viewData && data.pc && viewData && pc) {
    try {
      // 覆写模式关闭时：先创建新存档再写入（此时不能设置 importing，否则 flushSave 被阻塞）
      if (!importOverwriteMode.value) {
        cardManager.createCard();
      }

      pageData && (pageData.importing = true);

      const { pc: newPC, showingChildSkillsPatch } = createPC(data.pc, true);
      pc.value = newPC;
      Object.keys(data.viewData).forEach((key) => {
        const k = key as keyof COCCardViewData;
        viewData[k] = data.viewData[k];
      });
      // 旧社交技能迁移后，将子技能名填入 showingChildSkills
      if (showingChildSkillsPatch) {
        for (const [key, value] of Object.entries(showingChildSkillsPatch)) {
          viewData.showingChildSkills[key] = value;
        }
      }
      ElMessage.success(
        importOverwriteMode.value ? '已覆盖当前角色卡' : '已导入到新存档',
      );
      inOutModalVisible.value = false;
      morePanelVisible.value = false;
    } catch (_) {
      ElMessage.error('数据有误，无法导入。页面可能因此受损，建议刷新');
    }
  } else {
    ElMessage.error('数据有误，无法导入');
  }
  pageData && (pageData.importing = false);
}

async function readFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    if (text) {
      inData.value = text;
      ElMessage.success('已读取剪贴板内容');
    } else {
      ElMessage.info('剪贴板为空');
    }
  } catch {
    ElMessage.error('无法读取剪贴板，请检查权限');
  }
}

async function actClearAllCards() {
  try {
    await ElMessageBox.confirm(
      '确定要清空所有存档吗？此操作不可撤销，所有角色卡数据将被删除。',
      '警告',
      {
        confirmButtonText: '清空',
        cancelButtonText: '取消',
        type: 'warning',
      },
    );
    cardManager.clearAllCards();
    ElMessage.success('已清空所有存档');
  } catch {
    // 用户取消
  }
}

defineExpose({ inData, applyInData });
</script>

<template>
  <div class="control-section">
    <div class="main-controls">
      <ControlButton
        label="数据"
        :icon="DocumentCopy"
        @click="actOpenInOutModal"
      />
      <DiceMaid />
      <ControlButton
        label="更多"
        :icon="More"
        @click="actToggleMorePanel"
      />
      <ControlButton
        label="翻面"
        :icon="Reading"
        @click="actSwitchPaper"
      />
    </div>

    <el-tabs
      v-if="morePanelVisible"
      class="more-container"
      v-model="morePanelActiveTab"
    >
      <el-tab-pane
        class="more-pane"
        label="更多功能"
        name="features"
      >
        <div class="more-controls">
          <ControlButton
            label="重置人物卡"
            :icon="Refresh"
            @click="actResetCard"
          />
          <ControlButton
            label="保存"
            :icon="Download"
            @click="() => actPrintPaper()"
          />
          <ControlButton
            label="存档管理"
            :icon="FolderOpened"
            @click="cardManagerModalVisible = true"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane
        class="more-pane more-pane-less"
        label="职业列表"
        name="jobs"
      >
        <JobList />
      </el-tab-pane>
      <el-tab-pane
        class="more-pane more-pane-less"
        label="武器列表"
        name="weapons"
      >
        <WeaponList />
      </el-tab-pane>
    </el-tabs>

    <ControlDialog
      v-model="downloadModalVisible"
      title="下载图片/数据"
    >
      <div class="downloader-body">
        <div class="downloader-items">
          <DownloaderItem
            title="正面"
            refreshable
            :previewImage="paperImages.front"
            :download="{
              url: paperImages.front,
              name: downloadName,
              type: 'jpg',
            }"
            @refresh="() => actPrintPaper('front')"
          />
          <DownloaderItem
            title="背面"
            refreshable
            :previewImage="paperImages.back"
            :download="{
              url: paperImages.back,
              name: downloadName,
              type: 'jpg',
            }"
            @refresh="() => actPrintPaper('back')"
          />
          <DownloaderItem
            title="车卡数据"
            :download="{
              url: outDataUrl,
              name: 'COC',
              type: 'txt',
            }"
          />
        </div>
      </div>
    </ControlDialog>

    <ControlDialog
      v-model="inOutModalVisible"
      title="数据"
      @closed="inData = ''"
    >
      <div class="in-out-modal-body">
        <div class="in-out-modal-panel">
          <el-input
            type="textarea"
            :value="outData"
            :rows="16"
            :readonly="true"
            resize="none"
          ></el-input>
          <div class="in-out-modal-actions">
            <el-button
              type="primary"
              @click="copyOutData"
            >
              复制以上内容
            </el-button>
            <el-button
              v-if="showShareButton"
              type="primary"
              @click="shareOutData"
            >
              分享
            </el-button>
          </div>
        </div>
        <div class="in-out-modal-panel">
          <el-input
            type="textarea"
            v-model="inData"
            :rows="16"
            placeholder="将文本粘贴到这里"
            resize="none"
          ></el-input>
          <div class="in-out-modal-actions">
            <el-button
              type="primary"
              @click="applyInData"
            >
              导入以上内容
            </el-button>
            <el-button
              type="primary"
              @click="readFromClipboard"
            >
              读取剪贴板
            </el-button>
          </div>
        </div>
      </div>
    </ControlDialog>

    <!-- 角色卡存档管理弹窗 -->
    <ControlDialog
      v-model="cardManagerModalVisible"
      title="存档管理"
    >
      <template #header-actions>
        <div class="archive-header-actions">
          <span class="archive-toggle-label">覆盖模式</span>
          <el-switch v-model="importOverwriteMode" size="small" />
          <el-button
            type="danger"
            size="small"
            plain
            @click="actClearAllCards"
          >
            清空存档
          </el-button>
        </div>
      </template>
      <CardManager
        :metaList="cardManager.metaList.value"
        :activeCardId="cardManager.activeCardId.value"
        @create-card="cardManager.createCard"
        @switch-card="cardManager.switchCard"
        @delete-card="cardManager.deleteCard"
        @duplicate-card="cardManager.duplicateCard"
        @rename-card="(id, name) => cardManager.renameCard(id, name)"
      />
    </ControlDialog>

    <!--  -->
  </div>
</template>

<style scoped lang="scss">
.control-section {
  --color-border: #8a8a8a;

  max-width: 65.625em;
  margin: auto;
  margin-bottom: constant(safe-area-inset-bottom);
  margin-bottom: env(safe-area-inset-bottom);

  display: flex;
  flex-direction: column-reverse;
}

.main-controls {
  height: 64px;
  padding: 8px 12px;
  max-width: 65.625em;
  display: flex;
  gap: 16px;
  justify-content: space-between;
}

.more-container {
  margin: 16px 12px 4px;
  padding: 4px 12px 12px;
  border: 1px solid var(--color-border);

  --el-color-primary: var(--color-white);
  --el-text-color-primary: var(--color-text);
  --el-border-color-light: var(--color-border);
}
.more-pane {
  max-height: 64vh;
  overflow: auto;
}
.more-pane-less {
  max-height: 32vh;
}
.more-controls {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
}

.downloader-body {
  margin: -10px 0;
}
.downloader-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px 8px;
}
.downloader-hints {
  margin: 16px 0 0;
  color: var(--color-text);
  opacity: 0.88;
}

.in-out-modal-body {
  display: flex;
  gap: 20px;
}
.in-out-modal-panel {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.in-out-modal-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.reward-modal-body {
  display: grid;
  grid-template-areas:
    'text text'
    'qr1 qr2';
  grid-template-columns: 1fr 1fr;
  gap: 8px 32px;
  color: var(--color-text);
}
.reward-texts {
  grid-area: text;
}
.reward-qr-container {
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 280px;
  justify-self: center;
}
.reward-qr {
  width: 100%;
  height: 100%;
  object-fit: contain;
}


.archive-header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.archive-toggle-label {
  font-size: 13px;
  color: var(--color-text);
  opacity: 0.72;
}

@media screen and (orientation: portrait) {
  .main-controls {
    padding-left: 6px;
    padding-right: 6px;
  }
  .reward-modal-body {
    grid-template-areas:
      'text'
      'qr1'
      'qr2';
    grid-template-columns: 1fr;
  }
  .in-out-modal-panel:first-child {
    flex: 0 0 25%;
  }
  .in-out-modal-panel {
    justify-content: center;
  }
  .in-out-modal-body .in-out-modal-actions {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .in-out-modal-body :deep(.el-textarea__inner) {
    height: 100px !important;
    min-height: unset !important;
  }
}
</style>
