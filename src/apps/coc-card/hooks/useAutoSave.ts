import { watch, h, Fragment, nextTick } from 'vue'
import type { Ref } from 'vue'
import { ElMessageBox } from 'element-plus'

import type { COCPlayerCharacter } from '../types/character'
import type { PageData } from '../types/pageData'
import type { COCCardViewData } from '../types/viewData'

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
                pcRef.value = savedPC!
                if ( savedViewData )
                {
                    Object.keys( savedViewData ).forEach( ( key ) =>
                    {
                        const k = key as keyof COCCardViewData
                        viewData[ k ] = savedViewData[ k ] as any
                    } )
                }
                nextTick( () =>
                {
                    pageData.importing = false
                } )
            } )
        } )
    }
}
