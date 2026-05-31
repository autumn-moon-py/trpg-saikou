/**
 * 平台检测工具
 *
 * 以屏幕宽高比为统一判断依据：
 * - 高 ≥ 宽 → mobile（竖屏 / 手机排版）
 * - 宽 > 高 → desktop（横屏 / Web 排版）
 *
 * 优先使用 Screen Orientation API 从物理传感器读取，
 * 兜底使用 viewport 尺寸对比，覆盖折叠屏等兼容性场景。
 * 所有有差异化 UI 的组件都应以此为准。
 */
import { ref } from 'vue';

function detectOrientation(): 'mobile' | 'desktop' {
  // Screen Orientation API：直接读取物理方向，折叠屏等设备最可靠
  if (typeof screen !== 'undefined' && screen?.orientation?.type) {
    return screen.orientation.type.startsWith('portrait') ? 'mobile' : 'desktop';
  }
  // 兜底：viewport 尺寸对比
  return window.innerWidth > window.innerHeight ? 'desktop' : 'mobile';
}

/** 响应式平台状态 */
export const platform = ref<'mobile' | 'desktop'>(detectOrientation());

// resize 兜底
window.addEventListener('resize', () => {
  platform.value = detectOrientation();
});
// Screen Orientation API 变化事件
if (typeof screen !== 'undefined' && screen?.orientation) {
  screen.orientation.addEventListener('change', () => {
    platform.value = detectOrientation();
  });
} else {
  // 老旧浏览器兜底
  window.addEventListener('orientationchange', () => {
    setTimeout(() => { platform.value = detectOrientation(); }, 100);
  });
}

/** 当前是否为移动排版（竖屏，高 ≥ 宽） */
export function isMobile(): boolean {
  return platform.value === 'mobile';
}

/** 当前是否为桌面排版（横屏，宽 > 高） */
export function isDesktop(): boolean {
  return platform.value === 'desktop';
}
