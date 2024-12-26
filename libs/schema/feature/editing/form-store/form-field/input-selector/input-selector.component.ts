import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { EntitySelectorService } from '../../entity-selector/entity-selector.service';
import { BaseNGComponent } from '../base-ng/base-ng.component';

@Component({
  imports: [CommonModule, ButtonModule],
  providers: [],
  selector: 'bp-input-selector',
  styles: ``,
  template: `
    <button (click)="selectCover()">
      <!-- {{ control?.value?.Name }} -->
      <ng-content></ng-content>
      <!-- <i class="pi pi-pencil "></i> -->
    </button>
  `,
})
export class InputSelectorComponent extends BaseNGComponent {
  entitySelector = inject(EntitySelectorService);
  // TODO - delete constructor
  constructor() {
    super();
  }
  selectCover() {
    if (this.store.config()) {
      this.entitySelector.selectEntity(this.store.config()).then((ref) => {
        ref.onClose.subscribe((result) => {
          if (result) {
            this.control().setValue(result);
          }
        });
      });
    }
  }
}
