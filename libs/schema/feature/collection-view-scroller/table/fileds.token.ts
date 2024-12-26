import { inject, InjectionToken, Provider } from '@angular/core';
import { FilterFieldConfig } from '@bh/superfield';
import { createInjectionToken } from 'ngxtension/create-injection-token';

export const [
  injectEntitiesFieldsConfig,
  provideFields,
  ENTITIES_FIELDS_CONFIG,
] = createInjectionToken(
  (): Record<string, FilterFieldConfig> => {
    return {};
  },
  {
    extraProviders: [],
    isRoot: false,
    // deps: [],
  }
);

export const provideEntitiesFieldsConfigToken = (
  value: InjectionToken<Record<string, FilterFieldConfig>>
): Provider[] => {
  return [
    {
      provide: ENTITIES_FIELDS_CONFIG,
      useFactory: () => inject(value),
    },
  ];
};
export const provideEntitiesFieldsConfigValue = (value: any): Provider[] => {
  return [
    {
      provide: ENTITIES_FIELDS_CONFIG,
      useFactory: () => value(),
    },
  ];
};
