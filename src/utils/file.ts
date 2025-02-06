// TODO 下载文件,打包时检查
export function downloadFile ( url: string, title: string )
{
    // const a = document.createElement( 'a' )
    // a.href = url
    // a.download = title
    // a.click()
    ( window as any ).downloadAndSaveFile( url, title )
}