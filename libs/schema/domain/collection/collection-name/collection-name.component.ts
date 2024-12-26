import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  input,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { CollectionPage } from '@bh/types';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'bp-collection-name',
  styles: [
    `
      :host {
        display: block;
        // margin-top: 0.75rem;
        padding-bottom: 0.75rem;
        background-color: rgb(var(--card-ground));
      }
    `,
  ],
  template: `
    <div class="text-md mb-3">
      <span class="uppercase"> Achivement name </span>
    </div>
    <div class="truncate text-3xl font-bold">
      <a [routerLink]="['/', entityPage().Url]">{{ entityPage().Name }} </a>
    </div>
  `,
})
export class CollectionNameComponent {
  entityPage = input.required<CollectionPage>();
  isStick = input<boolean>(false);
  editMode = input<boolean>(false);
  @HostBinding('style.border-bottom-width') border = this.isStick()
    ? '1px'
    : 'none';
}
