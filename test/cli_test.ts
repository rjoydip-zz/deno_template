import { defaultHelpText } from "../cli.ts";
import { assertEquals } from "./test_deps.ts";

const { test, run } = Deno;

test({
  name: "default",
  ignore: true, // https://github.com/denoland/deno/issues/4830
  fn: async () => {
    const proc = run({
      cmd: ["deno", "run", "--allow-run", "./cli.ts"],
      stdout: "piped",
      stderr: "piped",
    });
    const t = new TextDecoder().decode(await proc.output());
    assertEquals(t.trim(), defaultHelpText.trim());
    proc.close();
  },
});
