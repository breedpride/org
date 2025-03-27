// Ctrl/CMD+. to cache dependencies on imports hover.

// Deno uses "npm:" prefix to import from npm (https://deno.land/manual@v1.36.3/node/npm_specifiers)
// import * as wmill from "npm:windmill-client@1.475.1"

// fill the type, or use the +Resource type to get a type-safe reference to a resource
// type Postgresql = object

export async function main(
  a: number,
  b: "my" | "enum",
  //c: Postgresql,
  d = "inferred type string from default arg",
  e = { nested: "object" },
  //e: wmill.Base64
) {
  // let x = await wmill.getVariable('u/user/foo')
  return { foo: a };
}

export const _delimeter = '_';
export const with_ = (s: string) => _delimeter + s;
export const with_delimeter = (a: string, b: string) => a + with_(b);
export function capitalize(str: string): string {
  return str.length > 1
    ? str[0].toUpperCase() + str.substring(1)
    : str.toUpperCase();
}
