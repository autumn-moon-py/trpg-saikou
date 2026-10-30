import { computed, watch } from 'vue';
import type { ComputedRef, Ref } from 'vue';

import { getJob } from '../models/job';
import { getJobSuggestion } from '../models/suggestion';
import { resetShowingChildSkills } from '../models/skill';

import type { COCPlayerCharacter } from '../types/character';
import type { COCCardViewData } from '../types/viewData';
import type { PageData } from '../types/pageData';
import type { Suggestion } from '../types/suggestion';
import type { RuleSet } from '../types/rules';

// calculate suggestion: pro skills, wealth
export default function useSuggestion(
  pc: Ref<COCPlayerCharacter>,
  options: {
    viewData: COCCardViewData;
    pageData: PageData;
    rules: ComputedRef<RuleSet>;
  },
): ComputedRef<Suggestion> {
  const { viewData, pageData, rules } = options;

  const suggestion = computed(() => {
    return getJobSuggestion(pc.value.job, rules.value);
  });

  watch(
    () => pc.value.job,
    () => {
      const job = getJob(pc.value.job, rules.value);
      if (!job || pageData.importing) return;
      // pick skills
      viewData.jobSkills = [...job.skills];
      resetShowingChildSkills(viewData, rules.value);
      pc.value.proSkills = [];
      const placedGroupSkill: Record<string, number> = {};
      job.skills.forEach((skillKey) => {
        // 普通技能
        if (typeof skillKey === 'string') {
          pc.value.proSkills.push(skillKey);
        } else if (!Array.isArray(skillKey)) {
          // 二级技能
          const [skillNameDesc, childSkillName] = Object.entries(skillKey)[0];
          let skillName = skillNameDesc;
          const isDescribedName = skillNameDesc.includes('(');
          if (isDescribedName) {
            skillName = skillName.split('(')[0];
          }
          // set view data (suggested child skill names)
          const currentData = viewData.showingChildSkills[skillName];
          if (!currentData) return;
          let cIndex = -1;
          if (childSkillName) {
            // 技能 - Name:ChildName
            cIndex = currentData.findIndex((cName) => cName === childSkillName);
            if (cIndex === -1) {
              cIndex = currentData.findIndex((cName) => !cName);
              currentData[cIndex] = childSkillName;
            }
          } else {
            // 技能 - Name:any
            const count = placedGroupSkill[skillName] || 0;
            let skip = count;
            cIndex = currentData.findIndex((cName) => {
              if (cName) return false;
              return skip-- === 0;
            });
            placedGroupSkill[skillName] = count + 1;
          }
          if (cIndex === -1) return;
          // set pc data
          pc.value.proSkills.push([skillName, childSkillName, cIndex]);
        }
      });
      delete viewData.jobSkills;
    },
  );

  return suggestion;
}
