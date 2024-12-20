export function downloadFile ( url: string, title: string )
{
    const a = document.createElement( 'a' )
    a.href = url
    a.download = title
    a.click()
}

// export function downloadFile ( url: string, title: string )
// {
//     (window as any).downloadAndSaveFile(url, title);
// }