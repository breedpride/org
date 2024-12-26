import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  computed,
  DestroyRef,
  effect,
  EnvironmentInjector,
  inject,
  signal,
  Type,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FORM_GROUP } from '@bh/form';
import { EmptyFieldConfig } from '@bh/superfield';
import { VIEWS_STORE } from '@bh/collection-view-change';
import {
  ENTITY_COLUMNS,
  ENTITY_FIELDS_CONFIG,
  EntityStore,
  entityStoreFactory,
} from '@bh/entity-store';
import { nullId } from '@bh/identifying';
import { EditorConfig } from '@bh/types';
import { BPConfirmationService } from '@bp/chromatin/services';
import { ApiHelper, getDiffWithId } from '@breedpride/api';
import { merge } from 'lodash-es';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { take } from 'rxjs';
import { getColumns } from '@bh/entity/consts';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    // NgComponentOutlet,
  ],
  providers: [FormGroupDirective],
  selector: 'bp-detail-editor',
  styles: [],
  template: `
    @if (entityForm() && entityStore()?.entity() && entityForm()?.filled()) {
    <!-- <form [formGroup]="entityForm()"> -->
    <div #container></div>
    <!-- </form> -->
    <!-- @if (editComponent()) {
        <form [formGroup]="entityForm()">
          <ng-container
            *ngComponentOutlet="
              editComponent();
              injector: this.config.data.injector
            " />
        </form>
      } -->

    <div class="mt-10 grid grid-cols-2 gap-3">
      <button
        (click)="onCancel()"
        pButton
        type="button"
        label="Cancel"
        aria-label="Cancel"
        class="p-button-text p-button-secondary  bg-secondary-100 hover:bg-secondary-200 focus:bg-secondary-300"
      ></button>

      <button
        pButton
        pRipple
        type="submit"
        (click)="onSubmit()"
        label="Save"
        aria-label="Save"
        class="p-button-text  bg-primary-50 hover:bg-primary-100 focus:bg-primary-200"
        [ngClass]="{
            'hover:bg-primary-100 focus:bg-primary-200': entityForm()?.valid,
          }"
      ></button>
    </div>
    }
  `,
})
export class DetailEditorComponent {
  containerRef = viewChild('container', {
    read: ViewContainerRef,
  });
  envInjector = inject(EnvironmentInjector);
  _changeDetectorRef = inject(ChangeDetectorRef);
  apiHelper = inject(ApiHelper);
  destroyRef = inject(DestroyRef);
  config = inject(DynamicDialogConfig);

  id!: string;
  entityData!: any;
  entityStore = signal<EntityStore | null>(null);

  entityForm = computed(() => this.entityStore()?.entityForm());
  editComponent = signal<Type<any> | null>(null);

  confirmationService = inject(BPConfirmationService);

  constructor(public ref: DynamicDialogRef) {
    const config: EditorConfig = this.config.data;
    const injector = config.injector;
    const fieldsConfig = injector.get(ENTITY_FIELDS_CONFIG);
    const form = injector.get(FORM_GROUP);

    const columns = getColumns(fieldsConfig);
    const c2 = injector.get(ENTITY_COLUMNS);
    // injector.get(ENTITY_COLUMNS);
    console.log(
      '🚀 ~ DetailEditorComponent ~ constructor ~ columns',
      columns,
      c2()
    );
    const entityStore = entityStoreFactory({
      config: merge({}, EmptyFieldConfig, {
        entitySchemaName: 'TitleInPet',
        fieldsConfig: fieldsConfig,
        dateFields: [],
        columns: columns,
        entityColumns: columns,
      }),
      entityForm: form,
    });

    this.entityStore.set(entityStore);

    if (config) {
      // this.entityStore.set(config.entityStore);
      // this.editorTemplate =
      //   config.editorTemplete || this.entityStore.editorTemplate;
      this.id = config.entityId ?? nullId;
      // this.entityData = config.entityData;

      this.editComponent.set(config.editComponent);
    }
    if (!this.id || this.id === nullId) {
      this.entityStore()?.prepareForUserChanges({
        Id: nullId,
        ...this.entityData,
      });
    } else {
      this.entityStore()?.getEntityForEditorById(this.id);
    }
    effect(() => {
      if (this.entityForm()?.filled()) {
        this.containerRef()?.clear();
        this.getComponent(config).then((cmp) => {
          if (cmp) {
            this.containerRef()?.createComponent(cmp, {
              environmentInjector: this.config.data.injector,
              injector: this.config.data.injector,
            });
          }
        });
      }
    });
  }

  async getComponent(editorConfig: EditorConfig): Promise<Type<any> | null> {
    const view = editorConfig.injector.get(VIEWS_STORE).view;

    const view2 = view ? view() : null;

    let editComponent = null;
    if (view2) editComponent = await view2.loadEditComponent();

    return editComponent;
  }

  onSubmit(): void {
    if (this.entityForm()?.valid) {
      const entity = this.entityStore()?.entity();
      const currentEntity = this.entityForm()?.getValues();
      // TODO: message about invalid state
      if (currentEntity.Id && currentEntity.Id !== nullId) {
        const changes = getDiffWithId(entity, currentEntity);
        console.log(changes);
        // TODO close ref
        this.entityStore()?.updateEntity(currentEntity.Id, changes);
        // .subscribe(e => {
        //   this.ref.close({ entity: e, updated: true });
        // });
      } else {
        this.entityStore()
          ?.createEntity(currentEntity)
          .subscribe((e) => {
            this.ref.close({ created: true, entity: e });
          });
      }
    } else {
      console.log('Invalid Form');
      Object.keys(this.entityForm()?.controls || {}).forEach((field) => {
        const control = this.entityForm()?.get(field);
        if (control?.invalid) {
          console.error(control, control.value);
        }
        // if (control instanceof FormGroup) {
        //   recursiveFunc(control);
        // } else if (control instanceof FormArray) {
        //   recursiveFunc(control);
        // }
      });
      this.entityForm()?.markAllAsTouched();
      this._changeDetectorRef.markForCheck();
    }
  }

  onCancel(): void {
    this.entityStore()?.setEntity(null);
    const hasChanges = this.entityForm()?.dirty && this.entityForm()?.touched;
    if (!hasChanges) {
      this.ref.close();
    } else {
      this.confirmationService
        .confirmEditorExit()
        .pipe(take(1))
        .subscribe((result) => {
          if (result) {
            this.ref.close();
          }
        });
    }
  }
}
