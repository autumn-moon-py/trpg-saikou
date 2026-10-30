import type { JobSkills } from '../types/job';

export interface JobRevision {
  /** 固定信用评级 */
  wealth: number;
  /** 修订版本职技能 */
  skills: JobSkills;
  /** 职业点数附加（如教授的 90 点学术专精） */
  bonus?: number;
}

/**
 * 文档中收录的职业改版数据。
 * 键为系统内现有职业名，文档名称不一致的已做映射：
 * 古物学家→文物学家(原作向)、图书管理员→图书馆管理员(原作向)、
 * 医师→医生(原作向)、记者→调查记者(原作向)、警员→巡警(原作向)、
 * 罪犯→独行罪犯、纨绔子弟→绅士/淑女、演艺人员→艺人、超心理学家→神秘学家。
 */
export const jobRevisions: Record<string, JobRevision> = {
  '文物学家(原作向)': {
    wealth: 30,
    skills: [
      { 技艺: '估价' },
      { 技艺: '' },
      '信用评级',
      '历史',
      { 外语: '' },
      '图书馆使用',
      '说服',
      '侦查',
    ],
  },
  艺术家: {
    wealth: 25,
    skills: [
      { 技艺: '' },
      '信用评级',
      '历史',
      { 外语: '' },
      '博物学',
      '说服',
      '心理学',
      '侦查',
    ],
  },
  运动员: {
    wealth: 20,
    skills: ['攀爬', '信用评级', { 格斗: '斗殴' }, '跳跃', '说服', '骑术', '游泳', '投掷'],
  },
  '作家(原作向)': {
    wealth: 20,
    skills: [
      { 技艺: '写作' },
      '信用评级',
      '历史',
      { 外语: '' },
      '图书馆使用',
      '博物学',
      '神秘学',
      '心理学',
    ],
  },
  神职人员: {
    wealth: 25,
    skills: [
      '信用评级',
      '历史',
      { 外语: '' },
      '图书馆使用',
      '聆听',
      '说服',
      '心理学',
      '安抚',
      { 宗教: '' },
    ],
  },
  独行罪犯: {
    wealth: 20,
    skills: [
      '信用评级',
      { 格斗: '斗殴' },
      { 射击: '手枪' },
      '法律',
      '锁匠',
      '说服',
      '心理学',
      '妙手',
      '侦查',
      '潜行',
    ],
  },
  '绅士/淑女': {
    wealth: 80,
    skills: [{ 技艺: '' }, '信用评级', { 射击: '步/霰' }, { 外语: '' }, '说服', '骑术'],
  },
  '医生(原作向)': {
    wealth: 30,
    skills: [
      '信用评级',
      '急救',
      { 外语: '拉丁语' },
      '图书馆使用',
      '医学',
      '说服',
      '心理学',
      { 科学: '生物学' },
      { 科学: '药学' },
    ],
  },
  流浪者: {
    wealth: 5,
    skills: [
      { 技艺: '' },
      '攀爬',
      '信用评级',
      { 格斗: '斗殴' },
      '跳跃',
      '聆听',
      '导航',
      '说服',
      '潜行',
    ],
  },
  工程师: {
    wealth: 30,
    skills: [
      { 技艺: '技术制图' },
      '信用评级',
      '电气维修',
      '图书馆使用',
      '机械维修',
      '操作重型机械',
      { 科学: '工程学' },
      { 科学: '物理' },
    ],
  },
  艺人: {
    wealth: 20,
    skills: [
      { 技艺: '表演' },
      { 技艺: '乔装' },
      '信用评级',
      { 外语: '' },
      '图书馆使用',
      '聆听',
      '说服',
      '心理学',
      '妙手',
    ],
  },
  农民: {
    wealth: 20,
    skills: [
      { 技艺: '农艺' },
      '信用评级',
      '汽车驾驶',
      { 射击: '步/霰' },
      '机械维修',
      '博物学',
      '操作重型机械',
      '说服',
      '追踪',
    ],
  },
  程序员: {
    wealth: 40,
    skills: [
      '计算机使用Ω',
      '信用评级',
      '电气维修',
      '电子学Ω',
      '法律',
      '图书馆使用',
      { 科学: '数学' },
      '侦查',
    ],
  },
  '调查记者(原作向)': {
    wealth: 30,
    skills: [
      { 技艺: '摄影' },
      '信用评级',
      '历史',
      '法律',
      '图书馆使用',
      '聆听',
      '说服',
      '心理学',
      '侦查',
    ],
  },
  律师: {
    wealth: 55,
    skills: ['会计', '信用评级', '历史', '法律', '图书馆使用', '说服', '心理学', '安抚'],
  },
  '图书馆管理员(原作向)': {
    wealth: 25,
    skills: [
      '会计',
      { 技艺: '艺术史' },
      '信用评级',
      '历史',
      { 外语: '' },
      '图书馆使用',
      '聆听',
      '博物学',
      '神秘学',
      { 宗教: '' },
      '潜行',
    ],
  },
  军官: {
    wealth: 40,
    skills: [
      '会计',
      '信用评级',
      { 格斗: '斗殴' },
      { 射击: '手枪' },
      { 射击: '步/霰' },
      '急救',
      { 外语: '' },
      '导航',
      '说服',
      '心理学',
      '生存',
    ],
  },
  音乐家: {
    wealth: 30,
    skills: [
      { 技艺: '音乐' },
      '信用评级',
      '历史',
      { 外语: '' },
      '图书馆使用',
      '聆听',
      '说服',
      '心理学',
    ],
  },
  神秘学家: {
    wealth: 20,
    skills: [
      { 技艺: '摄影' },
      '信用评级',
      '历史',
      { 外语: '' },
      '图书馆使用',
      '神秘学',
      '心理学',
      { 科学: '人类学' },
    ],
  },
  飞行员: {
    wealth: 50,
    skills: [
      '信用评级',
      '电气维修',
      '机械维修',
      '导航',
      '操作重型机械',
      { 驾驶: '飞行器' },
      { 科学: '天文学' },
    ],
  },
  '警探(原作向)': {
    wealth: 35,
    skills: [
      { 技艺: '' },
      '信用评级',
      '汽车驾驶',
      { 格斗: '斗殴' },
      { 射击: '手枪' },
      { 射击: '步/霰' },
      '法律',
      '聆听',
      '说服',
      '心理学',
      '侦查',
    ],
  },
  '巡警(原作向)': {
    wealth: 20,
    skills: [
      '攀爬',
      '信用评级',
      '汽车驾驶',
      { 格斗: '斗殴' },
      { 射击: '手枪' },
      { 射击: '步/霰' },
      '急救',
      '法律',
      '导航',
      '说服',
      '心理学',
      '侦查',
    ],
  },
  私家侦探: {
    wealth: 20,
    skills: [
      { 技艺: '摄影' },
      { 技艺: '乔装' },
      '信用评级',
      { 射击: '手枪' },
      '法律',
      '图书馆使用',
      '锁匠',
      '说服',
      '心理学',
      '侦查',
      '追踪',
    ],
  },
  '教授(原作向)': {
    wealth: 60,
    skills: ['信用评级', { 外语: '' }, '图书馆使用', '说服', '心理学'],
    bonus: 90,
  },
  士兵: {
    wealth: 20,
    skills: [
      '攀爬',
      '信用评级',
      { 格斗: '斗殴' },
      { 射击: '手枪' },
      { 射击: '步/霰' },
      '急救',
      { 外语: '' },
      '机械维修',
      '导航',
      '潜行',
      '生存',
      '游泳',
    ],
  },
};

