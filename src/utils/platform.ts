/**
 * 平台检测工具
 *
 * 每次调用实时检测，不缓存，以支持 DevTools 模拟切换。
 * 组件中配合 resize 事件实现响应式切换。
 */

import { ref } from 'vue';

function detectPlatform(): 'mobile' | 'desktop' {
  const ua = navigator.userAgent;
  if (
    ua.includes('Electron') ||
    (typeof (window as any).process?.versions?.electron === 'string')
  ) {
    return 'desktop';
  }
  if (/Mobile|Android|iPhone|iPad|iPod/i.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
}

/** 响应式平台状态，resize 时自动更新 */
export const platform = ref(detectPlatform());
window.addEventListener('resize', () => {
  platform.value = detectPlatform();
});

/** 当前是否为移动端（竖屏布局） */
export function isMobile(): boolean {
  return platform.value === 'mobile';
}

/** 当前是否为电脑端（横屏布局） */
export function isDesktop(): boolean {
  return platform.value === 'desktop';
}
