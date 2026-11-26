import { Capacitor } from '@capacitor/core';

async function readAsBase64(url: string): Promise<string> {
  if (url.startsWith('data:')) {
    return url.slice(url.indexOf(',') + 1);
  }
  const blob = await (await fetch(url)).blob();
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(',')[1] ?? '');
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

async function saveInApp(url: string, title: string) {
  const [{ Directory, Filesystem }, { Share }] = await Promise.all([
    import('@capacitor/filesystem'),
    import('@capacitor/share'),
  ]);
  const { uri } = await Filesystem.writeFile({
    path: title,
    data: await readAsBase64(url),
    directory: Directory.Cache,
    recursive: true,
  });
  await Share.share({ title, url: uri, dialogTitle: '保存或分享文件' });
}

export function downloadFile ( url: string, title: string )
{
    // Capacitor 原生环境：写入缓存后调起系统分享/保存
    if ( Capacitor.isNativePlatform() )
    {
        saveInApp( url, title ).catch( ( error ) =>
        {
            console.error( error );
            alert( '保存失败：' + ( error?.message ?? error ) );
        } )
        return
    }

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
