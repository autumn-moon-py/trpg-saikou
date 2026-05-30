import type { COCPlayerCharacter } from '../types/character';
import type { COCCardViewData } from '../types/viewData';

const CARD_KEY_PREFIX = '$sox-trpg#$coc-card:card:';

export interface CardEntry {
  pc: COCPlayerCharacter;
  viewData: COCCardViewData;
  lastModified: number;
}

/** 保存单张角色卡到独立 localStorage key */
export function saveCard(id: string, pc: COCPlayerCharacter, viewData: COCCardViewData): void {
  try {
    const entry: CardEntry = {
      pc: JSON.parse(JSON.stringify(pc)),
      viewData: JSON.parse(JSON.stringify(viewData)),
      lastModified: Date.now(),
    };
    localStorage.setItem(CARD_KEY_PREFIX + id, JSON.stringify(entry));
  } catch (e) {
    console.error(`[CardStorage] Save failed for ${id}:`, e);
  }
}

/** 加载单张角色卡 */
export function loadCard(id: string): CardEntry | null {
  try {
    const raw = localStorage.getItem(CARD_KEY_PREFIX + id);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error(`[CardStorage] Load failed for ${id}:`, e);
    return null;
  }
}

/** 删除单张角色卡 */
export function deleteCard(id: string): void {
  try {
    localStorage.removeItem(CARD_KEY_PREFIX + id);
  } catch (e) {
    console.error(`[CardStorage] Delete failed for ${id}:`, e);
  }
}

/** 清理所有在 meta 列表中不存在的僵尸卡片数据 */
export function cleanupOrphanedCards(validIds: Set<string>): number {
  let count = 0;
  const keysToRemove: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(CARD_KEY_PREFIX)) {
      const id = key.substring(CARD_KEY_PREFIX.length);
      if (!validIds.has(id)) {
        keysToRemove.push(key);
      }
    }
  }
  keysToRemove.forEach(k => { localStorage.removeItem(k); count++; });
  if (count > 0) console.log(`[CardStorage] Cleaned ${count} orphaned cards`);
  return count;
}

export { CARD_KEY_PREFIX };
