import { arc } from "d3-shape";
import { deg2rad } from "../lib.esm";
import { resolvePoint } from "../internal/point";
import type { Point } from "./point";

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

export function circlepath(r: number, xOrPoint: Point | number, y?: number) {
  const point = resolvePoint(xOrPoint, y);
  const path = [
    "M",
    `${point.x - r}, ${point.y}`,
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