const SOCIAL_SKILLS = new Set(['取悦', '话术', '恐吓', '说服', '魅惑']);

type SkillUnit = string | { [key: string]: string };

/** 固定信用评级：取区间中点并四舍五入到 5 的倍数 */
export function fixedCreditRating([min, max]: [number, number]): number {
  if (min < 0 || max < 0) return Math.max(min, max);
  return Math.max(0, Math.min(99, Math.round((min + max) / 2 / 5) * 5));
}

function normalizeUnit(unit: SkillUnit): SkillUnit | SkillUnit[] {
  if (typeof unit === 'string') {
    if (SOCIAL_SKILLS.has(unit)) return '说服';
    if (unit === '估价' || unit === '乔装') return { 技艺: unit };
    if (unit === '人类学') return { 科学: '人类学' };
    return unit;
  }
  const [name] = Object.entries(unit)[0] || [];
  if (!name) return unit;
  const baseName = name.split('(')[0];
  if (SOCIAL_SKILLS.has(baseName)) return '说服';
  if (baseName === '生存') return '生存';
  return unit;
}

function normalizeUnitArray(units: SkillUnit[]): SkillUnit | SkillUnit[] {
  const mapped = units.map(normalizeUnit).flat();
  const seen = new Set<string>();
  const result: SkillUnit[] = [];
  mapped.forEach((unit) => {
    const key = typeof unit === 'string' ? unit : JSON.stringify(unit);
    if (seen.has(key)) return;
    seen.add(key);
    result.push(unit);
  });
  return result.length === 1 ? result[0] : result;
}

