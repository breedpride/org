import {
  existsSync,
  mkdirSync,
  PathLike,
  readdirSync,
  unlinkSync,
  writeFileSync,
} from 'fs';
import { transformWithProxy, transformWithScope } from './reduser';
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
import { childrenShahArpilin } from '@breedpride/pet';

// import {
//   DateDataValueTypes,
//   FloatDataValueTypes,
//   IntegerDataValueTypes,
//   TextDataValueTypes,
// } from './data-value-type';
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

const fieldNameSufix = 'FieldName';

const baseScoupPath = path.resolve(__dirname, '../../../../');

const entityDirName = 'entity/config';

const entityPath = path.resolve(
  __dirname,
  `../../../../libs/base/${entityDirName}/`
);

function getwrithePath(scope: Sc) {
  return path.resolve(baseScoupPath, scope.path);
}
// Приклад вхідних даних
const scopesPlan = [
  {
    name: 'base',
    children: [
      // {
      //   name: 'db',
      //   scope: '@base/db',
      //   children: [{ name: 'config', scope: '@base-db-config' }],
      // },
      {
        name: 'field',
        scope: '@base/field',
        children: [
          {
            name: 'common-type',
            scope: '@base-field-common-type',
            type: 'lib',
            // children: [{ name: 'common' }, { type: 'test' }],
          },
          {
            name: 'ref-type',
            scope: '@base-field-ref-type',
            children: [{ name: 'lookup' }, { name: 'ref' }],
          },
          {
            scope: '@base-field-name',
            name: 'name',
          },
          {
            name: 'uid',
            scope: '@base-field-uid',
          },
        ],
      },
      {
        name: 'entity',
        scope: '@base/entity',
        children: [
          {
            name: 'type',
            scope: '@base-entity-type',
            children: [{ name: 'lookup' }],
          },
          {
            name: 'config',
            scope: '@base/entity/config',
          },
        ],
      },
    ],
  },
];

type Sc = {
  [key: string]: Sc;
} & {
  scope: string;
  path: string;
};
// TODO - use nx
const scopes: Sc = transformWithScope(scopesPlan, 'libs');

console.log(Object.keys(scopes), Object.values(scopes));
// console.log('!!!!!!!!!!!!!!', scopes.base.path, scopes['path']);
const _ = '_';
const name_type = (name: string, type: string) => {
  return name + _ + type;
};

const globalColumnsMap = new Map();
const globalSchemas = new Map();
const columnMap: Iterable<any> | null | undefined = [];
Object.keys(scopes).forEach((e) => {
  console.log(e);
  console.log(scopes.base);
});
// Object.values(scopes).forEach((e) => {
//   console.log(e);
//   console.log(e.children);
// });
function rewrite(
  dir: string,
  file: string,
  data: string | NodeJS.ArrayBufferView<ArrayBufferLike>
) {
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
  const fullPath = path.resolve(dir, './', file);
  writeFileSync(fullPath, data);
}

function writeifnotexist(
  dir: string,
  file: string,
  data: string | NodeJS.ArrayBufferView<ArrayBufferLike>
) {
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
  const fullPath = path.resolve(dir, './', file);
  if (!existsSync(fullPath)) {
    writeFileSync(fullPath, data);
  } else {
    // TODO DISABLE IN PROD TODO - use devProd mode
    writeFileSync(fullPath, data);
  }
}

