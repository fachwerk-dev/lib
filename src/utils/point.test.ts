import { test, assert } from "vitest";
import { rectpoints } from "./point";

test("rectpoints 10,20,30,40", () =>
  assert.sameDeepOrderedMembers(rectpoints(10, 20, 30, 40), [
    { x: 10, y: 20 },
    { x: 40, y: 20 },
    { x: 40, y: 60 },
    { x: 10, y: 60 },
  ]));
