import { pol2car, range, remap, seq } from ".";
import { resolvePoint } from "../internal/point";

export type Point = {
  x: number;
  y: number;
};

export type _Point = [x: number, y: number];

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

export function _rectpoints(
  width: number,
  height: number,
  position: _Point = [0, 0]
): _Point[] {
  const [px, py] = position;
  return [
    [px, py],
    [px + width, py],
    [px + width, py + height],
    [px, pxy + height],
  ];
}

export function linepoints(count: number, step: number): Point[] {
  return seq(count).map((x) => ({ x: x * step, y: 0 }));
}

export function _linexpoints(
  count: number,
  step: number,
  position: _Point = [0, 0]
): _Point[] {
  const [px, py] = position;
  return seq(count, (n) => [n * step + px, py]);
}

export function _lineypoints(
  count: number,
  step: number,
  position: _Point = [0, 0]
): _Point[] {
  const [px, py] = position;
  return seq(count, (n) => [px, n * step + py]);
}

export function _pol2car(a: number = 0, r: number = 0): _Point {
  return [
    Math.cos((a - 90) * (Math.PI / 180)) * r,
    Math.sin((a - 90) * (Math.PI / 180)) * r,
  ];
}

export function circlepoints(count: number, r: number): Point[] {
  return seq(count).map((a) => pol2car(a * (360 / count), r));
}

export function _circlepoints(
  count: number,
  r: number,
  position: _Point = [0, 0]
): _Point[] {
  const [px, py] = position;

  return seq(count, (n) => n * (360 / count))
    .map((a) => _pol2car(a, r))
    .map(([x, y]) => [x + px, y + py]);
}

export function rectgridpoints(count: number, step: number): Point[] {
  return seq(count).flatMap((y) =>
    linepoints(count, step).map(({ x }) => ({ x, y: y * step }))
  );
}

export function _rectgridpoints(
  count: number,
  step: number,
  position: _Point = [0, 0]
): _Point[] {
  const [px, py] = position;
  return seq(count, (n) =>
    _lineypoints(count, step).map(([x, y]) => [x + px, y * step + py])
  ).flat();
}

export function circlegridpoints(count: number, step: number): Point[] {
  return seq(count).flatMap((r) => circlepoints(count, r * step));
}

export function _circlegridpoints(
  count: number,
  step: number,
  position: _Point = [0, 0]
): _Point[] {
  return seq(count, (n) => _circlepoints(count, n * step, position)).flat();
}
