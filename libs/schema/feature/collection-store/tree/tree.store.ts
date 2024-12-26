import { computed, inject, Provider } from '@angular/core';
import { signalStore, withComputed, withHooks, withState } from '@ngrx/signals';
// import { TreeNode } from 'primeng/api';
import { TreeNode } from './tree.service';
import { injectService, SUPER_STORE } from '../super-store/super-store';
// import { injectService, SERVICE } from './tree.token';

// Створення стору з використанням signalStore
export const TreeStore = signalStore(
  // withState({ id: 'test' }),
  { protectedState: false },
  withState<any[]>((treeService = injectService()) => {
    // treeService.addNode
    return treeService.Entities();
  }),
  //ts-ignore
  withComputed(store => ({
    tree: computed(() => store),
  })),
  withHooks(store => ({
    onInit(tree = inject(SUPER_STORE, { self: true })) {
      // console.log('TreeStore onInit');
      // tree.addNode({ id: '1', name: 'test' });
    },
  }))
);

// Провайдер для передавання початкового стану до стору
export const provideTreeStoreWithInitialState = (
  initialState: TreeNode[]
): Provider => {
  return {
    provide: TreeStore,
    useFactory: () => initialState,
  };
};
