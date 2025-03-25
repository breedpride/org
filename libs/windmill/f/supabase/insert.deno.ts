import { refreshAndRetryIfExpired } from "https://deno.land/x/windmill_helpers@v1.1.1/mod.ts";

type Supabase = {
  url: string;
  key: string;
};
export async function main(
  auth: Supabase,
  table: string,
  values: Record<string, any> | Record<string, any>[],
  returnInserted: boolean = false,
  token?: {
    access: string;
    refresh: string;
    expires_at?: number;
  },
  count?: "exact" | "planned" | "estimated",
) {
  return await refreshAndRetryIfExpired(auth, token, async (client) => {
    let query: any = client.from(table).insert(values, { count });
    if (returnInserted) {
      query = query.select();
    }

    return query;
  });
}
