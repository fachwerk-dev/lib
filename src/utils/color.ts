export function hsl(h = 0, s = 100, l = 50, a = 1): string {
  return `hsl(${h},${s}%,${l}%,${a})`;
}

export const hsla = hsl;
