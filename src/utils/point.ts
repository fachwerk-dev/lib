import { pol2car, range, remap, seq } from ".";
import { resolvePoint } from "../internal/point";

export type Point = {
  x: number;
  y: number;
};

export function rectpoints(
  width: number,
  height: number,
  xOrPoint: Point | number,
  y?: number
): Point[] {
  const point = resolvePoint(xOrPoint, y);
  return [
    { x: point.x, y: point.y },
    { x: point.x + width, y: point.y },
    { x: point.x + width, y: point.y + height },
    { x: point.x, y: point.y + height },
  ];
}

export function linepoints(count: number, step: number): Point[] {
  return seq(count).map((x) => ({ x: x * step, y: 0 }));
}

export function circlepoints(count: number, r: number): Point[] {
  return seq(count).map((a) => pol2car(a * (360 / count), r));
}

export function rectgridpoints(count: number, step: number): Point[] {
  return seq(count).flatMap((y) =>
    linepoints(count, step).map(({ x }) => ({ x, y: y * step }))
  );
}

export function circlegridpoints(count: number, step: number): Point[] {
  return seq(count).flatMap((r) => circlepoints(count, r * step));
}
