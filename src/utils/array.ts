export function range(
  fromOrLength: number,
  to: number | undefined = undefined,
  step: number = 1
): number[] {
  if (to === undefined) {
    return Array.from({ length: fromOrLength }).map((_, i) => i);
  } else {
    const reversed = to < fromOrLength;
    if (reversed) {
      [to, fromOrLength] = [fromOrLength, to];
    }
    const length = Math.floor((to - fromOrLength) / step) + 1;
    const output = Array.from({ length }).map(
      (_, i) => fromOrLength + i * step
    );
    return reversed ? output.reverse() : output;
  }
}