function genIndex(filedir: PathLike) {
  const files: string[] = [];
  readdirSync(filedir).forEach((file) => files.push(file));
  rewrite(
    String(filedir),
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
  const cleanColumns = columns
    .filter(
      (e) =>
        !(
          e.type === 'ImageLookup' ||
          e.type === 'Binary' ||
          e.referenceSchema === 'SysImage' ||
          e.type === 'Image'
        )
    )
    .map((e) => {
      return {
        ...e,
        typeModel:
          e.type === 'Lookup'
            ? {
                scope: 'ref-type',
                name: e.referenceSchema + '_Lookup',
              }
            : { name: e.type, scope: 'common-type' },
        importFieldName: e.name + '_' + fieldNameSufix,
      };
    });

  cleanColumns.forEach((e) => globalColumnsMap.set(e.uId, e));

  // const fieldPath = path.resolve(entityPath, './');

  // ----------------- Lookups ----------------------
  // lookup.ts for schema
  // ------------------------------------------------
  const fFileName = schemaName.toLowerCase();

  writeifnotexist(
    getwrithePath(scopes.base.field['ref-type']),
    fFileName + '.ts',
    `${autoFirstDisclaimer}

import { Lookup_${schema.primaryDisplayColumnName}} from '${scopes.base.field['common-type'].scope})}';
export const ${schemaName}_Config =  [
Lookup_${schema.primaryDisplayColumnName},
{ entitySchemaName: '${schemaName}' } as const,
]; 
`
  );
  // ----------------- columns --------------------
  // Field ID
  // ------------------------------------------------
  cleanColumns.forEach((e) => {
    writeifnotexist(
      getwrithePath(scopes.base.field.uid),
      e.uId + '.ts',
      ` 
import { ${e.importFieldName} } from '${scopes.base.field.name.scope}';
import { ${e.typeModel.name}  } from '${
        scopes.base.field['common-type'].scope
      }';

const field = [
  ${e.importFieldName},
  ${e.typeModel.name},
  {label: '${e.caption}'} as const,
  ${e.isRequired ? '{required: true } as const,' : ''}
  ${e.levelAccess === 2 ? '{readOnly: true } as const' : ''} 
  {uId: '${e.uId}'} as const
  ] as const
export default field;
  `
    );
    // ----------------- field name --------------------
    // Create Field Name Settings if not Exists
    // ------------------------------------------------
    writeifnotexist(
      getwrithePath(scopes.base.field.name),
      e.name.toLowerCase() + '.ts',
      `${autoFirstDisclaimer}
        export const ${e.importFieldName} = [ {"id": '${e.name}'} as const ] as const ;
        `
    );
    // ----------------- field name --------------------
    // Create Field Name Settings if not Exists
    // ------------------------------------------------
    // TODO fix import
    if (e.type === 'Lookup') {
      writeifnotexist(
        getwrithePath(scopes.base.field['ref-type']['lookup']),
        e.referenceSchema?.toLowerCase() + '.ts',
        `
        import { ${e.referenceSchema}_Config } from '../ref';
        export const ${e.typeModel.name} = [ 
        ${e.referenceSchema}_Config
        ] as const;
        `
      );
    }
  });

  // ----------------- schema.ts --------------------
  //
  // ------------------------------------------------
  const cc = cleanColumns.map((e) => {
    const type = e.referenceSchema
      ? e.referenceSchema
      : // Object.values(TextDataValueTypes).includes(e.type) ||
      e.type === 'MediumText' ||
        e.type === 'ShortText' ||
        e.type === 'MaxSizeText' ||
        e.type === 'EmailText' ||
        e.type === 'PhoneText' ||
        e.type === 'LongText' ||
        e.type === 'WebText' ||
        e.type === 'Color'
      ? 'String'
      : // Object.values(FloatDataValueTypes).includes(e.type) ||
      e.type === 'Integer' || e.type === 'Number' || e.type.includes('Float')
      ? 'Number'
      : // : Object.values(IntegerDataValueTypes).includes(e.type)
      // ? 'Number'
      // Object.values(DateDataValueTypes).includes(e.type) ||
      e.type === 'DateTime' || e.type === 'Date'
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
  // const fieldTypeImportsSet = [
  //   ...new Set(
  //     cleanColumns
  //       .map((e) =>
  //         e.referenceSchema ? e.referenceSchema + '_Lookup' : e.type
  //       )
  //       .filter((e) => e)
  //   ),
  // ];
  // const importsClean = imports.filter(function (item, pos) {
  //   return imports.indexOf(item) == pos;
  // });
  const importsClean = [...new Set(imports)];
  rewrite(
    getwrithePath(scopes.base.entity.type),
    schemaName.toLowerCase() + '.ts',
    `
${importsClean
  .filter((e) => e !== schemaName)
  .map(
    (e) => 'import { ' + e + " } from './" + String(e).toLowerCase() + "';\n"
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

  // TODO - передаем модель яка нам потрібна. Можливо як дженерік. Можливо як кервайред
  return { ...config };
  // return getPartialFromConfig(config);
}
`
  );
  // ----------------- Function ----------------------
  // function.ts
  // ------------------------------------------------

  // if (existsSync(schemaDir + 'function.ts')) {
  //   unlinkSync(schemaDir + 'function.ts');
  // }
  // if (existsSync(schemaDir + 'overrides.ts')) {
  //   unlinkSync(schemaDir + 'overrides.ts');
  // }
  // if (existsSync(schemaDir + 'plugin.ts')) {
  //   unlinkSync(schemaDir + 'plugin.ts');
  // }
  // if (existsSync(schemaDir + 'config.ts')) {
  //   unlinkSync(schemaDir + 'config.ts');
  // }
  // if (existsSync(schemaDir + 'lookup.ts')) {
  //   unlinkSync(schemaDir + 'lookup.ts');
  // }
  // if (existsSync(schemaDir + 'lookup.plugin.ts')) {
  //   unlinkSync(schemaDir + 'lookup.plugin.ts');
  // }
  // ----------------- plugin.ts --------------------
  // FilterFieldConfig
  // ------------------------------------------------
  // let custom = `import { Id, StaticFieldConfig,  ${importsClean.join(
  // rewrite(
  //   schemaDir,
  //   'fields.plugin.ts',
  //   ` ${autoFirstDisclaimer}
  //     import {${schemaName}} from './type';
  //       import { FilterFieldConfig } from '@bh/superfield';
  //       export const ${schemaName}_Plugin : Record<keyof ${schemaName}, Partial<FilterFieldConfig>>= {
  //       ${cleanColumns.map((e) => `${e.name}: {},`).join('')}
  //       }
  //     `
  // );

  // export const ${schemaName}_${e.name} : Partial<StaticFieldConfig<${e.realType}>> = {}; \n`;
  // ----------------- fields.ts -----------------------
  //
  // ----------------------------------------------------

  rewrite(
    getwrithePath(scopes.base.entity.config),
    schemaName.toLowerCase() + '.ts',
    `
    ${autoDisclaimer}
    ${cleanColumns
      .map(
        (e) => `import ${e.name} from '${scopes.base.field.uid.scope}/${e.uId}'`
      )
      .join(';\n')};

import {createInjectionToken} from 'ngxtension/create-injection-token';
import {${schemaName}_Lookup} from '${scopes.base.field['ref-type'].scope}';


    export const ${schemaName.toUpperCase()}_FIELD_CONFIG = {
    ${cleanColumns
      .map(
        (e) => `
        ${e.name}`
      )
      .join(',')}
    } as const;



export const [, , ${schemaName}_SCHEMA] = createInjectionToken(() => {
  return {
  ${schemaName}_Lookup,
  
  fieldsConfig: ${schemaName.toUpperCase()}_FIELD_CONFIG,

  };
});
    `
  );

  // genIndex(schemaDir);

  // ----------------- fields.ts -----------------
  //
  // ----------------------------------------------------

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
const processsed: Iterable<any> | null | undefined = [];
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

const setPlusOne = (schemaName: string) => {
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

// import { Account_FieldName } from '@base/field/name';
// import { Account_Lookup } from '@base/field/type';
// export const map = [
//   '5c6ca10e-1180-4c1e-8a50-55a72ff9bdd4',
//   [
//     { uId: '5c6ca10e-1180-4c1e-8a50-55a72ff9bdd4' } as const,
//     [Account_FieldName, Account_Lookup, { label: 'Account' } as const],
//   ] as const,
// ];
// const myMap = new Map([
//   [
//     '5c6ca10e-1180-4c1e-8a50-55a72ff9bdd4',
//     [Account_FieldName, Account_Lookup, { label: 'Account' } as const],
//   ],
//   [
//     '5c6ca10e-110-4c1e-8a50-55a72ffebdd4',
//     [Account_FieldName, Account_Lookup, { label: 'Account' } as const],
//   ],
//   // [3, "three"],
// ]);
