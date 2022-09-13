import { test, assert } from "vitest";
import { polygonpath } from "./path";

test("polygonpath 0,0 to 100,100 to 100,0 closed", () =>
  assert.equal(
    polygonpath(
      [
        [0, 0],
        [100, 100],
        [100, 0],
      ],
      true
    ),
    "M 0,0 L 100,100 L 100,0 Z"
  ));
