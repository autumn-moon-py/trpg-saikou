import type StoryNames from './name';

/**
 * @field welcome 是否适合新手
 * @field secret 是否秘密团
 * @field special 是否特殊规则
 * @field inactive 是否暂时下架
 * @field removed 是否永久下架
 * @field store 来自哪个店铺，默认听枫馆
 */
export interface StoryOptions {
  welcome?: boolean;
  secret?: boolean;
  special?: boolean;
  inactive?: boolean;
  removed?: boolean;
  store?: string;
}
/** [模组名, 年代, 国家-城市/..., 时长, 属性] */
export type Story = [StoryNames, string, string, [number, number], StoryOptions?];
export type Period = 'short' | 'medium' | 'long' | 'battle';
export interface FormattedStory {
  name: StoryNames,
  decade: {
    decade?: string;
    decadeInt?: number;
    decadeText: string;
  },
  area: {
    country: string;
    city?: string;
  }[],
  playTime: [number, number],
  period: Period,
  periodText: string;
  options?: StoryOptions,
}
