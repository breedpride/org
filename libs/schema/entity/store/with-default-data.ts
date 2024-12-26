import { inject } from '@angular/core';
import { ME } from '@bh/filter';
import { nullId } from '@bh/identifying';
import { signalStoreFeature, type, withMethods } from '@ngrx/signals';
// TODO !!! rework
import { WithSpaceConfig } from '@bh/superfield';
import { UserService } from '@bh/user-store';

const fillDefaultData = (
  defaultEntityData: Record<string, (entity: any) => any> | undefined,
  parentEntity: Record<string, any> | null,
  userService: UserService
): Record<string, any> => {
  const entityData: Record<string, any> = {};
  // console.log('defaultEntityData', defaultEntityData);
  if (defaultEntityData) {
    Object.entries(defaultEntityData).forEach(([key, value]) => {
      if (value) {
        const result = value(parentEntity);
        switch (result) {
          case ME:
            entityData[key] = userService.contact();
            break;
          default:
            entityData[key] = result;
        }
      }
    });
  }
  return entityData;
};

export function withDefaulEntityData() {
  return signalStoreFeature(
    {
      state: type<WithSpaceConfig>(),
    },

    withMethods((store, userService = inject(UserService)) => ({
      prepareNewEntityData1(
        parentEntity: Record<string, any> | null,
        defaultEntityData?: Record<string, (entity: any) => any>
      ): Record<string, any> {
        const entityData: Record<string, any> = {
          Id: nullId,
        };
        const filterKey = store.config().filterKey;
        // const parentEntity = store.entity();
        if (filterKey && parentEntity) {
          entityData[filterKey] = {
            Id: parentEntity?.['Id'],
          };
        }
        return {
          ...entityData,
          ...fillDefaultData(
            store.config().defaultEntityData,
            parentEntity,
            userService
          ),
          ...fillDefaultData(defaultEntityData, parentEntity, userService),
        };
      },
    }))
  );
}
