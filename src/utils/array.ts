export function seq(
  count: number,
  step: number | ((current: number) => any) = 1,
  start: number = 0
) {
  return Array.from({ length: count }).map((_, i) =>
    typeof step === "function" ? step(i + start) : i * step + start
  );
}

export function range(from: number, to: number, step: number = 1): number[] {
  const reversed = to < from;
  if (reversed) {
    [to, from] = [from, to];
  }
  const length = Math.floor((to - from) / step) + 1;
  const output = seq(length, step, from);
  return reversed ? output.reverse() : output;
}
