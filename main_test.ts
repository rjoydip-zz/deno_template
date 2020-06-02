const { test } = Deno;
import { greeting } from "./mod.ts";
import { colors, assertEquals } from "./deps.ts";

test("greeting", (): void => {
  assertEquals(greeting("deno"), `Greeting: ${colors.green("deno")}`);
});
