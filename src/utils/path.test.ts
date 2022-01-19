import { test, assert } from "vitest";
import { polygonpath } from "./path";

test("polygonpath 0,0 to 10,10 to 10,0", () =>
  assert.equal(
    polygonpath([
      { x: 0, y: 0 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
    ]),
    "M 0,0 L 10,10 L 10,0"
  ));

test("polygonpath 0,0 to 10,10 to 10,0 closed", () =>
  assert.equal(
    polygonpath(
      [
        { x: 0, y: 0 },
        { x: 10, y: 10 },
        { x: 10, y: 0 },
      ],
      true
    ),
    "M 0,0 L 10,10 L 10,0 Z"
  ));
