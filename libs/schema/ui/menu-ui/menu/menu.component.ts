import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { IconComponent } from '@bp/icon';

@Component({
  imports: [
    CommonModule,
    MenuModule,
    BadgeModule,
    DividerModule,
    RouterLinkActive,
    RouterLink,
    RouterModule,
    IconComponent,
  ],
  selector: 'bp-menu',
  styles: `
    :host ::ng-deep {
      .p-menu {
        padding: 0.25rem 0;
        background: transparent;
        border: none;
        width: 100%;
        margin-top: 0.5rem;

        ul {
          a {
            &.active-route {
              font-weight: 700;
            }
          }
        }

        .p-menu-submenu-label {
          padding: 0.75rem 2.1rem;
          color: rgb(var(--primary));
          background: transparent;
          text-transform: uppercase;
          font-weight: 800;
          font-size: 0.9rem;
        }
       .p-menu-item-content {
          border-radius: 0.25rem;
        }
      }
    }
  `,
  template: `<p-menu [model]="menuItems()" #inmenu>
    <ng-template #item let-item>
      <a
        routerLinkActive="active-route"
        [routerLinkActiveOptions]="
          item.routerLinkActiveOptions || {
            paths: 'subset',
            queryParams: 'ignored',
            matrixParams: 'ignored',
            fragment: 'ignored',
          }
        "
        class="p-menuitem-link justify-content-between align-items-center flex px-8 py-3 text-lg"
        [routerLink]="item.routerLink"
        [queryParams]="item.queryParams"
      >
        <div class="flex items-center space-x-3">
          <div
            class="border-surface-border flex items-center justify-center rounded-full border bg-card-ground p-1.5 shadow-sm"
          >
            <bp-icon
              [iconName]="item.icon"
              iconColor="rgb(var(--secondary-400))"
              iconSize="16"
            />
          </div>
          <span classs=""> {{ item.label }}</span>
        </div>
      </a>
    </ng-template>
  </p-menu>`,
})
export class MenuComponent {
  menuItems = input.required<MenuItem[]>();
}
