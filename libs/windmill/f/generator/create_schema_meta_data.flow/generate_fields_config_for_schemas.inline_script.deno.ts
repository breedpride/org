import { compact, isArray, uniq } from "npm:lodash-es";
import { supabase } from "/f/supabase/deno_init.deno.ts";
import { with_ } from "/f/common/fn_string.deno.ts";
import { ConfigType } from "/f/supabase/enums_consts.deno.ts";
// TODO - check name or id
export const getColumns = (fieldsConfig: Record<string, any>) =>
  uniq(
    compact(
      Object.values(fieldsConfig)
        .map((e) =>
          isArray(e.entitiesColumns) && e.entitiesColumns.length > 0
            ? e.entitiesColumns.map((c: string) => e.name + "." + c)
            : e.id | e.name
        )
        .flat()
    )
  );

export async function main(processedSchemaList: string[]) {
  await new Promise((resolve) => setTimeout(resolve, 15000));
  const db = await supabase;
  for (let i = 0; i < processedSchemaList.length; i++) {
    const fieldsConfig: Record<string, any> = {};

    // Запит до таблиці `config` для отримання `id` та `data`
    const { data: configRecords, error } = await db
      .from("config")
      .select("id, data")
      .like("id", `${processedSchemaList[i]}.%`); // Фільтр: id починається з processedSchemaList[i] + '.'

    if (error) {
      throw new Error(`Помилка запиту до Supabase: ${error.message}`);
    }
    for (let j = 0; j < configRecords.length; j++) {
      const prop = configRecords[j].id.split(".")[1].split(with_(ConfigType.Field))[0];
      fieldsConfig[prop] = configRecords[j].data;
    }
    const entitiesColumns = getColumns(fieldsConfig);
    await db.from("config").insert([
      {
        id: processedSchemaList[i] + with_(ConfigType.SchemaName),
        self_data: { fieldsConfig, entitiesColumns },
        deps: [processedSchemaList[i] + with_(ConfigType.SchemaName)],
        type: ConfigType.SchemaName,
      },
    ]);
  }
}
