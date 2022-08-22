import { arc } from "d3-shape";
import svgpath from "svgpath";

import { deg2rad } from "./trig";
import { Point, rectgridpoints } from "./point";
import { PRECISION, rectpoints } from ".";

export function rectpath(
  width: number,
  height: number,
  position: Point = [0, 0]
) {
  return polygonpath(rectpoints(width, height, position), true);
}

export function circlepath(r: number, position: Point = [0, 0]) {
  const [px, py] = position;
  const path = [
    "M",
    `${px - r}, ${py}`,
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
  const path = arc()
    .startAngle(deg2rad(startAngle))
    .endAngle(deg2rad(endAngle))
    .innerRadius(innerRadius)
    .outerRadius(outerRadius || innerRadius)
    .cornerRadius(cornerRadius || 0)();
  return svgpath(path).round(PRECISION).toString();
}

export function polygonpath(points: Point[], closed: boolean = false): string {
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

export function rectgridpath(
  count: number,
  step: number,
  position: Point = [0, 0]
): string {
  return rectgridpoints(count, step, position)
    .map((point) => rectpath(step, step, point))
    .join("");
}
