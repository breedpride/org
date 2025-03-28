import type { SupabaseClient } from "@supabase/supabase-js"; // або відповідний тип
import { supabase } from "/f/supabase/deno_init.deno.ts";

async function waitForTableReady(
  db: SupabaseClient,
  tableName: string,
  idType: "TEXT" | "INTEGER",
  timeoutMs = 3000
) {
  const start = Date.now();
  const testRow = {
    id: idType === "TEXT" ? "__test__" : -999,
    key: "test",
  };

  while (Date.now() - start < timeoutMs) {
    const { error } = await db.from(tableName).insert([testRow]);
    if (!error) {
      // Успішно — можна видалити тестовий рядок
      await db.from(tableName).delete().eq("id", testRow.id);
      return true;
    }
    await new Promise((res) => setTimeout(res, 200));
  }

  throw new Error(`Таблиця ${tableName} не готова для запису`);
}

export async function main(
  enumName: string,
  EnumObject: { [key: string]: number | string }
) {
  const db = await supabase;

  // Перетворення імені таблиці у формат snake_case
  const tableName = enumName
    .replace(/([A-Z])/g, "_$1")
    .toLowerCase()
    .slice(1);

  // Визначаємо тип id
  const allIds = Object.values(EnumObject);
  const hasStringId = allIds.some((id) => typeof id === "string");
  const idType = hasStringId ? "TEXT" : "INTEGER";

  // Перевірка, чи існує таблиця
  const { data: exists, error: checkError } = await db.rpc("table_exists", {
    tablename: tableName,
  });

  if (checkError) {
    console.error("Помилка при перевірці існування таблиці:", checkError);
    return;
  }

  // Якщо таблиця існує, видаляємо її
  if (exists) {
    const { error: dropError } = await db.rpc("drop_table", {
      tablename: tableName,
    });
    if (dropError) {
      console.error("Помилка при видаленні таблиці:", dropError);
      return;
    }
    console.log(`Таблиця ${tableName} успішно видалена.`);
  }

  // Створення нової таблиці
  console.log(`➕ Створюємо таблицю ${tableName} з типом ID: ${idType}`);
  const { error: createError } = await db.rpc("create_table", {
    table_name: tableName,
    schema: `
      CREATE TABLE public.${tableName} (
        id ${idType} PRIMARY KEY,
        key TEXT NOT NULL
      );
    `,
  });

  if (createError) {
    console.error("Помилка при створенні таблиці:", createError);
    return;
  }
  console.log(`Таблиця ${tableName} успішно створена.`);

  // Чекаємо поки таблиця “підтягнеться”
  await waitForTableReady(db, tableName, idType);
  console.log("✅ Таблиця доступна для запису");

  // Вставка даних у таблицю
  const rows = Object.entries(EnumObject).map(([key, id]) => ({ id, key }));
  const { error: insertError } = await db.from(tableName).insert(rows).select();

  if (insertError) {
    console.error(
      "Помилка при вставці:",
      insertError.message,
      insertError.details
    );
  } else {
    console.log(`Дані успішно вставлено в таблицю ${tableName}.`);
  }
}
