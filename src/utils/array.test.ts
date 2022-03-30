import { test, assert } from "vitest";
import { range, seq } from "./array";

// seq

test("seq 3 with default step 1", () =>
  assert.sameOrderedMembers(seq(3), [0, 1, 2]));

test("seq 3 with step 2", () =>
  assert.sameOrderedMembers(seq(3, 2), [0, 2, 4]));

test("seq 3 with step -2", () =>
  assert.sameOrderedMembers(seq(3, -2), [0, -2, -4]));

test("seq 3 with step n ** 2", () =>
  assert.sameOrderedMembers(
    seq(3, (n) => n ** 2),
    [0, 1, 4]
  ));

test("seq 3 with [n,n] returned", () =>
  assert.sameDeepOrderedMembers(
    seq(3, (n) => [n, n]),
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ]
  ));

test("seq 3 with step 2, starting from 10", () =>
  assert.sameOrderedMembers(seq(3, 2, 10), [10, 12, 14]));

test("seq 3 with step 2, starting from -10", () =>
  assert.sameOrderedMembers(seq(3, 2, -10), [-10, -8, -6]));

// range

test("range 1 to 3", () => assert.sameOrderedMembers(range(1, 3), [1, 2, 3]));

test("range 1 to 3 step 0.5", () =>
  assert.sameOrderedMembers(range(1, 3, 0.5), [1, 1.5, 2, 2.5, 3]));

test("range 1 to 3 step 2", () =>
  assert.sameOrderedMembers(range(1, 3, 2), [1, 3]));

test("range 3 to 1", () => assert.sameOrderedMembers(range(3, 1), [3, 2, 1]));
