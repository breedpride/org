import { Component, effect, inject } from '@angular/core';
import { TreeModule } from 'primeng/tree';
import { SUPER_STORE } from '../super-store/super-store';

// Використання в компоненті
@Component({
  selector: 'bp-tree',
  imports: [TreeModule],
  template: `
    <p-tree [value]="value" />

    <!-- <div *ngFor="let node of tree$ | async">{{ node.name }}</div> -->
  `,
  providers: []
})
export class TreeComponent {
  treeService = inject(SUPER_STORE);
  // TreeService.
  // tree$ = inject(TreeStore);
  value = this.treeService.Entities();

  constructor() {
    effect(() => {
      // console.log('TreeComponent effect');
      // console.log(this.treeService);
    });
  }
}
