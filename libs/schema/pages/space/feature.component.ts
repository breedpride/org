import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { signalStore } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
// import { FEATURE_SCHEMA_COLLECTION_CONFIG } from 'libs/schema/token/rxdb/schemas/feature.schema';
import { TreeDragDropService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TreeModule } from 'primeng/tree';

// import { NodeService } from '@service/nodeservice';
type TreeSchema = {
  id: string;
  name: string;
  type: string;
  data: Record<string, any>;
  children: TreeSchema[];
};

type TreeFilter = 'ALL';
const TreeSchemaStore = signalStore(
  { protectedState: false },
  withEntities<TreeSchema>()
  // withCollectionService<TreeSchema, TreeFilter>({
  //   filter: 'ALL' as TreeFilter,
  //   query: {},
  //   selectId: entity => entity.id || '',
  //   countQuery: { selector: {} }, // count all remaining todos
  // })
);

@Component({
  selector: 'bp-feature',
  imports: [CommonModule, ButtonModule, TreeModule],
  providers: [
    // provideRxCollection(FEATURE_SCHEMA_COLLECTION_CONFIG),
    TreeDragDropService,
    // NodeService,
  ],
  template: `
    <!-- <p>feature works!</p>
    <button pButton (click)="click()">Click me</button>
    {{ treeStore.entities() | json }}
    <div class="card flex justify-content-center">
      <p-tree
        class="w-full md:w-30rem"
        [value]="treeNodes()"
        [draggableNodes]="true"
        [droppableNodes]="true"
        (onNodeDrop)="stopDrag($event)"
        draggableScope="self"
        droppableScope="self"
      />
    </div> -->
  `,
  styles: `
    :host {
      display: block;
    }
  `,

})
export class FeatureExperimentComponent {
  drag = inject(TreeDragDropService);

  click() {
    // this.treeStore.insert({
    //   id: createUUID(),
    //   name: createUUID(),
    //   data: {},
    //   children: [],
    //   type: 'property',
    // });
  }
  // treeStore = new TreeSchemaStore();
  // treeNodes = computed(() =>
  //   this.treeStore.entities().map((node) => {
  //     return { label: node.name, data: node };
  //   })
  // );
  constructor() {
    // this.drag.stopDrag.subscribe(event => {
    //   conso;
    // });
    // effect(() => {
    //   console.log(this.treeStore.entities());
    // });
  }
  stopDrag(event: any) {
    console.log(event);
  }
}
