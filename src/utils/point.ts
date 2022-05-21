import { pol2car, seq } from ".";

export type Point = [x: number, y: number];

export function rectpoints(
  width: number,
  height: number,
  position: Point = [0, 0]
): Point[] {
  const [px, py] = position;
  return [
    [px, py],
    [px + width, py],
    [px + width, py + height],
    [px, py + height],
  ];
}

export function circlepoints(
  length: number,
  r: number,
  position: Point = [0, 0]
): Point[] {
  const [px, py] = position;

  return seq(length, (n) => n * (360 / length))
    .map((a) => pol2car(a, r))
    .map(([x, y]) => [x + px, y + py]);
}

export function rectgridpoints(
  length: number,
  step: number,
  position: Point = [0, 0]
): Point[] {
  const [px, py] = position;
  return seq(length, (y) =>
    seq(length, (x) => [x * step + px, y * step + py])
  ).flat();
}
