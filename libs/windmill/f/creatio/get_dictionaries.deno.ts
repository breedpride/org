
import {main as get} from "/f/creatio/get.deno.ts";
async function main() {
    return await get('https://dev.dogarray.com:5002/0/ServiceModel/BreedprideAdminApi/GetLookupUpdateData');
}