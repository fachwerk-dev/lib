export function translate(
  x: number = 0,
  y: number = 0,
  unit?: "px" | "%"
): string {
  return `translate(${x}${unit ?? ""}, ${y}${unit ?? ""})`;
}

export function rotate(
  angle: number = 0,
  unit?: "deg" | "rad" | "turn"
): string {
  return `rotate(${angle}${unit ?? ""})`;
}

export function scale(scaleX: number = 1, scaleY?: number, unit?: "%"): string {
  return `scale(${scaleX}${unit ?? ""}, ${scaleY || scaleX}${unit ?? ""})`;
}

export function skewX(angle: number = 0, unit?: "%"): string {
  return `skewX(${angle}${unit ?? ""})`;
}

export function skewY(angle: number = 0, unit?: "%"): string {
  return `skewY(${angle}${unit ?? ""})`;
}

export function matrix(
  a: number = 1, // scaleX
  b: number = 0, // skewY
  c: number = 0, // skewX
  d: number = 1, // scaleY
  e: number = 0, // translateX
  f: number = 0 // translateY
): string {
  return `matrix(${a},${b},${c},${d},${e},${f})`;
}
