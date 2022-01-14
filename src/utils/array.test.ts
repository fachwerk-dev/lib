import { test, assert } from "vitest";
import { range } from "./array";

test("range 1 to 3", () => assert.sameOrderedMembers(range(1, 3), [1, 2, 3]));

test("range 1 to 3 step 0.5", () =>
  assert.sameOrderedMembers(range(1, 3, 0.5), [1, 1.5, 2, 2.5, 3]));

test("range 1 to 3 step 2", () =>
  assert.sameOrderedMembers(range(1, 3, 2), [1, 3]));

test("range 3 to 1", () => assert.sameOrderedMembers(range(3, 1), [3, 2, 1]));
