import * as wmill from "npm:windmill-client@1.475.1";

export async function main(schema: string) {
  const token = await wmill.getVariable("f/creatio/creatio_token");
  const resp = await fetch(
    `https://dev.dogarray.com:5002/0/BreedprideMetaApi/metadata?userName=public&schemaNames=${schema}`,
    {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      } as HeadersInit,
      method: "GET",
    }
  );
  const json = JSON.parse(await resp.text()).result.data;
  return json;
}

