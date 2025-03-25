import * as wmill from "npm:windmill-client@1.475.1";
import { supabase } from "/f/supabase/deno_init.deno.ts";

export async function main() {
  const db = await supabase;
  const lookupFieldPropertiesString = await wmill.getVariable(
    "f/generator/lookup_field_properties"
  );
  const lookupFieldProperties = JSON.parse(lookupFieldPropertiesString);
  for (let i = 0; i < lookupFieldProperties.length; i++) {
    const { error } = await db.from("config").insert([
      {
        id: lookupFieldProperties[i].name,
        self_data: lookupFieldProperties[i].data,
        type: lookupFieldProperties[i].type,
        deps: lookupFieldProperties[i].deps,
      },
    ]);

    if (error) {
      console.error(`Помилка при вставці запису з індексом ${i}:`, error);
    } else {
      console.log(`Запис з індексом ${i} успішно вставлено.`);
    }
  }
}
