import { inject, InjectionToken, signal } from '@angular/core';

import { FilterFieldConfig, SpaceConfig } from '@bh/superfield';
import { createInjectionToken } from 'ngxtension/create-injection-token';

export type StoreConfig = SpaceConfig;
export const STORE_CONFIG = new InjectionToken<StoreConfig>('SpaceConfig');

export const [, , ACTIVE_DETAIL] = createInjectionToken(() => signal(''), {
  isRoot: true,
});

export function injectEntityTokenFromSpaceConfig<
  Entity extends object
>(): Record<keyof Entity, FilterFieldConfig> {
  // Інжектуємо SPACE_CONFIG
  return inject(STORE_CONFIG).fieldsConfig as unknown as Record<
    keyof Entity,
    FilterFieldConfig
  >;
}
