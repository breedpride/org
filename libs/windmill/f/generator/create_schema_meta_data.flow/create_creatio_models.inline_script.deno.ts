import { merge } from 'npm:lodash-es';
import * as wmill from "npm:windmill-client@1.475.1";
import { with_ } from "/f/common/fn_string.deno.ts";
import { supabase } from "/f/supabase/deno_init.deno.ts";
import { ConfigType } from "/f/supabase/enums_consts.deno.ts";
const typePath: string = "f/creatio/model_types";
const fieldsPath = "f/creatio/model_fields";
const workspace = "breedhub";
const typeImports = `import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';`;
const fieldsImports = `import {createInjectionToken} from 'ngxtension/create-injection-token';`;

export const EmptyFieldConfig = {
  type: "field",
  id: "",
  rows: 0,
  component: 2,
  dateFields: [],
  displayField: "",
  displayValue: () => "",
  entitiesColumns: [],
  entitySchemaName: "",
  placeholder: "",
  sortConfig: [],
  fieldsConfig: {},
  // SortField[];
  model: "",
  validators: [],
  // ValidatorFn[];

  // parse: (value: any) => null,
  columnClass: "",
  columnNgClass: "",
  hidden: () => false,
  readonly: true,
  isRequired: false,
  filterFn: () => null,
  getFilter: () => null,
  filterConfig: [],
  icon: "",
  initBeforeChangeFn: () => null,
  initFn: () => null,
  onChange: () => null,
  isPublic: true,
};

export async function main(processedSchemaList: string[]) {
  const db = await supabase;
  const typeModelList: Record<string, string> = {};
  const fieldsModelList: Record<string, string> = {};
  for (const schemaName of processedSchemaList) {
    const { data, error } = await db
      .from("config")
      .select("data")
      .eq("id", schemaName + with_(ConfigType.SchemaName));
    if (error) {
      throw new Error(`Помилка запиту до Supabase: ${error.message}`);
    }
    const fieldsConfig: Record<string, any> = data[0].data.fieldsConfig;

    // typeScript
    const typedFields = (
      Object.values(fieldsConfig) as { name: string; type: string }[]
    )
      .map((e) => e.name + `: ${e.type}`)
      .join(";\n  ");
    const typeCode = `
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
    typeModelList[schemaName] = typeCode;

    // fieldsScript
    const entitiesColumns: string[] = data[0].data.entitiesColumns;

    const fieldsConfigEntries = Object.entries(fieldsConfig)
      .map(([key, value]) => {
        const k = { ...EmptyFieldConfig, ...value };
        return `${key}: ${stringifyObjectWithoutQuotes(k)}`;
      })
      .join(",\n  ");

    console.log(fieldsConfigEntries);

    const entitiesColumnsEntries = entitiesColumns
      .map((column) => `"${column}"`)
      .join(",\n  ");

    const dataCropped = removeProperties(data[0].data, ["fieldsConfig", "entitiesColumns"]);
    const dataFull = { ...dataCropped, fieldsConfig: schemaName.toUpperCase() + "_FIELD_CONFIG", entitiesColumns: schemaName.toUpperCase() + "_ENTITY_COLUMNS" };
    const dataEntries = Object.entries(dataFull)
      .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
      .join(",\n  ");


    const fieldsCode = `
export const ${schemaName.toUpperCase()}_FIELD_CONFIG = {
  ${fieldsConfigEntries}
} as const;

export const ${schemaName.toUpperCase()}_ENTITY_COLUMNS = [
  ${entitiesColumnsEntries}
];

export const ${schemaName.toUpperCase()}_DATE_FIELDS = [];

export const [, , ${schemaName}_SCHEMA] = createInjectionToken(() => ({
  ${dataEntries}
}));
`.trim();

    console.log("!!!!!!fieldsCode", fieldsCode);
    fieldsModelList[schemaName] = fieldsCode;
  }

  // typeScript
  const combinedTypeCode =
    typeImports + "\n\n" + Object.values(typeModelList).join("\n\n");
  await createBunScript(typePath, combinedTypeCode, typePath);

  // fieldsScript
  const combinedFieldsCode =
    fieldsImports + "\n\n" + Object.values(fieldsModelList).join("\n\n");
  await createBunScript(fieldsPath, combinedFieldsCode, fieldsPath);
}

async function createBunScript(path: string, content: string, summary: string) {
  const scriptExists = await wmill.ScriptService.existsScriptByPath({
    path,
    workspace,
  });

  if (scriptExists) {
    console.log(`ℹ️ Видаляємо існуючий скрипт ${path}`);
    try {
      await wmill.ScriptService.deleteScriptByPath({
        path,
        workspace,
      });
      console.log(`✅ Скрипт ${path} видалено успішно`);
    } catch (error) {
      console.error("Помилка при видаленні скрипту:", error);
      throw error;
    }
    console.log(`ℹ️ Створюємо новий скрипт ${path}`);
  }
  try {
    await wmill.ScriptService.createScript({
      workspace,
      requestBody: {
        path,
        content,
        language: "bun",
        summary,
        description: "Just a minimal working test",
        runtime: "bun",
      },
    });
    console.log(`✅ Скрипт ${path} створено успішно`);
  } catch (error) {
    console.error("Помилка при створенні скрипту:", error);
    throw error;
  }
}

// Функція для форматування об'єкта без лапок навколо ключів
function stringifyObjectWithoutQuotes(obj: any): string {
  if (Array.isArray(obj)) {
    // Якщо це масив, повертаємо його у вигляді рядка без змін
    return `[${obj.map(item => stringifyObjectWithoutQuotes(item)).join(', ')}]`;
  }

  if (typeof obj === 'object' && obj !== null) {
    // Перевірка на порожній об'єкт
    const entries = Object.entries(obj);
    if (entries.length === 0) {
      return '{}'; // Порожній об'єкт без пробілу
    }

    return '{ ' + entries
      .map(([key, value]) => {
        // Якщо значення - функція, зберігаємо її у вигляді строки
        if (typeof value === 'function') {
          return `${key}: ${value.toString()}`;
        }
        // Якщо значення - вкладений об'єкт, рекурсивно викликаємо цю ж функцію
        if (typeof value === 'object' && value !== null) {
          return `${key}: ${stringifyObjectWithoutQuotes(value)}`;
        }
        // Інакше форматуючи як просте значення
        return `${key}: ${JSON.stringify(value)}`;
      })
      .join(', ') + ' }';
  }

  // Повертаємо просте значення як рядок
  return JSON.stringify(obj);
}

function removeProperties<T extends Record<string, any>>(obj: T, properties: string[]): T {
  // Створюємо копію об'єкта, щоб не змінювати оригінал
  const result = { ...obj };

  // Видаляємо властивості, якщо вони існують
  properties.forEach((prop) => {
    if (prop in result) {
      delete result[prop];
    }
  });

  return result;
}
