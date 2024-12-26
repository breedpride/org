import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewChangerComponent } from '@bh/collection-view-change';
import { ENTITY_STORE } from '@bh/entity-store';
import { ACTIVE_DETAIL } from '@bh/collection-store';
import { getDiffWithId } from '@breedpride/api';
import { EntitiesCounterComponent } from '@bh/counter';
import { MediaStore } from '@bp/media-store';
import { BPNavStore } from '@bh/nav-store';
import { TabStoreV2 } from '@bp/page-tab-store';
import { ButtonModule } from 'primeng/button';
import { injectSpaceStore } from '@bh/collection-store'

@Component({
  selector: 'bp-edit-action-panel',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    ViewChangerComponent,

    EntitiesCounterComponent,
  ],
  template: `
    <form [formGroup]="entityForm()" (ngSubmit)="onSubmit()">
      <div
        class="flex"
        [ngClass]="{
          'py-2 px-4 bg-secondary-100': !isGeneralDetail(),
        }"
      >
        @if (!isGeneralDetail()) {
        <bp-view-changer />
        <bp-entities-counter
          [entitiesCount]="spaceStore.EntitiesCount()"
          [isLoading]="spaceStore.isLoading()"
          [total]="spaceStore.total()"
        />
        }

        <div class="ml-auto flex gap-2">
          @if (isGeneralDetail()) {
          <button
            class="
                p-button-rounded p-button-outlined p-button-secondary
                p-button-sm
              "
            aria-label="Cancel"
            pRipple
            pButton
            type="button"
            (click)="cancelEdit()"
            label="Cancel"
          ></button>
          <button
            class="p-button-rounded p-button-sm"
            aria-label="Save"
            icon="pi pi-save"
            pRipple
            pButton
            type="submit"
            [label]="media.moreThanSM() ? 'Save' : ''"
          ></button>
          } @else {
          <button
            class="p-button-rounded p-button-sm"
            aria-label="Add"
            icon="pi pi-plus"
            pRipple
            pButton
            type="button"
            [label]="media.moreThanSM() ? 'Add' : ''"
          ></button>
          <button
            class="p-button-rounded p-button-sm p-button-secondary"
            aria-label="Edit"
            icon="pi pi-pencil"
            pRipple
            pButton
            type="button"
            label="Edit"
            [label]="media.moreThanSM() ? 'Edit' : ''"
          ></button>
          <button
            class="
                p-button-rounded p-button-outlined p-button-secondary
                p-button-sm
              "
            aria-label="Delete"
            icon="pi pi-trash"
            pRipple
            pButton
            type="button"
            (click)="cancelEdit()"
            [label]="media.moreThanSM() ? 'Delete' : ''"
          ></button>
          }
        </div>
      </div>
    </form>
  `,
  styles: `
    // :host {
    //   display: block;
    //   width: 100%;
    // }
  `,

})
export class EditActionPanelComponent {
  media = inject(MediaStore);
  detail = inject(ACTIVE_DETAIL);
  isGeneralDetail = computed(
    () => this.detail() === 'general' || this.detail() === ''
  );
  spaceStore = injectSpaceStore();
  entityStore = inject(ENTITY_STORE);
  entityForm = computed(() => this.entityStore.entityForm());
  editReady = computed(() => this.entityForm()?.filled());
  entity = computed(() => this.entityStore?.entity());
  navStore = inject(BPNavStore);
  activeTab = inject(TabStoreV2).SelectedEntity;
  // TODO required


  onSubmit(): void {
    // TODO: message about invalid state
    const changes = getDiffWithId(this.entity(), this.entityForm()?.value);
    // TODO - use isStore option for form update publicEntityPage
    this.entityStore?.saveEntityProcess(changes);
    // .subscribe(entity => {
    //   // TODO - maybe recreate form????????
    //   //TODO refresh needLoadPublicPageentityPage by newEntityData
    //   // TODO check is data public or not
    //   if (entity) {
    //     this.entityForm.markAsUntouched();
    //     // TODO bug mey be - and will be drop to main page
    //     this.changeView(entity.Url);
    //   }
    // });
  }

  cancelEdit(): void {
    this.navStore.cancel();
  }
}
