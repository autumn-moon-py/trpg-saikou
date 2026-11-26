/// <reference types="vite/client" />

declare module 'qs';

/** exe 版通过右键菜单/文件关联传入的角色卡数据 */
interface TrpgDesktopOpenCardPayload {
  name: string;
  content: string;
}

interface TrpgDesktopApi {
  isElectron: boolean;
  isWindows: boolean;
  /** 取出启动时暂存的卡数据（例如通过右键菜单启动） */
  pullPendingCard: () => Promise<TrpgDesktopOpenCardPayload | null>;
  /** 应用已运行时再次打开文件，返回取消监听的函数 */
  onOpenCard: (
    callback: (payload: TrpgDesktopOpenCardPayload) => void,
  ) => () => void;
}

interface Window {
  trpgDesktop?: TrpgDesktopApi;
}
