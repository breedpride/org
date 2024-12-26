import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '@bp/icon';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';

@Component({
  imports: [
    CommonModule,
    MenuModule,
    AngularSvgIconModule,
    BadgeModule,
    DividerModule,
    IconComponent,
    RouterModule,
  ],
  selector: 'bp-user-menu',
  styles: `
    svg {
      width: 16px;
      height: 16px;
      fill: rgb(var(--secondary-400));
    }
    :host ::ng-deep {
      .p-menu {
        padding: 0;
        background: transparent;
        border: none;
        width: 100%;
        margin-top: 0;
        .p-menu-item-content {
          border-radius: 0.25rem;
        }
      }
    }
  `,
  template: `<p-menu class="" [model]="menuItems()" #inmenu>
    <ng-template #item let-item>
      @if (item.id === 'separator') {
      <p-divider styleClass=" my-3"></p-divider>
      } @else {
      <a
        class=" p-menuitem-link justify-content-between align-items-center flex px-3 py-1.5"
        [routerLink]="item.routerLink"
        [queryParams]="item.queryParams"
      >
        <div class="flex items-center space-x-3">
          <bp-icon
            [iconName]="item.icon"
            iconColor="rgb(var(--secondary-400))"
            iconSize="16"
            class="size-5"
          />
          <span class="shrink-0"> {{ item.label }}</span>
        </div>
        <div class="relative h-8 w-full ">
          @if (item.badge) {
          <div class="absolute right-0 top-0 flex space-x-1.5 text-sm ">
            @if (!!item.badgeAdditional) {
            <span class="text-secondary ">{{ item.badgeAdditional }}</span>
            }
            <div
              class=" rounded-full  px-2  font-bold  uppercase text-white "
              [ngClass]="{
                    'bg-accent-600 ': item.badge === 'Coming soon',
                    'bg-primary': item.badge !== 'Coming soon',
                  }"
            >
              {{ item.badge }}
            </div>
          </div>
          }
        </div>
      </a>
      }
    </ng-template>
  </p-menu>`,
})
export class UserMenuComponent {
  menuItems = input.required<MenuItem[]>();
}
