import { refreshAndRetryIfExpired } from "https://deno.land/x/windmill_helpers@v1.1.1/mod.ts";
import { compact, isArray, uniq } from "npm:lodash-es";
import * as wmill from "npm:windmill-client@1.475.1";
import { main as foo } from "./supa_insert_script.ts";

const authPromise = wmill.getResource("u/annamaliyenko/pleasing_supabase");
const tokenPromise = wmill.getVariable("u/annamaliyenko/creatio_token");

const processsed: string[] = [];
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

const spaceList: { name: string; source: string }[] = [
  { name: "Contact", source: "root" },
  ...[
    { name: "ContactCommunication", source: "contact detail" },
    { name: "ContactAddress", source: "contact detail" },
    { name: "ContactFirebaseUser", source: "contact detail" },
    { name: "ContactSynonym", source: "contact detail" },
  ],
  {
    name: "Pet",
    source: "root",
  },
  ...[
    { name: "TitleInPet", source: "pet detail" },
    { name: "PetHealthExamResult", source: "pet detail" },
    { name: "PetService", source: "pet detail" },
    { name: "PetInProject", source: "pet detail" },
    { name: "PetIdentifier", source: "pet detail" },
    { name: "PetMeasurement", source: "pet detail" },
    { name: "PetServiceInLitter", source: "pet detail" },
  ],
  {
    name: "Litter",
    source: "root",
  },
  {
    name: "Breed",
    source: "root",
  },
  {
    name: "Project",
    source: "root",
  },
  {
    name: "Post",
    source: "root",
  },
  { name: "AccountReview", source: "root" },
  { name: "BreedprideCollection", source: "root" },
  { name: "BreedprideCollectionEntity", source: "root" },
  { name: "Event", source: "root" },
  {
    name: "Cover",
    source: "root",
  },
  {
    name: "Note",
    source: "root",
  },
];

export interface SchemaResponse {
  columns: CSchemaColumn[];
  primaryDisplayColumnName: string;
  administratedByColumns: boolean;
  schemaName: string;
}

async function addBaseDataTypes() {
  const auth = await authPromise;
  const baseFieldDataTypesString = await wmill.getVariable(
    "f/generator/base_field_data_types"
  );
  const baseFieldDataTypes = JSON.parse(baseFieldDataTypesString);
  console.log("test", baseFieldDataTypes.length);
  for (let i = 0; i < baseFieldDataTypes.length; i++) {
    await foo(auth, "config", {
      id: baseFieldDataTypes[i].type,
      self_data: baseFieldDataTypes[i].data,
      type: "FieldDataType",
      deps: baseFieldDataTypes[i].deps,
    });
  }
}

async function addLookupFieldProperties() {
  const auth = await authPromise;
  const lookupFieldPropertiesString = await wmill.getVariable(
    "f/generator/lookup_field_properties"
  );
  const lookupFieldProperties = JSON.parse(lookupFieldPropertiesString);
  console.log("test", lookupFieldProperties.length);
  for (let i = 0; i < lookupFieldProperties.length; i++) {
    await foo(auth, "config", {
      id: lookupFieldProperties[i].name,
      self_data: lookupFieldProperties[i].data,
      type: lookupFieldProperties[i].type,
      deps: lookupFieldProperties[i].deps,
    });
  }
}

