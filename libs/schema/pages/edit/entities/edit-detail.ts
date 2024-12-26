import { inject, InjectionToken, Provider } from '@angular/core';
import { Route } from '@angular/router';
import { ACTIVE_DETAIL } from '@bh/collection-store';

import { FilterFieldConfig } from '@bh/superfield';
import { PageFormDetailComponent } from '@bp/page-form-detail';
import { withDetailEntityProviders } from '@bh/entity-store';
import { provideEntityListStoreWithConfig } from '@bh/collection-store';

export const editDetailRoute = (
  input: {
    id: string;
    entitySchemaToken: InjectionToken<{
      fieldsConfig: Record<string, FilterFieldConfig>;
    }>;
  },
  extraProviders: Provider[] = []
  // entitiesFn: () => Record<string, FilterFieldConfig> | FilterFieldConfig[]
): Route => {
  const id = input.id;
  const schemaToken = input.entitySchemaToken;
  return {
    path: id,
    children: [
      {
        path: '',
        component: PageFormDetailComponent,
        resolve: {
          test: () => {
            console.log(
              '11!!!!!!!!!!!!!!!!!!!',
              inject(schemaToken).fieldsConfig
            );
          },
          setActiveDetail: () => inject(ACTIVE_DETAIL).set(id),
        },
      },
    ],
    providers: [
      withDetailEntityProviders(() => inject(schemaToken).fieldsConfig),
      provideEntityListStoreWithConfig(
        schemaToken,
        {
          naming: {
            editCompomentHeaderString: 'Title',
          },
        },
        extraProviders
      ),
    ],
  };
};
