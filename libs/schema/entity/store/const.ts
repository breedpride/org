import { Provider } from '@angular/core';
import { FilterFieldConfig } from '@bh/superfield';
import { BPFormGroup, FORM_GROUP } from '@bh/form';
import { provideEntityColumns } from './entity-columns.token';
import { provideEntityDateColumns } from './entity-date-columns.token';
import { provideEntityFields } from './entity-field-config.token';

export const withDetailEntityProviders = (
  fn:
    | Record<string, FilterFieldConfig>
    | (() => Record<string, FilterFieldConfig>)
): Provider[] => {
  return [
    {
      provide: FORM_GROUP,
      useValue: new BPFormGroup({}),
    },
    provideEntityFields(fn),
    provideEntityColumns(),
    provideEntityDateColumns(),
  ];
};
