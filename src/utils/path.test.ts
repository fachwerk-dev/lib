import { test, assert } from "vitest";
import { linepath } from "./path";

test("linepath 0,0 to 10,10 to 10,0", () =>
  assert.equal(
    linepath([
      { x: 0, y: 0 },
      { x: 10, y: 10 },
      { x: 10, y: 0 },
    ]),
    "M 0,0 L 10,10 L 10,0"
  ));

test("linepath 0,0 to 10,10 to 10,0 closed", () =>
  assert.equal(
    linepath(
      [
        { x: 0, y: 0 },
        { x: 10, y: 10 },
        { x: 10, y: 0 },
      ],
      true
    ),
    "M 0,0 L 10,10 L 10,0 Z"
  ));
