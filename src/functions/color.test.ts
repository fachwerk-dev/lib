import { test, assert } from "vitest";
import { hsl, hsla } from "./color";

test("hsl defaults", () => assert.equal(hsl(), "hsl(0,100%,50%,1)"));

test("hsl h", () => assert.equal(hsl(10), "hsl(10,100%,50%,1)"));

test("hsl s", () => assert.equal(hsl(10, 20), "hsl(10,20%,50%,1)"));

test("hsl l", () => assert.equal(hsl(10, 20, 30), "hsl(10,20%,30%,1)"));

test("hsl a", () => assert.equal(hsl(10, 20, 30, 0.4), "hsl(10,20%,30%,0.4)"));

test("hsl = hsla", () => assert.equal(hsl, hsla));
