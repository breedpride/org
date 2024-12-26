import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { TreeModule } from 'primeng/tree';

// const query = {
//   selector: {
//     id: { $eq: '0' },
//     // required: { $eq: true },
//     // email: { $exists: true },
//   },
//   fields: ['id'],
//   sort: [{ id: 'asc' }],
//   limit: 100,
//   skip: 0,
// };

@Component({
  selector: 'bp-todo',
  imports: [CommonModule, TreeModule, SplitterModule, ButtonModule],
  template: `
    <p-splitter [style]="{ height: '1000px' }" styleClass="mb-5 w-full">
      <ng-template>
        <div class="col flex align-items-center justify-content-center">
          Panel 1
        </div>
      </ng-template>
      <ng-template>
        <div class="col flex align-items-center justify-content-center">
          Panel 2
        </div>
      </ng-template>
      <ng-template>
        <div class="col flex align-items-center justify-content-center">
          <!-- <div class="card flex justify-content-center">
            <p-tree
              class="w-full md:w-30rem"
              [value]="files" />
          </div> -->
        </div>
      </ng-template>
    </p-splitter>
    <!-- @for (entity of schemaStore.schemaEntities(); track entity) {
      {{ entity | json }} -->
    <!-- <ng-container
      *ngTemplateOutlet="
        featureBlockTemplate;
        context: { featureBlock: featureBlock }
      ">
    </ng-container> -->
    <!-- } -->
    <!-- <button
      pButton
      (click)="add()">
      Add Todo
    </button>
    <button
      pButton
      (click)="clearAll()">
      Clear all
    </button>
    <button
      pButton
      (click)="updateQuery()">
      UpdateQuery
    </button> -->
  `
})
export class StandaloneComponent {
  // readonly schemaCollection = inject(RXDB_COLLECTION);
  // entities = computed(() => Object.values(this.schemaStore.schemaEntityMap()));
  // readonly schemaStore = inject(SchemaStore);
  // constructor() {
  //   console.log(
  //     this.schemaCollection.queryParams$.subscribe(e =>
  //       console.log('QeryParams', e)
  //     )
  //   );
  //   effect(() => {});
  // }
}
