import {
  existsSync,
  mkdirSync,
  readdirSync,
  unlinkSync,
  writeFileSync,
} from 'fs';
function lowerize(str: string): string {
  return str.length > 1
    ? str[0].toLowerCase() + str.substring(1)
    : str.toLowerCase();
}
import { SchemaColumn, SchemaResponse } from '@shared';
import * as path from 'path';
import { exit } from 'process';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import {
  DateDataValueTypes,
  FloatDataValueTypes,
  IntegerDataValueTypes,
  TextDataValueTypes,
} from './data-value-type';
// import { token } from './token';
const token = 'agentpomidor117';
const autoDisclaimer = `
// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------
`;

const autoFirstDisclaimer = `
// ----------------- GENERATED FOR CHANGES-----------
// Changes will NOT be overwritten
// ------------------------------------------------
`;

// Get the directory name of the current module
const __dirname = path.dirname(import.meta.url.replace('file://', ''));
const lookupDirName = 'lookups';
// Resolve the schema path relative to the current directory

const libPath = path.resolve(__dirname, '../../../../libs/base/');
// todo maybe FieldName
const fieldSufix = 'FieldName';

const fields = {
  names: 'names', // key?????
  types: 'types',
  // => new types new values
  //default exports
  // export ????
};
const scope = '@base';
const dbDirName = 'db/config';
const entityDirName = 'entity/config';
const fieldDirName = 'field/config';
const fieldTypeDir = 'field/type';
const dbDirImport = `${scope}/${dbDirName}`;
const fieldDirImport = `${scope}/${fieldDirName}`;
// const columnTypeDir = 'column-type/';
const entityPath = path.resolve(
  __dirname,
  `../../../../libs/base/${entityDirName}/`
);
const dbPath = path.resolve(__dirname, `../../../../libs/base/${dbDirName}/`);
const fieldPath = path.resolve(
  __dirname,
  `../../../../libs/base/${fieldDirName}/`
);
const fieldTypesPath = path.resolve(
  __dirname,
  `../../../../libs/base/${fieldTypeDir}/`
);
const _ = '_';
const globalColumnsMap = new Map();
const globalSchemas = new Map();
const columnMap = [];

function rewrite(dir, file, data) {
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
  const fullPath = path.resolve(dir, './', file);
  writeFileSync(fullPath, data);
}

function writeifnotexist(dir, file, data) {
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
  const fullPath = path.resolve(dir, './', file);
  if (!existsSync(fullPath)) {
    writeFileSync(fullPath, data);
  }
}

function genIndex(filedir) {
  const files = [];
  readdirSync(filedir).forEach((file) => files.push(file));
  rewrite(
    filedir,
    'index.ts',
    `
        ${files
          .filter((e) => e !== 'index.ts')
          .map(
            (e) =>
              "export * from './" +
              String(e).toLowerCase().replace('.ts', '') +
              "';"
          )
          .join('')}
        `
  );
}

