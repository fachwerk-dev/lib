import { test, assert } from "vitest";
import { rectpoints } from "./point";

test("rectpoints 200,100,[100,100]", () =>
  assert.sameDeepOrderedMembers(rectpoints(200, 100, [100, 100]), [
    [100, 100],
    [300, 100],
    [300, 200],
    [100, 200],
  ]));
