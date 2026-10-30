import type { JobSkills } from './job';

export interface COCCardViewData {
  showingChildSkills: Record<string, string[]>;
  jobSkills?: JobSkills;
  skillLimits: {
    pro: number;
    interest: number;
  };
  /** 当前卡使用的人物卡格式；缺失时按旧版处理 */
  ruleFormat?: 'old' | 'new';
  /** 规则转换记录 */
  ruleMigration?: {
    /** 是否已自动转换回旧版一次；为 true 时不再自动回退 */
    revertedToOld?: boolean;
  };
}
