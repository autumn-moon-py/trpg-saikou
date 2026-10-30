import { watch, h, Fragment, nextTick } from 'vue'
import type { Ref } from 'vue'
import { ElMessageBox } from 'element-plus'

import type { COCPlayerCharacter } from '../types/character'
import type { PageData } from '../types/pageData'
import type { COCCardViewData } from '../types/viewData'
import { createPC } from '../models/character'
import { createRules } from '../models/rules'

import useZhTimeAgo from '@/hooks/useZhTimeAgo'
import useAppLs from './useAppLs'

const ls = useAppLs()

export default function useAutoSave (
    pcRef: Ref<COCPlayerCharacter>,
    options: {
        viewData: COCCardViewData
        pageData: PageData
    },
)
{
    const autoSaved = ls.getItem( 'autoSaved' )
    const { lastModified, pc: savedPC, viewData: savedViewData } = autoSaved || {}
    const { timeAgo } = useZhTimeAgo( lastModified || Date.now() )
    const { viewData, pageData } = options

    watch(
        () => [ pcRef.value, viewData ],
        () =>
        {
            ls.setItem( 'autoSaved', {
                pc: pcRef.value,
                viewData,
                lastModified: Date.now(),
            } )
        },
        {
            deep: true,
        },
    )

    if ( autoSaved )
    {
        nextTick( () =>
        {
            let vnode
            const wasNewFormat = savedViewData?.ruleFormat === 'new'
            try
            {
                vnode = h( Fragment, null, [
                    '是否加载您',
                    h( 'b', { style: { fontWeight: 'bold' } }, timeAgo.value ),
                    '编辑的人物卡',
                    savedPC?.name ? `：${ savedPC.name }` : '',
                ] )
            } catch ( e )
            {
                return
            }
            ElMessageBox.confirm( vnode, '检测到编辑过的人物卡', { showClose: false } ).then( () =>
            {
                pageData.importing = true
                const { pc, showingChildSkillsPatch } = createPC( savedPC!, true, createRules( pageData.useNewRules ), savedViewData )
                pcRef.value = pc
                if ( savedViewData )
                {
                    Object.keys( savedViewData ).forEach( ( key ) =>
                    {
                        const k = key as keyof COCCardViewData
                        viewData[ k ] = savedViewData[ k ] as any
                    } )
                }
                // 恢复后按当前规则标记卡格式
                const currentRules = createRules( pageData.useNewRules )
                if ( !currentRules.revisedSkills && wasNewFormat )
                {
                    if ( viewData.ruleMigration?.revertedToOld )
                    {
                        viewData.ruleFormat = 'new'
                    } else
                    {
                        viewData.ruleFormat = 'old'
                        viewData.ruleMigration = {
                            ...( viewData.ruleMigration ?? {} ),
                            revertedToOld: true,
                        }
                    }
                } else
                {
                    viewData.ruleFormat = currentRules.revisedSkills ? 'new' : 'old'
                }
                // 旧社交技能迁移后，将子技能名填入 showingChildSkills
                if ( showingChildSkillsPatch )
                {
                    for ( const [ key, value ] of Object.entries( showingChildSkillsPatch ) )
                    {
                        viewData.showingChildSkills[ key ] = value
                    }
                }
                nextTick( () =>
                {
                    pageData.importing = false
                } )
            } )
        } )
    }
}
