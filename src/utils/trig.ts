import { Point, trunc } from ".";

/**
 * Converts degrees to radians
 */
export function deg2rad(deg: number = 0): number {
  return (deg * Math.PI) / 180;
}

/**
 * Converts radians to degrees
 */
export function rad2deg(rad: number = 0): number {
  return (rad * 180) / Math.PI;
}

/**
 * Converts polar coordinates to Cartesian coordinates
 */
export function circlepoint(angle: number, radius: number): Point {
  return [
    Math.cos((angle - 90) * (Math.PI / 180)) * radius,
    Math.sin((angle - 90) * (Math.PI / 180)) * radius,
  ].map((p) => trunc(p)) as Point;
}

export const pol2car = circlepoint;

/**
 * Converts Cartesian coordinates to polar coordinates
 */
export function pointcircle(point: Point): [number, number] {
  const [x, y] = point;
  return [
    Math.atan2(y, x) * (180 / Math.PI) + 90,
    Math.sqrt(x * x + y * y),
  ].map((p) => trunc(p)) as [number, number];
}

export const car2pol = pointcircle;

/**
 * Returns π value
 */
export const PI = Math.PI;

/**
 * Returns τ = 2 * π value
 */
export const TAU = 2 * Math.PI;
