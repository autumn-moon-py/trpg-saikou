import type { COCPlayerCharacter, COCStatus } from '../types/character';

import { weapons, createWeapon } from './weapon';

function mergeStatus(status?: Partial<COCStatus>): COCStatus {
  return {
    mental: {
      hardened: status?.mental?.hardened ?? false,
      permanentMadness: status?.mental?.permanentMadness ?? false,
      indefiniteMadness: status?.mental?.indefiniteMadness ?? false,
    },
  };
}

type LegacyAssets = Partial<COCPlayerCharacter['assets']> & {
  cash?: string;
  consumption?: string;
};

function mergeAssets(assets?: LegacyAssets): COCPlayerCharacter['assets'] {
  const currency = assets?.currency ?? assets?.cash ?? '';
  return {
    currency,
    assets: assets?.assets ?? '',
    items: assets?.items ?? '',
    magicItems: assets?.magicItems ?? '',
    magics: assets?.magics ?? '',
    touches: assets?.touches ?? '',
  };
}

export function createPC(
  override?: Partial<COCPlayerCharacter>,
): COCPlayerCharacter {
  const status = mergeStatus(override?.status as Partial<COCStatus> | undefined);
  const assets = mergeAssets(override?.assets as LegacyAssets | undefined);

  return {
    name: '',
    playerName: '',
    time: '',
    job: '',
    age: '',
    gender: '',
    location: '',
    hometown: '',
    attributes: {},
    battleAttributes: {},
    pointValues: {},
    proSkills: [],
    skillPoints: [],
    weapons: [createWeapon(weapons[0])],
    stories: {
      app: '',
      belief: '',
      IPerson: '',
      IPlace: '',
      IItem: '',
      trait: '',
      scar: '',
      mad: '',
      desc: '',
    },
    experiencedModules: '',
    friends: '',
    ...override,
    assets,
    status,
  };
}
