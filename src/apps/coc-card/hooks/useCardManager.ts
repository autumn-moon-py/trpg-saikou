import { watch, computed } from 'vue';
import type { Ref } from 'vue';
import { useDebounceFn } from '@vueuse/core';

import type { COCPlayerCharacter } from '../types/character';
import type { COCCardViewData } from '../types/viewData';
import type { PageData } from '../types/pageData';
import { createPC } from '../models/character';
import { createViewData } from '../models/viewData';

import useAppLs, { type CardMeta } from './useAppLs';
import { saveCard, loadCard, deleteCard as deleteCardStorage, cleanupOrphanedCards } from './useCardStorage';

const ls = useAppLs();

function generateCardId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
  }
}

/**
 * 多角色卡管理器 + 防抖自动保存 + 迁移 + 僵尸清理
 *
 * 用法（在 AppView.vue 中调用一次）：
 *   const cardManager = useCardManager(pcRef, viewData, pageData);
 *   cardManager.init();
 *   cardManager.startAutoSave();
 */
export default function useCardManager(
  pcRef: Ref<COCPlayerCharacter>,
  viewData: COCCardViewData,
  pageData: PageData,
) {
  // 按创建时间升序排列
  const cardMetaList = computed<CardMeta[]>(() => {
    const list = ls.getItem('cardMetaList') ?? [];
    return [...list].sort((a, b) => a.createdAt - b.createdAt);
  });

  const activeCardId = computed<string>(
    () => ls.getItem('activeCardId') ?? '',
  );

  // 当前卡片的元数据
  const currentMeta = computed<CardMeta | undefined>(() =>
    cardMetaList.value.find(m => m.id === activeCardId.value),
  );

  // ---------- 持久化 ----------

  /** 保存当前卡片到独立 key + 同步元数据 */
  function flushSave() {
    const id = activeCardId.value;
    if (!id || pageData.importing) return;

    // 1. 保存完整卡片数据到独立 key
    saveCard(id, pcRef.value, viewData);

    // 2. 同步更新元数据列表中的 name 和 lastModified
    const list = [...cardMetaList.value];
    const idx = list.findIndex(m => m.id === id);
    if (idx !== -1) {
      list[idx] = {
        ...list[idx],
        name: pcRef.value.name || '未命名角色卡',
        lastModified: Date.now(),
      };
      ls.setItem('cardMetaList', list);
    }
  }

  const debouncedSave = useDebounceFn(() => {
    if (!pageData.importing) flushSave();
  }, 300);

  // ---------- 卡片操作 ----------

  /** 创建新卡片并激活 */
  function createCard(saveName?: string): string {
    flushSave();

    const id = generateCardId();
    const meta: CardMeta = {
      id,
      name: '未命名角色卡',
      saveName: saveName || `存档 ${cardMetaList.value.length + 1}`,
      lastModified: Date.now(),
      createdAt: Date.now(),
    };

    // 写入元数据
    const list = [...cardMetaList.value, meta];
    ls.setItem('cardMetaList', list);
    ls.setItem('activeCardId', id);

    // 写入空卡片
    const newPC = createPC();
    const newVD = createViewData();
    saveCard(id, newPC, newVD);

    // 替换当前状态
    pcRef.value = newPC;
    Object.assign(viewData, newVD);

    return id;
  }

  /** 将卡片数据加载到当前 pcRef/viewData 中（不触发 flushSave） */
  function _loadCardIntoState(id: string) {
    const card = loadCard(id);
    if (!card) return false;

    pageData.importing = true;
    pcRef.value = createPC(card.pc);
    Object.keys(card.viewData).forEach(key => {
      const k = key as keyof COCCardViewData;
      (viewData as any)[k] = (card.viewData as any)[k];
    });
    setTimeout(() => { pageData.importing = false; }, 50);
    return true;
  }

  /** 切换到指定卡片 */
  function switchCard(id: string) {
    if (id === activeCardId.value) return;
    flushSave();

    if (!loadCard(id)) return;

    ls.setItem('activeCardId', id);
    _loadCardIntoState(id);
  }

  /** 删除卡片 */
  function deleteCardById(id: string) {
    const list = cardMetaList.value.filter(m => m.id !== id);
    ls.setItem('cardMetaList', list);
    deleteCardStorage(id);

    if (id === activeCardId.value) {
      if (list.length > 0) {
        switchCard(list[0].id);
      } else {
        createCard();
      }
    }
  }

  /** 复制卡片 */
  function duplicateCard(id: string): string | null {
    const source = loadCard(id);
    if (!source) return null;

    flushSave();

    const newId = generateCardId();
    const sourceMeta = cardMetaList.value.find(m => m.id === id);
    const meta: CardMeta = {
      id: newId,
      name: source.pc.name || '未命名角色卡',
      saveName: `${sourceMeta?.saveName || '存档'} (副本)`,
      lastModified: Date.now(),
      createdAt: Date.now(),
    };

    const list = [...cardMetaList.value, meta];
    ls.setItem('cardMetaList', list);
    saveCard(newId, source.pc, source.viewData);
    ls.setItem('activeCardId', newId);

    // 替换当前状态
    pageData.importing = true;
    pcRef.value = createPC(source.pc);
    Object.keys(source.viewData).forEach(key => {
      const k = key as keyof COCCardViewData;
      (viewData as any)[k] = (source.viewData as any)[k];
    });
    setTimeout(() => { pageData.importing = false; }, 50);

    return newId;
  }

  /** 重命名存档 */
  function renameCard(id: string, newSaveName: string) {
    const list = [...cardMetaList.value];
    const idx = list.findIndex(m => m.id === id);
    if (idx === -1) return;
    list[idx] = { ...list[idx], saveName: newSaveName };
    ls.setItem('cardMetaList', list);
  }

  /** 重置当前卡片为空白 */
  function resetCurrentCard() {
    pageData.importing = true;
    pcRef.value = createPC();
    Object.assign(viewData, createViewData());
    setTimeout(() => {
      pageData.importing = false;
      flushSave();
    }, 50);
  }

  // ---------- 初始化 & 迁移 ----------

  function init() {
    const existingList = ls.getItem('cardMetaList');

    // 情况 1：已有元数据列表
    if (existingList && existingList.length > 0) {
      // 按创建时间升序排列（修复旧数据可能的乱序）
      const sorted = [...existingList].sort((a, b) => a.createdAt - b.createdAt);
      ls.setItem('cardMetaList', sorted);

      // 僵尸清理
      const validIds = new Set(sorted.map(m => m.id));
      cleanupOrphanedCards(validIds);

      const activeId = activeCardId.value || sorted[0].id;
      ls.setItem('activeCardId', activeId);

      // 直接加载卡片数据（不走 switchCard，因为 activeCardId 已是对应值）
      if (!_loadCardIntoState(activeId)) {
        // 卡片数据丢失，加载第一个有效的
        const firstValid = sorted.find(m => loadCard(m.id) != null);
        if (firstValid) {
          ls.setItem('activeCardId', firstValid.id);
          _loadCardIntoState(firstValid.id);
        } else {
          createCard();
        }
      }
      return;
    }

    // 情况 2：无元数据但有旧 autoSaved → 迁移
    const legacy = ls.getItem('autoSaved');
    if (legacy?.pc) {
      const id = generateCardId();
      const meta: CardMeta = {
        id,
        name: legacy.pc.name || '未命名角色卡',
        saveName: '迁移的存档',
        lastModified: legacy.lastModified || Date.now(),
        createdAt: Date.now(),
      };
      ls.setItem('cardMetaList', [meta]);
      ls.setItem('activeCardId', id);
      saveCard(id, legacy.pc, legacy.viewData || createViewData());
      ls.removeItem('autoSaved');
      _loadCardIntoState(id);
      return;
    }

    // 情况 3：什么都没有 → 创建默认卡
    createCard();
  }

  // ---------- 自动保存 watch ----------

  let unwatch: (() => void) | null = null;

  function startAutoSave() {
    unwatch = watch(
      () => [pcRef.value, viewData],
      () => { if (!pageData.importing) debouncedSave(); },
      { deep: true },
    );
  }

  function stopAutoSave() { unwatch?.(); }

  // ---------- beforeunload ----------

  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', flushSave);
  }

  return {
    metaList: cardMetaList,
    activeCardId,
    currentMeta,
    createCard,
    switchCard,
    deleteCard: deleteCardById,
    duplicateCard,
    renameCard,
    resetCurrentCard,
    flushSave,
    init,
    startAutoSave,
    stopAutoSave,
  };
}
