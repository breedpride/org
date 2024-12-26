import { NgClass } from '@angular/common';
import { Component, Inject, Optional, signal } from '@angular/core';
import { LandingMenuComponent, MenuComponent } from '@breedpride/menu';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ngMenu } from './menu-common';
import { MENU, MENU_ORIENTATION } from '@bh/app/tokens';

@Component({
  imports: [NgClass, MenuComponent, LandingMenuComponent, ButtonModule],
  selector: 'app-menu',
  template: `
    <ul class="">
      <bp-menu
        [menuItems]="navigationSignal()"
        [ngClass]="{
          'md:hidden': menuOrientation === 'horizontal',
        }"
      />
      <!-- Landing menu in horizontal mode-->
      @if (menuOrientation === 'horizontal') {
      <bp-landing-menu
        class="
          hidden
          md:block
        "
        [menuItems]="navigationSignal()"
      />
      }
      <li>
        <p-button
          class="bg-primary"
          label="Dark"
          (onClick)="toggleDarkMode()"
        />
      </li>
    </ul>
  `
})
export class AppMenuComponent {
  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('dark');
  }
  navigationSignal = signal<MenuItem[]>([]);
  // TODO rework with firebase menu
  constructor(
    @Optional() @Inject(MENU) private ngNavigation: MenuItem[],
    @Optional() @Inject(MENU_ORIENTATION) protected menuOrientation: string
  ) {
    if (ngNavigation) {
      this.navigationSignal.set(ngNavigation);
    } else {
      this.navigationSignal.set(ngMenu);
    }
  }
}
