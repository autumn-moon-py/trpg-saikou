import type { COCPlayerCharacter, COCStatus, COCPCSkill, SkillPoint } from '../types/character';

import { weapons, createWeapon } from './weapon';
import { getProPointByJobAndAttrs } from './job';

// 旧社交技能名到新格式的映射（社交分组子技能）
const LEGACY_SOCIAL_SKILLS: Record<string, number> = {
  '取悦': 0,
  '话术': 1,
  '恐吓': 2,
  '说服': 3,
};

/**
 * 迁移旧格式的 skillPoints 和 proSkills
 * 旧格式：独立技能 "取悦"、"话术"、"恐吓"、"说服"
 * 新格式：分组子技能 ["社交", "取悦", 0] 等
 *
 * 同时生成 showingChildSkills 更新数据，确保迁移后子技能名称和行数正确
 */
function migrateLegacySocialSkills(
  skillPoints?: [COCPCSkill, SkillPoint][],
  proSkills?: COCPCSkill[],
): {
  skillPoints: [COCPCSkill, SkillPoint][];
  proSkills: COCPCSkill[];
  /** 需要合并到 showingChildSkills 的更新（仅含需要更新的分组） */
  showingChildSkillsPatch?: Record<string, string[]>;
} {
  if (!skillPoints || skillPoints.length === 0) {
    return { skillPoints: skillPoints ?? [], proSkills: proSkills ?? [] };
  }

  const newSkillPoints: [COCPCSkill, SkillPoint][] = [];
  let hasLegacy = false;
  // 收集迁移后社交分组中实际存在的子技能：index → 子技能名
  const migratedSocialChildren = new Map<number, string>();

  for (const [skillKey, point] of skillPoints) {
    // 检查是否是旧的独立社交技能
    if (typeof skillKey === 'string' && skillKey in LEGACY_SOCIAL_SKILLS) {
      hasLegacy = true;
      const index = LEGACY_SOCIAL_SKILLS[skillKey];
      migratedSocialChildren.set(index, skillKey);
      newSkillPoints.push([['社交', skillKey, index], point]);
    } else {
      newSkillPoints.push([skillKey, point]);
    }
  }

  // 如果没有旧格式数据，直接返回原值
  if (!hasLegacy) {
    return { skillPoints: skillPoints, proSkills: proSkills ?? [] };
  }

  // 迁移 proSkills
  const newProSkills: COCPCSkill[] = [];
  if (proSkills) {
    for (const skill of proSkills) {
      if (typeof skill === 'string' && skill in LEGACY_SOCIAL_SKILLS) {
        const index = LEGACY_SOCIAL_SKILLS[skill];
        newProSkills.push(['社交', skill, index]);
      } else {
        newProSkills.push(skill);
      }
    }
  }

  // 构建 showingChildSkills 补丁：按 index 排序填入子技能名
  const sortedIndices = [...migratedSocialChildren.keys()].sort((a, b) => a - b);
  const socialChildSkills = sortedIndices.map(idx => migratedSocialChildren.get(idx)!);

  return {
    skillPoints: newSkillPoints,
    proSkills: newProSkills,
    showingChildSkillsPatch: { '社交': socialChildSkills },
  };
}

/**
 * 迁移旧的 pointValues：如果职业点数/兴趣点数为空但职业和属性存在，自动计算填入
 */
function migratePointValues(
  pointValues?: { pro?: string; interest?: string },
  job?: string,
  attributes?: Record<string, number>,
): { pro?: string; interest?: string } {
  const result = { ...pointValues };

  // 职业点数：为空且职业存在时，根据职业和属性重新计算
  if (!result.pro && job) {
    const { point } = getProPointByJobAndAttrs(job, attributes);
    if (point > 0) {
      result.pro = `${point}`;
    }
  }

  // 兴趣点数：为空且智力存在时，按 int×2 计算
  if (!result.interest && attributes?.int) {
    result.interest = `${attributes.int * 2}`;
  }

  return result;
}

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

export interface CreatePCResult {
  pc: COCPlayerCharacter;
  /** 迁移旧社交技能时生成的 showingChildSkills 补丁，需要合并到 viewData 中 */
  showingChildSkillsPatch?: Record<string, string[]>;
}

export function createPC(
  override?: Partial<COCPlayerCharacter>,
): COCPlayerCharacter;
export function createPC(
  override: Partial<COCPlayerCharacter> | undefined,
  returnPatch: true,
): CreatePCResult;
export function createPC(
  override?: Partial<COCPlayerCharacter>,
  returnPatch?: boolean,
): COCPlayerCharacter | CreatePCResult {
  const status = mergeStatus(override?.status as Partial<COCStatus> | undefined);
  const assets = mergeAssets(override?.assets as LegacyAssets | undefined);
  const { skillPoints, proSkills, showingChildSkillsPatch } = migrateLegacySocialSkills(
    override?.skillPoints as [COCPCSkill, SkillPoint][] | undefined,
    override?.proSkills,
  );
  const pointValues = migratePointValues(
    override?.pointValues,
    override?.job,
    override?.attributes as Record<string, number> | undefined,
  );

  const pc: COCPlayerCharacter = {
    name: '',
    playerName: '',
    time: '',
    job: '',
    age: '',
    gender: '',
    location: '',
    attributes: {},
    battleAttributes: {},
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
    experiencedModules2: '',
    friends: '',
    // override 在先，安全默认值在后，防止老存档 undefined 冲掉默认值
    ...override,
    hometown: override?.hometown ?? '',
    pointValues,
    proSkills,
    skillPoints,
    assets,
    status,
  };

  if (returnPatch) {
    return { pc, showingChildSkillsPatch };
  }
  return pc;
}
