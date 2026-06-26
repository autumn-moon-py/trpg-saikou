import { ElMessage } from 'element-plus';

declare global {
  interface Window {
    uni?: {
      shareWithSystem?: (options: {
        type?: string;
        summary?: string;
        href?: string;
        success?: () => void;
        fail?: (err: unknown) => void;
      }) => void;
    };
    // UniApp 5+ Runtime — 使用 any 处理动态原生桥接
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plus?: any;
  }
}

/**
 * 调用系统分享面板分享文本。
 * 自动检测 UniApp 5+ Android / UniApp uni.shareWithSystem / 浏览器环境，
 * 选择对应的分享 API。
 * @param text 要分享的文本内容
 * @returns true 表示成功调起或被用户取消，false 表示分享失败
 */
export async function shareText(text: string): Promise<boolean> {
  // 1) UniApp 5+ Android — 使用 Native.js Intent 直接调系统分享
  //    不需要 Share 模块，不需要 uni API，纯原生 Intent 实现
  if (typeof window !== 'undefined' && window.plus?.android) {
    try {
      const Intent = window.plus.android.importClass('android.content.Intent');
      const intent = new Intent(Intent.ACTION_SEND);
      intent.setType('text/plain');
      intent.putExtra(Intent.EXTRA_TEXT, text);
      const chooser = Intent.createChooser(intent, '分享到');
      const activity = window.plus.android.runtimeMainActivity();
      activity.startActivity(chooser);
      return true;
    } catch (e) {
      console.warn('plus.android Intent 分享失败:', e);
    }
  }

  // 2) UniApp — uni.shareWithSystem（不需要配置 Share 模块）
  if (typeof window !== 'undefined' && window.uni?.shareWithSystem) {
    try {
      return new Promise<boolean>((resolve) => {
        window.uni!.shareWithSystem!({
          type: 'text',
          summary: text,
          success: () => resolve(true),
          fail: (e: unknown) => {
            console.warn('uni.shareWithSystem 失败:', e);
            resolve(false);
          },
        });
      });
    } catch (e) {
      console.warn('uni.shareWithSystem 异常:', e);
    }
  }

  // 3) 浏览器 Web Share API
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share({ text });
      return true;
    } catch (err: unknown) {
      const e = err as DOMException | undefined;
      if (e?.name !== 'AbortError') {
        ElMessage.error('分享失败');
        return false;
      }
      // 用户取消，静默处理
      return true;
    }
  }

  // 4) 不支持系统分享面板，但数据已复制到剪贴板
  ElMessage.info('已复制到剪贴板，可粘贴到其他应用分享');
  return true;
}

/**
 * 将文本写入剪贴板。
 * 自动检测 UniApp 5+ / 浏览器环境，选择对应的 API。
 * @param text 要写入的文本
 * @returns true 表示成功
 */
export async function writeClipboard(text: string): Promise<boolean> {
  // 1) UniApp 5+ Runtime — Android 原生剪贴板（使用 invoke 高级 API，无需导入类）
  if (typeof window !== 'undefined' && window.plus?.android) {
    try {
      const Context = window.plus.android.importClass('android.content.Context');
      const activity = window.plus.android.runtimeMainActivity();
      const clip = window.plus.android.invoke(activity, 'getSystemService', Context.CLIPBOARD_SERVICE);
      const ClipData = window.plus.android.importClass('android.content.ClipData');
      const clipData = window.plus.android.invoke(ClipData, 'newPlainText', 'text', text);
      window.plus.android.invoke(clip, 'setPrimaryClip', clipData);
      return true;
    } catch (e) {
      console.warn('plus.android clipboard 写入失败:', e);
    }
  }

  // 2) 浏览器 Clipboard API
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // 继续 fallback
    }
  }

  // 3) execCommand fallback
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return true;
  } catch {
    return false;
  }
}

/**
 * 从剪贴板读取文本。
 * 自动检测 UniApp 5+ / 浏览器环境，选择对应的 API。
 * @returns 读取到的文本，或 null 表示无法读取
 */
export async function readClipboard(): Promise<string | null> {
  // 1) UniApp 5+ Runtime — Android 原生剪贴板（使用 invoke 高级 API，无需导入类）
  if (typeof window !== 'undefined' && window.plus?.android) {
    try {
      const Context = window.plus.android.importClass('android.content.Context');
      const activity = window.plus.android.runtimeMainActivity();
      const clip = window.plus.android.invoke(activity, 'getSystemService', Context.CLIPBOARD_SERVICE);
      const clipData = window.plus.android.invoke(clip, 'getPrimaryClip');
      if (clipData) {
        const count = window.plus.android.invoke(clipData, 'getItemCount');
        if (count && count > 0) {
          const item = window.plus.android.invoke(clipData, 'getItemAt', 0);
          const text = window.plus.android.invoke(item, 'getText');
          if (typeof text === 'string' && text) return text;
        }
      }
      return null;
    } catch (e) {
      console.warn('plus.android clipboard 读取失败:', e);
    }
  }

  // 2) 浏览器 Clipboard API
  if (typeof navigator !== 'undefined' && navigator.clipboard?.readText) {
    try {
      const text = await navigator.clipboard.readText();
      return text || null;
    } catch {
      // 继续 fallback
    }
  }

  // 3) execCommand('paste') — 大多数现代浏览器已禁用
  try {
    const textarea = document.createElement('textarea');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.focus();
    const success = document.execCommand('paste');
    const text = textarea.value;
    document.body.removeChild(textarea);
    if (success && text) return text;
  } catch {
    // fallback
  }

  return null;
}
