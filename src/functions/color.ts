export function hsl(h = 0, s = 100, l = 50, a = 1): string {
  return `hsl(${h},${s}%,${l}%,${a})`;
}

export const hsla = hsl;

export function rgb(r = 0, g = 0, b = 0, a = 1): string {
  return `rgb(${r},${g},${b},${a})`;
}

export const rgba = rgb;
