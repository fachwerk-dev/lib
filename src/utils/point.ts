import { pol2car, range } from ".";

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

export function circlepoints(count: number, r: number): Point[] | [] {
  if (count > 0) {
    return range(0, count - 1).map((a) => pol2car(a * (360 / count), r));
  }
  return [];
}
