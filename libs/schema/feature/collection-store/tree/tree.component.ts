
import { TreeModule } from 'primeng/tree';

import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  EventEmitter,
  inject,
  NgZone,
  Output,
  Signal,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
// import { provideRxCollection, RXDB_COLLECTION } from '@ngx-odm/rxdb';
// import { withCollectionService } from '@ngx-odm/rxdb/signals';

// import { NodeService } from '@service/nodeservice';
import { deserialize } from '@breedpride/api';
import { RxConfigDocument, RxHeroDocument } from '@bh/rxdb';
import { TreeSchema } from '@bh/rxdb';
import { DatabaseService } from '@bh/rxdb';
import { TreeNode } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { TabsModule } from 'primeng/tabs';
import { TreeNodeCollapseEvent } from 'primeng/tree';
import { TreeTableModule, TreeTableNodeExpandEvent } from 'primeng/treetable';
import { removeRxDatabase, RxDumpCollectionAny } from 'rxdb';
import { Observable, tap } from 'rxjs';
// import { generateSchema } from './online-generator';
import {
  DATABASE_NAME,
  DictionarySchema,
  environment,
  RxDictionaryCollection,
} from '@bh/rxdb';

// import type {
  // RxConfigDocument
// }
// from '../../RxDB.d';

import { Id } from '@bh/superfield';

type T = any;
@Component({
  selector: 'bp-new-space',
  imports: [
    ButtonModule,
    CommonModule,
    RouterModule,
    // RouterLink,
    ButtonModule,
    // StandaloneComponent,
    SplitterModule,
    // FeatureExperimentComponent,
    // SchemaGraphComponent,
    TreeModule,
    TreeTableModule,
    TabsModule,
    // TreeTableTogleModule,
  ],
  providers: [
    DatabaseService,
    // provideRxCollection(TREE_SCHEMA_COLLECTION_CONFIG),
    // NodeService,
  ],
  // provideRxCollection(schemaConfig)],
  // providers: [DatabaseService],
  // providers: [provideCollectionWithConfig({ collectionConfig: initilalTab })],
  template: `
    <button pButton (click)="click()">Add</button>
    <button pButton (click)="removeDb()">ClearDatabase</button>
    <!-- <button pButton (click)="generateS()">generate</button> -->
    <button pButton (click)="update()">update</button>
    <p-splitter
      styleClass=" w-full h-[100vh] rounded-none"
      [panelSizes]="[20, 40, 40]"
    >
      <ng-template #panel>
        <div
          class="flex-col flex align-items-center justify-content-center py-3 px-4 text-primary"
        >
          <!-- <span class="font-bold text-lg">Schema</span> -->
          <div class="card flex justify-content-center">
            <p-tree
              filterMode="strict"
              [filter]="true"
              filterPlaceholder="Filter"
              class="w-full md:w-30rem"
              [value]="firstlevelNodes()"
              (onNodeCollapse)="onNodeCollapse($event)"
              (onNodeExpand)="onNodeExpand($event)"
              selectionMode="single"
              scrollHeight="900px"
              [(selection)]="selectedNode"
              [draggableNodes]="false"
              [droppableNodes]="false"
              draggableScope="self"
              droppableScope="self"
            />
          </div>
        </div>
      </ng-template>
      <ng-template  #panel>
        <div
          class="flex-col flex align-items-center justify-content-center py-3 px-4 text-primary"
        >
          <span class="font-bold text-lg">Structure</span>
          <!-- {{ selectedNode() }} -->
          <p-treetable
            [resizableColumns]="true"
            columnResizeMode="expand"
            [value]="follow"
            selectionMode="multiple"
            [(selection)]="selectedNode2"
            dataKey="label"
            [columns]="cols"
            [metaKeySelection]="metaKeySelection"
            [scrollable]="true"
            scrollHeight="900px"
            [scrollable]="true"
            [tableStyle]="{ 'min-width': '50rem' }"
            styleClass="mt-6"
            selectionMode="single"
          >
            <ng-template #colgroup let-columns>
              <colgroup>
                <col *ngFor="let col of columns" />
              </colgroup>
            </ng-template>
            <ng-template #header>
              <tr>
                <th>label</th>

                <th>Type</th>
              </tr>
            </ng-template>
            <ng-template #body let-rowNode let-rowData="rowData">
              <tr [ttRow]="rowNode" [ttSelectableRow]="rowNode">
                <td>
                  <p-treeTableToggler [rowNode]="rowNode" />
                  {{ rowData?.label }}
                </td>

                <td>{{ rowData?.type }}</td>
              </tr>
            </ng-template>
          </p-treetable>
        </div>
        <!-- <bp-schema-graph></bp-schema-graph> -->
      </ng-template>
      <ng-template>
        <div
          class="flex-col flex align-items-center justify-content-center py-3 px-4"
        >
          <span class="font-bold text-lg"> Current structure</span>
          <!-- <p-tabs value="/dashboard">
            <p-tablist>
              @for(tab of tabs; track tab.route){
              <p-tab [value]="tab.route" [routerLink]="tab.route">
                <i [class]="tab.icon"></i>
                <span>{{ tab.label }}</span>
              </p-tab>
              }
            </p-tablist>
          </p-tabs> -->
          <router-outlet></router-outlet>
          <!-- <bp-feature></bp-feature> -->
        </div>
      </ng-template>
    </p-splitter>
  `,
  styles: `
    :host {
      display: block;
    }
  `,

})
export class TreeComponent {
update
() {
  this.ch.markForCheck();
// throw new Error('Method not implemented.');
}

tabs: { route: string; label: string; icon: string }[] = [
    { route: 'test', label: '0', icon: 'pi pi-home' },
    { route: '../test', label: '1', icon: '' },
  ];
  cols = [
    { field: 'name', header: 'Name' },

    { field: 'type', header: 'Type' },
  ];
  metaKeySelection = true;
  ch = inject(ChangeDetectorRef);
  follow!: TreeNode[];
  onNodeCollapse($event: TreeNodeCollapseEvent) {
    console.log($event);
    this.follow = [...this.firstlevelNodes()];
    this.ch.markForCheck();
  }
  onNodeExpand($event: TreeTableNodeExpandEvent<any>) {
    console.log($event);
    this.follow = [...this.firstlevelNodes()];
    this.ch.markForCheck();
    // $event.node.children = this.nodes3()find(
    //   (e) => e.id === $event.node.id.
    // )?.children;
  }

