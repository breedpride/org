import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
} from '@angular/core';
import { SpaceScrollerComponent } from '@bh/collection-view-scroller';
import { ACTIVE_DETAIL } from '@bh/collection-store';
import { EditActionPanelComponent } from '@breedpride/page-template';

@Component({
  selector: 'bp-page-form-detail',
  imports: [CommonModule, EditActionPanelComponent, SpaceScrollerComponent],
  template: `
    @if (!isGeneralDetail()) {
      <bp-edit-action-panel />
    }
    <bp-space-scroller />
  `,
  styles: `
    :host {
      display: block;
    }
  `,

})
export class PageFormDetailComponent {
  detail = inject(ACTIVE_DETAIL);
  isGeneralDetail = computed(
    () => this.detail() === 'general' || this.detail() === ''
  );
}
