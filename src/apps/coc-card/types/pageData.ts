export interface PageData {
  paperInFront: boolean;
  printing: boolean;
  importing: boolean;
  showTotalSeparation: boolean;
  /** 新版规则开关：开启后部分系统计算改用修订规则 */
  useNewRules: boolean;
}
