import type { COCPlayerCharacter, COCStatus, COCPCSkill, SkillPoint } from '../types/character';
import type { COCCardViewData } from '../types/viewData';

import { weapons, createWeapon } from './weapon';
import { getProPointByJobAndAttrs } from './job';
import { calculateMOV } from './attribute';
import { DEFAULT_RULES } from '../types/rules';
import type { RuleSet } from '../types/rules';

// 旧社交技能名到新格式的映射（社交分组子技能）
const LEGACY_SOCIAL_SKILLS: Record<string, number> = {
  '取悦': 0,
  '话术': 1,
  '恐吓': 2,
  '说服': 3,
};
const SOCIAL_CHILD_ORDER = ['取悦', '话术', '恐吓', '说服'];

/**
 * 旧版社交分组只显示前两行，按固定索引 2/3 写入会让技能不可见。
 * 优先沿用现有行里同名的子技能，其次占用空位，最后取未占用的最小索引。
 */
function resolveLegacySocialSlot(
  index: number,
  viewData?: COCCardViewData,
  usedSlots?: Set<number>,
): number {
  const visible = viewData?.showingChildSkills?.['社交'] ?? [];
  const name = SOCIAL_CHILD_ORDER[index];
  const isFree = (slot: number) => !usedSlots?.has(slot);
  const existing = visible.indexOf(name);
  if (existing !== -1 && isFree(existing)) return existing;
  const empty = visible.findIndex((child, slot) => !child && isFree(slot));
  if (empty !== -1) return empty;
  for (let slot = 0; ; slot++) {
    if (isFree(slot)) return slot;
  }
}

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
  viewData?: COCCardViewData,
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
  // 收集迁移后社交分组中实际存在的子技能：slot → 子技能名
  const migratedSocialSlots = new Map<number, string>();
  const migratedSocialSlotsForPro = new Map<number, string>();
  const usedSlots = new Set<number>();
  const slotByName = new Map<string, number>();
  const takeSlot = (name: string) => {
    const cached = slotByName.get(name);
    if (cached !== undefined) return cached;
    const slot = resolveLegacySocialSlot(LEGACY_SOCIAL_SKILLS[name], viewData, usedSlots);
    usedSlots.add(slot);
    slotByName.set(name, slot);
    return slot;
  };

  for (const [skillKey, point] of skillPoints) {
    // 检查是否是旧的独立社交技能
    if (typeof skillKey === 'string' && skillKey in LEGACY_SOCIAL_SKILLS) {
      hasLegacy = true;
      const slot = takeSlot(skillKey);
      migratedSocialSlots.set(slot, skillKey);
      newSkillPoints.push([['社交', skillKey, slot], point]);
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
        const slot = takeSlot(skill);
        migratedSocialSlotsForPro.set(slot, skill);
        newProSkills.push(['社交', skill, slot]);
      } else {
        newProSkills.push(skill);
      }
    }
  }

  // 构建 showingChildSkills 补丁：按实际占用的行填入子技能名
  const allSlots = new Map([...migratedSocialSlots, ...migratedSocialSlotsForPro]);
  const maxSlot = Math.max(...allSlots.keys());
  const socialChildSkills = Array.from(
    { length: maxSlot + 1 },
    (_, index) => allSlots.get(index) ?? '',
  );

  return {
    skillPoints: newSkillPoints,
    proSkills: newProSkills,
    showingChildSkillsPatch: { '社交': socialChildSkills },
  };
}

const SOCIAL_SKILL_SET = new Set(['取悦', '话术', '恐吓', '说服', '魅惑']);

// 修订规则下需要并入分组的旧独立技能
const GROUP_MOVE_MAP: Record<string, { group: string; child: string }> = {
  估价: { group: '技艺', child: '估价' },
  乔装: { group: '技艺', child: '乔装' },
  人类学: { group: '科学', child: '人类学' },
};

function skillKeyId(key: COCPCSkill): string {
  return typeof key === 'string' ? key : `${key[0]}|${key[1]}|${key[2]}`;
}

function mergeSkillPoint(target: SkillPoint, source: SkillPoint) {
  (['b', 'p', 'i', 'g'] as const).forEach((key) => {
    const value = Number(source[key] ?? 0);
    if (value) target[key] = Number(target[key] ?? 0) + value;
  });
  if (source.c) target.c = true;
}

/**
 * 修订版技能迁移：
 * - 取悦/话术/恐吓/说服 → 说服
 * - 生存专精 → 生存
 * - 估价/乔装 → 艺术/手艺专精；人类学 → 科学专精
 * 同时生成 showingChildSkills 补丁，确保旧卡数据仍能显示。
 */
