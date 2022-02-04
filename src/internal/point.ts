import type { Point } from "../utils/point";

export function resolvePoint(first: number | Point, second?: number): Point {
  if (typeof first === "object") {
    return first as Point;
  } else {
    return { x: first ?? 0, y: second ?? 0 } as Point;
  }
}
