import { resetShowingChildSkills } from '../models/skill'

import type { COCCardViewData } from '../types/viewData'

interface ViewDataCreateOption
{
    limitp?: number
    limiti?: number
}

const DEFAULTS: Required<ViewDataCreateOption> = {
    limitp: 80,
    limiti: 70,
}

function defaultViewData (option?: Partial<ViewDataCreateOption>): COCCardViewData
{
    const opts = { ...DEFAULTS, ...option }
    return {
        showingChildSkills: resetShowingChildSkills(),
        // 显式 undefined，确保 Object.assign 时清除残留的 jobSkills
        jobSkills: undefined,
        skillLimits: {
            pro: opts.limitp,
            interest: opts.limiti,
        },
    }
}

export function createViewData (
    option?: Partial<ViewDataCreateOption>,
): COCCardViewData
{
    return defaultViewData( option )
}

export function resetViewData ( viewData: COCCardViewData )
{
    Object.assign( viewData, defaultViewData() )
}
