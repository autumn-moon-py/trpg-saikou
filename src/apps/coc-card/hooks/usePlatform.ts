/**
 * 响应式平台检测 composable
 *
 * 用法：
 * ```typescript
 * const isMobileLayout = useIsMobileLayout();
 * ```
 */

import { computed } from 'vue';
import { platform } from '@/utils/platform';
import { usePageData } from '../hooks/useProviders';

/** 响应式移动端布局判断，打印时自动回退桌面布局 */
export function useIsMobileLayout() {
  const pageData = usePageData();
  return computed(() => !pageData?.printing && platform.value === 'mobile');
}
