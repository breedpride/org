import * as wmill from "npm:windmill-client@1.475.1";
import { supabase } from "/f/supabase/deno_init.deno.ts";

export async function main(tableName: string) {
  const db = await supabase;
  // 🔍 Перевіряємо, чи таблиця існує
  const { data: existsCheck, error: checkErr } = await db.rpc("table_exists", {
    tablename: tableName,
  });

  if (checkErr) throw new Error("❌ Не вдалося перевірити існування таблиці");

  const exists = existsCheck === true;
  if (!exists) {
    console.warn(`⚠️ Таблиця "${tableName}" не існує — пропускаємо генерацію SQL`);
    return;
  }

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

  const pkList = pkCols.map(
    (c: { column_name: string }) => `"${c.column_name}"`
  );

  // Отримуємо foreign keys
  const { data: fkData, error: fkError } = await db.rpc("get_foreign_keys", {
    tablename: tableName,
  });

  if (fkError) {
    console.error("Помилка при отриманні FOREIGN KEYS:", fkError.message);
    return;
  }

  // Отримуємо RLS policies
  const { data: rawPolicies, error: polError } = await db.rpc(
    "get_table_policies",
    {
      tablename: tableName,
    }
  );

  if (polError) {
    console.error("Помилка при отриманні RLS policies:", polError.message);
    return;
  }

  const raw = rawPolicies ?? {};
  const policies = raw.policies ?? [];
  const rlsEnabled = raw.rls_enabled === true;

  // Формуємо список колонок
  const columnLines: string[] = [];

  for (const col of columns) {
    let line = `  "${col.column_name}" ${col.data_type}`;
    if (col.is_nullable === "NO") line += " NOT NULL";
    if (col.column_default) line += ` DEFAULT ${col.column_default}`;
    columnLines.push(line);
  }

  if (pkList.length) {
    columnLines.push(`  PRIMARY KEY (${pkList.join(", ")})`);
  }

  for (const fk of fkData ?? []) {
    columnLines.push(
      `  FOREIGN KEY ("${fk.column_name}") REFERENCES "${fk.foreign_table}"("${fk.foreign_column}")`
    );
  }

  // Формуємо CREATE TABLE
  const tableSql = `CREATE TABLE "${tableName}" (\n${columnLines.join(",\n")}\n);`;

  // Формуємо ALTER TABLE для RLS
  const rlsSql = (rlsEnabled || policies.length > 0)
    ? `ALTER TABLE "${tableName}" ENABLE ROW LEVEL SECURITY;`
    : "";

  // Формуємо політики
  const policyLines: string[] = [];
  for (const pol of policies) {
    const roles = pol.roles.map((r: string) => `"${r}"`).join(", ");
    let policySQL = `CREATE POLICY "${pol.policyname}" ON "${tableName}" FOR ${pol.cmd}`;
    if (roles) policySQL += ` TO ${roles}`;
    if (pol.qual) policySQL += ` USING (${pol.qual})`;
    if (pol.with_check) policySQL += ` WITH CHECK (${pol.with_check})`;
    policyLines.push(policySQL + ";");
  }

  // Збираємо фінальний SQL
  const statements: string[] = [tableSql];

  if (rlsSql) {
    statements.push(rlsSql);
  }

  statements.push(...policyLines);

  const fullSql = statements.join("\n\n");

  console.log("SQL для створення таблиці та політик:");
  console.log(fullSql);

  const variablePath = `f/sql/${tableName}_sql`;
  await wmill.setVariable(variablePath, fullSql, false);
}
