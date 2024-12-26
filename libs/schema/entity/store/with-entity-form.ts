import { inject } from '@angular/core';
import { BPFormGroup } from '@bh/form';
import { nullId } from '@bh/identifying';
import { WithCreatioId } from '@bh/identifying';
import { MediaStore } from '@bp/media-store';
import { ApiHelper, ApiService } from '@breedpride/api';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStoreFeature,
  type,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable, pipe, switchMap, tap } from 'rxjs';
import { withFields } from './with-fields.feature';
import { BPFormGroupInterface, EntityFormState, EntityStoreState } from '@bh/superfield';
import {
  setFulfilled,
  setPending,
  withRequestStatus,
} from '@bp/with-request-status';
import { withDefaulEntityData } from './with-default-data';
// TODO - unify

export function withEntityForm<T>(options: {
  entityForm?: BPFormGroupInterface;
  config?: any;
}) {
  return signalStoreFeature(
    {
      state: type<EntityStoreState>(),
    },
    withState<EntityFormState>(() => {
      return {
        entityForm: options?.entityForm || new BPFormGroup({}),
        entity: {},
      };
    }),
    withMethods((store) => ({
      setEntity(entity: any) {
        patchState(store, { entity });
      },
    })),
    withFields(options),
    withDefaulEntityData(),
    withRequestStatus(),
    withMethods(
      (store, api = inject(ApiService), apiHelper = inject(ApiHelper)) => ({
        prepareForUserChanges(entity: any) {
          store
            .entityForm()
            .fillFormByEntity(entity, store.config().fieldsConfig, apiHelper);
          patchState(store, { entity });
        },
        saveEntityProcess: rxMethod<T extends WithCreatioId ? T : any>(
          switchMap((entity) => {
            if (entity.Id && entity.Id !== nullId) {
              return api.updateEntity<T extends WithCreatioId ? T : any>(
                store.config(),
                entity
              );
            } else {
              return api.createEntity(store.config(), entity);
            }
          })
        ),
      })
    ),
    withMethods((store, api = inject(ApiService)) => ({
      getEntityForEditorById: rxMethod<string>(
        pipe(
          // distinctUntilChanged(),
          tap(() => patchState(store, setPending())),
          switchMap((id) => {
            if (id !== nullId) {
              const entityRequest = api.getById(store.config(), id);
              return entityRequest.pipe(
                tapResponse({
                  error: console.error,
                  finalize: () => patchState(store, setFulfilled()),
                  next: (entity) => {
                    store.prepareForUserChanges(entity);
                  },
                })
              );
            } else {
              return [];
            }
          })
        )
      ),
    })),
    withMethods(
      (
        store,
        dialogService = inject(DialogService),
        media = inject(MediaStore)
      ) => ({
        // TODO - useModal
        async modalEdit(editorConfig: any) {
          //TODO
        },
      })
    ),
    // TODO - move from view loader checker
    withMethods(
      (
        store,
        api = inject(ApiService),
        // modalEditor = inject(ModalEditorService)
      ) => ({
        //TODO - rework to RxMethod
        updateEntity<T extends WithCreatioId>(
          id: string,
          entity: T
        ): Observable<any> {
          //TODO - if success
          return api
            .updateEntity(store.config(), entity)
            .pipe
            // tap(u => this.replaceEntityInList(u)),
            // tap(e => this.setEntity(e))
            // tap(e => this.updatePublicPageAfterEditing(e))
            ();
        },

        //TODO duplicates in pipes
        createEntity<T extends WithCreatioId>(entity: T): Observable<T> {
          return api
            .createEntity<T>(store.config(), entity)
            .pipe
            // tap(u => this.replaceEntityInList(u)),
            // tap(e => this.setEntity(e))
            // tap(e => this.updatePublicPageAfterEditing(e))
            ();
        },
        // prepareForUserChanges(entity: AnyEntity): void {
        //   store
        //     .entityForm()
        //     .fillFormByEntity(entity, store.fieldsConfig(), apiHelper);
        //   patchState(store, { entity });
        // },
        editEntity(entityId: any) {
          store.modalEdit({ entityId });
          // modalEditor.editEntity({ entityId }, this);
        },
        addEntity(parentEntity: Record<string, any>) {
          // const entityData = store.prepareNewEntityData1(parentEntity);
          // modalEditor.editEntity({ entityData, entityStore: store });
        },
      })
    ),
    withMethods((store) => ({
      confirmDeleteEntity(id: string, callback: () => void) {
        // Implement the method or remove it if not needed
        console.log(`Entity with id ${id} will be deleted.`);
        callback();
      },
    }))
  );
}
