import { supabase } from "/f/supabase/deno_init.deno.ts";

export async function main() {
  const db = await supabase;
  // Очистка таблиці config
  const { error } = await db.from("config").delete().neq("id", 0); // Видаляє всі записи
  if (error) {
    console.error("Помилка при очищенні таблиці config:", error);
  } else {
    console.log("Таблиця config успішно очищена");
  }
}
