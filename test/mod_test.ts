import { assertEquals, assertThrows } from "./test_deps.ts";

const { test } = Deno;

test("pass", (): void => {
  assertEquals(true, true);
});

test("fail", (): void => {
  assertThrows(() => {
    throw new Error("Hello deno");
  });
});
