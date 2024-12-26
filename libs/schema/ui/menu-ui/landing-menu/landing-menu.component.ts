import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  input,
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { WHITE_LOGO } from '@bh/app/tokens';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  imports: [
    CommonModule,
    MenuModule,
    AngularSvgIconModule,
    RouterLinkActive,
    RouterLink,
    RouterModule,
  ],
  selector: 'bp-landing-menu',
  styles: `
    a {
      font-weight: 700;
      &.active-route {
        font-weight: 900;
      }
    }
  `,
  template: `
    <div class="flex space-x-2">
      @for (item of menuItems(); track item; let i = $index) {
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
        class=" justify-content-between align-items-center flex rounded-full px-5 py-3 hover:bg-slate-200/50"
        [ngClass]="{
            'text-white hover:bg-white/30': whiteLogo,
          }"
        [routerLink]="item.routerLink"
        [queryParams]="item.queryParams"
      >
        <span class="shrink-0 text-base"> {{ item.label }}</span>
      </a>
      }
    </div>
  `,
})
export class LandingMenuComponent {
  menuItems = input.required<MenuItem[]>();
  whiteLogo: boolean = inject(WHITE_LOGO);
}
