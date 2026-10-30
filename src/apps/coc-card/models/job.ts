import type { JobGroup } from '../types/jobGroup';
import type { Job } from '../types/job';
import type { COCAttributes } from '../types/character';
import type { RuleSet } from '../types/rules';

import { jobs } from '../constants/job';
import { jobGroups } from '../constants/jobGroup';
import {
  jobRevisions,
  fixedCreditRating,
  normalizeJobSkills,
  getSocialCompensation,
} from '../constants/jobRevised';
import { shichifukuJobs } from '../constants/jobShichifuku';
import { pointAttrTexts } from '../constants/texts';
import { DEFAULT_RULES } from '../types/rules';

function formatJobs(jobs: Job[], jobGroups: JobGroup[]) {
  const jobsMap = new Map<string, Job>();
  jobs.forEach((job) => {
    jobsMap.set(job.name, job);
  });
  const formattedGroups = jobGroups.map((jobGroup) => {
    const [jobGroupName, jobGroupPinyin] = jobGroup[0];
    const formattedJobs = jobGroup[1].map(([name, pinyin]) => ({
      name,
      pinyin,
    }));
    return {
      name: jobGroupName,
      pinyin: jobGroupPinyin,
      jobs: formattedJobs,
    };
  });

  return {
    jobs: jobsMap,
    jobGroups: formattedGroups,
  };
}

const jobsData = formatJobs([...jobs, ...shichifukuJobs], jobGroups);

/** 按规则集获取职业：修订规则下使用固定信用评级与调整后的本职技能 */
export function getJob(
  jobName?: string,
  rules: RuleSet = DEFAULT_RULES,
): Job | undefined {
  const job = jobsData.jobs.get(jobName || '');
  if (!job) return undefined;
  // 私立七伏学园等职业仅在新版规则下可用
  if (job.newRulesOnly && !rules.revisedOccupations) return undefined;
  if (!rules.revisedOccupations) return job;

  const revision = jobRevisions[job.name];
  if (revision) {
    return {
      ...job,
      wealth: [revision.wealth, revision.wealth],
      skills: revision.skills,
      bonus: revision.bonus ?? job.bonus,
    };
  }

  const fixed = fixedCreditRating(job.wealth);
  const skills = normalizeJobSkills(job.skills);
  // 社交技能合并为单一“说服”后，按减少的槽位补偿自选特长
  const compensation = job.newRulesOnly ? 0 : getSocialCompensation(job.skills);
  const existingFreeCount = (job.freeSkills ?? []).reduce(
    (sum, item) => sum + item.count,
    0,
  );
  const restCount = Math.max(
    0,
    8 - skills.length - existingFreeCount - compensation,
  );
  const freeSkills =
    compensation > 0
      ? [
          ...(job.freeSkills ?? []),
          { name: '自选特长技能', count: compensation },
          ...(restCount > 0
            ? [{ name: '其他个人或时代特长', count: restCount }]
            : []),
        ]
      : job.freeSkills;
  return {
    ...job,
    wealth: [fixed, fixed],
    skills,
    freeSkills,
  };
}

/** 按规则集获取可见职业分组；仅新版规则的职业在旧规则下隐藏 */
export function getJobGroups(rules: RuleSet = DEFAULT_RULES) {
  if (rules.revisedOccupations) return jobsData.jobGroups;
  return jobsData.jobGroups
    .map((group) => ({
      ...group,
      jobs: group.jobs.filter((job) => !jobsData.jobs.get(job.name)?.newRulesOnly),
    }))
    .filter((group) => group.jobs.length > 0);
}

export function getProPointByJobAndAttrs(
  jobName?: string,
  attrs?: Partial<COCAttributes>,
  rules: RuleSet = DEFAULT_RULES,
) {
  const result = {
    text: '',
    point: 0,
  };
  const job = getJob(jobName, rules);
  if (!job) return result;
  // 职业点数的公式和计算
  const pointTexts: string[] = [];
  if (job.pointAlternatives?.length) {
    // 互斥的完整公式：如 [EDU×2+POW×2] 或 [EDU×4]
    const formulaTexts: string[] = [];
    const formulaValues: number[] = [];
    job.pointAlternatives.forEach((formula) => {
      const parts = formula.map(([key, rate]) => `${pointAttrTexts[key]}×${rate}`);
      formulaTexts.push(parts.join(' + '));
      if (attrs) {
        formulaValues.push(
          formula.reduce((sum, [key, rate]) => sum + (attrs[key] || 0) * rate, 0),
        );
      }
    });
    if (attrs) result.point = Math.max(...formulaValues);
    pointTexts.push(formulaTexts.join(' 或 '));
  } else {
    job.point.forEach((formula) => {
      const textParts: string[] = [];
      const valueParts: number[] = [];

      formula.forEach(([key, rate]) => {
        textParts.push(`${pointAttrTexts[key]}×${rate}`);
        if (attrs) {
          valueParts.push((attrs[key] || 0) * rate);
        }
      });

      let partsText = textParts.join(' 或 ');
      if (textParts.length > 1) partsText = `(${partsText})`;
      pointTexts.push(partsText);

      result.point += Math.max(...valueParts);
    });
  }

  if (job.bonus) {
    result.point += job.bonus;
    pointTexts.push(`${job.bonus}`);
  }

  result.text = pointTexts.join(' + ');

  return result;
}

export default jobsData;
