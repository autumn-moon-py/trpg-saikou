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

            // TODO 缓存读取当前理智
            const existingSanityNow = pc.value.deriveAttributes?.sanity?.now

            pc.value.deriveAttributes = {
                sanity: {
                    start: `${ pow || '' }`,
                    now: existingSanityNow,
                },
                hp: {
                    start: HPMax,
                },
                mp: {
                    start: MPMax,
                },
            }
        },
        { deep: true },
    )
}
