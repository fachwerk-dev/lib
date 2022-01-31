import { pol2car, range, remap } from ".";

export type Point = {
  x: number;
  y: number;
};

export function rectpoints(
  x: number,
  y: number,
  width: number,
  height: number
): Point[] {
  return [
    { x, y },
    { x: x + width, y },
    { x: x + width, y: y + height },
    { x, y: y + height },
  ];
}

export function linepoints(
  count: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): Point[] {
  return range(0, count - 1).map((i) => ({
    x: remap(i, 0, count - 1, x1, x2),
    y: remap(i, 0, count - 1, y1, y2),
  }));
}

export function circlepoints(count: number, r: number): Point[] | null {
  if (count > 0) {
    return range(0, count - 1).map((a) => pol2car(a * (360 / count), r));
  }
  return null;
}
