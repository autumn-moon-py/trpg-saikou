import type { Skill } from '../types/skill'

export const skills: Skill[] = [
    {
        name: '信用评级',
        displayName: '信誉',
        init: 0
    },
    {
        name: '克苏鲁神话',
        init: 0
    },
    {
        name: '侦查',
        init: 25
    },
    {
        name: '聆听',
        init: 20
    },
    {
        name: '社交',
        init: 0,
        group: {
            show: [ '' ],
            skills: [
                { name: '取悦', init: 15 },
                { name: '话术', init: 5 },
                { name: '恐吓', init: 15 },
                { name: '说服', init: 10 },
            ]
    }
    },
    {
        name: '心理学',
        init: 10
    },
    {
        name: '母语',
        init: 0,
        initPlaceholder: '0',
        group: {
            show: [ '' ],
            skills: [
                { name: '汉语' },
                { name: '英语' },
                { name: '日语' },
                { name: '法语' },
                { name: '俄语' },
                { name: '德语' },
                { name: '韩语' },
                { name: '粤语' },
                { name: '拉丁语' },
                { name: '荷兰语' },
                { name: '挪威语' },
                { name: '丹麦语' },
                { name: '印度语' },
                { name: '西班牙语' },
                { name: '葡萄牙语' },
                { name: '阿拉伯语' },
            ]
    }
    },
    {
        name: '外语',
        init: 1,
        group: {
            show: [ '' ],
            skills: [
                { name: '汉语' },
                { name: '英语' },
                { name: '日语' },
                { name: '法语' },
                { name: '俄语' },
                { name: '德语' },
                { name: '韩语' },
                { name: '粤语' },
                { name: '拉丁语' },
                { name: '荷兰语' },
                { name: '挪威语' },
                { name: '丹麦语' },
                { name: '印度语' },
                { name: '西班牙语' },
                { name: '葡萄牙语' },
                { name: '阿拉伯语' },
            ]
    }
    },
    {
        name: '估价',
        init: 5
    },
    {
        name: '乔装',
        init: 5
    },
    {
        name: '潜行',
        init: 20
    },
    {
        name: '追踪',
        init: 10
    },
    {
        name: '读唇',
        init: 1
    },
    {
        name: '人类学',
        init: 1
    },
    {
        name: '图书馆使用',
        displayName: '图书馆',
        init: 20
    },
    {
        name: '生存',
        init: 5,
        group: {
            show: [ '' ],
            skills: [
                {
                    name: '沙漠',
                    init: 5
    },
                {
                    name: '森林',
                    init: 5
    },
                {
                    name: '荒岛',
                    init: 5
    },
                {
                    name: '高山',
                    init: 5
    },
                {
                    name: '海上',
                    init: 5
    },
            ]
    }
    },
    {
        name: '攀爬',
        init: 20
    },
    {
        name: '跳跃',
        init: 20
    },
    {
        name: '游泳',
        init: 20
    },
    {
        name: '潜水',
        init: 1
    },
    {
        name: '技艺',
        init: 5,
        group: {
            show: [ '', '' ],
            skills: [
                {
                    name: '表演',
                    init: 5
    },
                {
                    name: '音乐',
                    init: 5
    },
                {
                    name: '绘画',
                    init: 5
    },
                {
                    name: '艺术',
                    init: 5
    },
                {
                    name: '摄影',
                    init: 5
    },
                {
                    name: '写作',
                    init: 5
    },
                {
                    name: '书法',
                    init: 5
    },
                {
                    name: '打字',
                    init: 5
    },
                {
                    name: '速记',
                    init: 5
    },
                {
                    name: '伪造',
                    init: 5
    },
                {
                    name: '烹饪',
                    init: 5
    },
                {
                    name: '裁缝',
                    init: 5
    },
                {
                    name: '理发',
                    init: 5
    },
                {
                    name: '技术制图',
                    init: 5
    },
                {
                    name: '耕作',
                    init: 5
    },
                {
                    name: '木工',
                    init: 5
    },
                {
                    name: '铁匠',
                    init: 5
    },
                {
                    name: '焊接',
                    init: 5
    },
                {
                    name: '管道工',
                    init: 5
    },
                {
                    name: '茶道',
                    init: 5
    },
                {
                    name: '生花',
                    init: 5
    },
                {
                    name: '盆栽',
                    init: 5
    },
                {
                    name: '石庭',
                    init: 5
    },
                {
                    name: '筝',
                    init: 5
    },
                {
                    name: '三味线',
                    init: 5
    },
                {
                    name: '尺八',
                    init: 5
    },
                {
                    name: '太鼓',
                    init: 5
    },
                {
                    name: '能乐',
                    init: 5
    },
                {
                    name: '歌舞伎',
                    init: 5
    },
                {
                    name: '文乐',
                    init: 5
    },
                {
                    name: '踊',
                    init: 5
    },
                {
                    name: '芸者',
                    init: 5
    },
                {
                    name: '俳句',
                    init: 5
    },
                {
                    name: '墨绘',
                    init: 5
    },
                {
                    name: '浮世绘',
                    init: 5
    },
                {
                    name: '漆器',
                    init: 5
    },
                {
                    name: '日本刀',
                    init: 5
    },
                {
                    name: '窑业',
                    init: 5
    },
                {
                    name: '人形',
                    init: 5
    },
                {
                    name: '着物',
                    init: 5
    },
                {
                    name: '织物',
                    init: 5
    },
                {
                    name: '和纸',
                    init: 5
    },
                {
                    name: '歌唱',
                    init: 5
    },
                {
                    name: '舞蹈',
                    init: 5
    },
            ]
    }
    },
    {
        name: '妙手',
        init: 10
    },
    {
        name: '锁匠',
        init: 1
    },
    {
        name: '电气维修',
        init: 10
    },
    {
        name: '机械维修',
        init: 10
    },
    {
        name: '导航',
        init: 10
    },
    {
        name: '骑术',
        init: 5
    },
    {
        name: '操作重型机械',
        init: 1
    },
    {
        name: '汽车驾驶',
        init: 20
    },
    {
        name: '驾驶',
        init: 1,
        group: {
            show: [ '' ],
            skills: [
                {
                    name: '船',
                    init: 1
    },
                {
                    name: '马车',
                    init: 1
    },
                {
                    name: '飞行器',
                    init: 1
    },
            ]
    }
    },
    {
        name: '驯兽',
        init: 5
    },
    {
        name: '计算机使用Ω',
        displayName: '计算机',
        init: 5
    },
    {
        name: '格斗',
        init: 0,
        group: {
            show: [ '斗殴', '' ],
            skills: [
                {
                    name: '斗殴',
                    init: 25
    },
                {
                    name: '刀剑',
                    init: 20
    },
                {
                    name: '矛',
                    init: 20
    },
                {
                    name: '斧',
                    init: 15
    },
                {
                    name: '绞索',
                    init: 15
    },
                {
                    name: '链锯',
                    init: 10
    },
                {
                    name: '链枷',
                    init: 10
    },
                {
                    name: '鞭',
                    init: 5
    },
            ]
    }
    },
    {
        init: 0,
        name: '射击',
        group: {
            show: [ '手枪', '' ],
            skills: [
                {
                    name: '手枪',
                    init: 20
    },
                {
                    name: '步/霰',
                    init: 25
    },
                {
                    name: '冲锋枪',
                    init: 15
    },
                {
                    name: '弓弩',
                    init: 15
    },
                {
                    name: '机枪',
                    init: 10
    },
                {
                    name: '重武器',
                    init: 10
    },
            ]
    }
    },
    {
        name: '闪避',
        init: 0,
        initPlaceholder: '0'
    },
    {
        name: '投掷',
        init: 20
    },
    {
        name: '武术',
        init: 15,
        group: {
            show: [ '', '' ],
            skills: [
                { name: '合气道', init: 15 },
                { name: '居合', init: 15 },
                { name: '柔术', init: 15 },
                { name: '空手道', init: 15 },
                { name: '剑道', init: 15 },
                { name: '弓道', init: 15 },
                { name: '薙刀', init: 15 },
                { name: '忍术', init: 15 },
                { name: '太极', init: 15 },
            ]
    }
    },
    {
        name: '爆破',
        init: 1
    },
    {
        name: '炮术',
        init: 1
    },
    {
        name: '急救',
        init: 30
    },
    {
        name: '医学',
        init: 1
    },
    {
        name: '精神分析',
        init: 1
    },
    {
        name: '催眠',
        init: 1
    },
    {
        name: '东方医学',
        displayName: '中医',
        init: 25,
        group: {
            show: [ '', '' ],
            skills: [
                { name: '针术', init: 25 },
                { name: '指压', init: 25 },
                { name: '灸术', init: 25 },
                { name: '药术', init: 25 },
            ]
    }
    },
    {
        name: '会计',
        init: 5
    },
    {
        name: '法律',
        init: 5
    },
    {
        name: '历史',
        init: 5
    },
    {
        name: '考古学',
        init: 1
    },
    {
        name: '博物学',
        init: 10
    },
    {
        name: '武士道',
        init: 10
    },
    //   {
    //     name: '通灵',
    //     init: 5,
    //     intro: '与灵体、精怪、鬼神等超自然存在进行沟通与交涉的能力，可能涉及降灵术、灵视、灵媒等技术。',
    //   },
    {
        name: '风水',
        init: 15
    },
    {
        name: '稽古',
        init: 5,
        group: {
            show: [ '' ],
            skills: [
                { name: '茶道', init: 5 },
                { name: '书道', init: 5 },
                { name: '花道', init: 5 },
                { name: '琴道', init: 5 },
                { name: '三味线', init: 5 },
            ]
    }
    },
    {
        name: '神秘学',
        init: 5
    },
    {
        name: '电子学Ω',
        displayName: '电子学',
        init: 1
    },
    {
        name: '科学',
        init: 1,
        group: {
            show: [ '', '' ],
            skills: [
                {
                    name: '数学',
                    init: 10
    },
                {
                    name: '物理',
                    init: 1
    },
                {
                    name: '化学',
                    init: 1
    },
                {
                    name: '药学',
                    init: 1
    },
                {
                    name: '地质学',
                    init: 1
    },
                {
                    name: '生物学',
                    init: 1
    },
                {
                    name: '动物学',
                    init: 1
    },
                {
                    name: '植物学',
                    init: 1
    },
                {
                    name: '天文学',
                    init: 1
    },
                {
                    name: '密码学',
                    init: 1
    },
                {
                    name: '气象学',
                    init: 1
    },
                {
                    name: '工程学',
                    init: 1
    },
                {
                    name: '鉴证',
                    init: 1
    },
                {
                    name: '制药',
                    init: 1
    },
            ]
    }
    },
    {
        init: 0,
        name: '',
        group: {
            show: [ '', '', '', '', '', '' ],
            skills: []
    }
    },
]

export const skillNameAlias: Record<string, string[]> = {
    信用评级: [ '信用', '信誉' ],
    克苏鲁神话: [ '克苏鲁' ],
    取悦: [ '魅惑' ],
    汽车驾驶: [ '汽车', '驾驶' ],
    图书馆使用: [ '图书馆' ],
    计算机使用Ω: [ '计算机', '电脑' ],
    '步/霰': [ '步枪', '霰弹枪' ],
    锁匠: [ '开锁', '撬锁' ],
    博物学: [ '自然学' ],
    导航: [ '领航' ],
    操作重型机械: [ '重型机械', '重型操作', '重型' ]
    }
