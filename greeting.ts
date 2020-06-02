import { colors } from "./deps.ts";

export function greeting(str: string): string {
  return `Greeting: ${colors.green(str)}`;
}
