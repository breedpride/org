function lowerize(str: string): string {
  return str.length > 1 ? str[0].toLowerCase() + str.substring(1) : str.toLowerCase();
}
import type { SchemaColumn, SchemaResponse } from '@shared';
import { Signal } from '@angular/core';
import { RxDictionaryCollection, RxTreeCollection, TreeSchema } from '@bh/rxdb';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import {
  DateDataValueTypes,
  FloatDataValueTypes,
  IntegerDataValueTypes,
  TextDataValueTypes,
} from './data-value-type';
import { createBlob } from 'rxdb';
// TODO - move to token env
const token = 'agentpomidor117';
// import { token } from './token';
const autoDisclaimer = `
// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------
`;

// const autoFirstDisclaimer = `
// // ----------------- GENERATED FOR CHANGES-----------
// // Changes will NOT be overwritten
// // ------------------------------------------------
// `;

const fieldSufix = 'FieldName';
const configSufix = 'Config';
const lookupSufixPrefix = 'Lookup';
const dbDirName = 'db/config';

const fieldDirName = 'field/config';
// const _ = '_';
const globalColumnsMap = new Map();
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

  return;
}

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
      },
      method: 'GET',
    }
  ).pipe(
    tap(() => console.error(schema)),
    switchMap(response => {
      // console.log(response);
      if (response.ok) {
        // OK return data
        return response.json();
      } else {
        // Server is returning a status requiring the client to try something else.
        return of({ error: true, message: `Error ${response.status}` });
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
const processsed: string[] = [];
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

const setPlusOne = (schemaName: string) => {
  const spaceItem = spaceList.shift();
  if (spaceItem) {
    processsed.push(spaceItem.name);
  }
  if (spaceList.length === 0) {
    const fieldSet = new Set(columnMap);
    const processedSet = new Set(processsed);
    // const imp = [...fieldSet, ''].join('_FIELD, ');
    // const schemasimp = [...processedSet, ''].join('_SCHEMA, ');
    // const test = [...fieldSet].map((e) => `['${e}_FIELD', ${e}_FIELD],`);
    // const schemas = [...processedSet].map((e) => `['${e}', ${e}_SCHEMA],`);

    // exit(0);
  } else {
    // generateSchema(spaceList[0]);
  }
};

function rewrite(schemaDir: any, arg1: string, arg2: string) {
  console.log(rewrite);
}
