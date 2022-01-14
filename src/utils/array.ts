export function range(from: number, to: number, step: number = 1): number[] {
  const reversed = to < from;
  if (reversed) {
    [to, from] = [from, to];
  }
  const length = Math.floor((to - from) / step) + 1;
  const output = Array.from({ length }).map((_, i) => from + i * step);
  return reversed ? output.reverse() : output;
}
