import type { Point } from "./point";

export function linepath(points: Point[], closed: boolean = false): string {
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

export function circlepath(x: number, y: number, r: number): string {
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
