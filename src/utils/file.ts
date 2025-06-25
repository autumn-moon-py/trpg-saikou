export function downloadFile ( url: string, title: string )
{
    if ( ( window as any ).downloadAndSaveFile )
    {
        ( window as any ).downloadAndSaveFile( url, title )
    } else
    {
        const a = document.createElement( 'a' )
        a.href = url
        a.download = title
        a.click()
    }
}