#!/usr/bin/env -S deno

import { parse } from "./deps.ts";

export const defaultHelpText = `
Example:
  $ <name of installer> <input>
  Hello <input>
  `.trim();

function help(): void {
  console.log(defaultHelpText);
}

function main() {
  const args = parse(Deno.args);

  if (args.help || args.h) return help();

  try {
    const input = args._.map((i) => i.toString());
    console.log(`Hello ${input[0]}`);
  } catch (error) {
    console.log(error);
    Deno.exit(1);
  }
}

main();
