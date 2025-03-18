import { RxDictionaryCollection, RxTreeCollection } from '@bh/rxdb';
import type { SchemaResponse } from '@shared';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
function lowerize(str: string): string {
  return str.length > 1 ? str[0].toLowerCase() + str.substring(1) : str.toLowerCase();
}
// const token = (import.meta as any).env.CREATIO_TOKEN;
const token = 'agentpomidor117';
const columnMap: string[] = [];

async function processSchema(
  schemaName: string,
  response: SchemaResponse[],
  dataTypeCollection: RxTreeCollection
  // dataCollection: RxDictionaryCollection
) {
  const schema = response[0];
  console.log(schemaName);
  console.log(schema.columns);
  const schemaDir = '';

  const doc = await dataTypeCollection.insert({
    scope: '@creatio',
    name: schemaName,
    type: 'EntitySchemaName',
    features: {
      columns: schema.columns,
      primaryDisplayColumnName: [schema.primaryDisplayColumnName],
    },
    // collections: {
    //   schema.columns
    // }
    // deps: [`${schemaName}_Config`],
  });
  // const attachment = await doc.putAttachment(
  //   {
  //       id: 'response.json',
  //       data: createBlob(JSON.stringify(schema), 'application/json'),
  //       type: 'application/json'
  //   }
  // );

  // const schemaDir = '';
}
  // await dataTypeCollection.insert({
export const generateSchema = (
  s: { name: string; source: string },
  collection: RxTreeCollection,
  dictionary: RxDictionaryCollection
) => {
  const schema = s.name;
  console.log('🤗' + ' ' + schema + ' <== ' + s.source);

  const data$ = fromFetch(
    `https://dev.dogarray.com/0/BreedprideMetaApi/metadata?userName=public&schemaNames=${schema}`,
    {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      } as HeadersInit,
      method: 'GET',
    }
  ).pipe(
    tap(() => console.error(schema)),
  switchMap((response: Response) => {
    if (response.ok) {
      return response.json();
    } else {
      return of({ error: true, message: 'Server error' });
    }
  }),
    catchError(err => {
      // Network or other error, handle appropriately

      console.error(err);
      return of({ error: true, message: err.message });
    })
  );
  data$.pipe(map(data => data?.result?.data)).subscribe({
    complete: () => console.log('status'),
    next: result => {
      return processSchema(
        schema,
        result,
        collection
        // dictionary
      );
    },
  });
};
const processed: string[] = [];
export const spaceList: { name: string; source: string }[] = [
  { name: 'Contact', source: 'root' },
  ...[
    { name: 'ContactCommunication', source: 'contact detail' },
    { name: 'ContactAddress', source: 'contact detail' },
    { name: 'ContactFirebaseUser', source: 'contact detail' },
    { name: 'ContactSynonym', source: 'contact detail' },
  ],
  {
    name: 'Pet',
    source: 'root',
  },
  ...[
    { name: 'TitleInPet', source: 'pet detail' },
    { name: 'PetHealthExamResult', source: 'pet detail' },
    { name: 'PetService', source: 'pet detail' },
    { name: 'PetInProject', source: 'pet detail' },
    { name: 'PetIdentifier', source: 'pet detail' },
    { name: 'PetMeasurement', source: 'pet detail' },
    { name: 'PetServiceInLitter', source: 'pet detail' },
  ],
  {
    name: 'Litter',
    source: 'root',
  },
  {
    name: 'Breed',
    source: 'root',
  },
  {
    name: 'Project',
    source: 'root',
  },

  //TODO @annaglova check tables

  {
    name: 'Post',
    source: 'root',
  },
  // PostType
  // PostState
  // // Account,
  { name: 'AccountReview', source: 'root' },
  // // Collection
  { name: 'BreedprideCollection', source: 'root' },
  // BreedprideCollectionType
  { name: 'BreedprideCollectionEntity', source: 'root' },
  //Event
  { name: 'Event', source: 'root' },

  // ...['AchievementInBreed', 'TopPatronInBreed'],
  //Cover
  {
    name: 'Cover',
    source: 'root',
  },
  //Note
  {
    name: 'Note',
    source: 'root',
  },
  // EntitySchemaLookup
];

const setPlusOne = () => {
  const spaceItem = spaceList.shift();
  if (spaceItem) {
    // process spaceItem
    const fieldSet = new Set(columnMap);
    const processedSet = new Set(processed);
    // const imp = [...fieldSet, ''].join('_FIELD, ');
    // const schemasimp = [...processedSet, ''].join('_SCHEMA, ');
    // const test = [...fieldSet].map((e) => `['${e}_FIELD', ${e}_FIELD],`);
    // const schemas = [...processedSet].map((e) => `['${e}', ${e}_SCHEMA],`);

    // exit(0);
  } else {
    // generateSchema(spaceList[0]);
  }
};