  async removeDb() {
    // await this.dbService.db.tree.remove();
    removeRxDatabase(DATABASE_NAME, environment.getRxStorage());
  }
  selectedNode = signal(null);
  selectedNode2 = signal(null);

  async click() {
    this.test();

    const data = await (
      await fetch('http://localhost:4200/data/types.json')
    ).json();
    console.log(data);
    this.import(data);
  }


  dbService = inject(DatabaseService);
  public config$$ = this.dbService.db.config.find().$$();
  ss = this.config$$;
  test2 = this.dbService.db.dictionary.find().$$ as Signal<DictionarySchema[]>;
  signal = this.dbService.db.tree.find().$$ as Signal<TreeSchema[]>;
  nodes = computed(() => {
    if (this.signal() === undefined || this.signal()?.length === 0) return [];
    const list = this.signal();
    const test = list.map((e) => {
      // const p = e.features.find().$$;
      // console.log(p);
      const t = e.features;
      console.log(t);
      const features = {} as Record<string, any>;
      Object.entries(t).forEach((key, value) => features[key[0]] = key[1]);
      console.log(features);
      // console.log(e.features.columns.map((t) => t.name));
      // const attachment = e.getAttachment('cat.jpg');
      return {
        expanded: false,
        id: e.id,
        uuid: e.uId,
        label: e.data?.label || e.name + '_' + e.type,
        deps: e.deps,
        children: [] as TreeNode[],
        name: e.name,
        data: {
          label: e.data?.label || e.name + '_' + e.type,
          ...e.data,
          type: e.type,
          name: e.name,
          id: e.id,
          features,

        },

      };
    });
    test?.forEach((e) => {
      e.deps?.forEach((p) => {
        test.find((t) => t.id === p)?.children.push(e);
      });
    });
    console.log(test);
    return test;
  });
  firstlevelNodes = computed(() => {
    // const res = this.nodes()?.filter((e) => e.deps?.length === 0);
    return this.nodes();
    // return res;
  });
  nodes3 = computed(() => {
    const res = this.nodes().filter((e) => e.expanded);
    return res;
  });


