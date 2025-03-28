import * as wmill from "npm:windmill-client@1.475.1";
import { supabase } from "/f/supabase/deno_init.deno.ts";

export async function main(tableName: string) {
  const db = await supabase;
  const variablePath = `f/sql/${tableName}_sql`;

  // 🧠 1. Отримуємо SQL зі змінної
  const sql = await wmill.getVariable(variablePath);
  if (!sql) throw new Error(`❌ Змінна ${variablePath} не знайдена`);

  console.log("📥 SQL з Windmill:", sql);

  // 🧪 2. Перевіряємо, чи таблиця існує
  const { data: existsCheck, error: checkErr } = await db.rpc("table_exists", {
    tablename: tableName,
  });
  if (checkErr) throw new Error("❌ Не вдалося перевірити існування таблиці");

  const exists = existsCheck === true;
  if (exists) {
    console.log(`🗑 Видаляємо таблицю "${tableName}" через drop_table`);
    const { error: dropErr } = await db.rpc("drop_table", {
      tablename: tableName,
    });
    if (dropErr) throw new Error(`❌ DROP TABLE: ${dropErr.message}`);
  }

  // 🧩 3. Розбиваємо SQL на частини
  const statements = sql
    .split(/;\s*\n/)
    .map((stmt) => stmt.trim())
    .filter((stmt) => stmt.length > 0);

  for (const stmt of statements) {
    console.log("🚀 Виконуємо:", stmt);
    const { error } = await db.rpc("execute_sql", { sql: stmt });
    if (error) throw new Error(`❌ SQL помилка: ${error.message}`);
  }

  console.log(`✅ Таблицю "${tableName}" створено/оновлено успішно`);
}