/** 未收录职业的技能归一化：社交合并、专精归组、去重，保留多选一数组 */
export function normalizeJobSkills(skills: JobSkills): JobSkills {
  const seenStrings = new Set<string>();
  const result: JobSkills = [];

  const pushSingle = (unit: SkillUnit) => {
    if (typeof unit === 'string') {
      if (seenStrings.has(unit)) return;
      seenStrings.add(unit);
    }
    result.push(unit);
  };

  skills.forEach((unit) => {
    if (Array.isArray(unit)) {
      // 顶层数组表示多选一，归一化后仍需保持数组形态
      const normalized = normalizeUnitArray(unit);
      const list = Array.isArray(normalized) ? normalized : [normalized];
      const deduped: SkillUnit[] = [];
      list.forEach((item) => {
        if (typeof item === 'string') {
          if (seenStrings.has(item)) return;
          seenStrings.add(item);
        }
        deduped.push(item);
      });
      if (deduped.length === 1) result.push(deduped[0]);
      else if (deduped.length > 1) result.push(deduped);
      return;
    }

    const normalized = normalizeUnit(unit);
    if (Array.isArray(normalized)) {
      if (normalized.length === 1) pushSingle(normalized[0]);
      else result.push(normalized);
    } else {
      pushSingle(normalized);
    }
  });

  return result;
}

/**
 * 原职业里社交技能占用的槽位数。
 * 多选一数组算 1 个槽位；多个数组、多个固定社交技能分别计数。
 */
export function socialSlotCount(skills: JobSkills): number {
  let count = 0;
  skills.forEach((unit) => {
    if (typeof unit === 'string') {
      if (SOCIAL_SKILLS.has(unit)) count++;
      return;
    }
    if (Array.isArray(unit)) {
      if (unit.some((item) => typeof item === 'string' && SOCIAL_SKILLS.has(item))) {
        count++;
      }
      return;
    }
    const [name] = Object.entries(unit)[0] || [];
    if (name && (SOCIAL_SKILLS.has(name.split('(')[0]) || name.split('(')[0] === '社交')) {
      count++;
    }
  });
  return count;
}

/**
 * 新规则把社交技能合并为单一“说服”后，需要补偿的自选特长数量。
 * 只有真正减少槽位时才补偿，例如两组四选一社交 → 补偿 1，四个固定社交 → 补偿 3。
 */
export function getSocialCompensation(skills: JobSkills): number {
  return Math.max(0, socialSlotCount(skills) - 1);
}
