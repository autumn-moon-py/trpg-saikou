import type { Job } from '../types/job';

/**
 * 私立七伏学园课程职业。
 * 仅在新版规则下显示，技能与点数按修订规则表达。
 */
export const shichifukuJobs: Job[] = [
  {
    name: '私立七伏学园-普通科',
    point: [],
    pointAlternatives: [
      [
        ['edu', 2],
        ['pow', 2],
      ],
      [['edu', 4]],
    ],
    wealth: [10, 10],
    skills: ['图书馆使用', { 母语: '' }, '侦查', '说服'],
    freeSkills: [
      { name: '社团活动相关技能', count: 2 },
      { name: '其他任意技能', count: 2 },
    ],
    newRulesOnly: true,
  },
  {
    name: '私立七伏学园-国际科',
    point: [],
    pointAlternatives: [
      [
        ['edu', 2],
        ['pow', 2],
      ],
      [['edu', 4]],
    ],
    wealth: [10, 10],
    skills: ['图书馆使用', { 母语: '' }, { 外语: '英语' }, '侦查'],
    freeSkills: [
      { name: '社团活动相关技能', count: 2 },
      { name: '其他任意技能', count: 2 },
    ],
    newRulesOnly: true,
  },
  {
    name: '私立七伏学园-艺术科',
    point: [],
    pointAlternatives: [
      [
        ['edu', 2],
        ['dex', 2],
      ],
      [
        ['edu', 2],
        ['pow', 2],
      ],
    ],
    wealth: [15, 15],
    skills: [{ 技艺: '' }, '博物学', '图书馆使用', '侦查', '说服'],
    freeSkills: [{ name: '其他任意技能', count: 3 }],
    newRulesOnly: true,
  },
  {
    name: '私立七伏学园-运动科',
    point: [],
    pointAlternatives: [
      [
        ['edu', 2],
        ['str', 2],
      ],
      [
        ['edu', 2],
        ['dex', 2],
      ],
      [
        ['edu', 2],
        ['con', 2],
      ],
    ],
    wealth: [10, 10],
    skills: [
      { 格斗: '' },
      { '运动特长(指定运动项目，自定义技能)': '' },
      '跳跃',
      '投掷',
      '攀爬',
      '说服',
    ],
    freeSkills: [
      { name: '社团活动相关技能', count: 1 },
      { name: '其他任意技能', count: 1 },
    ],
    newRulesOnly: true,
  },
];