function processSchema(schemaName: string, response: SchemaResponse[]) {
  const schema = response[0];
  console.log(schemaName);
  console.log(schema.columns);
  const schemaDir = path.join(entityPath, schemaName.toLowerCase(), '/');
  console.log(schemaDir);
  if (!existsSync(schemaDir)) {
    mkdirSync(schemaDir);
  }
  const columns = schema.columns;
  const cleanColumns = columns.filter(
    (e) =>
      !(
        e.type === 'ImageLookup' ||
        e.type === 'Binary' ||
        e.referenceSchema === 'SysImage' ||
        e.type === 'Image'
      )
  );
  cleanColumns.forEach((e) => globalColumnsMap.set(e.uid, e));

  // const fieldPath = path.resolve(entityPath, './');

  // ----------------- Lookups ----------------------
  // lookup.ts for schema
  // ------------------------------------------------
  const fFileName = schemaName.toLowerCase();

  writeifnotexist(
    path.resolve(dbPath),
    fFileName + '.ts',
    `${autoFirstDisclaimer}

import { Lookup_${schema.primaryDisplayColumnName}} from '@bh/column-type/lookup';
export const ${schemaName}_Config =  [
Lookup_${schema.primaryDisplayColumnName},
{ entitySchemaName: '${schemaName}' } as const,
];

export const Lookup_${schemaName} = [ ${schemaName}_Config, 

//import { FilterFieldConfig } from '@bh/superfield';
// plugin settings Partial<FilterFieldConfig> for all 'Refs' to this schema etc 'Lookup' ${schemaName}_Lookup]
{} as const,
]  
`
  );
  // ----------------- Lookups ----------------------
  // lookup.ts for schema
  // ------------------------------------------------
  const lookups = cleanColumns.filter((e) => e.referenceSchema);
  lookups.forEach((e) => {
    const fFileName = e.referenceSchema?.toLowerCase();
    // TODO - chech if file not exit - add to queue
  });

  // ----------------- columns --------------------
  //
  // ------------------------------------------------
  const fieldsConfig = [];
  cleanColumns.forEach((e) => {
    const filedir = path.resolve(
      fieldPath,
      // `../${fieldDirName}/`,
      e.name.toLowerCase()
    );
    // ----------------- field name --------------------
    // Create Field Name Settings if not Exists
    // ------------------------------------------------
    writeifnotexist(
      filedir,
      e.name.toLowerCase() + '.ts',
      `${autoFirstDisclaimer}
        export const ${e.name}_${fieldSufix} = [
        {"id": '${e.name}'} as const,
        //TODO label^ not placeholder TODO - move to another settings
        {placeholder:'${e.caption}'} as const, 
      //  {} as const, //plugin TODO - loadPlugin

        ;
        `
    );
    // ----------------- field name --------------------
    // Create Field Name Settings if not Exists
    // ------------------------------------------------

    if (e.type === 'Lookup') {
      // ----------------- fieldName --------------------
      // father => pet  // TODO FieldName Settings!!! not Field
      // ------------------------------------------------
      writeifnotexist(
        fieldTypesPath + 'lookup/',
        e.referenceSchema?.toLowerCase() + '.ts',
        `
        import { ${e.referenceSchema}_Config } from '${dbDirImport}';
        export const ${e.referenceSchema}_Lookup = [ 
        ${e.referenceSchema}_Config
        // todo plugin
        ] as const;
        `
      );
    } else {
      // // ----------------- name +type--------------------
      // // name + type
      // // ------------------------------------------------
      // rewrite(
      //   filedir,
      //   e.name.toLowerCase() + '-' + e.type.toLowerCase() + '.ts',
      //   `
      //   ${autoFirstDisclaimer}
      //   import { ${e.type} } from '@bh/column-type/${e.type.toLowerCase()}';
      //   import { ${e.name}_${fieldSufix} } from './${e.name.toLowerCase()}';
      //   export const ${e.name}_${e.type} = [
      //     ${e.name}_${fieldSufix},
      //     ${e.type}
      // ];
      //   `
      // );
    }
    genIndex(filedir);
  });

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
  // ----------------- Function ----------------------
  // function.ts
  // ------------------------------------------------

  if (existsSync(schemaDir + 'function.ts')) {
    unlinkSync(schemaDir + 'function.ts');
  }
  if (existsSync(schemaDir + 'overrides.ts')) {
    unlinkSync(schemaDir + 'overrides.ts');
  }
  if (existsSync(schemaDir + 'plugin.ts')) {
    unlinkSync(schemaDir + 'plugin.ts');
  }
  if (existsSync(schemaDir + 'config.ts')) {
    unlinkSync(schemaDir + 'config.ts');
  }
  if (existsSync(schemaDir + 'lookup.ts')) {
    unlinkSync(schemaDir + 'lookup.ts');
  }
  if (existsSync(schemaDir + 'lookup.plugin.ts')) {
    unlinkSync(schemaDir + 'lookup.plugin.ts');
  }
  // ----------------- plugin.ts --------------------
  // FilterFieldConfig
  // ------------------------------------------------
  // let custom = `import { Id, StaticFieldConfig,  ${importsClean.join(
  rewrite(
    schemaDir,
    'fields.plugin.ts',
    ` ${autoFirstDisclaimer}
      import {${schemaName}} from './type';
        import { FilterFieldConfig } from '@bh/superfield';
        export const ${schemaName}_Plugin : Record<keyof ${schemaName}, Partial<FilterFieldConfig>>= {
        ${cleanColumns.map((e) => `${e.name}: {},`).join('')}
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
       `import { ${
         e.type === 'Lookup' ? e.referenceSchema + '_Lookup' : e.type
       }} from '${fieldDirImport}'`
   )
   .join(';')}
    
            'import {
              ${cleanColumns
                .map((e) => `${e.name}_${fieldSufix}`)
                .join(',')} from '@field';
        )
        
    import { ${schemaName}_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {${schemaName}_Lookup} from '${dbDirImport}';

// TODO - check plugin list do not load empty plugins !!!
${cleanColumns
  .map(
    (e) => `
const ${e.name}  =[
  ${e.name}_${fieldSufix},
  ${e.type === 'Lookup' ? e.referenceSchema + '_Lookup' : e.type}
  {label: '${e.caption}'} as const,
  ${e.isRequired ? '{required: true }' : ''},
  ${e.levelAccess === 2 ? '{readOnly: true }' : ''}, 
  {uId: '${e.uid}'}
  
`
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
  ${schemaName}_Lookup,
  
  fieldsConfig: ${schemaName.toUpperCase()}_FIELD_CONFIG,
  entitiesColumns: ${schemaName.toUpperCase()}_ENTITY_COLUMNS,
  dateColumns: getDateColumns(${schemaName.toUpperCase()}_FIELD_CONFIG),
  };
});




    `
  );

  // {
  //    ${cleanColumns
  //      .map(
  //        e => `
  //         ${e.name} :
  //   field(${e.name})`
  //      )
  //      .join(',')}
  //     }

  genIndex(schemaDir);

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
      parentSchemaNames: ['${parent}_FIELD'],
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

  //   const fieldsConfigFile = schemaDir + 'fields-config' + '.ts';
  //   const fields_config = `import { createInjectionToken } from 'ngxtension/create-injection-token';
  // import { field } from '../..';
  // import { ${fields
  //     .filter((e) => e.import !== schemaName)
  //     .map((e) => e.import)
  //     .join(', ')} } from './custom';

  // export const [, , ${schemaName}_SCHEMA] = createInjectionToken(() => {
  //   return {

  //   entitySchemaName: '${schemaName}',
  //   fieldsConfig:   { ${fields.map((e) => e.field).join('\n    ')}
  // }
  //     };
  // });
  // `;

  // writeFileSync(fieldsConfigFile, fields_config);
  // genIndex(dbPath + '/' + schemaName.toLowerCase());
  return;
  setPlusOne(schemaName);
}

const generateSchema = (s: { name: string; source: string }) => {
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
    tap((res) => console.error(schema)),
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
    next: (result) => processSchema(schema, result),
  });
};
const processsed = [];
const spaceList: { name: string; source: string }[] = [
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

const setPlusOne = (schemaName) => {
  processsed.push(spaceList.shift().name);
  if (spaceList.length === 0) {
    const fieldSet = new Set(columnMap);
    const processedSet = new Set(processsed);
    const imp = [...fieldSet, ''].join('_FIELD, ');
    const schemasimp = [...processedSet, ''].join('_SCHEMA, ');
    const test = [...fieldSet].map((e) => `['${e}_FIELD', ${e}_FIELD],`);
    const schemas = [...processedSet].map((e) => `['${e}', ${e}_SCHEMA],`);
    const file = `
import { Injectable, InjectionToken, Injector } from '@angular/core';
import { BaseLookup_FIELD, Id_FIELD, Name_FIELD } from '.';
import { ${schemasimp} } from '.';
import { ${imp} } from '.';
import { EntitySchemaName } from '../../../../libs/schema/feature/schemating/const';
const fieldsMap = new Map<string, InjectionToken<any>>([
${test.join('\n')}
]);

const schemasMap = new Map<string, InjectionToken<any>>([
   ${schemas.join('\n')}
  ]);

@Injectable({
  providedIn: 'root',
})
export class SchemaTokenMapService {
  private tokenMap = new Map<string, InjectionToken<any>>([
    ['Id_FIELD', Id_FIELD],
    ['Name_FIELD', Name_FIELD],
    ['BaseLookup_FIELD', BaseLookup_FIELD],
  ]);
  private tokenMap2 = fieldsMap;
  constructor(private injector: Injector) {}
  schemasMap= schemasMap;
  getTokenValue(tokenKey: string): any {
    // console.log('TOKEN KEY', tokenKey);
    // console.log(' MAP', this.tokenMap2);
    const token = this.tokenMap.get(tokenKey);
    if (token) {
      return this.injector.get(token);
    } else {
      const t = this.tokenMap2.get(tokenKey);
      if (t) {
        return this.injector.get(t);
      } else {
       const t = this.schemasMap.get(tokenKey);
      if (t) {
       return this.injector.get(t);
  }
      }
    }
    throw new Error('Token with key '+ tokenKey +' not found in map');
  }
}



`;
    const schemaDir = path.join(entityPath, '../');
    // writeFileSync(schemaDir + 'schema.auto.service.ts', file);
    exit(0);
  } else {
    generateSchema(spaceList[0]);
  }
};

// TODO cleanUp('./src/app/_const/schemas/generated/');
generateSchema(spaceList[0]);
