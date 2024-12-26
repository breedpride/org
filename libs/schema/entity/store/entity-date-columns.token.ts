import { computed, Signal } from '@angular/core';
import { FilterFieldConfig } from '@bh/superfield';
import { compact } from 'lodash-es';
import { createInjectionToken } from 'ngxtension/create-injection-token';
import { ENTITY_FIELDS_CONFIG } from './entity-field-config.token';

export const entityDateColumnsFactory = (
  fieldsConfig: Record<string, FilterFieldConfig>
): Signal<string[]> =>
  computed(() =>
    compact(
      Object.entries(fieldsConfig)
        .filter(([, value]) => value.id === 'Date')
        .map(([, value]) => value.entitiesColumns)
    ).flat()
  );

export const [, provideEntityDateColumns, ENTITY_DATE_COLUMNS] =
  createInjectionToken(entityDateColumnsFactory, {
    isRoot: false,
    deps: [ENTITY_FIELDS_CONFIG],
  });
