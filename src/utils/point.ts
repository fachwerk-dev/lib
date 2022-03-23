import { pol2car, range, remap, seq } from ".";
import { resolvePoint } from "../internal/point";

export type Point = {
  x: number;
  y: number;
};

export type __Point = [x: number, y: number];

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

export function __rectpoints(
  width: number,
  height: number,
  position: __Point = [0, 0]
): __Point[] {
  const [x, y] = position;
  return [
    [x, y],
    [x + width, y],
    [x + width, y + height],
    [x, y + height],
  ];
}

export function linepoints(count: number, step: number): Point[] {
  return seq(count).map((x) => ({ x: x * step, y: 0 }));
}

export function __linexpoints(
  count: number,
  step: number,
  position: __Point = [0, 0]
): __Point[] {
  const [x, y] = position;
  return seq(count, (n) => [n * step + x, y]);
}

export function __lineypoints(
  count: number,
  step: number,
  position: __Point = [0, 0]
): __Point[] {
  const [x, y] = position;
  return seq(count, (n) => [x, n * step + y]);
}

export function __pol2car(a: number = 0, r: number = 0): __Point {
  return [
    Math.cos((a - 90) * (Math.PI / 180)) * r,
    Math.sin((a - 90) * (Math.PI / 180)) * r,
  ];
}

export function circlepoints(count: number, r: number): Point[] {
  return seq(count).map((a) => pol2car(a * (360 / count), r));
}

export function __circlepoints(
  count: number,
  r: number,
  position: __Point = [0, 0]
): __Point[] {
  const [x, y] = position;

  return seq(count, (n) => n * (360 / count))
    .map((a) => __pol2car(a, r))
    .map(([cx, cy]) => [cx + x, cy + y]);
}

export function rectgridpoints(count: number, step: number): Point[] {
  return seq(count).flatMap((y) =>
    linepoints(count, step).map(({ x }) => ({ x, y: y * step }))
  );
}

export function circlegridpoints(count: number, step: number): Point[] {
  return seq(count).flatMap((r) => circlepoints(count, r * step));
}
