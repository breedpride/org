import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { EDIT_MODE } from '@bh/collection-store';
import { BPNavStore } from '@bh/nav-store';
import { PageStore } from '@bh/page-store';
import { ActionService } from '@bp/chromatin/services';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { ContextMenuComponent } from '@breedpride/menu';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { EditActionPanelComponent } from '../edit-action-panel.component';

@Component({
  selector: 'bp-page-actions',
  imports: [
    CommonModule,
    ButtonModule,
    EditActionPanelComponent,
    ContextMenuComponent,
    TooltipModule,
  ],
  // TODO - for name
  template: `
    @if (mode() === 'name') {
    <div class="absolute bottom-1 right-0 flex">
      <!-- <button
        class="
              bp-small-button p-button-outlined p-button-secondary"
        aria-label="Edit"
        pRipple
        pButton
        (click)="editRecord()"
        type="button"
        icon="pi pi-pencil"
        label="Edit"
      ></button> -->
      <button
        aria-label="action"
        pTooltip="Support"
        tooltipPosition="bottom"
        pButton
        pRipple
        type="button"
        icon="pi pi-heart-fill"
        (click)="menu.toggle($event)"
        class="font-bold p-button-info bp-small-button p-button-rounded"
        [ngClass]="{
          'size-[2.6rem]': !fullscreen(),
        }"
      >
        @if (fullscreen()) {
        <span click="(onclick)" class="ml-2">Become a breed patron</span>
        }
      </button>
      <button
        aria-label="more options"
        pTooltip="More options"
        tooltipPosition="bottom"
        pButton
        pRipple
        type="button"
        icon="pi pi-ellipsis-v"
        (click)="menu.toggle($event)"
        class=" size-[2.6rem] ml-1 p-button-secondary p-button-text p-button-rounded"
      ></button>
      <bp-context-menu #menu [menuItems]="cardMenuItems()" />
    </div>
    } @else {
    <div class="mb-1 ml-auto flex">
      @if (!editMode) {
      <button
        class="
              bp-small-button p-button-outlined p-button-secondary p-button-rounded"
        aria-label="Edit"
        pRipple
        pButton
        (click)="editRecord()"
        type="button"
        icon="pi pi-pencil"
        label="Edit"
      ></button>
      @if (cardMenuItems() && cardMenuItems().length > 0) {
      <button
        aria-label="more options"
        pTooltip="More options"
        tooltipPosition="bottom"
        pButton
        pRipple
        type="button"
        icon="pi pi-ellipsis-v"
        (click)="menu.toggle($event)"
        class="
                      size-[2.6rem] p-button-secondary p-button-rounded p-button-text ml-1
                    "
      ></button>
      } } @else {
      <bp-edit-action-panel />
      }
      <bp-context-menu #menu [menuItems]="cardMenuItems()" />
    </div>
    }
  `,
  styles: `
    :host {
      display: block;
    }
  `,

})
export class PageActionsComponent {
  fullscreen = injectFullscreen();
  actionService = inject(ActionService);
  editMode = inject(EDIT_MODE);
  navStore = inject(BPNavStore);
  pageStore = inject(PageStore);
  entityPage = this.pageStore.entityPage;
  mode = input.required<'name' | 'avatar'>();
  cardMenuItems = computed(() =>
    this.actionService.getCardMenuItems(this.entityPage())
  );
  editRecord(): void {
    this.navStore.editRecord(
      this.entityPage()?.Id,
      this.pageStore.loadedModel()
    );
  }
  // TODO - maybe actionService
  getCallToAction() {
    // TODO implement
  }
  onclick(event: any) {
    console.log('onclick', event);
    // console.log(this.superStore.toStringFromRoot());
    // console.log(getState(this.superStore));
  }
}
