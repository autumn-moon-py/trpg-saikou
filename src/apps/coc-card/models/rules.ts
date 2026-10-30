import type { RuleSet } from '../types/rules';

/** 由全局"新版规则"开关生成规则集 */
export function createRules(useNewRules?: boolean): RuleSet {
  const enabled = !!useNewRules;
  return {
    revisedMov: enabled,
    revisedOccupations: enabled,
    revisedSkills: enabled,
    revisedInterest: enabled,
    revisedStory: enabled,
  };
}
