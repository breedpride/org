import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import * as wmill from "windmill-client";


type Supabase = {
  key: string,
  url: string
}

export async function main() {
  // Ініціалізуємо клієнт Supabase.

  const supabase: Supabase = await wmill.getResource("f/supabase/pleasing_supabase");

  const supabaseClient: SupabaseClient = createClient(supabase.url, supabase.key);
  // Повертаємо ініціалізований клієнт Supabase.
  return supabaseClient;
}


export const supabase: Promise<SupabaseClient> = main();

