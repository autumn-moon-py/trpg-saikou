/**
 * 规则集：所有受"新版规则"开关影响的系统计算都从这里取参数。
 * 新增规则时在此扩展字段，并在 models/rules.ts 的 createRules 中映射。
 */
export interface RuleSet {
  /** 修订版移动力：基础 7，力量高于体型 +1，敏捷高于体型 +1 */
  revisedMov: boolean;
  /** 修订版职业：固定信用评级、职业本职技能调整、职业点数附加 */
  revisedOccupations: boolean;
  /** 修订版技能表：基础值、技能分组与专精调整 */
  revisedSkills: boolean;
  /** 修订版兴趣点：教育 + 智力 */
  revisedInterest: boolean;
  /** 修订版背景故事：意义非凡之地并入重要之人与之地 */
  revisedStory: boolean;
}

export const DEFAULT_RULES: RuleSet = {
  revisedMov: false,
  revisedOccupations: false,
  revisedSkills: false,
  revisedInterest: false,
  revisedStory: false,
};
