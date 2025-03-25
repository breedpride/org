import { createClient } from 'npm:@supabase/supabase-js';
import type { SupabaseClient } from 'npm:@supabase/supabase-js';
import * as wmill from "npm:windmill-client@1.475.1";


type Supabase = {
  key: string,
  url: string
}

export async function main() {
  // Ініціалізуємо клієнт Supabase.

  const supabase: Supabase = await wmill.getResource("f/supabase/pleasing_supabase");

  const supabaseClient: ReturnType<typeof createClient> = createClient(supabase.url, supabase.key);

  // Повертаємо ініціалізований клієнт Supabase.

  return supabaseClient;
}

export const supabase: Promise<SupabaseClient> = main() as Promise<SupabaseClient>;

