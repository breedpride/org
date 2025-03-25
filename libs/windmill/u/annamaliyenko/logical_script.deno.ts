// Ctrl/CMD+. to cache dependencies on imports hover.

// Deno uses "npm:" prefix to import from npm (https://deno.land/manual@v1.36.3/node/npm_specifiers)
import * as wmill from "npm:windmill-client@1.475.1"

// fill the type, or use the +Resource type to get a type-safe reference to a resource
// type Postgresql = object


export async function main(schema: string) {
  const token = await wmill.getVariable('u/annamaliyenko/creatio_token')
  const resp = await fetch(`https://95.47.249.157/0/BreedprideMetaApi/metadata?userName=public&schemaNames=${schema}`,
    {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      } as HeadersInit,
      method: 'GET',
    });

  return {
    ok: resp.ok,
    status: resp.status,
    text: await resp.text(),
  };
}