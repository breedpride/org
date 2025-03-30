import * as wmill from "npm:windmill-client@1.475.1";
import { main as get } from "/f/creatio/get.deno.ts";

export async function main() {
  const json = await get('https://dev.dogarray.com:5002/0/ServiceModel/BreedprideAdminApi/GetLookupUpdateData');
  const variablePath = `f/creatio/dictionaries_list`;
  await wmill.setVariable(variablePath, json, false);
}