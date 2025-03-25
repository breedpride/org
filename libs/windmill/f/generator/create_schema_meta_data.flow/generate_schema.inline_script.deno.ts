import * as wmill from "npm:windmill-client@1.475.1";
import { supabase } from "/f/supabase/deno_init.deno.ts";
import { main as getCreatioSchema } from "/f/creatio/get_schema.deno.ts";

const schemaListString = await wmill.getVariable(
  "f/generator/starter_schem_list"
);
const schemaList: Array<{ name: string; source: string }> =
  typeof schemaListString === "string"
    ? JSON.parse(schemaListString)
    : schemaListString;
const processedSchemaList: string[] = [];
const fieldSuffix = "_Field";

type CSchemaColumn = {
  uId: string;
  name: string;
  type: string;
  caption: string;
  defValue: string;
  isRequired: boolean;
  captionType: string;
  levelAccess: number;
  referenceSchema: string;
};

export interface SchemaResponse {
  columns: CSchemaColumn[];
  primaryDisplayColumnName: string;
  administratedByColumns: boolean;
  schemaName: string;
}

async function processSchema(schemaName: string, response: SchemaResponse[]) {
  const schema = response[0];
  const db = await supabase;
  const columns = schema.columns;
  const cleanColumns = columns.filter(
    (e) =>
      !(
        e.type === "ImageLookup" ||
        e.type === "Binary" ||
        e.referenceSchema === "SysImage" ||
        e.type === "Image"
      )
  );
  const lookups = cleanColumns
    .filter((e) => e.referenceSchema)
    .map((e) => {
      return { name: e.referenceSchema, source: schemaName };
    });
  await addToschemaList(lookups);
  for (let i = 0; i < cleanColumns.length; i++) {
    const field = cleanColumns[i];
    const fieldId = field.name + "_" + "FieldName";

    const fieldSelfData = {
      uid: field.uId,
      caption: field.caption,
    };
    const fieldDeps: string[] = [];
    if (field.isRequired) {
      fieldDeps.push("Required");
    }
    if (field.levelAccess === 1) {
      fieldDeps.push("ReadOnly");
    } else {
      fieldDeps.push("Editable");
    }

    if (field.type === "Lookup") {
      await db.from("config").insert([
        {
          id: field.referenceSchema + "_Lookup",
          self_data: fieldSelfData,
          type: "Field",
          deps: [schema.schemaName + "_" + "Config"],
        },
      ]);
      fieldDeps.push(field.referenceSchema + "_Lookup");
    }

    await db.from("config").insert([
      {
        id: schema.schemaName + "." + field.name + fieldSuffix,
        self_data: fieldSelfData,
        type: "Field",
        deps: [...fieldDeps, fieldId, field.type],
      },
    ]);

    await db.from("config").insert([
      {
        id: fieldId,
        self_data: { name: field.name },
        type: "FieldName",
      },
    ]);
  }

  await db.from("config").insert([
    {
      id: schema.schemaName + "_" + "Config",
      self_data: { entitySchemaName: schema.schemaName },
      type: "SchemaConfig",
      deps: ["Lookup_" + schema.primaryDisplayColumnName],
    },
  ]);
}

function addToschemaList(newSchemas: { name: string; source: string }[]) {
  for (const schema of newSchemas) {
    // Перевіряємо, чи ім'я вже є в schemaList або processedSchemaList
    const isAlreadyAdded =
      schemaList.some((s) => s.name === schema.name) ||
      processedSchemaList.includes(schema.name);
    if (!isAlreadyAdded) {
      schemaList.push(schema);
      // console.log(`Added new schema: ${schema.name}`);
    } else {
      // console.log(`Skipped duplicate schema: ${schema.name}`);
    }
  }
}

async function setPlusOne() {
  if (schemaList.length === 0) {
    console.log("Processing complete!");
    return;
  }
  const schemaName = schemaList.shift()?.name; // Отримуємо та видаляємо перший елемент
  if (!schemaName) {
    console.log("No more schemas to process!");
    return;
  }
  processedSchemaList.push(schemaName);
  console.log("Processed schemas:", processedSchemaList);
  if (schemaList.length > 0) {
    await generateSchema(schemaList[0].name); // Рекурсивно викликаємо для наступного елемента
  }
}

export async function generateSchema(schema: string) {
  const json = await getCreatioSchema(schema);
  await processSchema(schema, json);
  await setPlusOne();
}

export async function main() {
  await generateSchema(schemaList[0].name);
}

export const flow_output = {
  processedSchemaList,
};