function migrateSkillsForRevisedRules(
  skillPoints?: [COCPCSkill, SkillPoint][],
  proSkills?: COCPCSkill[],
  viewData?: COCCardViewData,
): {
  skillPoints: [COCPCSkill, SkillPoint][];
  proSkills: COCPCSkill[];
  showingChildSkillsPatch?: Record<string, string[]>;
} {
  const patch: Record<string, string[]> = {};
  const getPatch = (group: string) => {
    if (!patch[group]) {
      patch[group] = [...(viewData?.showingChildSkills[group] ?? [])];
    }
    return patch[group];
  };
  const ensureSlot = (group: string, child: string): number => {
    const slots = getPatch(group);
    const existing = slots.indexOf(child);
    if (existing !== -1) return existing;
    const empty = slots.indexOf('');
    if (empty !== -1) {
      slots[empty] = child;
      return empty;
    }
    slots.push(child);
    return slots.length - 1;
  };

  let socialPoints: SkillPoint | null = null;
  let survivalPoints: SkillPoint | null = null;
  const movedPoints = new Map<
    string,
    { group: string; child: string; slot?: number; point: SkillPoint }
  >();
  const normalEntries: [COCPCSkill, SkillPoint][] = [];
  let changed = false;

  const mergeInto = (target: SkillPoint | null, source: SkillPoint): SkillPoint => {
    if (!target) return { ...source };
    mergeSkillPoint(target, source);
    return target;
  };

  (skillPoints ?? []).forEach(([key, point]) => {
    if (typeof key === 'string') {
      if (SOCIAL_SKILL_SET.has(key)) {
        socialPoints = mergeInto(socialPoints, point);
        changed = true;
        return;
      }
      if (key === '生存') {
        survivalPoints = mergeInto(survivalPoints, point);
        changed = true;
        return;
      }
      const move = GROUP_MOVE_MAP[key];
      if (move) {
        const id = `${move.group}|${move.child}`;
        const existing = movedPoints.get(id);
        if (existing) mergeSkillPoint(existing.point, point);
        else movedPoints.set(id, { ...move, point: { ...point } });
        changed = true;
        return;
      }
    } else {
      const [group, child, slot] = key;
      if (group === '社交') {
        socialPoints = mergeInto(socialPoints, point);
        changed = true;
        return;
      }
      if (group === '生存') {
        survivalPoints = mergeInto(survivalPoints, point);
        changed = true;
        return;
      }
      const isMoved =
        (group === '技艺' && (child === '估价' || child === '乔装')) ||
        (group === '科学' && child === '人类学');
      if (isMoved) {
        const id = `${group}|${child}`;
        const existing = movedPoints.get(id);
        if (existing) {
          mergeSkillPoint(existing.point, point);
          if (existing.slot === undefined) existing.slot = slot;
        } else {
          movedPoints.set(id, { group, child, slot, point: { ...point } });
        }
        changed = true;
        return;
      }
    }
    normalEntries.push([key, point]);
  });

  if (!changed && !proSkills?.length) {
    return { skillPoints: skillPoints ?? [], proSkills: proSkills ?? [] };
  }

  const result: [COCPCSkill, SkillPoint][] = [...normalEntries];
  if (socialPoints) result.push(['说服', socialPoints]);
  if (survivalPoints) result.push(['生存', survivalPoints]);

  const movedKeyByChild = new Map<string, COCPCSkill>();
  movedPoints.forEach(({ group, child, slot, point }) => {
    const index = slot ?? ensureSlot(group, child);
    getPatch(group)[index] = child;
    const key: COCPCSkill = [group, child, index];
    movedKeyByChild.set(child, key);
    result.push([key, point]);
  });

  const newProSkills: COCPCSkill[] = [];
  const seen = new Set<string>();
  const pushUnique = (key: COCPCSkill) => {
    const id = skillKeyId(key);
    if (seen.has(id)) return;
    seen.add(id);
    newProSkills.push(key);
  };

  (proSkills ?? []).forEach((skill) => {
    if (typeof skill === 'string') {
      if (SOCIAL_SKILL_SET.has(skill)) {
        pushUnique('说服');
        return;
      }
      if (skill === '生存') {
        pushUnique('生存');
        return;
      }
      const move = GROUP_MOVE_MAP[skill];
      if (move) {
        let key = movedKeyByChild.get(move.child);
        if (!key) {
          const index = ensureSlot(move.group, move.child);
          key = [move.group, move.child, index];
          movedKeyByChild.set(move.child, key);
        }
        pushUnique(key);
        return;
      }
      pushUnique(skill);
      return;
    }

    const [group, child, slot] = skill;
    if (group === '社交') {
      pushUnique('说服');
      return;
    }
    if (group === '生存') {
      pushUnique('生存');
      return;
    }
    if (
      (group === '技艺' && (child === '估价' || child === '乔装')) ||
      (group === '科学' && child === '人类学')
    ) {
      const key: COCPCSkill = [group, child, slot];
      movedKeyByChild.set(child, key);
      pushUnique(key);
      return;
    }
    pushUnique(skill);
  });

  return {
    skillPoints: result,
    proSkills: newProSkills,
    showingChildSkillsPatch: Object.keys(patch).length ? patch : undefined,
  };
}

