import { CommonModule } from '@angular/common';
import {
  Component,
  ViewChild,
  input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '@bp/icon';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { Menu, MenuModule } from 'primeng/menu';

@Component({
  imports: [
    CommonModule,
    MenuModule,
    AngularSvgIconModule,
    BadgeModule,
    IconComponent,
    RouterModule,
  ],
  selector: 'bp-context-menu',
  styles: [
    `
      svg {
        width: 1rem;
        height: 1rem;
        fill: rgb(var(--secondary-400));
      }
    `,
  ],
  template: `
    <p-menu [model]="menuItems()" #menu appendTo="body" [popup]="true">
      <ng-template #item let-item>
        <a
          class="p-menuitem-link justify-content-between align-items-center flex px-5 py-2 dark:hover:bg-secondary-700"
          [routerLink]="item.routerLink"
          [queryParams]="item.queryParams"
        >
          <div class="flex items-center space-x-3">
            <bp-icon
              [iconName]="item.icon"
              iconColor="rgb(var(--secondary-400))"
              iconSize="16"
              class="h-5 w-4"
            />
            <span> {{ item.label }}</span>
          </div>
        </a>
      </ng-template>
    </p-menu>
  `,
})
export class ContextMenuComponent {
  @ViewChild('menu') menu!: Menu;
  menuItems = input.required<MenuItem[]>();
  toggle($event: Event) {
    this.menu.toggle($event);
  }
}
