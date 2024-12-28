function lowerize(str: string): string {
  return str.length > 1
    ? str[0].toLowerCase() + str.substring(1)
    : str.toLowerCase();
}

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

interface SchemaColumn {
  uid: string;
  name: string;
  type: string;
  referenceSchema?: string;
  primaryDisplayColumnName?: string;
  caption?: string;
  isRequired?: boolean;
  levelAccess?: number;
}

interface SchemaResponse {
  columns: SchemaColumn[];
  primaryDisplayColumnName: string;
}

async function  processSchema(
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


  const columns = schema.columns;
  const cleanColumns = columns.filter(
    (e) =>
      !(
        e.type === 'ImageLookup' ||
        e.type === 'Binary' ||
        e.referenceSchema === 'SysImage' ||
        e.type === 'Image'
      )
  ) as any[];
  cleanColumns.forEach((e) => globalColumnsMap.set(e.uid, e));

  const signalValues = dataTypeCollection.find().$$ as Signal<TreeSchema[]>;

  if (
    !signalValues().find((e) => e.name === 'Lookup' && e.type === schemaName)
  ) {
    dataTypeCollection.insert({
      scope: '@creatio',
      name: 'Lookup',
      type: schemaName,
      deps: [`${schemaName}_Config`],
    });
  }

  // ----------------- Lookups ----------------------
  // lookup.ts for schema
  // ------------------------------------------------
  const lookups = cleanColumns.filter((e) => e.referenceSchema);
  lookups.forEach((e) => {
    if (
      !signalValues().find(
        (t) => t.name === lookupSufixPrefix && t.type === e.referenceSchema
      )
    ) {
      dataTypeCollection.insert({
        scope: '@creatio',
        name: lookupSufixPrefix,
        type: e.referenceSchema,
        deps: [`${e.referenceSchema}_${configSufix}`],
      });
    }
  });

  // ----------------- Config ----------------------
  // config.ts
  // ------------------------------------------------
  if (
    !signalValues().find((t) => t.name === schemaName && t.type === configSufix)
  ) {
    dataTypeCollection.findOne()
    dataTypeCollection.insert({
      scope: '@creatio',
      name: schemaName,
      type: configSufix,
      deps: [
        `${lookupSufixPrefix}_${schema.primaryDisplayColumnName}DisplayField`,
      ],
      features: {
        entitySchemaName: schemaName,
      },
    });
  }
   
  cleanColumns.forEach((e) => {
    if (e.type === 'Lookup') {
      if (
        !signalValues().find(
          (t) => t.name === e.name && t.type === e.referenceSchema
        )
      ) {
        dataTypeCollection.insert({
          scope: '@creatio',
          name: e.name,
          type: e.referenceSchema,
          deps: [
            `${e.name}_${fieldSufix}`,
            `${lookupSufixPrefix}_${e.referenceSchema}`,
          ],
        });
      }
    } else {
      if (!signalValues().find((t) => t.name === e.name && t.type === e.type)) {
        dataTypeCollection.insert({
          scope: '@creatio',
          name: e.name,
          type: e.type,
          deps: [`${e.name}_${fieldSufix}`, `_${e.type}`],
        });
      }
    }
    if (
      !signalValues().find((t) => t.name === e.name && t.type === fieldSufix)
    ) {
      dataTypeCollection.insert({
        scope: '@creatio',
        name: e.name,
        type: fieldSufix,
        deps: [`All_${fieldSufix}`],
        data: {
          label: e.caption,
        },
      });
    }
    if (
      !signalValues().find(
        (t) => t.name === `${schemaName}.${e.name}` && t.type === 'EntityField'
      )
    ) {
      dataTypeCollection.insert({
        scope: '@creatio',
        name: `${schemaName}.${e.name}`,
        type: 'EntityField',
        uId: e.uId,
        deps: [`${e.name}_${e.type}`],
        data: {
          label: e.caption,
        },
      });
    }
  });

  // Entity generation
  if (
    !signalValues().find(
      (t) => t.name === `${schemaName}` && t.type === 'Entity'
    )
  ) {
    dataTypeCollection.insert({
      scope: '@creatio',
      name: `${schemaName}`,
      type: 'Entity',
      deps: [`${schemaName}_${lookupSufixPrefix}`, 'All_Entity'],
      data: {
        fieldsConfig: cleanColumns.map(
          (e) => `${schemaName}.${e.name}_EntityField`
        ),
      },
    });
  }
  // ----------------- schema.ts --------------------
  //
  // ------------------------------------------------
  const cc = cleanColumns.map((e) => {
    const type = e.referenceSchema
      ? e.referenceSchema
      : Object.values(TextDataValueTypes).includes(e.type) ||
        e.type === 'MediumText' ||
        e.type === 'ShortText' ||
        e.type === 'MaxSizeText' ||
        e.type === 'EmailText' ||
        e.type === 'PhoneText' ||
        e.type === 'LongText' ||
        e.type === 'WebText' ||
        e.type === 'Color'
        ? 'String'
        : Object.values(FloatDataValueTypes).includes(e.type) ||
        e.type === 'Integer' ||
        e.type === 'Number' ||
        e.type.includes('Float')
          ? 'Number'
          : Object.values(IntegerDataValueTypes).includes(e.type)
            ? 'Number'
            : Object.values(DateDataValueTypes).includes(e.type) ||
        e.type === 'DateTime' ||
        e.type === 'Date'
              ? 'Date'
              : e.type === 'Boolean'
                ? 'Boolean'
                : e.type === 'Guid'
                  ? 'String'
                  : e.type + '!!!!!';
    return { ...e, realType: type };
  });

  const columnsType = cc
    .map(
      (e) =>
        e.name +
        `: ${
          e.realType === 'String' ||
          e.realType === 'Boolean' ||
          e.realType === 'Number'
            ? lowerize(e.realType)
            : e.realType
        }`
    )
    .join(';\n  ');

  const imports = cleanColumns.map((e) => e.referenceSchema).filter((e) => e);
  // const importsClean = imports.filter(function (item, pos) {
  //   return imports.indexOf(item) == pos;
  // });
  const importsClean = [...new Set(imports)];
  rewrite(
    schemaDir,
    'type.ts',
    `
${importsClean
  .filter((e) => e !== schemaName)
  .map(
    (e) =>
      'import { ' + e + " } from '../" + String(e).toLowerCase() + "/type';"
  )
  .join('')}
import isArray from 'lodash-es/isArray';
import { UnionToIntersection } from 'ts-essentials';

type ${schemaName}_Schema = {
${columnsType}
};


export type  ${schemaName} = Partial< ${schemaName}_Schema>;

export function  ${schemaName}<T extends Partial< ${schemaName}>>(config: T): T;

export function  ${schemaName}<T extends Partial< ${schemaName}>[]>(
  config: T
): UnionToIntersection<T[number]>;

export function  ${schemaName}<T extends Partial< ${schemaName}> | Partial< ${schemaName}>[]>(config: T): any {
  if (isArray(config)) {
    return config.reduce((acc, item) => ({ ...acc, ...item }), {});
  }
  return { ...config };
  // return getPartialFromConfig(config);
}
`
  );

  // export const ${schemaName}_${e.name} : Partial<StaticFieldConfig<${e.realType}>> = {}; \n`;
  // ----------------- fields.ts -----------------------
  //
  // ----------------------------------------------------
  rewrite(
    schemaDir,
    'fields' + '.ts',
    `
    ${autoDisclaimer}
    import { merge } from 'lodash-es';
    ${cleanColumns
      .map(
        (e) =>
          `import { ${e.name}_${
            e.referenceSchema ? e.referenceSchema : e.type
          }} from '../../../${fieldDirName}/${e.name.toLowerCase()}'`
      )
      .join(';')}

    import { ${schemaName}_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '../../consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_${schemaName}} from '../../../${dbDirName}/${schemaName.toLowerCase()}';

${cleanColumns
  .map(
    (e) => `
        const ${e.name}  =
    merge({},
    ${e.name}_${
      e.referenceSchema ? e.referenceSchema : e.type
    }, ${schemaName}_Plugin.${e.name})`
  )
  .join(';')}



    export const ${schemaName.toUpperCase()}_FIELD_CONFIG = {
    ${cleanColumns
      .map(
        (e) => `
        ${e.name}`
      )
      .join(',')}
    } as const;




    export const ${schemaName.toUpperCase()}_ENTITY_COLUMNS = getColumns(${schemaName.toUpperCase()}_FIELD_CONFIG);

  export const ${schemaName.toUpperCase()}_DATE_FIELDS = [];




export const [, , ${schemaName}_SCHEMA] = createInjectionToken(() => {
  return {
  ...Lookup_${schemaName},
  fieldsConfig: ${schemaName.toUpperCase()}_FIELD_CONFIG,
  entitiesColumns: ${schemaName.toUpperCase()}_ENTITY_COLUMNS,
  dateColumns: getDateColumns(${schemaName.toUpperCase()}_FIELD_CONFIG),
  };
});




    `
  );

  // ----------------- fields.ts -----------------
  //
  // ----------------------------------------------------
  const fields = cc.map((e) => {
    const imp = `${schemaName}_${e.name}`;
    let f = '';
    if (e.referenceSchema) {
      if (!processsed.includes(e.referenceSchema)) {
        columnMap.push(e.referenceSchema);
        spaceList.push({ name: e.referenceSchema, source: schemaName });
      }
      const parent = e.referenceSchema ? e.referenceSchema : e.name;
      f = `${e.name}: field({
      id: '${schemaName}.${e.name}',
      depschemaNames: ['${parent}_FIELD'],
      customRequired: ${e.isRequired},
      customReadOnly: ${e.levelAccess === 1},
      customPlaceholder: '${e.caption}',
      ...${imp},
    }),`;
    } else {
      // TODO hasFile
      // columnsTyped;
      f = `${e.name}: field({
      id: '${schemaName}.${e.name}',
      entitySchemaName: '${e.realType}',
      customRequired: ${e.isRequired},
      customReadOnly: ${e.levelAccess === 1},
      customPlaceholder: '${e.caption}',
      ...${imp},
    }),`;
    }
    return {
      field: f,
      import: imp,
    };
  });

  const fieldsConfigFile = schemaDir + 'fields-config' + '.ts';
  const fields_config = `import { createInjectionToken } from 'ngxtension/create-injection-token';
import { field } from '../..';
import config from '../../../../packages/rxdb/jest.config';
import { ${fields
  .filter((e) => e.import !== schemaName)
  .map((e) => e.import)
  .join(', ')} } from './custom';

export const [, , ${schemaName}_SCHEMA] = createInjectionToken(() => {
  return {

  entitySchemaName: '${schemaName}',
  fieldsConfig:   { ${fields.map((e) => e.field).join('\n    ')}
}
    };
});
`;

  setPlusOne(schemaName);
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
    switchMap((response) => {
      // console.log(response);
      if (response.ok) {
        // OK return data
        return response.json();
      } else {
        // Server is returning a status requiring the client to try something else.
        return of({ error: true, message: `Error ${response.status}` });
      }
    }),
    catchError((err) => {
      // Network or other error, handle appropriately

      console.error(err);
      return of({ error: true, message: err.message });
    })
  );
  data$.pipe(map((data) => data?.result?.data)).subscribe({
    complete: () => console.log('status'),
    next: (result) => {
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
