import { ElMessage } from 'element-plus';

declare global {
  interface Window {
    uni?: {
      share?: (options: { content: string }) => Promise<void>;
    };
  }
}

/**
 * 调用系统分享面板分享文本。
 * 自动检测 UniApp / 浏览器环境，选择对应的分享 API。
 * @param text 要分享的文本内容
 * @returns true 表示成功调起或被用户取消，false 表示环境不支持
 */
export async function shareText(text: string): Promise<boolean> {
  // 1) UniApp 环境优先
  if (typeof window !== 'undefined' && window.uni?.share) {
    try {
      await window.uni.share({ content: text });
      return true;
    } catch {
      // 用户取消或其他异常，静默处理
      return true;
    }
  }

  // 2) 浏览器 Web Share API
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share({ text });
      return true;
    } catch (err: unknown) {
      const e = err as DOMException | undefined;
      if (e?.name !== 'AbortError') {
        ElMessage.error('分享失败');
      }
      return true;
    }
  }

  // 3) 不支持
  ElMessage.info('已复制，当前环境不支持系统分享');
  return false;
}
