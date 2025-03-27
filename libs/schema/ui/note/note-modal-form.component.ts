import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ModelCodeType } from '@bh/windmill';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

// TODO - merge with common Note detail config (in my/notes/space.ts)

@Component({

  selector: 'bp-note-modal-form',
  styles: ``,
  template: `
    <div class=" sticky top-0 z-10 flex bg-white px-3 pb-3">
      <button
        class="p-button-rounded p-button-sm ml-auto"
        pRipple
        pButton
        (click)="add()"
        type="button"
        icon="pi pi-plus"
        label="Add"
      ></button>
    </div>
    <div class="xxl:grid-cols-2 grid gap-3 lg:grid-cols-2 xl:grid-cols-1">
      <!-- @for (entity of entities(); track entity) { -->
      <!-- <bp-entity-grid-card
          [card]="GRID_CARDS"

          [entity]="entity"

          mode="navigate"></bp-entity-grid-card> -->
      <!-- <bp-note-grid-card
        [spaceStore]="detailStore"
        [entity]="entity"
        mode="card"
      />
      } -->
    </div>
  `,
  imports: [CommonModule, ButtonModule],
})
export class NoteModalFormComponent {
  // detailStore = inject(DetailStore);
  // entities = this.detailStore.Entities;
  enityId: any;
  parentEntityStore: any;
  GRID_CARDS = ModelCodeType.NOTE;
  config = inject(DynamicDialogConfig);
  constructor(public ref: DynamicDialogRef) {
    // console.log(this.ref);
    // console.log(this.detailStore);
    // const editorConfig: NoteGridConfig = this.config.data;
    // const storeConfig = this.config.data.spaceConfig;

    // !!TODO external config service

    // this.detailStore.patchConfig(storeConfig);
    // this.detailStore.setSpaceStore(this.parentEntityStore);
    // this.detailStore.spaceStore.getEntityById(this.enityId);
  }
  add() {
    console.log('add');
  }
  // add() {
  //   const entityData = this.detailStore.prepareNewEntityData();

  //   this.editorService.editWithCallBack(
  //     {
  //       editorComponent: 'NOTE',
  //       editorTemplete: null,
  //       entityData: entityData,
  //       entityId: nullId,
  //       entityStore: this.detailStore,
  //     },
  //     () => {
  //       this.detailStore.refresh();
  //     }
  //   );
  // }
}