async function processSchema(schemaName: string, response: SchemaResponse[]) {
  const schema = response[0];
  const auth = await authPromise;
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
  await addToSpaceList(lookups);
  for (let i = 0; i < cleanColumns.length; i++) {
    const field = cleanColumns[i];
    const fieldId = field.name + "_" + "FieldName";

    // Field with deps
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
      await foo(auth, "config", {
        id: field.referenceSchema + "_Lookup",
        self_data: fieldSelfData,
        type: "Field",
        deps: [schema.schemaName + "_" + "Config"],
      });
      fieldDeps.push(field.referenceSchema + "_Lookup");
    }

    await foo(auth, "config", {
      id: schema.schemaName + "." + field.name + fieldSuffix,
      self_data: fieldSelfData,
      type: "Field",
      deps: [...fieldDeps, fieldId, field.type],
    });

    // FildName  without deps
    await foo(auth, "config", {
      id: fieldId,
      self_data: { name: field.name },
      type: "FieldName",
    });
  }

  await foo(auth, "config", {
    id: schema.schemaName + "_" + "Config",
    self_data: { entitySchemaName: schema.schemaName },
    type: "SchemaConfig",
    deps: ["Lookup_" + schema.primaryDisplayColumnName],
  });

  // const result = await foo(auth, "config", {
  //   id: schema.schemaName + "_" + "SchemaName",
  //   self_data: response[0],
  //   type: "SchemaName",
  // });
}

async function addToSpaceList(newSchemas: { name: string; source: string }[]) {
  for (const schema of newSchemas) {
    // Перевіряємо, чи ім'я вже є в spaceList або processsed
    const isAlreadyAdded =
      spaceList.some((s) => s.name === schema.name) ||
      processsed.includes(schema.name);
    if (!isAlreadyAdded) {
      spaceList.push(schema);
      // console.log(`Added new schema: ${schema.name}`);
    } else {
      // console.log(`Skipped duplicate schema: ${schema.name}`);
    }
  }
}

async function setPlusOne() {
  if (spaceList.length === 0) {
    console.log("Processing complete!");
    return;
  }
  const schemaName = spaceList.shift()?.name; // Отримуємо та видаляємо перший елемент
  if (!schemaName) {
    console.log("No more schemas to process!");
    return;
  }
  processsed.push(schemaName);
  console.log("Processed schemas:", processsed);
  if (spaceList.length > 0) {
    await generateSchema(spaceList[0].name); // Рекурсивно викликаємо для наступного елемента
  }
}

export async function generateSchema(schema: string) {
  const token = await tokenPromise;
  const resp = await fetch(
    `https://dev.dogarray.com:5002/0/BreedprideMetaApi/metadata?userName=public&schemaNames=${schema}`,
    {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      } as HeadersInit,
      method: "GET",
    }
  );

  const json = JSON.parse(await resp.text()).result.data;
  // console.log(json);
  await processSchema(schema, json);
  await setPlusOne();
}

export async function getFieldsConfig() {
  await new Promise((resolve) => setTimeout(resolve, 15000));
  const auth = await authPromise;
  const token = await tokenPromise;
  for (let i = 0; i < processsed.length; i++) {
    const fieldsConfig = {};
    await refreshAndRetryIfExpired(auth, token, async (client) => {
      // Запит до таблиці `config` для отримання `id` та `data`
      const { data: configRecords, error } = await client
        .from("config")
        .select("id, data")
        .like("id", `${processsed[i]}.%`); // Фільтр: id починається з processsed[i] + '.'

      if (error) {
        throw new Error(`Помилка запиту до Supabase: ${error.message}`);
      }
      for (let j = 0; j < configRecords.length; j++) {
        const prop = configRecords[j].id.split(".")[1].split(fieldSuffix)[0];
        fieldsConfig[prop] = configRecords[j].data;
      }
      const entitiesColumns = getColumns(fieldsConfig);
      console.log(fieldsConfig);
      await foo(auth, "config", {
        id: processsed[i] + "_" + "SchemaName",
        self_data: { fieldsConfig, entitiesColumns },
        deps: [processsed[i] + "_Config"],
        type: "SchemaName",
      });
    });
  }
}
//test
export const getColumns = (fieldsConfig: Record<string, any>) =>
  uniq(
    compact(
      Object.values(fieldsConfig)
        .map((e) =>
          isArray(e.entitiesColumns) && e.entitiesColumns.length > 0
            ? e.entitiesColumns.map((c: string) => e.name + "." + c)
            : e.id
        )
        .flat()
    )
  );

export async function main() {
  await addBaseDataTypes();
  await addLookupFieldProperties();
  await generateSchema(spaceList[0].name);
  await getFieldsConfig();
}
