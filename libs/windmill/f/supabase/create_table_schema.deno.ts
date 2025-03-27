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

  // Отримуємо RLS policies
  const { data: rawPolicies, error: polError } = await db.rpc("get_table_policies", {
    tablename: tableName,
  });

  if (polError) {
    console.error("Помилка при отриманні RLS policies:", polError.message);
    return;
  }
  const policies: any[] = rawPolicies ?? [];

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

  const tableSql = `CREATE TABLE "${tableName}" (\n${lines.join(",\n")}\n);`;

  // Окремо policies:
  const policyLines: string[] = [];
  for (const pol of policies) {
    const roles = pol.roles.map((r: string) => `"${r}"`).join(", ");
    const permissive = pol.permissive?.toLowerCase() === "permissive" ? "PERMISSIVE" : "RESTRICTIVE";
    let policySQL = `CREATE ${permissive} POLICY "${pol.policyname}" ON "${tableName}" FOR ${pol.cmd}`;
    if (roles) policySQL += ` TO ${roles}`;
    if (pol.qual) policySQL += ` USING (${pol.qual})`;
    if (pol.with_check) policySQL += ` WITH CHECK (${pol.with_check})`;
    policyLines.push(policySQL + ";");
  }

  const fullSql = [tableSql, ...policyLines].join("\n\n");

  console.log("SQL для створення таблиці та політик:");
  console.log(fullSql);
}
