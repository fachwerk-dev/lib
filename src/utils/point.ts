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

export function linepoints(count: number, step: number): Point[] {
  return range(count).map((x) => ({ x: x * step, y: 0 }));
}

export function circlepoints(count: number, r: number): Point[] | null {
  if (count > 0) {
    return range(0, count - 1).map((a) => pol2car(a * (360 / count), r));
  }
  return null;
}

export function rectgridpoints(count: number, step: number): Point[] {
  return range(0, count - 1).flatMap((y) =>
    linepoints(count, step).map(({ x }) => ({ x, y: y * step }))
  );
}
