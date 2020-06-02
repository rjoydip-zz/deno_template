#!/usr/bin/env -S deno

import { greeting } from "./mod.ts";
import { colors } from "./deps.ts";

function getHelpText(): string {
  return `
    Example
      $ dg deno
      Greeting: ${colors.green("deno")}
    `;
}

function help(): void {
  const helpText = getHelpText();
  console.log(helpText);
}

async function cli() {
  const args = Deno.args;

  if (args.length === 0) {
    help();
    Deno.exit();
  }

  if (args[0] === "--help" || args[0] === "-h" || args[0] === "help") {
    help();
    Deno.exit();
  }

  try {
    const addResult = greeting(args[0]);
    console.log(`${addResult}`);
    Deno.exit();
  } catch (error) {
    console.log(error);
    Deno.exit(1);
  }
}

cli();
