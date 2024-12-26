import { Injectable, Optional, SkipSelf } from '@angular/core';

// Інтерфейс для визначення структури дерева
export type TreeNode = {
  id: string;
  name: string;
  children?: TreeNode[];
};

// Сервіс для управління деревом
@Injectable()
export class TreeService {
  children: TreeService[] = [];
  // parent: TreeService | null = null;
  constructor(
    @Optional()
    @SkipSelf()
    parent: TreeService | null
  ) {
    // console.log('TreeService constructor', parent);
    if (parent !== null) {
      // console.log('!!!!!!!!!!!!!!Root TreeService', parent);
      parent.children.push(this);
    } else {
      // console.log('Root TreeService', 'PARENT NOT FOUND');
    }
  }
  stores: any[] = [];
  // Методи для роботи з деревом
  addNode(node: any) {
    this.stores.push(node);
    // Додати вузол до дерева
  }

  removeNode(nodeId: number) {
    // Видалити вузол з дерева
  }

  getTree(): TreeNode[] {
    // Отримати все дерево
    return [];
  }
}
