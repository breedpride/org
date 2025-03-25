import * as wmill from "npm:windmill-client@1.475.1";
import { supabase } from "/f/supabase/deno_init.deno.ts";

export async function main() {
  const db = await supabase;
  const baseFieldDataTypesString = await wmill.getVariable(
    "f/generator/base_field_data_types"
  );
  const baseFieldDataTypes = JSON.parse(baseFieldDataTypesString);

  for (let i = 0; i < baseFieldDataTypes.length; i++) {
    const { error } = await db.from("config").insert([
      {
        id: baseFieldDataTypes[i].type,
        self_data: baseFieldDataTypes[i].data,
        type: "FieldDataType",
        deps: baseFieldDataTypes[i].deps,
      },
    ]);

    if (error) {
      console.error(`Помилка при вставці запису з індексом ${i}:`, error);
    } else {
      console.log(`Запис з індексом ${i} успішно вставлено.`);
    }
  }
}
