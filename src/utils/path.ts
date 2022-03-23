import { arc } from "d3-shape";
import { deg2rad } from "../lib.esm";
import { resolvePoint } from "../internal/point";
import { Point, _Point, rectgridpoints, _rectpoints } from "./point";
import { rectpoints } from ".";

export function polygonpath(points: Point[], closed: boolean = false): string {
  const start = points.shift();

  const path = [
    "M",
    `${start?.x || 0},${start?.y || 0}`,
    ...points.map((p) => `L ${p.x},${p.y}`),
    closed ? "Z" : "",
  ]
    .join(" ")
    .trim();

  return path;
}

export function _polygonpath(
  points: _Point[],
  closed: boolean = false
): string {
  const [startX, startY] = points.shift() || [0, 0];

  const path = [
    "M",
    `${startX || 0},${startY}`,
    ...points.map(([x, y]) => `L ${x},${y}`),
    closed ? "Z" : "",
  ]
    .join(" ")
    .trim();

  return path;
}

export function rectpath(
  width: number,
  height: number,
  xOrPoint: Point | number,
  y?: number
) {
  return polygonpath(rectpoints(width, height, xOrPoint, y), true);
}

export function _rectpath(
  width: number,
  height: number,
  position: _Point = [0, 0]
) {
  return _polygonpath(_rectpoints(width, height, position), true);
}

export function circlepath(r: number, xOrPoint: Point | number, y?: number) {
  const originPoint = resolvePoint(xOrPoint, y);
  const path = [
    "M",
    `${originPoint.x - r}, ${originPoint.y}`,
    `a ${r},${r} 0 1,0 ${r * 2},0`,
    `a ${r},${r} 0 1,0 -${r * 2},0`,
  ]
    .join(" ")
    .trim();

  return path;
}

export function _circlepath(r: number, position: _Point) {
  const [x, y] = position;
  const path = [
    "M",
    `${x - r}, ${y}`,
    `a ${r},${r} 0 1,0 ${r * 2},0`,
    `a ${r},${r} 0 1,0 -${r * 2},0`,
  ]
    .join(" ")
    .trim();

  return path;
}

export function arcpath(
  startAngle: number,
  endAngle: number,
  innerRadius: number,
  outerRadius?: number,
  cornerRadius?: number
): string | null {
  //@ts-ignore
  return arc()
    .startAngle(deg2rad(startAngle))
    .endAngle(deg2rad(endAngle))
    .innerRadius(innerRadius)
    .outerRadius(outerRadius || innerRadius)
    .cornerRadius(cornerRadius || 0)();
}

export function rectgridpath(count: number, step: number): string {
  return rectgridpoints(count, step)
    .map((point) => rectpath(step, step, point))
    .join("");
}
