import type { COCAttributesKey } from './character';

export type PointAttr = Exclude<COCAttributesKey, 'luc'>;
// 属性计算方式的单元。如 ['edu', 2] => 教育×2
export type PointCalculatorUnit = [PointAttr, number];
// 属性计算方式。如 [[['edu', 2]], [['str', 2], ['dex', 2]]] => 教育×2 + 力量或敏捷×2
type PointCalculator = PointCalculatorUnit[][];
// 一整条点数公式，如 [EDU×2, POW×2] => 教育×2 + 意志×2
export type PointFormula = PointCalculatorUnit[];
// 多条互斥的完整公式，如 [EDU×2+POW×2] 或 [EDU×4]
export type PointAlternatives = PointFormula[];
// 职业所包含的一个技能，如果是数组则是多选一
// 子技能：{ 格斗: '斗殴' } 格式
type JobSkillUnit = string | { [key: string]: string };
type JobSkillKey = JobSkillUnit | JobSkillUnit[];
export type JobSkills = JobSkillKey[];

/** 自由技能组，如“社团活动相关技能（择二）” */
export interface JobFreeSkill {
  name: string;
  count: number;
}

export interface Job {
  // 职业名
  name: string;
  // 属性计算方式。
  point: PointCalculator;
  // 多条互斥的完整点数公式；存在时优先于 point
  pointAlternatives?: PointAlternatives;
  // 信用评级范围。修订规则下为固定值，区间两端相同
  wealth: [number, number];
  // 额外的固定职业点数（如修订版教授的 90 点学术专精）
  bonus?: number;
  // 默认的技能列表。例子：（实际非数字，而是文本）
  // [54, 55]：本职技能为 54,55，任选 6 个
  // [1, [3, 4, 5, 6]]：本职技能为 1，四选一（3,4,5,6），任选 6 个
  // [1, [3, 4, 5, 6], [3, 4, 5, 6]] 本职技能为 1，四选二（3,4,5,6），任选 5 个
  skills: JobSkills;
  // 自由技能组；存在时替代“其他个人或时代特长”的默认提示
  freeSkills?: JobFreeSkill[];
  // 仅新版规则下显示
  newRulesOnly?: boolean;
}
