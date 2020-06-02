const { test } = Deno;
import { greeting } from "./mod.ts";
import { assertEquals } from "./deps.ts";

test("greeting", (): void => {
  assertEquals(greeting("deno"), "Greeting: deno");
});
