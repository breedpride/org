import * as wmill from "npm:windmill-client@1.475.1";

export async function main(url: string) {
  const token = await wmill.getVariable("f/creatio/creatio_token");

  const resp = await fetch(url, {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    } as HeadersInit,
    method: "GET",
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`HTTP Error ${resp.status}: ${text}`);
  }

  let data;
  try {
    const raw = await resp.text();
    data = JSON.parse(raw);
  } catch {
    throw new Error("Invalid JSON response");
  }

  const json = data?.result?.data;
  if (!json) {
    throw new Error("No data found in result");
  }

  console.dir(json, { depth: null });

  return json;
}
