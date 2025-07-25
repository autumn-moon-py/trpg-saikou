import type { Job } from '../types/job'

export const jobs: Job[] = [
    {
        name: '',
        point: [],
        wealth: [ 1, 0 ],
        skills: [],
    },
    {
        name: '会计师',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 30, 70 ],
        skills: [ '会计', '法律', '图书馆使用', '聆听', '说服', '侦查' ],
    },
    {
        name: '杂技演员',
        point: [ [ [ 'edu', 2 ] ], [ [ 'dex', 2 ] ] ],
        wealth: [ 9, 20 ],
        skills: [ '攀爬', '闪避', '投掷', '跳跃', '侦查', '游泳' ],
    },
    {
        name: '戏剧演员',
        point: [ [ [ 'edu', 2 ] ], [ [ 'app', 2 ] ] ],
        wealth: [ 9, 40 ],
        skills: [
            { 技艺: '' },
            '乔装',
            { 格斗: '' },
            '历史',
            '心理学',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '电影演员',
        point: [ [ [ 'edu', 2 ] ], [ [ 'app', 2 ] ] ],
        wealth: [ 20, 90 ],
        skills: [
            { 技艺: '' },
            '乔装',
            '汽车驾驶',
            '心理学',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '中介调查员',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 20, 45 ],
        skills: [
            { 格斗: '斗殴' },
            { 射击: '' },
            '法律',
            '图书馆使用',
            '心理学',
            '潜行',
            '追踪',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '精神病医生(古典)',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 10, 60 ],
        skills: [
            '法律',
            '聆听',
            '医学',
            { 外语: '' },
            '精神分析',
            '心理学',
            { 科学: '生物学' },
            { 科学: '化学' },
        ],
    },
    {
        name: '动物训练师',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'app', 2 ],
                [ 'pow', 2 ],
            ],
        ],
        wealth: [ 10, 40 ],
        skills: [
            '跳跃',
            '聆听',
            '博物学',
            '驯兽',
            { 科学: '动物学' },
            '潜行',
            '追踪',
        ],
    },
    {
        name: '文物学家(原作向)',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 30, 70 ],
        skills: [
            '估价',
            { 技艺: '' },
            '历史',
            '图书馆使用',
            { 外语: '' },
            '侦查',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '古董商',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 30, 50 ],
        skills: [
            '会计',
            '估价',
            '汽车驾驶',
            '历史',
            '图书馆使用',
            '导航',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '考古学家(原作向)',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 10, 40 ],
        skills: [
            '估价',
            '考古学',
            '历史',
            { 外语: '' },
            '图书馆使用',
            '侦查',
            '机械维修',
            [ '导航', { 科学: '' } ],
        ],
    },
    {
        name: '建筑师',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 30, 70 ],
        skills: [
            '会计',
            { 技艺: '' },
            '法律',
            { 母语: '' },
            '说服',
            '心理学',
            { 科学: '数学' },
            [ '计算机使用Ω', '图书馆使用' ],
        ],
    },
    {
        name: '艺术家',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'dex', 2 ],
                [ 'pow', 2 ],
            ],
        ],
        wealth: [ 9, 50 ],
        skills: [
            { 技艺: '' },
            { 外语: '' },
            '心理学',
            '侦查',
            [ '历史', '博物学' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '精神病院护工',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 8, 20 ],
        skills: [
            '闪避',
            { 格斗: '斗殴' },
            '急救',
            '聆听',
            '心理学',
            '潜行',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '运动员',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 9, 70 ],
        skills: [
            '攀爬',
            '跳跃',
            { 格斗: '斗殴' },
            '骑术',
            '游泳',
            '投掷',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '作家(原作向)',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 9, 30 ],
        skills: [
            { 技艺: '文学' },
            '历史',
            { 外语: '' },
            { 母语: '' },
            '心理学',
            '图书馆使用',
            [ '博物学', '神秘学' ],
        ],
    },
    {
        name: '酒保',
        point: [ [ [ 'edu', 2 ] ], [ [ 'app', 2 ] ] ],
        wealth: [ 8, 25 ],
        skills: [
            '会计',
            { 格斗: '斗殴' },
            '聆听',
            '心理学',
            '侦查',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '猎人',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 20, 50 ],
        skills: [
            { 射击: '' },
            '博物学',
            '导航',
            { 科学: '动物学' },
            '潜行',
            '追踪',
            [ '聆听', '侦查' ],
            [ { 外语: '' }, { 生存: '' } ],
        ],
    },
    {
        name: '书商',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 20, 40 ],
        skills: [
            '会计',
            '估价',
            '汽车驾驶',
            '历史',
            '图书馆使用',
            { 母语: '' },
            { 外语: '' },
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '赏金猎人',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 9, 30 ],
        skills: [
            '汽车驾驶',
            '法律',
            '心理学',
            '追踪',
            '潜行',
            [ '电气维修', '电子学Ω' ],
            [ { 格斗: '' }, { 射击: '' } ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '拳击手、摔跤手',
        point: [ [ [ 'edu', 2 ] ], [ [ 'str', 2 ] ] ],
        wealth: [ 9, 60 ],
        skills: [ '闪避', { 格斗: '斗殴' }, '恐吓', '跳跃', '心理学', '侦查' ],
    },
    {
        name: '管家、佣人',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 9, 40 ],
        skills: [
            { '技艺(生活类，如烹饪、裁缝、理发)': '' },
            '急救',
            '聆听',
            { 外语: '' },
            '心理学',
            '侦查',
            [ '会计', '估价' ],
        ],
    },
    {
        name: '神职人员',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 9, 60 ],
        skills: [
            '会计',
            '历史',
            '图书馆使用',
            '聆听',
            { 外语: '' },
            '心理学',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '程序员',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 10, 70 ],
        skills: [
            '计算机使用Ω',
            '电气维修',
            '电子学Ω',
            '图书馆使用',
            { 科学: '' },
            '侦查',
        ],
    },
    {
        name: '黑客',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 10, 70 ],
        skills: [
            '计算机使用Ω',
            '电气维修',
            '电子学Ω',
            '图书馆使用',
            '侦查',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '牛仔',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 9, 20 ],
        skills: [
            '闪避',
            '跳跃',
            '骑术',
            { 生存: '' },
            '投掷',
            '追踪',
            [ { 格斗: '' }, { 射击: '' } ],
            [ '急救', '博物学' ],
        ],
    },
    {
        name: '工匠',
        point: [ [ [ 'edu', 2 ] ], [ [ 'dex', 2 ] ] ],
        wealth: [ 10, 40 ],
        skills: [ '会计', { 技艺: '' }, { 技艺: '' }, '机械维修', '博物学', '侦查' ],
    },
    {
        name: '刺客',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 30, 60 ],
        skills: [
            '乔装',
            '电气维修',
            { 格斗: '' },
            { 射击: '' },
            '锁匠',
            '机械维修',
            '潜行',
            '心理学',
        ],
    },
    {
        name: '银行劫匪',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 5, 75 ],
        skills: [
            '汽车驾驶',
            { 格斗: '' },
            { 射击: '' },
            '恐吓',
            '锁匠',
            '操作重型机械',
            [ '电气维修', '机械维修' ],
        ],
    },
    {
        name: '打手、暴徒',
        point: [ [ [ 'edu', 2 ] ], [ [ 'str', 2 ] ] ],
        wealth: [ 5, 30 ],
        skills: [
            '汽车驾驶',
            { 格斗: '' },
            { 射击: '' },
            '心理学',
            '潜行',
            '侦查',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '窃贼',
        point: [ [ [ 'edu', 2 ] ], [ [ 'dex', 2 ] ] ],
        wealth: [ 5, 40 ],
        skills: [
            '估价',
            '攀爬',
            '聆听',
            '锁匠',
            '妙手',
            '潜行',
            '侦查',
            [ '电气维修', '机械维修' ],
        ],
    },
    {
        name: '欺诈师',
        point: [ [ [ 'edu', 2 ] ], [ [ 'app', 2 ] ] ],
        wealth: [ 10, 65 ],
        skills: [
            '估价',
            { 技艺: '表演' },
            '聆听',
            '心理学',
            '妙手',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '法律', { 外语: '' } ],
        ],
    },
    {
        name: '独行罪犯',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'dex', 2 ],
                [ 'app', 2 ],
            ],
        ],
        wealth: [ 5, 65 ],
        skills: [
            '估价',
            '潜行',
            '心理学',
            '侦查',
            [ { 技艺: '表演' }, '乔装' ],
            [ { 格斗: '' }, { 射击: '' } ],
            [ '锁匠', '机械维修' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '女飞贼(古典)',
        point: [ [ [ 'edu', 2 ] ], [ [ 'app', 2 ] ] ],
        wealth: [ 10, 80 ],
        skills: [
            { 技艺: '' },
            '汽车驾驶',
            '聆听',
            '潜行',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
            [ { 格斗: '斗殴' }, { 射击: '' } ],
        ],
    },
    {
        name: '赃物贩子',
        point: [ [ [ 'edu', 2 ] ], [ [ 'app', 2 ] ] ],
        wealth: [ 20, 40 ],
        skills: [
            '会计',
            '估价',
            { 技艺: '伪造' },
            '历史',
            '图书馆使用',
            '侦查',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '赝造者',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 20, 60 ],
        skills: [
            '会计',
            '估价',
            { 技艺: '伪造' },
            '历史',
            '图书馆使用',
            '侦查',
            '妙手',
        ],
    },
    {
        name: '走私者',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'dex', 2 ],
                [ 'app', 2 ],
            ],
        ],
        wealth: [ 20, 60 ],
        skills: [
            { 射击: '' },
            '聆听',
            '导航',
            '心理学',
            '妙手',
            '侦查',
            [ '汽车驾驶', { 驾驶: '飞行器' }, { 驾驶: '船' } ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '混混',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 3, 10 ],
        skills: [
            '攀爬',
            { 格斗: '' },
            { 射击: '' },
            '跳跃',
            '妙手',
            '潜行',
            '投掷',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '教团首领',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 30, 60 ],
        skills: [
            '会计',
            '神秘学',
            '心理学',
            '侦查',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '除魅师(现代)',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 20, 50 ],
        skills: [
            '汽车驾驶',
            '历史',
            '神秘学',
            '心理学',
            '潜行',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
            [ { 格斗: '斗殴' }, { 射击: '' } ],
        ],
    },
    {
        name: '设计师',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 20, 60 ],
        skills: [
            '会计',
            { 技艺: '摄影' },
            { 技艺: '' },
            '机械维修',
            '心理学',
            '侦查',
            [ '计算机使用Ω', '图书馆使用' ],
        ],
    },
    {
        name: '业余艺术爱好者(原作向)',
        point: [ [ [ 'edu', 2 ] ], [ [ 'app', 2 ] ] ],
        wealth: [ 50, 99 ],
        skills: [
            { 技艺: '' },
            { 射击: '' },
            { 外语: '' },
            '骑术',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '潜水员',
        point: [ [ [ 'edu', 2 ] ], [ [ 'dex', 2 ] ] ],
        wealth: [ 9, 30 ],
        skills: [
            '潜水',
            '急救',
            '机械维修',
            { 驾驶: '船' },
            { 科学: '生物学' },
            '侦查',
            '游泳',
        ],
    },
    {
        name: '医生(原作向)',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 30, 80 ],
        skills: [
            '急救',
            '医学',
            { 外语: '拉丁语' },
            '心理学',
            { 科学: '生物学' },
            { 科学: '制药' },
        ],
    },
    {
        name: '流浪者',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'dex', 2 ],
                [ 'app', 2 ],
                [ 'str', 2 ],
            ],
        ],
        wealth: [ 0, 5 ],
        skills: [
            '攀爬',
            '跳跃',
            '聆听',
            '导航',
            '潜行',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '私人司机',
        point: [ [ [ 'edu', 2 ] ], [ [ 'dex', 2 ] ] ],
        wealth: [ 10, 40 ],
        skills: [
            '汽车驾驶',
            '聆听',
            '机械维修',
            '导航',
            '侦查',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '司机',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 9, 20 ],
        skills: [
            '会计',
            '汽车驾驶',
            '聆听',
            '机械维修',
            '导航',
            '心理学',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '出租车司机',
        point: [ [ [ 'edu', 2 ] ], [ [ 'dex', 2 ] ] ],
        wealth: [ 9, 30 ],
        skills: [
            '会计',
            '汽车驾驶',
            '电气维修',
            '话术',
            '机械维修',
            '导航',
            '侦查',
        ],
    },
    {
        name: '编辑',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 10, 30 ],
        skills: [
            '会计',
            '历史',
            { 母语: '' },
            '心理学',
            '侦查',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '政府官员',
        point: [ [ [ 'edu', 2 ] ], [ [ 'app', 2 ] ] ],
        wealth: [ 50, 90 ],
        skills: [
            '取悦',
            '历史',
            '恐吓',
            '话术',
            '聆听',
            { 母语: '' },
            '说服',
            '心理学',
        ],
    },
    {
        name: '工程师',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 30, 60 ],
        skills: [
            { 技艺: '技术制图' },
            '电气维修',
            '图书馆使用',
            '机械维修',
            '操作重型机械',
            { 科学: '工程学' },
            { 科学: '物理' },
        ],
    },
    {
        name: '艺人',
        point: [ [ [ 'edu', 2 ] ], [ [ 'app', 2 ] ] ],
        wealth: [ 9, 70 ],
        skills: [
            { '技艺(表演类，如表演、演唱、喜剧等)': '' },
            '乔装',
            '聆听',
            '心理学',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '探险家(古典)',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'dex', 2 ],
                [ 'app', 2 ],
                [ 'str', 2 ],
            ],
        ],
        wealth: [ 55, 80 ],
        skills: [
            { 射击: '' },
            '历史',
            '跳跃',
            '博物学',
            '导航',
            { 外语: '' },
            { 生存: '' },
            [ '攀爬', '游泳' ],
        ],
    },
    {
        name: '农民',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 9, 30 ],
        skills: [
            { 技艺: '耕作' },
            [ '汽车驾驶', { 驾驶: '马车' } ],
            '机械维修',
            '博物学',
            '操作重型机械',
            '追踪',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '司法人员',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 20, 40 ],
        skills: [
            '汽车驾驶',
            { 格斗: '斗殴' },
            { 射击: '' },
            '法律',
            '说服',
            '潜行',
            '侦查',
        ],
    },
    {
        name: '消防员',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 9, 30 ],
        skills: [
            '攀爬',
            '闪避',
            '汽车驾驶',
            '急救',
            '跳跃',
            '机械维修',
            '操作重型机械',
            '投掷',
        ],
    },
    {
        name: '驻外记者',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 10, 40 ],
        skills: [
            '历史',
            { 外语: '' },
            { 母语: '' },
            '聆听',
            '心理学',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '法医',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 40, 60 ],
        skills: [
            { 外语: '' },
            '图书馆使用',
            '医学',
            '说服',
            { 科学: '生物学' },
            { 科学: '鉴证' },
            { 科学: '制药' },
            '侦查',
        ],
    },
    {
        name: '赌徒',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'dex', 2 ],
                [ 'app', 2 ],
            ],
        ],
        wealth: [ 8, 50 ],
        skills: [
            '会计',
            { 技艺: '表演' },
            '聆听',
            '心理学',
            '妙手',
            '侦查',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '黑帮老大',
        point: [ [ [ 'edu', 2 ] ], [ [ 'app', 2 ] ] ],
        wealth: [ 60, 95 ],
        skills: [
            { 格斗: '' },
            { 射击: '' },
            '法律',
            '聆听',
            '心理学',
            '侦查',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '黑帮马仔',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 9, 20 ],
        skills: [
            '汽车驾驶',
            { 格斗: '' },
            { 射击: '' },
            '心理学',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '绅士/淑女',
        point: [ [ [ 'edu', 2 ] ], [ [ 'app', 2 ] ] ],
        wealth: [ 40, 90 ],
        skills: [
            { 技艺: '' },
            { 射击: '步/霰' },
            '历史',
            { 外语: '' },
            '导航',
            '骑术',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '游民',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'dex', 2 ],
                [ 'app', 2 ],
            ],
        ],
        wealth: [ 0, 5 ],
        skills: [
            { 技艺: '' },
            '攀爬',
            '跳跃',
            '聆听',
            '导航',
            '潜行',
            [ '锁匠', '妙手' ],
        ],
    },
    {
        name: '勤杂护工',
        point: [ [ [ 'edu', 2 ] ], [ [ 'str', 2 ] ] ],
        wealth: [ 6, 15 ],
        skills: [
            '电气维修',
            { 格斗: '斗殴' },
            '急救',
            '聆听',
            '机械维修',
            '心理学',
            '潜行',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '调查记者(原作向)',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 9, 30 ],
        skills: [
            [ { 技艺: '艺术' }, { 技艺: '摄影' } ],
            '历史',
            '图书馆使用',
            { 母语: '' },
            '心理学',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '通讯记者(原作向)',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 9, 30 ],
        skills: [
            { 技艺: '表演' },
            '历史',
            '聆听',
            { 母语: '' },
            '心理学',
            '潜行',
            '侦查',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '法官',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 50, 80 ],
        skills: [
            '历史',
            '恐吓',
            '法律',
            '图书馆使用',
            '聆听',
            { 母语: '' },
            '说服',
            '心理学',
        ],
    },
    {
        name: '实验室助理',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 10, 30 ],
        skills: [
            '电气维修',
            { 外语: '' },
            { 科学: '化学' },
            { 科学: '' },
            { 科学: '' },
            '侦查',
            [ '计算机使用Ω', '图书馆使用' ],
        ],
    },
    {
        name: '伐木工',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 9, 30 ],
        skills: [
            '攀爬',
            '闪避',
            { 格斗: '链锯' },
            '急救',
            '跳跃',
            '机械维修',
            '投掷',
            [ '博物学', { 科学: '生物学' }, { 科学: '植物学' } ],
        ],
    },
    {
        name: '矿工',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 9, 30 ],
        skills: [
            '攀爬',
            { 科学: '地质学' },
            '跳跃',
            '机械维修',
            '操作重型机械',
            '潜行',
            '侦查',
        ],
    },
    {
        name: '律师',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 30, 80 ],
        skills: [
            '会计',
            '法律',
            '图书馆使用',
            '心理学',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '图书馆管理员(原作向)',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 9, 35 ],
        skills: [ '会计', '图书馆使用', { 外语: '' }, { 母语: '' } ],
    },
    {
        name: '技工',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 9, 40 ],
        skills: [
            { '技艺(木工、焊接、管道工等)': '' },
            '攀爬',
            '汽车驾驶',
            '电气维修',
            '机械维修',
            '操作重型机械',
        ],
    },
    {
        name: '军官',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 20, 70 ],
        skills: [
            '会计',
            { 射击: '' },
            '导航',
            '急救',
            '心理学',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '传教士',
        point: [ [ [ 'edu', 2 ] ], [ [ 'app', 2 ] ] ],
        wealth: [ 0, 30 ],
        skills: [
            { 技艺: '' },
            '急救',
            '机械维修',
            '医学',
            '博物学',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '登山家',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 30, 60 ],
        skills: [
            '攀爬',
            '急救',
            '跳跃',
            '聆听',
            '导航',
            { 外语: '' },
            { 生存: '高山/冰山' },
            '追踪',
        ],
    },
    {
        name: '博物馆管理员',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 10, 30 ],
        skills: [
            '会计',
            '估价',
            '考古学',
            '历史',
            '图书馆使用',
            '神秘学',
            { 外语: '' },
            '侦查',
        ],
    },
    {
        name: '音乐家',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'dex', 2 ],
                [ 'pow', 2 ],
            ],
        ],
        wealth: [ 9, 30 ],
        skills: [
            { 技艺: '音乐' },
            '聆听',
            '心理学',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '护士',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 9, 30 ],
        skills: [
            '急救',
            '聆听',
            '医学',
            '心理学',
            { 科学: '生物学' },
            { 科学: '化学' },
            '侦查',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '神秘学家',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 9, 65 ],
        skills: [
            '人类学',
            '历史',
            '图书馆使用',
            '神秘学',
            { 外语: '' },
            { 科学: '天文学' },
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '旅行家',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 5, 20 ],
        skills: [
            { 射击: '' },
            '急救',
            '聆听',
            '博物学',
            '导航',
            '侦查',
            { 生存: '' },
            '追踪',
        ],
    },
    {
        name: '药剂师',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 35, 75 ],
        skills: [
            '会计',
            '急救',
            { 外语: '拉丁语' },
            '图书馆使用',
            '心理学',
            { 科学: '化学' },
            { 科学: '制药' },
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '摄影师',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 9, 30 ],
        skills: [
            { 技艺: '摄影' },
            '心理学',
            { 科学: '化学' },
            '潜行',
            '侦查',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '摄影记者',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 10, 30 ],
        skills: [
            { 技艺: '摄影' },
            '攀爬',
            { 外语: '' },
            '心理学',
            { 科学: '化学' },
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '飞行员',
        point: [ [ [ 'edu', 2 ] ], [ [ 'dex', 2 ] ] ],
        wealth: [ 20, 70 ],
        skills: [
            '电气维修',
            '机械维修',
            '导航',
            '操作重型机械',
            { 驾驶: '飞行器' },
            { 科学: '天文学' },
        ],
    },
    {
        name: '特技飞行员(古典)',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 30, 60 ],
        skills: [
            '会计',
            '电气维修',
            '聆听',
            '机械维修',
            '导航',
            { 驾驶: '飞行器' },
            '侦查',
        ],
    },
    {
        name: '警探(原作向)',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 20, 50 ],
        skills: [
            { 射击: '' },
            '法律',
            '聆听',
            '心理学',
            '侦查',
            [ { 技艺: '表演' }, '乔装' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '巡警(原作向)',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 9, 30 ],
        skills: [
            { 格斗: '斗殴' },
            { 射击: '' },
            '急救',
            '法律',
            '心理学',
            '侦查',
            [ '汽车驾驶', '骑术' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '私家侦探',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 9, 30 ],
        skills: [
            { 技艺: '摄影' },
            '乔装',
            '法律',
            '图书馆使用',
            '心理学',
            '侦查',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ { 格斗: '' }, { 射击: '' }, '锁匠', '计算机使用Ω' ],
        ],
    },
    {
        name: '教授(原作向)',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 20, 70 ],
        skills: [ '图书馆使用', { 外语: '' }, { 母语: '' }, '心理学' ],
    },
    {
        name: '淘金客',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 0, 10 ],
        skills: [
            '攀爬',
            '急救',
            '历史',
            '机械维修',
            '导航',
            { 科学: '地质学' },
            '侦查',
        ],
    },
    {
        name: '性工作者',
        point: [ [ [ 'edu', 2 ] ], [ [ 'app', 2 ] ] ],
        wealth: [ 5, 50 ],
        skills: [
            { 技艺: '' },
            '闪避',
            '心理学',
            '妙手',
            '潜行',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '精神病学家',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 30, 80 ],
        skills: [
            { 外语: '' },
            '聆听',
            '医学',
            '说服',
            '精神分析',
            '心理学',
            { 科学: '生物学' },
            { 科学: '化学' },
        ],
    },
    {
        name: '心理学家',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 10, 40 ],
        skills: [ '会计', '图书馆使用', '聆听', '说服', '精神分析', '心理学' ],
    },
    {
        name: '研究员',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 9, 30 ],
        skills: [
            '历史',
            '图书馆使用',
            { 外语: '' },
            '侦查',
            { 科学: '' },
            { 科学: '' },
            { 科学: '' },
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '海军',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 9, 30 ],
        skills: [
            { 格斗: '' },
            { 射击: '' },
            '急救',
            '导航',
            { 驾驶: '船' },
            { 生存: '海上' },
            '游泳',
            [ '电气维修', '机械维修' ],
        ],
    },
    {
        name: '渔民',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 20, 40 ],
        skills: [
            '急救',
            '机械维修',
            '博物学',
            '导航',
            { 驾驶: '船' },
            '侦查',
            '游泳',
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '推销员',
        point: [ [ [ 'edu', 2 ] ], [ [ 'app', 2 ] ] ],
        wealth: [ 9, 40 ],
        skills: [
            '会计',
            '汽车驾驶',
            '聆听',
            '心理学',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '潜行', '妙手' ],
        ],
    },
    {
        name: '科学家',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 9, 50 ],
        skills: [
            { 科学: '' },
            { 科学: '' },
            { 科学: '' },
            { 外语: '' },
            { 母语: '' },
            '侦查',
            [ '计算机使用Ω', '图书馆使用' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '秘书',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'dex', 2 ],
                [ 'app', 2 ],
            ],
        ],
        wealth: [ 9, 30 ],
        skills: [
            '会计',
            [ { 技艺: '打字' }, { 技艺: '速记' } ],
            { 母语: '' },
            '心理学',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '计算机使用Ω', '图书馆使用' ],
        ],
    },
    {
        name: '店老板',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'dex', 2 ],
                [ 'app', 2 ],
            ],
        ],
        wealth: [ 20, 40 ],
        skills: [
            '会计',
            '电气维修',
            '聆听',
            '机械维修',
            '心理学',
            '侦查',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '士兵',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 9, 30 ],
        skills: [
            '闪避',
            { 格斗: '' },
            { 射击: '' },
            '潜行',
            { 生存: '' },
            '急救',
            [ '攀爬', '游泳' ],
            [ '机械维修', { 外语: '' } ],
        ],
    },
    {
        name: '间谍',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'dex', 2 ],
                [ 'app', 2 ],
            ],
        ],
        wealth: [ 20, 60 ],
        skills: [
            { 射击: '' },
            '聆听',
            { 外语: '' },
            '心理学',
            '妙手',
            '潜行',
            [ { 技艺: '表演' }, '乔装' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '学生/实习生',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 5, 10 ],
        skills: [ '图书馆使用', '聆听', [ { 母语: '' }, { 外语: '' } ] ],
    },
    {
        name: '替身演员',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 10, 50 ],
        skills: [
            '攀爬',
            '闪避',
            { 格斗: '' },
            '急救',
            '跳跃',
            '游泳',
            [ '电气维修', '机械维修' ],
            [ '潜水', '汽车驾驶', { 驾驶: '' }, '骑术' ],
        ],
    },
    {
        name: '部落成员',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'str', 2 ],
                [ 'dex', 2 ],
            ],
        ],
        wealth: [ 0, 15 ],
        skills: [
            '攀爬',
            '聆听',
            '博物学',
            '神秘学',
            '侦查',
            '游泳',
            { 生存: '' },
            [ { 格斗: '' }, '投掷' ],
        ],
    },
    {
        name: '殡葬师',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 20, 40 ],
        skills: [
            '会计',
            '汽车驾驶',
            '历史',
            '神秘学',
            '心理学',
            { 科学: '生物学' },
            { 科学: '化学' },
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '工会活动家',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 5, 50 ],
        skills: [
            '会计',
            { 格斗: '斗殴' },
            '法律',
            '聆听',
            '操作重型机械',
            '心理学',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '服务生',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'dex', 2 ],
                [ 'app', 2 ],
            ],
        ],
        wealth: [ 9, 20 ],
        skills: [
            '会计',
            { 技艺: '' },
            '闪避',
            '聆听',
            '心理学',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '职员/主管',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 9, 20 ],
        skills: [
            '会计',
            '法律',
            '聆听',
            [ { 母语: '' }, { 外语: '' } ],
            [ '图书馆使用', '计算机使用Ω' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '中高层管理人员',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 20, 80 ],
        skills: [
            '会计',
            { 外语: '' },
            '法律',
            '心理学',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '狂热者',
        point: [
            [ [ 'edu', 2 ] ],
            [
                [ 'pow', 2 ],
                [ 'app', 2 ],
            ],
        ],
        wealth: [ 0, 30 ],
        skills: [
            '历史',
            '心理学',
            '潜行',
            [ '取悦', '话术', '恐吓', '说服' ],
            [ '取悦', '话术', '恐吓', '说服' ],
        ],
    },
    {
        name: '饲养员',
        point: [ [ [ 'edu', 4 ] ] ],
        wealth: [ 9, 40 ],
        skills: [
            '驯兽',
            '会计',
            '闪避',
            '急救',
            '博物学',
            '医学',
            { 科学: '制药' },
            { 科学: '动物学' },
        ],
    },
]
