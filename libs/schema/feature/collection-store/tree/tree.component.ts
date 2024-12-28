import { Component, effect, inject, signal } from '@angular/core';
import { TreeModule } from 'primeng/tree';
import { SUPER_STORE } from '../super-store/super-store';
import { AppStore } from '@bh/app';

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
  treeService = inject(AppStore);
  // TreeService.
  // tree$ = inject(TreeStore);
  value = signal({});

  constructor() {
    effect(() => {
      if (this.treeService) {
        const t= this.treeService.configEntities();
        console.log('TreeComponent effect', t);
        this.value.set(t);
      }
      // console.log('TreeComponent effect');
      // console.log(this.treeService);
    });
  }
}
