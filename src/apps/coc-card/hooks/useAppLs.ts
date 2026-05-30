import useLocalStorage from '@/hooks/useLocalStorage';

import { LSApp } from '@/types/ls';
import type { COCPlayerCharacter } from '../types/character';
import type { COCCardViewData } from '../types/viewData';

export interface CardMeta {
  id: string;
  name: string;
  saveName: string;
  lastModified: number;
  createdAt: number;
}

interface Store {
  showTotalSeparation?: boolean;
  activeCardId?: string;
  cardMetaList?: CardMeta[];
  // 旧格式——仅用于迁移
  autoSaved?: {
    pc: COCPlayerCharacter;
    viewData: COCCardViewData;
    lastModified: number;
  };
}

const ls = useLocalStorage<Store>({
  app: LSApp.COCCard,
  versionChecker() {
    return 1.1;
  },
});

if (import.meta.env.DEV) {
  console.log(`ls:${ls.appName}:${ls.version}`, ls);
  // @ts-ignore
  window.ls = ls;
}

export default function () {
  return ls;
}
