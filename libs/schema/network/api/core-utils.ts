import { CreateComputedOptions, Signal, computed } from '@angular/core';
import { nullId } from '@bh/superfield';
import { cloneDeep, isEqual } from 'lodash-es';
// TODO - rework use env
const apiUrl = 'dev.dogarray.com';
export const environment = {
  site: {
    baseUrl: 'http://localhost:4200/',
  },

  api: {
    basePublicUrl: `https://${apiUrl}/0/ServiceModel/BreedpridePublicApi/`,
    collectionUrl: `https://${apiUrl}/0/ServiceModel/BreedprideAdminApi/collection/`,
    spaceUrl: `https://${apiUrl}/0/ServiceModel/BreedprideAdminApi/space/collection/`,
    metaUrl: `https://${apiUrl}/0/BreedprideMetaApi/public/`,
    pedigreeUrl: `https://${apiUrl}/0/ServiceModel/BreedpridePublicApi/pet/pedigree`,
    publicUrl: `https://${apiUrl}/0/ServiceModel/BreedpridePublicApi/Get`,
    schemaUrl: `https://${apiUrl}/0/BreedprideMetaApi/metadata/`,
    searchUrl: `https://${apiUrl}/0/BreedprideSearchApi/search`,
    url: `https://${apiUrl}/0/ServiceModel/BreedprideAdminApi/`,
  },
};

export const OPTIONAL_ENTITY_COLUMNS = [
  'CreatedBy',
  'CreatedBy.Name',
  'CreatedOn',
  'ModifiedBy',
  'ModifiedBy.Name',
  'ModifiedOn',
];

export interface ColumnValue {
  column: string;
  value: any;
}

export const toColumnValues = (o: object): ColumnValue[] => {
  return Object.entries(o)
    .filter(([, value]) => value !== undefined) // Фільтруємо undefined значення
    .map(([key, value]) => ({
      column: key.charAt(0).toUpperCase() + key.slice(1), // Перетворюємо першу літеру на велику
      value: value,
    }));
};

type ReactionFunction<T> = <R>(
  fn: () => R,
  options?: CreateComputedOptions<R>
) => Signal<T>;
export const reaction: ReactionFunction<any> = <T>(fn: () => T) =>
  computed(fn, { equal: isEqual }) as Signal<T>;

export const deleteProperties = (obj: any, propertyNames: string[]): any => {
  for (const propName of propertyNames) {
    delete obj[propName];
  }
  return obj;
};
export const newObjectWithoutProperties = (
  obj: any,
  propertyNames: string[]
): any => {
  const object = cloneDeep(obj);
  for (const propName of propertyNames) {
    delete object[propName];
  }
  return object;
};


export const chunkArray = ({ array, n }: { array: any[]; n: number }) => {
  const result = [];
  for (let i = 0; i < array?.length; i += n) {
    result.push(array.slice(i, i + n));
  }
  return result;
};

export const mapToObject = <K extends string | number | symbol, V>(
  map: Map<K, V>
): Record<string, V> => {
  return Object.fromEntries(
    Array.from(map.entries()).map(([key, value]) => [String(key), value])
  );
};

export const getObjectDiff = (
  obj1: Record<string, any>,
  obj2: Record<string, any>
): string[] => {
  const diff = Object.keys(obj1).reduce((result, key) => {
    if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
      result.push(key);
    } else if (isEqual(obj1[key], obj2[key])) {
      const resultKeyIndex = result.indexOf(key);
      result.splice(resultKeyIndex, 1);
    }
    return result;
  }, Object.keys(obj2));

  return diff;
};


export const fullCopy = (
  source: { [key: string]: any },
  destination: { [key: string]: any }
): any => {
  for (const field in source) {
    if (source[field]) {
      destination[field] = source[field];
    }
  }
  return destination;
};