  constructor() {
    // this.config$ = this.dbService.db.config.find().$;
    // const test = this.dbService.db.config.find().$$;
    // Signal
    const config$$ = this.dbService.db.config.find().$$;
    // config.
    const signal = this.dbService.db.tree.find({
      // query
      selector: {},
      sort: [{ name: 'asc' }],
    }).$$;

    effect(() => {
      this.follow = [...this.firstlevelNodes()];
      this.ch.markForCheck();
      // console.log(this.nodes3());
    });

    // this.features$ = this.dbService.db.tree // collection
    //   .find({
    //     // query
    //     selector: {},
    //     sort: [{ name: 'asc' }],
    //   })
    //   .$ // observable
    //   .pipe(
    //     tap(() => {
    //       /**
    //        * Ensure that this observable runs inside of angulars zone
    //        * otherwise there is a bug that needs to be fixed inside of RxDB
    //        * You do not need this check in your own app.
    //        */
    //       NgZone.assertInAngularZone();

    //       /**
    //        * hide loading icon on first emit
    //        */
    //       this.emittedFirst = true;
    //     })
    //   );
  }
  /**
   * You can also get singals instead of observables
   * @link https://rxdb.info/reactivity.html
   */
  public heroCount$$ = this.dbService.db.tree.count().$$;

  @Output() editChange: EventEmitter<RxHeroDocument> = new EventEmitter();

   /**
     * this method exists to play around with the typings
     */
   async bar(): Promise<string> {
    const db = this.dbService.db;
    const firstDoc = await db.config.findOne().exec();
    if (!firstDoc) return 'not found';
    const f: string = firstDoc.name;
    return f;
}
  async import(docs: T[]): Promise<void> {
    const schemaHash = await this.dbService.db.tree.schema.hash;
    const dump: RxDumpCollectionAny<T> = {
      name: this.dbService.db.tree.name,
      schemaHash,
      docs,
    };
    this.dbService.db.tree.importJSON(dump);
  }
  editHero(hero: RxHeroDocument) {
    // HealthExamResult.
    // let dialogRef = this.dialog.open(HeroEditDialogComponent, {
    //   height: '400px',
    //   width: '600px',
    //   data: {
    //     hero,
    //   },
    // });
  }
  deleteHero(hero: RxHeroDocument) {
    hero.remove();
  }
  async test() {
    const dictionary = this.dbService.db.dictionary;
    const e = await checkSchema('PetType', dictionary);
    e.json().then(async (e) => {
      console.log(e);
      const res = deserialize(e);

      if (res.length < 40) {
        //  const data = JSON.parse(res.data);
        await importF(
          res.map((e: { Id: Id }) => ({ id: e.Id })),
          dictionary
        );
      }
      console.log(res);
    });
  }
  /**
   * this method exists to play around with the typings
   */
  async foo(): Promise<string> {
    const db = this.dbService.db;
    const firstDoc = await db.hero.findOne().exec();
    if (!firstDoc) return 'not found';

    const f: string = firstDoc.color;
    return f;
  }
}

async function importF<T>(docs: T[], schema: any): Promise<void> {
  console.log(docs);
  console.log(schema);
  const schemaHash = await schema.schema.hash;
  const dump: RxDumpCollectionAny<T> = {
    name: schema.name,
    schemaHash,
    docs,
  };
  await schema.importJSON(dump);
}

export async function checkSchema(
  schema: string,
  dictionary: RxDictionaryCollection
) {
  return fetch(
    `https://dev.dogarray.com/0/ServiceModel/BreedprideAdminApi/space/collection/${schema}?from=0&columns=Id&rows=50&skipUpper=true&force=true`
  );
  // return fromFetch(
  //   `https://dev.dogarray.com/0/ServiceModel/BreedprideAdminApi/space/collection/PetType?from=0&columns=Id&rows=1&skipUpper=true&force=true`,
  //   {
  //     headers: {
  //       // Authorization: token,
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'GET',
  //   }
  // ).pipe(
  //   tap((res) => console.error(res)),
  //   switchMap((response) => {
  //     // console.log(response);
  //     if (response.ok) {
  //       // OK return data
  //       return response.json();
  //     } else {
  //       // Server is returning a status requiring the client to try something else.
  //       return of({ error: true, message: `Error ${response.status}` });
  //     }
  //   })
  // );
  //dev.dogarray.com/0/ServiceModel/BreedprideAdminApi/space/collection/Pet?from=0&columns=Id&rows=1&skipUpper=true&force=true
  // https: return globalColumnsMap.has(SchemaName);

}