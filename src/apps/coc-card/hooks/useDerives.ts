import { watch } from 'vue'
import type { Ref } from 'vue'
import type { COCPlayerCharacter } from '../types/character'

// calculate derive attributes
export default function useDerives ( pc: Ref<COCPlayerCharacter> )
{
    watch(
        () => pc.value.attributes,
        () =>
        {
            let HPMax = ''
            let MPMax = ''
            const { con, siz, pow } = pc.value.attributes || {}
            if ( con && siz ) HPMax = `${ Math.floor( ( con + siz ) / 10 ) }`
            if ( pow ) MPMax = `${ Math.floor( pow / 5 ) }`
            const SANStart = `${ pow || '' }`

            // 当前值为空（含空字符串）时默认取初始值，已有手动填写的值不覆盖
            const existingSanityNow = pc.value.deriveAttributes?.sanity?.now
            const existingHpNow = pc.value.deriveAttributes?.hp?.now
            const existingMpNow = pc.value.deriveAttributes?.mp?.now

            pc.value.deriveAttributes = {
                sanity: {
                    start: SANStart,
                    now: existingSanityNow || SANStart,
                },
                hp: {
                    start: HPMax,
                    now: existingHpNow || HPMax,
                },
                mp: {
                    start: MPMax,
                    now: existingMpNow || MPMax,
                },
            }
        },
        { deep: true },
    )
}
