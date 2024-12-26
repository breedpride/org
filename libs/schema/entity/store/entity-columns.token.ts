import { computed, Signal } from '@angular/core';
import { FilterFieldConfig } from '@bh/superfield';
import { createInjectionToken } from 'ngxtension/create-injection-token';
import { getColumns } from '@bh/entity/consts';
import { ENTITY_FIELDS_CONFIG } from './entity-field-config.token';

export const entityColumnsFactory = (
  fieldsConfig: Record<string, FilterFieldConfig>
): Signal<string[]> => computed(() => getColumns(fieldsConfig));

export const [, provideEntityColumns, ENTITY_COLUMNS] = createInjectionToken(
  entityColumnsFactory,
  {
    isRoot: false,
    deps: [ENTITY_FIELDS_CONFIG],
  }
);
