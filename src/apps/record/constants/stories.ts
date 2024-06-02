import StoryNames from '../types/name';
import type { Story } from '../types/story';

const stories: Story[] = [
  // 入门
  [StoryNames.通向庭院之歌, '1920s', '美国-阿卡姆', [4, 6], { welcome: true }],
  [StoryNames.湖之仆从, '1920s', '美国-阿卡姆', [4, 6], { welcome: true }],
  [StoryNames.无尽食欲, '现代', '日本', [4, 5], { welcome: true }],
  [StoryNames.雨势未停, '现代', '边远渔港', [4, 6], { welcome: true }],
  // 短篇
  [StoryNames.只有猫知道的世界, '2010s', '中国/日本', [4, 6]],
  [StoryNames.肉骨血养, '1990s', '中国', [4, 6]],
  [StoryNames.周而复始, '1995', '中国', [5, 6]],
  [StoryNames.醒来, '2003', '中国', [5, 6]],
  [StoryNames.大幕山, '2003', '中国', [4, 6]],
  [StoryNames.风门秘影, '2007', '中国', [4, 6]],
  [StoryNames.死光, '1920s', '美国-阿卡姆', [4, 5]],
  [StoryNames.罪孽之人, '1920s', '美国-阿卡姆', [5, 6]],
  [StoryNames.黄字的研究, '1920s', '美国-阿卡姆', [4, 6]],
  [StoryNames.灰色残渣, '1920s', '美国-阿卡姆', [5, 6]],
  [StoryNames.疯狂的艺术, '1920s', '美国-阿卡姆', [5, 6]],
  [StoryNames.爱的孤儿, '现代', '美国', [4, 6]], // 成人要素
  [StoryNames.复足, '现代', '美国', [4, 6]],
  [StoryNames.不息的渴望, '1920s', '英国', [4, 6]],
  [StoryNames.死亡铭刻, '2010s', '日本', [4, 6]],
  [StoryNames.不夜城的苍白之颜, '2010s', '日本', [4, 6]],
  [StoryNames.亲密邂逅, '2023', '未知', [5, 6]],
  // 中篇
  [StoryNames.黑水溪, '1920s', '美国-阿卡姆', [6, 10]],
  [StoryNames.芝加哥之王, '1920s', '美国-芝加哥', [6, 9]],
  [StoryNames.燃烧的星辰, '1930', '美国/海地', [6, 9]],
  [StoryNames.冬雪之下, '2019', '美国', [6, 8]],
  [StoryNames.勿忘我, '现代', '美国', [8, 10]],
  [StoryNames['小瓢虫，快回家'], '现代', '美国', [8, 10]],
  [StoryNames['狂气之峰~邪神的山岭'], '现代', '南极', [6, 8]],
  [StoryNames['狂气之峰~寻梦未知之峰'], '现代', '未知', [6, 8]],
  [StoryNames.原爆点, '2019', '意大利', [8, 10]],
  // 长篇
  [StoryNames.共斗, '1998', '中国-北京', [12, 18]],
  [StoryNames.谢娘娘点化, '2000', '中国-湖北', [10, 12]],
  [
    StoryNames.行走在黑暗中的人们的宴会,
    '现代',
    '日本-东京/中国-香港',
    [10, 15],
  ],
  [StoryNames.列宁格勒之影, '1927', '苏联-列宁格勒', [15, 20]],
  [StoryNames.岸上星辰, '1920s', '美国', [25, 30]],
  // 战役
  [
    StoryNames.奈亚拉托提普的面具,
    '1921',
    '秘鲁/美国/英格兰/埃及/澳大利亚/肯尼亚/中国',
    [50, 100],
  ],
  [StoryNames.东方快车上的恐怖, '1923', '欧洲', [50, 100]],
  [StoryNames.阿撒托斯的红眼, '多年代', '多地域', [40, 70]],
  // 特殊规则
  [StoryNames.挖掘死去之神, '1939', '非洲', [4, 6], { secret: true }],

  // 暂时下架
  [StoryNames.音乐节与触手之爱, '现代', '美国', [4, 6], { inactive: true }],
  [StoryNames.冷杉下的低语, '1920s', '美国-阿卡姆', [4, 6], { inactive: true }],
  [StoryNames.飞越疯人院, '1920s', '美国-阿卡姆', [4, 6], { inactive: true }],
  [StoryNames.来自群星的杀手, '现代', '美国', [4, 6], { inactive: true }],
  [StoryNames.海月之下, '1923', '中国-天津', [4, 6], { inactive: true }],
  [StoryNames.比黑更黑, '1920s', '美国-阿卡姆', [4, 6], { inactive: true }],
  [StoryNames.普罗维登斯的阴霾, '1920s', '美国', [4, 5], { inactive: true }],
  [StoryNames.阳光营地, '未知', '未知', [4, 6], { inactive: true }],
  [
    StoryNames.我的妹妹想让你受点苦,
    '未知',
    '未知',
    [5, 6],
    { special: true, inactive: true },
  ],
  [StoryNames.女巫的刻印, '1920s', '美国', [4, 6], { inactive: true }],
  [StoryNames.镜头光影之笼, '现代', '美国', [4, 5], { inactive: true }],

  // 测试团
  [StoryNames.维娜·斯塔尔的收音机, '1920s', '美国', [4, 6], { inactive: true }],

  // 其它店铺
  [
    StoryNames.夏日怪谈,
    '1980s',
    '美国',
    [3, 6],
    { welcome: true, store: '沉世-上海' },
  ],
  [StoryNames.瘟疫, '现代', '美国', [3, 6], { store: '赵四' }],
  [StoryNames.今晚加餐, '现代', '美国', [1, 2], { store: '赵四' }],
];

export default stories;
