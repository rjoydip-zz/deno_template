#!/usr/bin/env -S deno

import { greeting } from "./mod.ts";
import { parse } from "./deps.ts";

export const defaultHelpText = `
Example:
  $ <name of installer> <input>
  Hello <input>
  `.trim();

function help(): void {
  console.log(defaultHelpText);
}

async function cli() {
  const args = parse(Deno.args);

  if (!args._.length) return help();
  if (args.help || args.h) return help();

  try {
    const input = args._.map((i) => i.toString());
    console.log(`\n${greeting(input[0])}`);
  } catch (error) {
    console.log(error);
    Deno.exit(1);
  }
}

cli();