/**
 * 从新版规则回退到旧版规则的技能迁移：
 * - 说服 → 社交分组
 * - 生存 → 生存专精
 * - 艺术/手艺中的估价、乔装 → 独立技能
 * - 科学中的人类学 → 独立技能
 * 仅对 ruleFormat 为 new 的卡执行，避免反复改动旧卡。
 */
function migrateSkillsForOldRules(
  skillPoints?: [COCPCSkill, SkillPoint][],
  proSkills?: COCPCSkill[],
  viewData?: COCCardViewData,
): {
  skillPoints: [COCPCSkill, SkillPoint][];
  proSkills: COCPCSkill[];
  showingChildSkillsPatch?: Record<string, string[]>;
} {
  const base = migrateLegacySocialSkills(skillPoints, proSkills, viewData);
  const result: [COCPCSkill, SkillPoint][] = [];
  const movedPoints = new Map<string, SkillPoint>();
  const movedGroups = new Map<string, Set<string>>();
  let survivalPoints: SkillPoint | null = null;
  let changed = false;

  const merge = (target: SkillPoint | null, source: SkillPoint): SkillPoint => {
    if (!target) return { ...source };
    mergeSkillPoint(target, source);
    return target;
  };
  const addMoved = (child: string, point: SkillPoint) => {
    movedPoints.set(child, merge(movedPoints.get(child) ?? null, point));
    const move = GROUP_MOVE_MAP[child];
    if (move) {
      const children = movedGroups.get(move.group) ?? new Set<string>();
      children.add(child);
      movedGroups.set(move.group, children);
    }
    changed = true;
  };

  base.skillPoints.forEach(([key, point]) => {
    if (typeof key === 'string') {
      if (key === '生存') {
        survivalPoints = merge(survivalPoints, point);
        changed = true;
        return;
      }
      if (GROUP_MOVE_MAP[key]) {
        addMoved(key, point);
        return;
      }
      result.push([key, point]);
      return;
    }

    const [group, child] = key;
    if (group === '生存') {
      survivalPoints = merge(survivalPoints, point);
      changed = true;
      return;
    }
    const move = GROUP_MOVE_MAP[child];
    if (move && move.group === group) {
      addMoved(child, point);
      return;
    }
    result.push([key, point]);
  });

  if (!changed) return base;

  movedPoints.forEach((point, child) => {
    result.push([child, point]);
  });
  const patch: Record<string, string[]> = { ...(base.showingChildSkillsPatch ?? {}) };
  if (survivalPoints) {
    result.push([['生存', '', 0], survivalPoints]);
    patch['生存'] = [''];
  }
  // 从旧版分组中移除已回退为独立技能的专精，避免重复显示
  movedGroups.forEach((children, groupName) => {
    const current = [
      ...(patch[groupName] ?? viewData?.showingChildSkills[groupName] ?? []),
    ];
    let groupChanged = false;
    const next = current.map((child) => {
      if (children.has(child)) {
        groupChanged = true;
        return '';
      }
      return child;
    });
    if (groupChanged) patch[groupName] = next;
  });

  const newProSkills: COCPCSkill[] = [];
  const seen = new Set<string>();
  const pushUnique = (skill: COCPCSkill) => {
    const id = skillKeyId(skill);
    if (seen.has(id)) return;
    seen.add(id);
    newProSkills.push(skill);
  };
  base.proSkills.forEach((skill) => {
    if (typeof skill === 'string') {
      if (skill === '生存') {
        pushUnique(['生存', '', 0]);
        return;
      }
      pushUnique(skill);
      return;
    }
    const [group, child] = skill;
    if (group === '生存') {
      pushUnique(['生存', '', 0]);
      return;
    }
    const move = GROUP_MOVE_MAP[child];
    if (move && move.group === group) {
      pushUnique(child);
      return;
    }
    pushUnique(skill);
  });

  return {
    skillPoints: result,
    proSkills: newProSkills,
    showingChildSkillsPatch: Object.keys(patch).length ? patch : undefined,
  };
}

