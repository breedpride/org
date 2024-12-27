import {
  inject,

} from '@angular/core';
import {   SpaceConfig} from '@bh/superfield';
import { withLogger } from '@bp/with-logger';
import { signalStore } from '@ngrx/signals';

import {withFilteredByFilterStore} from '@bh/collection-filtration';
import { withFilteredCreatioEntities } from '@bh/collection-data';



import { InjectionToken, Optional, Provider, SkipSelf } from '@angular/core';
import { createInjectionToken } from 'ngxtension/create-injection-token';
// import { TreeService } from './tree.service';
import { SUPER_CONFIG, StoreConfig } from '../config/tokens';
import { TreeService } from '../tree/tree.service';
import { EmptySpaceConfig } from '../config';

type SuperStoreType = LookupStore & EntityListStore
// Створення ін'єкційного токена для сервісу TreeService
export const SUPER_STORE = new InjectionToken<SuperStoreType>('SUPER_STORE');




export const injectSpaceStore = (): EntityListStore => {
  return inject(SUPER_STORE);
};
export const injectFieldStore = (): LookupStore => {
  return inject(SUPER_STORE);
};





export const fieldStoreFactory = (config: StoreConfig) => {
  const LookupStore = signalStore({ protectedState: false },withFilteredCreatioEntities({ config }));
  return new LookupStore();
};
export type LookupStore = ReturnType<typeof fieldStoreFactory>;






export const spaceStoreFactory = (config: SpaceConfig)=> {
  const EntityListStore = signalStore(
    { protectedState: false },
    withFilteredByFilterStore({config}),
    withLogger(`[SpaceStore]`)
  );
  return new EntityListStore();
};


export type EntityListStore = ReturnType<typeof spaceStoreFactory>;





// Фабрика для створення TreeService з можливістю ін'єкції батьківського TreeService
export function superFactory(config: StoreConfig, parent: EntityListStore | null) {
  console.log('serviceFactory!!!!!!!!!!!!!!!!!!!!!!!!!', config, parent);
  if (parent) {
    console.log('!!!!!!!!!!!!!!Root TreeService', parent);
    return spaceStoreFactory(config);
  } else {

    console.log('Root TreeService', 'PARENT NOT FOUND');
  }
  return spaceStoreFactory(config);
}

// Створення токена з використанням createInjectionToken
export const [injectService, provideService] = createInjectionToken(
  superFactory,
  {
    isRoot: false,
    deps: [[SUPER_CONFIG], [new Optional(), new SkipSelf(), SUPER_STORE]],
    token: SUPER_STORE,
  }
);

export function provideList(...args: any[]): Provider[] {
  return [provideService(), args];
}









export const [, , LIST_ENTITY] =
  createInjectionToken(spaceStoreFactory, {
    deps: [SUPER_CONFIG],
  });

export const provideEntityListStoreWithConfig = (
  schemaToken: InjectionToken<{ entitySchemaName: string }>,
  config: Partial<StoreConfig>,
  extraProvider: Provider[] = []
): Provider[] => {
  return [
    {
      provide: SUPER_CONFIG,
      useFactory: (token = inject(schemaToken)) => ({
        ...EmptySpaceConfig,
        ...token,
        ...config,
      }),
    },
    {
      provide: SUPER_STORE,
      useFactory: spaceStoreFactory,
    },
    {
      provide: LIST_ENTITY,
      useFactory: spaceStoreFactory,
    },
    ...extraProvider,
  ];
};

// @Injectable()
// export class DetailStore extends EntityListStore {
//   constructor() {
//     super();
//   }
//   filterStore = injectFiltersStore();
//   pageStore = inject(PageStore);
//   patchConfig(storeConfigClean: SpaceConfig): void {
//     const storeConfig = cloneDeep(storeConfigClean);

//     const parentEntity = this.pageStore.entityPage();
//     const filterKey: FilterFieldConfig = merge({}, EmptyFieldConfig, {
//       active: () => true,
//       component: FormFieldCode.AUTOCOMPLETE,
//       displayValue: () => '',
//       entitySchemaName: 'keyFilter',
//       getFilter: () => byAny(storeConfig.filterKey || '', parentEntity?.Id),
//       id: 'keyFilter',
//     } as Partial<FilterFieldConfig>);
//     if (storeConfig.filterConfig) storeConfig.filterConfig.push(filterKey);

//     // this.setDefaults(storeConfig);
//     this.filterStore.setFilterParams({});
//   }

//   onRowDblClick($event: MouseEvent, entity: WithCreatioId): void {
//     // this.editEntity(entity.Id);
//   }
//   onRowSelect($event: TableRowSelectEvent): void {
//     if ($event.data) {
//       this.setSelectedId($event.data.Id);
//     } else {
//       this.setSelectedId('');
//     }
//   }

//   oldSelected: any;
//   // TODO - menuprovider
//   _detailMenu = computed(() => {
//     return [
//       {
//         // command: () => this.addEntity(this.parentEntity),
//         icon: 'pi pi-plus',
//         styleClass: 'border-4 border-red-500',
//       },
//       {
//         command: () => {
//           // this.editEntity(this.SelectedEntity()?.Id ?? '');
//         },
//         disabled: !this.SelectedEntity(),
//         icon: 'pi pi-pencil',
//       },
//       {
//         // command: () => this.confirmDeleteEntity(this.selectedEntity.Id),
//         // disabled: !this.selectedEntity?.Id,

//         icon: 'pi pi-trash',
//       },
//     ];
//   });
//   editorComponent!: EditorComponentName;
//   editorTemplate!: TemplateRef<{ $implicit: any }>;
// }
