import { FilterFieldConfig, StoreType } from '@bh/superfield';

import { createInjectionToken } from 'ngxtension/create-injection-token';

const [, , EXTRA] = createInjectionToken(
  (): Record<string, StoreType<any>>[] => [],
  {
    isRoot: true,
  }
);

export const [
  injectEntityFieldsConfig,
  provideEntityFields,
  ENTITY_FIELDS_CONFIG,
] = createInjectionToken(
  (
    configs: Record<string, FilterFieldConfig>[]
  ): Record<string, FilterFieldConfig> => {
    // Використовуємо функцію для мерджу
    return mergeConfigs(configs);
  },
  {
    extraProviders: [
      // {
      //   provide: ENTITY_COLUMNS,
      //   useFactory: (directive: ENTITY_FIELDS_CONFIG) => {
      //     return {
      //       entitySchemaName: directive.field()?.entitySchemaName(),
      //       ...directive.config,
      //     };
      //   },
      //   deps: [ENTITY_FIELDS_CONFIG],
      // },
    ],
    isRoot: false,
    deps: [EXTRA],
  }
);

// Функція для мерджу будь-якої кількості конфігів
function mergeConfigs(
  configs: Record<string, FilterFieldConfig>[]
): Record<string, FilterFieldConfig> {
  return configs.reduce((acc, config) => ({ ...acc, ...config }), {});
}
