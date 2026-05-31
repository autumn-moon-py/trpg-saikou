import { reactive, nextTick } from 'vue';
import { toJpeg } from 'html-to-image';

interface PaperEls {
  front: HTMLElement;
  back: HTMLElement;
}
interface PaperImages {
  front?: string;
  back?: string;
}
type PaperKey = keyof PaperEls;

const A4_W = 210 * 8;
const A4_H = 297 * 8;

async function printEl(el: HTMLElement) {
  if (!el) return '';

  // 1. 按 DOM 自然尺寸截图
  const dataUrl = await toJpeg(el, {
    pixelRatio: 2,
    quality: 1,
    skipFonts: true,
  });

  // 2. 加载图片获取真实尺寸
  const img = await loadImage(dataUrl);

  // 3. 等比缩放适配 A4 画布（contain 模式，不变形）
  const scale = Math.min(A4_W / img.naturalWidth, A4_H / img.naturalHeight);
  const drawW = Math.round(img.naturalWidth * scale);
  const drawH = Math.round(img.naturalHeight * scale);
  const offsetX = Math.round((A4_W - drawW) / 2);
  const offsetY = Math.round((A4_H - drawH) / 2);

  // 4. 绘制到 A4 画布
  const canvas = document.createElement('canvas');
  canvas.width = A4_W;
  canvas.height = A4_H;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, A4_W, A4_H);
  ctx.drawImage(img, offsetX, offsetY, drawW, drawH);

  return canvas.toDataURL('image/jpeg', 0.5);
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function printPaperImage({
  paperEls,
  paperKey,
}: {
  paperEls: PaperEls;
  paperKey?: PaperKey;
}) {
  return new Promise<PaperImages>((resolve) => {
    nextTick(async () => {
      const paperImages: PaperImages = {};
      if (paperKey === undefined || paperKey === 'front') {
        paperImages.front = await printEl(paperEls.front);
      }
      if (paperKey === undefined || paperKey === 'back') {
        paperImages.back = await printEl(paperEls.back);
      }
      resolve(paperImages);
    });
  });
}

export default function usePrintPaper(paperEls: Partial<PaperEls>) {
  const paperImages = reactive({
    front: '',
    back: '',
  });

  async function printPaper(paperKey?: PaperKey) {
    if (!paperEls.front || !paperEls.back) throw 'Setup Error: `paperEls` not exists';

    return printPaperImage({
      paperEls: paperEls as PaperEls,
      paperKey,
    }).then((newImages) => {
      Object.assign(paperImages, newImages);
      return paperImages;
    });
  }

  return {
    paperImages,
    printPaper,
  };
}
