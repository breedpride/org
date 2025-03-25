import { main as createEnum } from "/f/supabase/create_enum_table.deno.ts";
import { enums } from "/f/supabase/enums_consts.deno.ts";

export async function main() {
  for (const [enumName, EnumObject] of enums.entries()) {
    console.log(`Creating enum ${enumName}`, EnumObject);
    await createEnum(enumName, EnumObject);
  }
}