/**
 * 迁移旧的 pointValues：按当前规则补足点数上限。
 * 只上调不下调；旧值缺失时以新公式和已分配点数中的较大者兜底，避免老卡直接超支。
 */
function migratePointValues(
  pointValues: { pro?: string; interest?: string } | undefined,
  job: string | undefined,
  attributes: Record<string, number> | undefined,
  rules: RuleSet,
  used: { pro: number; interest: number },
): { pro?: string; interest?: string } {
  const result = { ...pointValues };
  const resolveLimit = (current: string | undefined, expected: number, usedPoints: number) => {
    const value = Number(current);
    if (!current || Number.isNaN(value)) return Math.max(expected, usedPoints);
    return Math.max(value, expected);
  };

  // 职业点数：有职业时按公式补足
  if (job) {
    const { point } = getProPointByJobAndAttrs(job, attributes, rules);
    if (point > 0) {
      result.pro = `${resolveLimit(result.pro, point, used.pro)}`;
    }
  }

  // 兴趣点数：修订规则为教育 + 智力，旧规则为智力 × 2
  const edu = attributes?.edu;
  const int = attributes?.int;
  const expected = rules.revisedInterest
    ? edu && int
      ? edu + int
      : 0
    : int
      ? int * 2
      : 0;
  if (expected) {
    result.interest = `${resolveLimit(result.interest, expected, used.interest)}`;
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
  /** 旧数据迁移时生成的 showingChildSkills 补丁，需要合并到 viewData 中 */
  showingChildSkillsPatch?: Record<string, string[]>;
}

export function createPC(
  override?: Partial<COCPlayerCharacter>,
  returnPatch?: false,
  rules?: RuleSet,
  viewData?: COCCardViewData,
): COCPlayerCharacter;
export function createPC(
  override: Partial<COCPlayerCharacter> | undefined,
  returnPatch: true,
  rules?: RuleSet,
  viewData?: COCCardViewData,
): CreatePCResult;
export function createPC(
  override?: Partial<COCPlayerCharacter>,
  returnPatch?: boolean,
  rules: RuleSet = DEFAULT_RULES,
  viewData?: COCCardViewData,
): COCPlayerCharacter | CreatePCResult {
  const status = mergeStatus(override?.status as Partial<COCStatus> | undefined);
  const assets = mergeAssets(override?.assets as LegacyAssets | undefined);
  const skillMigration = rules.revisedSkills
    ? migrateSkillsForRevisedRules(
        override?.skillPoints as [COCPCSkill, SkillPoint][] | undefined,
        override?.proSkills,
        viewData,
      )
    : viewData?.ruleFormat === 'new'
      ? viewData.ruleMigration?.revertedToOld
        ? {
            // 已回退过一次，禁止再次自动转换，保留新版数据
            skillPoints:
              (override?.skillPoints as [COCPCSkill, SkillPoint][] | undefined) ?? [],
            proSkills: override?.proSkills ?? [],
          }
        : migrateSkillsForOldRules(
            override?.skillPoints as [COCPCSkill, SkillPoint][] | undefined,
            override?.proSkills,
            viewData,
          )
      : migrateLegacySocialSkills(
          override?.skillPoints as [COCPCSkill, SkillPoint][] | undefined,
          override?.proSkills,
          viewData,
        );
  const { skillPoints, proSkills, showingChildSkillsPatch } = skillMigration;
  const pointValues = migratePointValues(
    override?.pointValues,
    override?.job,
    override?.attributes as Record<string, number> | undefined,
    rules,
    {
      pro: skillPoints.reduce((sum, [, point]) => sum + Number(point.p ?? 0), 0),
      interest: skillPoints.reduce((sum, [, point]) => sum + Number(point.i ?? 0), 0),
    },
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

  // 修复 MOV：旧存档的 MOV 可能被年龄修正减少了，仅在当前值与计算值不符时修正
  const { str, siz, dex } = pc.attributes;
  const expectedMov = calculateMOV(str, siz, dex, rules);
  if (expectedMov && pc.battleAttributes.mov !== expectedMov) {
    pc.battleAttributes.mov = expectedMov;
  }

  // 修订版背景故事：意义非凡之地并入重要之人与之地
  if (rules.revisedStory && pc.stories?.IPlace) {
    const place = pc.stories.IPlace.trim();
    if (place) {
      pc.stories = {
        ...pc.stories,
        IPerson: [pc.stories.IPerson, place].filter((text) => text && text.trim()).join('\n'),
        IPlace: '',
      };
    }
  }

  if (returnPatch) {
    return { pc, showingChildSkillsPatch };
  }
  return pc;
}
