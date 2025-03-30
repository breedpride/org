import * as wmill from "npm:windmill-client@1.475.1";
import { with_ } from "/f/common/fn_string.deno.ts";
import { supabase } from "/f/supabase/deno_init.deno.ts";
import { ConfigType } from "/f/supabase/enums_consts.deno.ts";
const typePath: string = "f/creatio/model_types";
const workspace = "breedhub";
const imports = `import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';`;

export async function main(processedSchemaList: string[]) {
  const db = await supabase;
  const modelList: Record<string, string> = {};
  for (const schemaName of processedSchemaList) {
    const { data, error } = await db
      .from("config")
      .select("data")
      .eq("id", schemaName + with_(ConfigType.SchemaName));
    if (error) {
      throw new Error(`Помилка запиту до Supabase: ${error.message}`);
    }
    const fieldsConfig: Record<string, any> = data[0].data.fieldsConfig;

    const typedFields = (
      Object.values(fieldsConfig) as { name: string; type: string }[]
    )
      .map((e) => e.name + `: ${e.type}`)
      .join(";\n  ");
    const code = `
  type ${schemaName}_Schema = {
    ${typedFields}
  };

  export type ${schemaName} = Partial<${schemaName}_Schema>;
  export function ${schemaName}<T extends Partial<${schemaName}>>(config: T): T;
  export function ${schemaName}<T extends Partial<${schemaName}>[]>(
      config: T
  ): UnionToIntersection<T[number]>;
  export function ${schemaName}<T extends Partial<${schemaName}> | Partial<${schemaName}>[]>(
      config: T
  ): any {
      if (Array.isArray(config)) {
          return config.reduce((acc, item) => ({ ...acc, ...item }), {});
      }
      return { ...config };
  }
    `.trim();
    modelList[schemaName] = code;
  }
  const combinedCode = imports + "\n\n" + Object.values(modelList).join("\n\n");

  const scriptExists = await wmill.ScriptService.existsScriptByPath({
    path: typePath,
    workspace,
  });

  if (scriptExists) {
    console.log(`ℹ️ Видаляємо існуючий скрипт ${typePath}`);
    try {
      await wmill.ScriptService.deleteScriptByPath({
        path: typePath,
        workspace,
      });
      console.log(`✅ Скрипт ${typePath} видалено успішно`);
    } catch (error) {
      console.error("Помилка при видаленні скрипту:", error);
      throw error;
    }
  }

  console.log(`ℹ️ Створюємо новий скрипт ${typePath}`);
  try {
    await wmill.ScriptService.createScript({
      workspace,
      requestBody: {
        path: typePath,
        content: combinedCode,
        language: "bun",
        summary: "f/creatio/model_types",
        description: "Just a minimal working test",
        runtime: "bun",
      },
    });
    console.log(`✅ Скрипт ${typePath} створено успішно`);
  } catch (error) {
    console.error("Помилка при створенні скрипту:", error);
    throw error;
  }
}
