import { FilterFieldConfig } from '@bh/superfield';
import { compact, isArray, uniq } from 'lodash-es';

export const OPTIONAL_CLEANUP = [
  'CreatedBy',
  'CreatedOn',
  'ModifiedBy',
  'ModifiedOn',
];

export const getColumns = (fieldsConfig: Record<string, FilterFieldConfig>) =>
  uniq(
    compact(
      Object.values(fieldsConfig)
        .map((e) =>
          isArray(e.entitiesColumns) && e.entitiesColumns.length > 0
            ? e.entitiesColumns.map((c: string) => e.id + '.' + c)
            : e.id
        )
        .flat()
    )
  );
export const getDateColumns = (
  fieldsConfig: Record<string, FilterFieldConfig>
) =>
  uniq(
    Object.values(fieldsConfig)
      .filter(
        (e) =>
          e.entitySchemaName === 'Date' || e.entitySchemaName === 'DateTime'
      )
      .map((e) => e.id)
      .flat()
  );
