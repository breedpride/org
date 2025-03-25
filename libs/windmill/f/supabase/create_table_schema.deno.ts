import { supabase } from "/f/supabase/deno_init.deno.ts";

export async function main(tableName: string) {
  const db = await supabase;

  // Отримуємо опис стовпців
  const { data: columns, error: colError } = await db.rpc("get_table_columns", {
    tablename: tableName,
  });

  if (colError || !columns) {
    console.error("Помилка при отриманні колонок:", colError?.message);
    return;
  }

  // Отримуємо первинні ключі
  const { data: pkCols, error: pkError } = await db.rpc("get_primary_keys", {
    tablename: tableName,
  });

  if (pkError || !pkCols) {
    console.error("Помилка при отриманні PRIMARY KEY:", pkError?.message);
    return;
  }

  const pkList = pkCols.map((c: { column_name: string }) => `"${c.column_name}"`);

  // Отримуємо foreign keys
  const { data: fkData, error: fkError } = await db.rpc("get_foreign_keys", {
    tablename: tableName,
  });

  if (fkError) {
    console.error("Помилка при отриманні FOREIGN KEYS:", fkError.message);
    return;
  }

  console.log("FK Data:", fkData); // Це вже масив
  const foreignKeys = fkData ?? [];
  console.log("foreignKeys:", foreignKeys);

  // Формуємо SQL
  const lines: string[] = [];

  for (const col of columns) {
    let line = `  "${col.column_name}" ${col.data_type}`;
    if (col.is_nullable === "NO") line += " NOT NULL";
    if (col.column_default) line += ` DEFAULT ${col.column_default}`;
    lines.push(line);
  }

  if (pkList.length) {
    lines.push(`  PRIMARY KEY (${pkList.join(", ")})`);
  }

  for (const fk of fkData ?? []) {
    lines.push(
      `  FOREIGN KEY ("${fk.column_name}") REFERENCES "${fk.foreign_table}"("${fk.foreign_column}")`
    );
  }

  const sql = `CREATE TABLE "${tableName}" (\n${lines.join(",\n")}\n);`;

  console.log("SQL для створення таблиці:");
  console.log(sql);
}
