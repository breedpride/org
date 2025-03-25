import * as wmill from "npm:windmill-client@1.475.1";
import { main as foo } from "./supa_insert_script.ts";

type Supabase = {
  key: string,
  url: string
}

export async function main(supabaseAuth: Supabase) {
  const baseFieldDataTypesString = await wmill.getVariable(
    "f/generator/base_field_data_types"
  );

  const baseFieldDataTypes = JSON.parse(baseFieldDataTypesString);
  console.log("test", baseFieldDataTypes.length);

  for (let i = 0; i < baseFieldDataTypes.length; i++) {
    await foo(supabaseAuth, "config", {
      id: baseFieldDataTypes[i].type,
      self_data: baseFieldDataTypes[i].data,
      type: "FieldDataType",
      deps: baseFieldDataTypes[i].deps,
    });
  }
}
