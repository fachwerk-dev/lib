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

export function circlepoints(count: number, r: number): Point[] {
  return range(count).map((a) => pol2car(a * (360 / count), r));
}

export function rectgridpoints(count: number, step: number): Point[] {
  return range(count).flatMap((y) =>
    linepoints(count, step).map(({ x }) => ({ x, y: y * step }))
  );
}

export function circlegridpoints(count: number, step: number): Point[] {
  return range(count).flatMap((r) => circlepoints(count, r * step));
}
