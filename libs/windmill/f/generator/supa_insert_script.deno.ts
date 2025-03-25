import { refreshAndRetryIfExpired } from "https://deno.land/x/windmill_helpers@v1.1.1/mod.ts";

/**
 * @param token Supabase `access_token` and `refresh_token`. `expires_at` (optional) is a UNIX
 * timestamp in seconds.
 *
 * @param count Count algorithm to use to count rows in the table or view.
 * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the hood.
 * `"planned"`: Approximated but fast count algorithm. Uses the Postgres statistics under the hood.
 * `"estimated"`: Uses exact count for low numbers and planned count for high numbers.
 */
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
