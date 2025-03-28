import * as wmill from "npm:windmill-client@1.475.1";

export async function main(url: string) {
  const token = await wmill.getVariable("f/creatio/creatio_token");
  const resp = await fetch(
    url,
    {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      } as HeadersInit,
      method: "GET",
    }
  );
  const json = JSON.parse(await resp.text()).result.data;
  if (json === undefined) {
    throw new Error("No data found");
  }
  console.log(json);
//   if (json.result.isSuccess) {
//     if ( json.result.isSerializedData) {
//         return JSON.parse(json.result.data);
//     }
//   }

  return json;
}

