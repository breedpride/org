import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Cover } from '@bh/entity/config';
import { CardMode } from '@bh/types';
import { ContextMenuComponent } from '@breedpride/menu';
import { EntityGridCardWrapperComponent } from '@breedpride/wrapper';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { DefaultMarkComponent } from '../default-mark/default-mark.component';

@Component({
  imports: [
    CommonModule,
    EntityGridCardWrapperComponent,
    DefaultMarkComponent,
    ContextMenuComponent,
    MenuModule,
    ButtonModule,
    RouterModule,
  ],
  selector: 'bp-cover-grid-card',
  styles: ``,
  template: `
    <bp-entity-grid-card-wrapper class="group" [selected]="selected()">
      <div
        class="relative flex h-[206px] justify-center overflow-hidden rounded-xl border border-surface-border"
      >
        <bp-default-mark class=" mt-3" [isDefault]="entity().IsDefault" />
        @if (entity()) { @if (mode() === 'navigate') {
        <a
          [routerLink]="['/edit', entity().Id]"
          [queryParams]="{
                model: 'Cover',
              }"
        >
          <img
            class="w-[100%] h-auto max-h-[200%] duration-300 group-hover:scale-110 absolute inset-0 m-auto"
            [src]="entity().AvatarUrl"
            alt="Contact avatar"
          />
        </a>
        } @else {
        <img
          class="w-[100%] h-auto max-h-[200%] duration-300 group-hover:scale-110 absolute inset-0 m-auto"
          [src]="entity().AvatarUrl"
          alt="Contact avatar"
        />
        } }
      </div>
      <div class="h-13 mt-2.5 flex w-full items-center px-2">
        <!-- Name -->
        <div
          class="ml-3 flex w-full flex-col space-y-0.5 truncate"
          tooltipPosition="bottom"
        >
          <div class="w-auto truncate ">
            {{ entity().Name }}
          </div>
          <span class="text-secondary text-sm ">
            {{ entity().Type?.Name }}
          </span>
        </div>
        <!-- Buttons -->
        @if (!selected) {
        <!-- <div class="text-secondary-400 flex space-x-3 ml-auto">
            <button aria-label="Edit">
              <i class="pi pi-pencil "></i>
            </button>
            <button aria-label="Delete">
              <i class="pi pi-trash "></i>
            </button>
          </div> -->
        <button
          aria-label="Options"
          pTooltip="Options"
          tooltipPosition="left"
          pButton
          pRipple
          type="button"
          icon="pi pi-ellipsis-v"
          (click)="menu.toggle($event)"
          class="p-button-rounded p-button-secondary p-button-text shrink-0"
        ></button>
        <bp-context-menu #menu [menuItems]="cardMenuItems()" />
        }
      </div>
    </bp-entity-grid-card-wrapper>
  `,
})
export class CoverGridCardComponent {
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
  mode = input<CardMode>('navigate');
  entity = input.required<Cover>();
  i = input<number>();
  selected = input<boolean>(false);
}
