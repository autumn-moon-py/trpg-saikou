import { h, nextTick } from 'vue';
import type { Ref } from 'vue';
import { ElMessageBox } from 'element-plus';

import { createPC } from '../models/character';
import { createRules } from '../models/rules';
import { getJob } from '../models/job';
import { skills as baseSkills } from '../constants/skill';
import { revisedSkills } from '../constants/skillRevised';
import { ensureShowingChildSkills } from '../models/skill';

import type { COCPlayerCharacter, SkillPoint } from '../types/character';
import type { COCCardViewData } from '../types/viewData';
import type { PageData } from '../types/pageData';
import type { Skill } from '../types/skill';

const OLD_SOCIAL_NAMES = new Set(['取悦', '话术', '恐吓', '魅惑']);
const ALL_SOCIAL_NAMES = new Set([...OLD_SOCIAL_NAMES, '说服']);
const MOVED_SKILLS: Record<string, { group: string }> = {
  估价: { group: '技艺' },
  乔装: { group: '技艺' },
  人类学: { group: '科学' },
};
const MOVED_SKILL_NAMES = new Set(Object.keys(MOVED_SKILLS));

function hasPoints(point: SkillPoint): boolean {
  return (['b', 'p', 'i', 'g'] as const).some(
    (key) => Number(point[key] ?? 0) !== 0,
  );
}

function getChildMap(skillList: Skill[]): Map<string, Set<string>> {
  const map = new Map<string, Set<string>>();
  skillList.forEach((skill) => {
    if (!skill.group) return;
    map.set(skill.name, new Set(skill.group.skills.map((child) => child.name)));
  });
  return map;
}

function collectEnableWarnings(pc: COCPlayerCharacter): string[] {
  const warnings = new Set<string>();
  const revisedNames = new Set(revisedSkills.map((skill) => skill.name));
  const revisedChildren = getChildMap(revisedSkills);
  const social = new Set<string>();
  const survival = new Set<string>();
  const moved = new Set<string>();
  const unknown = new Set<string>();

  pc.skillPoints.forEach(([key, point]) => {
    if (!hasPoints(point)) return;
    if (typeof key === 'string') {
      if (OLD_SOCIAL_NAMES.has(key)) {
        social.add(key);
        return;
      }
      if (key === '生存') {
        survival.add('生存');
        return;
      }
      if (MOVED_SKILL_NAMES.has(key)) {
        moved.add(key);
        return;
      }
      if (!revisedNames.has(key)) unknown.add(key);
      return;
    }

    const [parent, child] = key;
    // “其它”组的自定义技能不属于任何分组，转换后仍按原名显示
    if (!parent) return;
    if (parent === '社交' || ALL_SOCIAL_NAMES.has(parent)) {
      if (child && child !== '说服') social.add(child);
      return;
    }
    if (parent === '生存') {
      survival.add(child || '生存');
      return;
    }
    if (!revisedNames.has(parent)) {
      unknown.add(parent);
      return;
    }
    if (child && !revisedChildren.get(parent)?.has(child)) {
      unknown.add(`${parent}:${child}`);
    }
  });

  if (social.size) warnings.add(`社交技能将合并为“说服”：${[...social].join('、')}`);
  if (survival.size) warnings.add(`生存专精将合并为单一技能：${[...survival].join('、')}`);
  if (moved.size) warnings.add(`以下独立技能将并入对应专长：${[...moved].join('、')}`);
  if (unknown.size) {
    warnings.add(
      `以下技能在新版技能表中没有对应项，将继续按原名称显示，但不在技能下拉列表中：${[...unknown].join('、')}`,
    );
  }
  if (pc.stories?.IPlace?.trim()) {
    warnings.add('“意义非凡之地”将并入“重要之人与之地”，之后无法自动拆分。');
  }
  return [...warnings];
}

function collectDisableWarnings(
  pc: COCPlayerCharacter,
  viewData: COCCardViewData,
): string[] {
  const warnings = new Set<string>();
  const baseNames = new Set(baseSkills.map((skill) => skill.name));
  const baseChildren = getChildMap(baseSkills);
  const newOnly = new Set<string>();

  pc.skillPoints.forEach(([key, point]) => {
    if (!hasPoints(point)) return;
    if (typeof key === 'string') {
      if (key === '说服' || key === '生存' || MOVED_SKILL_NAMES.has(key)) return;
      if (!baseNames.has(key)) newOnly.add(key);
      return;
    }

    const [parent, child] = key;
    if (parent === '社交' || parent === '生存') return;
    if (MOVED_SKILLS[child]?.group === parent) return;
    if (!baseNames.has(parent)) {
      newOnly.add(parent);
      return;
    }
    if (child && !baseChildren.get(parent)?.has(child)) {
      newOnly.add(`${parent}:${child}`);
    }
  });

  if (newOnly.size) {
    warnings.add(
      `以下新版技能在旧版技能表中没有对应项，转换后可能不显示（数据仍保留）：${[...newOnly].join('、')}`,
    );
  }

  const job = getJob(pc.job, createRules(true));
  if (job?.newRulesOnly) {
    warnings.add(
      `当前职业“${pc.job}”仅新版规则可用，转换回旧版后职业提示和职业点数将不可用。`,
    );
  }

  if (pc.stories?.IPerson?.trim() || pc.stories?.IPlace?.trim()) {
    warnings.add('“重要之人与之地”无法自动拆分回“重要之人”和“意义非凡之地”。');
  }

  const oldShow = new Map<string, number>();
  baseSkills.forEach((skill) => {
    if (skill.group) oldShow.set(skill.name, skill.group.show.length);
  });
  Object.entries(viewData.showingChildSkills ?? {}).forEach(([group, children]) => {
    const limit = oldShow.get(group);
    if (limit === undefined) return;
    const extra = children.slice(limit).filter(Boolean);
    if (extra.length) {
      warnings.add(
        `“${group}”的额外专精（${extra.join('、')}）在旧版技能表中没有对应行，可能不显示。`,
      );
    }
  });

  return [...warnings];
}