export const compositeColumnDelimeter = '.';
// TODO - nested feidlds problem
export const transormDateFields = (o: any, dateFields?: string[]): any => {
  if (dateFields && o) {
    for (const [key] of Object.entries(o)) {
      if (dateFields.includes(key)) {
        const d = new Date(o[key] + 'Z');
        o[key] = new Date(
          d.toLocaleString('en', {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          })
        );
      }
    }
  }
  return o;
};
// TODO - rework mutable
export const extractEntityFromList = (list: any[], id: string): boolean => {
  // Find the index of the deleted contact
  const index = list.findIndex(
    (item: { [x: string]: any }) => item['Id'] === id
  );
  if (index > -1) {
    list.splice(index, 1);
    return true;
  } else {
    return false;
  }
};
export const groupObjectFields = (o: any): any => {
  const result: { [key: string]: any } = {};
  if (!o) return result;
  for (const [key, value] of Object.entries(o)) {
    if (value !== null && value !== undefined) {
      let settedValue = value;
      if (value instanceof Array) {
        settedValue = value.map((e) => groupObjectFields(e));
        // console.log(settedValue, 'value');
      }
      const fields = key.split(compositeColumnDelimeter);

      if (fields.length > 1) {
        let tempResult = result;

        for (let i = 0; i < fields.length - 1; i++) {
          if (!(tempResult as { [key: string]: any })[fields[i]]) {
            (tempResult as { [key: string]: any })[fields[i]] = {};
          }
          tempResult = (tempResult as { [key: string]: any })[fields[i]];
        }

        (tempResult as { [key: string]: any })[fields[fields.length - 1]] =
          settedValue;
      } else {
        result[key] = settedValue;
      }
    }
  }
  const result2: { [key: string]: any } = {};
  for (const [key, value] of Object.entries(result)) {
    if ((value as { [key: string]: any })['Name'] !== '') {
      result2[key] = result[key];
    } else {
      result2[key] = null;
    }
  }
  // console.log(result2);
  return result2 as any;
};

export const getChangedProperties = (entity: any, changedEntity: any): any => {
  const changedProperties: { [key: string]: any } = {};

  for (const key in changedEntity) {
    if (entity[key] !== changedEntity[key]) {
      changedProperties[key] = changedEntity[key];
    }
  }

  return changedProperties;
};
export const getDiffWithId = (base: any, newValues: any) => {
  console.log(base, 'base');
  console.log(newValues, 'newValues');
  console.log(getObjectDiff(base, newValues), 'diff');

  if (newValues.Id === base.Id) {
    // Initialize changes as an empty object
    const changes: { [key: string]: any } = {};
    Object.keys(newValues).forEach((key) => {
      // Loop through all properties in newValues
      // for (const key in newValues) {
      if (
        newValues[key] !== base[key] &&
        !(newValues[key] === null && base[key] === undefined)
      ) {
        // Add the changed property to the changes object
        changes[key] = newValues[key];
        console.log(key, ' changed ' + base[key] + '=>' + newValues[key]);
      }
    });

    // Add the Id from newValues to changes
    changes['Id'] = newValues.Id;

    return changes;
  } else {
    // If Id has changed, return newValues as a whole
    return newValues;
  }
};

export interface Config {
  columns?: string[];
  dateFields?: string[];
}

export interface Entity {
  [key: string]: any;
}

export const getEntityColumnValues = (
  config: Config,
  entity: Partial<Entity>
): ColumnValue[] => toColumnValues(deGroupObjectFields(config, entity));

export function deGroupObjectFields<T>(
  config: { columns?: string[]; dateFields?: string[] },
  entity: Partial<T>
) {
  const values: { [key: string]: any } = {};
  const dateFields = config.dateFields;
  const changedKeys = Object.keys(entity);
  config.columns?.forEach((column: string) => {
    if (!OPTIONAL_ENTITY_COLUMNS.includes(column)) {
      const dotIndex = column.indexOf(compositeColumnDelimeter);
      if (dotIndex > 0) {
        const lookup = column.substring(0, dotIndex);
        if (changedKeys.includes(lookup)) {
          const lookupField = column.substring(dotIndex + 1, column.length);
          if (lookupField === 'Id') {
            values[lookup + lookupField] = (entity as any)[lookup]
              ? (entity as any)[lookup]['Id']
              : null;
          } else {
            if (lookupField === 'Name') {
              if ((entity as any)[lookup] && (entity as any)[lookup]['Id']) {
                values[lookup + 'Id'] = (entity as any)[lookup]['Id'];
              }
            }
          }
        }
      } else {
        if (changedKeys.includes(column)) {
          if (column === 'Id') {
            if ((entity as any)[column] !== nullId) {
              values[column] = (entity as any)[column];
            }
          } else {
            if (dateFields && !dateFields.includes(column)) {
              values[column] = (entity as any)[column];
            } else {
              if (
                (entity as any)[column] instanceof Date ||
                dateFields?.includes(column)
              ) {
                const d: Date = (entity as any)[column];
                console.log(d, column);
                // d.toUTCString();
                // d.getTime();
                values[column] = (d as any).toISOString();
                console.log((values as any)[column], column);
                console.log(values[column], column);
                // d.getUTCMilliseconds();
              } else {
                (values as any)[column] = nullId;
              }
            }
          }
        }
      }
    }
  });
  // console.log(values);
  return values;
}

export const lowerCaseNameStyle = (name: string): string =>
  name.charAt(0).toLowerCase() + name.substring(1);
export const upperCaseNameStyle = (name: string): string =>
  name.charAt(0).toUpperCase() + name.substring(1);
