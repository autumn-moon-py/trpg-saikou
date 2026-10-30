import type { Skill } from '../types/skill';
import { skills as baseSkills, skillNameAlias as baseAliases } from './skill';

/** 深拷贝，避免修改基础技能常量 */
function cloneSkill(skill: Skill): Skill {
  return JSON.parse(JSON.stringify(skill));
}

function setChildInit(skill: Skill | undefined, inits: Record<string, number>) {
  skill?.group?.skills.forEach((child) => {
    if (child.name in inits) child.init = inits[child.name];
  });
}

function addChild(skill: Skill | undefined, name: string, init: number) {
  if (!skill?.group) return;
  if (skill.group.skills.some((child) => child.name === name)) return;
  skill.group.skills.push({ name, init });
}

/**
 * 修订版技能表（守秘人伴侣第七版扩展）
 * 保留系统特有技能（东方医学、武士道、稽古、武术等），按文档调整基础值与分组。
 */
function buildRevisedSkills(): Skill[] {
  const list = baseSkills.map(cloneSkill);
  const byName = new Map(list.map((skill) => [skill.name, skill]));

  const inits: Record<string, number> = {
    侦查: 25,
    聆听: 20,
    心理学: 10,
    潜行: 20,
    追踪: 10,
    图书馆使用: 20,
    攀爬: 20,
    跳跃: 20,
    游泳: 20,
    潜水: 1,
    妙手: 10,
    锁匠: 1,
    电气维修: 10,
    机械维修: 10,
    导航: 10,
    骑术: 5,
    操作重型机械: 1,
    汽车驾驶: 20,
    驯兽: 5,
    '计算机使用Ω': 5,
    投掷: 20,
    急救: 30,
    医学: 1,
    精神分析: 1,
    催眠: 1,
    会计: 5,
    法律: 5,
    历史: 5,
    考古学: 1,
    博物学: 10,
    神秘学: 5,
    '电子学Ω': 1,
    爆破: 1,
    炮术: 1,
  };
  Object.entries(inits).forEach(([name, init]) => {
    const skill = byName.get(name);
    if (skill) skill.init = init;
  });

  // 自然学：沿用内部键名"博物学"以兼容旧数据，仅调整显示
  const natural = byName.get('博物学');
  if (natural) natural.displayName = '自然学';

  // 生存：取消专精，改为单一技能 10%
  const survival = byName.get('生存');
  if (survival) {
    survival.init = 10;
    delete survival.group;
  }

  // 艺术/手艺：沿用内部键名"技艺"，加入估价、乔装等专精
  const art = byName.get('技艺');
  if (art) {
    art.displayName = '艺术/手艺';
    art.init = 5;
    if (art.group) {
      art.group.show = ['', '', ''];
      addChild(art, '估价', 5);
      addChild(art, '乔装', 5);
      addChild(art, '文学', 5);
      addChild(art, '艺术史', 5);
      addChild(art, '农艺', 5);
    }
  }

  // 科学：统一基础值 1%，加入人类学、法医学
  const science = byName.get('科学');
  if (science?.group) {
    science.init = 1;
    science.group.show = ['', '', ''];
    science.group.skills.forEach((child) => {
      child.init = 1;
    });
    addChild(science, '人类学', 1);
    addChild(science, '法医学', 1);
  }

  // 格斗专精下限调整
  setChildInit(byName.get('格斗'), {
    斗殴: 25,
    刀剑: 20,
    矛: 20,
    斧: 15,
    绞索: 15,
    链锯: 15,
    链枷: 15,
    鞭: 15,
  });

  // 射击专精下限调整，并加入火焰喷射器
  const shooting = byName.get('射击');
  setChildInit(shooting, {
    手枪: 20,
    '步/霰': 25,
    冲锋枪: 15,
    弓弩: 15,
    机枪: 15,
    重武器: 15,
    火焰喷射器: 15,
  });
  addChild(shooting, '火焰喷射器', 15);

  // 社交技能合并：取悦/话术/恐吓/说服 → 说服
  const removed = new Set(['社交', '估价', '乔装', '人类学']);
  const result: Skill[] = [];
  list.forEach((skill) => {
    if (skill.name === '社交') {
      result.push({ name: '说服', init: 10 });
      return;
    }
    if (removed.has(skill.name)) return;
    result.push(skill);
  });

  // 新技能：运动特长（指定运动项目，可自定义）
  result.push({
    name: '运动特长',
    init: 10,
    group: {
      show: [''],
      skills: [
        { name: '棒球', init: 10 },
        { name: '足球', init: 10 },
        { name: '篮球', init: 10 },
        { name: '排球', init: 10 },
        { name: '网球', init: 10 },
        { name: '羽毛球', init: 10 },
        { name: '游泳', init: 10 },
        { name: '田径', init: 10 },
        { name: '剑道', init: 10 },
        { name: '柔道', init: 10 },
        { name: '弓道', init: 10 },
        { name: '登山', init: 10 },
        { name: '体操', init: 10 },
        { name: '桌球', init: 10 },
      ],
    },
  });
  // 新技能：安抚（五分之一 APP，动态计算）
  result.push({ name: '安抚', init: 0 });
  // 新技能：宗教（10%，分专精）
  result.push({
    name: '宗教',
    init: 10,
    group: {
      show: [''],
      skills: [
        { name: '基督教', init: 10 },
        { name: '伊斯兰教', init: 10 },
        { name: '佛教', init: 10 },
        { name: '道教', init: 10 },
        { name: '犹太教', init: 10 },
        { name: '印度教', init: 10 },
        { name: '萨满教', init: 10 },
        { name: '神道教', init: 10 },
        { name: '拉科塔', init: 10 },
      ],
    },
  });
  // 新技能：读唇
  result.push({ name: '读唇', init: 1 });

  return result;
}

export const revisedSkills: Skill[] = buildRevisedSkills();

export const revisedSkillNameAlias: Record<string, string[]> = (() => {
  const aliases = { ...baseAliases };
  // 修订版已将"博物学"显示为"自然学"，避免骰娘指令重复输出
  delete aliases['博物学'];
  return aliases;
})();
