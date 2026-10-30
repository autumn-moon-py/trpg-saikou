import { resetShowingChildSkills } from '../models/skill'
import { DEFAULT_RULES } from '../types/rules'

import type { COCCardViewData } from '../types/viewData'
import type { RuleSet } from '../types/rules'

interface ViewDataCreateOption
{
    limitp?: number
    limiti?: number
}

const DEFAULTS: Required<ViewDataCreateOption> = {
    limitp: 80,
    limiti: 70,
}

function defaultViewData (
    option?: Partial<ViewDataCreateOption>,
    rules: RuleSet = DEFAULT_RULES,
): COCCardViewData
{
    const opts = { ...DEFAULTS, ...option }
    return {
        showingChildSkills: resetShowingChildSkills(undefined, rules),
        // 显式 undefined，确保 Object.assign 时清除残留的 jobSkills
        jobSkills: undefined,
        skillLimits: {
            pro: opts.limitp,
            interest: opts.limiti,
        },
        ruleFormat: rules.revisedSkills ? 'new' : 'old',
        ruleMigration: undefined,
    }
}

export function createViewData (
    option?: Partial<ViewDataCreateOption>,
    rules: RuleSet = DEFAULT_RULES,
): COCCardViewData
{
    return defaultViewData( option, rules )
}

export function resetViewData (
    viewData: COCCardViewData,
    rules: RuleSet = DEFAULT_RULES,
)
{
    Object.assign( viewData, defaultViewData(undefined, rules) )
}
