import { throwDice } from '../utils';

import { DEFAULT_RULES } from '../types/rules';
import type { COCAttributes, COCAttributesKey } from '../types/character';
import type { RuleSet } from '../types/rules';

const normalAttrs: COCAttributesKey[] = ['str', 'dex', 'con', 'app', 'pow'];
const higherAttrs: COCAttributesKey[] = ['siz', 'edu', 'int'];
const otherAttrs: COCAttributesKey[] = ['luc'];

export function generateRandomAttributes() {
  const attributes: Partial<COCAttributes> = {};
  normalAttrs.forEach((key) => {
    attributes[key] = throwDice(6, 3) * 5;
  });
  higherAttrs.forEach((key) => {
    attributes[key] = throwDice(6, 2, 6) * 5;
  });
  otherAttrs.forEach((key) => {
    attributes[key] = throwDice(6, 3) * 5;
  });
  return attributes as COCAttributes;
}

export function getAttributesSum(attributes: COCAttributes) {
  const { str, con, dex, app, pow, siz, edu, int } = attributes;
  const vals = [str, con, dex, app, pow, siz, edu, int];
  return vals.reduce<number>((sum, cur) => sum + cur, 0);
}

export function getLuckAttributesSum(attributes: COCAttributes) {
  const { luc } = attributes;
  return getAttributesSum(attributes) + luc;
}

export function withDefaultAttributes(
  attributes: Partial<COCAttributes>,
): COCAttributes {
  return {
    str: 0,
    dex: 0,
    con: 0,
    app: 0,
    pow: 0,
    siz: 0,
    edu: 0,
    int: 0,
    luc: 0,
    ...attributes,
  };
}

/** 根据 STR+SIZ 计算 DB 和体格 */
export function calculateDB(str?: number, siz?: number): { db: string; size: string } | null {
  if (!str || !siz) return null;
  const value = str + siz;
  if (value < 65) return { db: '-2', size: '-2' };
  if (value < 85) return { db: '-1', size: '-1' };
  if (value < 125) return { db: '0', size: '0' };
  if (value < 165) return { db: '1D4', size: '1' };
  if (value < 205) return { db: '1D6', size: '2' };
  const rate = Math.floor((value - 205) / 80) + 2;
  return { db: `${rate}D6`, size: `${rate + 1}` };
}

/** 根据 STR/SIZ/DEX 计算 MOV（不含年龄修正） */
export function calculateMOV(
  str?: number,
  siz?: number,
  dex?: number,
  rules: RuleSet = DEFAULT_RULES,
): string | null {
  if (!str || !siz || !dex) return null;
  // 修订版：基础 7，力量/敏捷高于体型各 +1
  if (rules.revisedMov) {
    let mov = 7;
    if (str > siz) mov += 1;
    if (dex > siz) mov += 1;
    return `${mov}`;
  }
  if (str < siz && dex < siz) return '7';
  if (str > siz && dex > siz) return '9';
  return '8';
}
