import { CommonModule } from '@angular/common';
import {
  Component,
  WritableSignal,
  signal,
} from '@angular/core';
import { ContextMenuComponent } from '@breedpride/menu';
import { MenuItem } from 'primeng/api';
import { InputSelectorComponent } from '../input-selector/input-selector.component';

@Component({
  imports: [CommonModule, ContextMenuComponent],
  selector: 'bp-input-selector-cover',
  styles: ``,
  template: `
    <button
      aria-label="Options"
      pTooltip="Options"
      tooltipPosition="bottom"
      pButton
      pRipple
      type="button"
      icon="pi pi-ellipsis-v"
      (click)="menu.toggle($event)"
      class="p-button-rounded p-button-secondary p-button-text shrink-0"
    ></button>
    <ng-content></ng-content>
    <bp-context-menu #menu [menuItems]="cardMenuItems()" />
  `,
})
export class InputSelectorCoverComponent extends InputSelectorComponent {
  constructor() {
    super();
  }
  cardMenuItems: WritableSignal<MenuItem[]> = signal([
    { icon: 'pi pi-pencil', label: 'Edit', url: '/my/settings' },
    { icon: 'pi pi-check', label: 'Set as default', url: '/my/settings' },
    {
      icon: 'multiple-check',
      label: 'Set for all pages',
      url: '/my/settings',
    },
    { icon: 'pi pi-trash', label: 'Delete', url: '/my/settings' },
  ]);
}