function renderWarnings(title: string, warnings: string[]) {
  return h(
    'div',
    { style: 'max-height: 50vh; overflow: auto;' },
    [
      h('p', title),
      h(
        'ul',
        { style: 'padding-left: 1.2em; margin: 8px 0;' },
        warnings.map((warning) =>
          h('li', { style: 'margin: 4px 0; line-height: 1.5;' }, warning),
        ),
      ),
    ],
  );
}

export interface RuleSwitchApi {
  requestChange: (next: boolean) => Promise<void>;
}

export default function useRuleSwitch(
  pcRef: Ref<COCPlayerCharacter>,
  viewData: COCCardViewData,
  pageData: PageData,
): RuleSwitchApi {
  let busy = false;

  const applyPatch = (patch?: Record<string, string[]>) => {
    if (patch) Object.assign(viewData.showingChildSkills, patch);
  };

  async function enable() {
    if (viewData.ruleFormat === 'new') {
      pageData.useNewRules = true;
      return;
    }

    const warnings = collectEnableWarnings(pcRef.value);
    pageData.importing = true;
    try {
      const result = createPC(pcRef.value, true, createRules(true), viewData);
      pcRef.value = result.pc;
      applyPatch(result.showingChildSkillsPatch);
      ensureShowingChildSkills(viewData, createRules(true));
      viewData.ruleFormat = 'new';
      pageData.useNewRules = true;
      await nextTick();
      pageData.importing = false;
    } catch (error) {
      pageData.importing = false;
      pageData.useNewRules = false;
      await ElMessageBox.alert(
        `切换失败：${error instanceof Error ? error.message : String(error)}。已保持旧版规则。`,
        '转换失败',
        { type: 'error', confirmButtonText: '知道了' },
      ).catch(() => {});
      return;
    }

    if (warnings.length) {
      await ElMessageBox.alert(
        renderWarnings('已切换到新版规则并完成自动转换。以下内容已调整：', warnings),
        '转换提示',
        { type: 'warning', confirmButtonText: '知道了' },
      ).catch(() => {});
    }
  }

  async function disable() {
    if (viewData.ruleFormat !== 'new') {
      pageData.useNewRules = false;
      return;
    }

    if (viewData.ruleMigration?.revertedToOld) {
      pageData.useNewRules = false;
      await ElMessageBox.alert(
        h('div', [
          h('p', '这张卡已经自动转换回旧版一次，不能再次自动转换。'),
          h('p', '关闭开关不会再次修改卡数据。如需旧版卡，建议新建卡片。'),
        ]),
        '无法再次转换',
        { type: 'info', confirmButtonText: '知道了' },
      ).catch(() => {});
      return;
    }

    try {
      await ElMessageBox.confirm(
        h('div', [
          h('p', '关闭新版规则会把当前卡转换回旧版格式。'),
          h(
            'p',
            '转换存在数据丢失风险：安抚、宗教、读唇、运动特长等新版技能，以及已合并的背景故事，可能无法完整还原。',
          ),
          h('p', '建议先新建一张卡片，再关闭新版规则。是否继续转换？'),
        ]),
        '关闭新版规则',
        {
          confirmButtonText: '继续转换',
          cancelButtonText: '取消',
          type: 'warning',
        },
      );
    } catch {
      return;
    }

    const warnings = collectDisableWarnings(pcRef.value, viewData);
    pageData.importing = true;
    try {
      const result = createPC(pcRef.value, true, createRules(false), viewData);
      pcRef.value = result.pc;
      applyPatch(result.showingChildSkillsPatch);
      ensureShowingChildSkills(viewData, createRules(false));
      viewData.ruleFormat = 'old';
      viewData.ruleMigration = {
        ...(viewData.ruleMigration ?? {}),
        revertedToOld: true,
      };
      pageData.useNewRules = false;
      await nextTick();
      pageData.importing = false;
    } catch (error) {
      pageData.importing = false;
      pageData.useNewRules = true;
      await ElMessageBox.alert(
        `转换失败：${error instanceof Error ? error.message : String(error)}。已保持新版规则。`,
        '转换失败',
        { type: 'error', confirmButtonText: '知道了' },
      ).catch(() => {});
      return;
    }

    if (warnings.length) {
      await ElMessageBox.alert(
        renderWarnings('已转换回旧版规则。以下内容无法完整转换：', warnings),
        '转换提示',
        { type: 'warning', confirmButtonText: '知道了' },
      ).catch(() => {});
    }
  }

  async function requestChange(next: boolean) {
    if (busy || next === pageData.useNewRules) return;
    busy = true;
    try {
      if (next) await enable();
      else await disable();
    } finally {
      busy = false;
    }
  }

  return { requestChange };
}
