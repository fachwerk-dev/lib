import { $pol2car, pol2car, range, remap, seq, trunc } from ".";
import { resolvePoint } from "../internal/point";

export type Point = {
  x: number;
  y: number;
};

export type $Point = [x: number, y: number];

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

export function $rectpoints(
  width: number,
  height: number,
  position: $Point = [0, 0]
): $Point[] {
  const [px, py] = position;
  return [
    [px, py],
    [px + width, py],
    [px + width, py + height],
    [px, py + height],
  ];
}

export function linepoints(length: number, step: number): Point[] {
  return seq(length).map((x) => ({ x: x * step, y: 0 }));
}

export function circlepoints(length: number, r: number): Point[] {
  return seq(length).map((a) => pol2car(a * (360 / length), r));
}

export function $circlepoints(
  length: number,
  r: number,
  position: $Point = [0, 0]
): $Point[] {
  const [px, py] = position;

  return seq(length, (n) => n * (360 / length))
    .map((a) => $pol2car(a, r))
    .map(([x, y]) => [x + px, y + py]);
}

export function rectgridpoints(length: number, step: number): Point[] {
  return seq(length).flatMap((y) =>
    linepoints(length, step).map(({ x }) => ({ x, y: y * step }))
  );
}

export function $rectgridpoints(
  length: number,
  step: number,
  position: $Point = [0, 0]
): $Point[] {
  const [px, py] = position;
  return seq(length, (y) =>
    seq(length, (x) => [x * step + px, y * step + py])
  ).flat();
}

export function circlegridpoints(length: number, step: number): Point[] {
  return seq(length).flatMap((r) => circlepoints(length, r * step));
}

// export function $circlegridpoints(
//   length: number,
//   step: number,
//   position: $Point = [0, 0]
// ): $Point[] {
//   return seq(length, (n) => $circlepoints(length, n * step, position)).flat();
// }
