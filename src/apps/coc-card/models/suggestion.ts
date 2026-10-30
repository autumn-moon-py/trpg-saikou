import { getJob } from './job';
import { getSkills } from './skill';
import { countTexts } from '../constants/texts';
import { DEFAULT_RULES } from '../types/rules';

import type { Suggestion, SuggestionMultiSkill } from '../types/suggestion';
import type { RuleSet } from '../types/rules';

export function getDefaultSuggestion(
  override?: Partial<Suggestion>,
): Suggestion {
  return {
    wealth: [-1, -1],
    text: '',
    multiSkills: [],
    multiSkillTexts: [],
    ...override,
  };
}

export function getJobSuggestion(
  jobName: string,
  rules: RuleSet = DEFAULT_RULES,
): Suggestion {
  const suggestion = getDefaultSuggestion();

  const job = getJob(jobName, rules);
  const sugMap = new Map<string, number>();
  if (!job) return suggestion;
  const displayNames = new Map(
    getSkills(rules).map((skill) => [skill.name, skill.displayName ?? skill.name]),
  );
  const displayName = (name: string) => displayNames.get(name) ?? name;
  // wealth
  suggestion.wealth = [...job.wealth];
  // handle suggest skills
  job.skills.forEach((skillKey) => {
    // 普通技能
    if (typeof skillKey === 'string') {
      sugMap.set(displayName(skillKey), 0);
    } else if (Array.isArray(skillKey)) {
      // 多选技能
      suggestion.multiSkills.push(
        skillKey.map((skillKey) => {
          if (typeof skillKey === 'string') return displayName(skillKey);
          const [name, childName] = Object.entries(skillKey)[0];
          return { name: displayName(name), childName };
        }),
      );
    } else {
      // 二级技能
      const [skillNameDesc, childSkillName] = Object.entries(skillKey)[0];
      let skillName = skillNameDesc;
      const isDescribedName = skillNameDesc.includes('(');
      if (isDescribedName) {
        skillName = skillName.split('(')[0];
      }
      // set suggestion item
      let sugKey = displayName(skillName);
      if (childSkillName) sugKey = `${displayName(skillName)}(${childSkillName})`;
      if (isDescribedName) {
        sugKey = `${displayName(skillName)}${skillNameDesc.slice(skillName.length)}`;
      }
      sugMap.set(
        sugKey,
        isDescribedName || childSkillName ? 0 : (sugMap.get(sugKey) || 0) + 1,
      );
    }
  });
  // set suggestion
  const parts = [...sugMap.entries()].map(
    ([key, count]) => `${key}${count ? `(任${countTexts[`${count}`]})` : ''}`,
  );
  const freeSkills = job.freeSkills?.length
    ? job.freeSkills
    : (() => {
        const restCount = Math.max(0, 8 - job.skills.length);
        return restCount ? [{ name: '其他个人或时代特长', count: restCount }] : [];
      })();
  freeSkills.forEach(({ name, count }) => {
    parts.push(`${name}${count ? `(任${countTexts[`${count}`]})` : ''}`);
  });
  suggestion.text = parts.join('、');
  // set mutil skill texts
  suggestion.multiSkillTexts = getMultiSkillTexts(suggestion);

  return suggestion;
}

function getMultiSkillTexts(suggestion: Suggestion) {
  const multiSkillsInfo: [SuggestionMultiSkill, number, string][] = [];
  suggestion.multiSkills.forEach((multiSkill) => {
    const eIndex = multiSkillsInfo.findIndex(([eMultiSkill]) => {
      const isSame = eMultiSkill.every((eMultiSkillItem, index) => {
        const multiSkillItem = multiSkill[index];
        if (typeof eMultiSkillItem === 'string')
          return eMultiSkillItem === multiSkillItem;
        if (typeof multiSkillItem === 'string') return false;
        return (
          eMultiSkillItem.name === multiSkillItem.name &&
          eMultiSkillItem.childName === multiSkillItem.childName
        );
      });
      return isSame;
    });
    if (eIndex === -1) {
      multiSkillsInfo.push([multiSkill, 1, countTexts[`${multiSkill.length}`]]);
    } else {
      multiSkillsInfo[eIndex][1] += 1;
    }
  });

  const multiSkillsTexts = multiSkillsInfo.map((info) => {
    const skillInfos = info[0];
    const skillText = skillInfos.map((skillInfo) => {
      let skillName = skillInfo;
      if (typeof skillInfo !== 'string') {
        skillName = `${skillInfo.name}:${skillInfo.childName || '任一'}`;
        if (skillInfo.name === '母语') skillName = '母语';
      }
      return skillName;
    });
    return `${info[2]}选${countTexts[`${info[1]}`]}(${skillText})`;
  });

  return multiSkillsTexts;
}
