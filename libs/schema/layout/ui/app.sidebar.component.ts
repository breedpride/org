import {
  Component,
  DestroyRef,
  ElementRef,
  computed,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MediaStore } from '@bp/media-store';
import { DrawerModule } from 'primeng/drawer';
import { AppMenuComponent } from './app.menu.component';
import { LayoutService } from './service/app.layout.service';
import { WHITE_LOGO } from '@bh/app/tokens';

@Component({
  imports: [
    RouterLink,
    AppMenuComponent,
    // Drawer,
    DrawerModule,
  ],
  providers: [],
  selector: 'app-sidebar',
  styles: [``],
  template: `
    <!-- <p-drawer
      #drawerRef
      [(visible)]="'true'"
      position="left"
      [transitionOptions]="'.3s cubic-bezier(0, 0, 0.2, 1)'"
      styleClass="w-full sm:w-[25rem] border-t"
    >
      <ng-template #headless>
        <a aria-label="Main page" [routerLink]="['/']" class="app-logo">
          <img
            class="h-9"
            [src]="
              whiteLogo && !smallScreen()
                ? 'assets/images/logo/logo-text-white.svg'
                : 'assets/images/logo/logo-text.svg'
            "
            alt="breedpride
        logo"
          />

          <button
            class="p-link"
            type="button"
            aria-label="goto main"
            (click)="anchor()"
          ></button>
        </a>
        <app-menu />
      </ng-template>
    </p-drawer> -->
    <div
      class="layout-sidebar"

      (mouseenter)="onMouseEnter()"
      (mouseleave)="onMouseLeave()"
    >
      <a aria-label="Main page" [routerLink]="['/']" class="app-logo">
        <img
          class="h-9"
          [src]="
            whiteLogo && !smallScreen()
              ? 'assets/images/logo/logo-text-white.svg'
              : 'assets/images/logo/logo-text.svg'
          "
          alt="breedpride
        logo"
        />

        <button
          class="p-link"
          type="button"
          aria-label="goto main"
          (click)="anchor()"
        ></button>
      </a>
      <app-menu />
    </div>
  `
})
export class AppSidebarComponent {
  timeout: ReturnType<typeof setTimeout> | null = null;
  destroyRef = inject(DestroyRef);
  media = inject(MediaStore);
  smallScreen = computed(() => this.media.lessThanMD());
  whiteLogo: boolean = inject(WHITE_LOGO);

  constructor(public layoutService: LayoutService, public el: ElementRef) {}

  anchor() {
    this.layoutService.state.anchored = !this.layoutService.state.anchored;
  }

  onMouseEnter() {
    if (!this.layoutService.state.anchored) {
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = null;
      }
      this.layoutService.state.revealMenuActive = true;
    }
  }

  onMouseLeave() {
    if (!this.layoutService.state.anchored) {
      if (!this.timeout) {
        this.timeout = setTimeout(
          () => (this.layoutService.state.revealMenuActive = false),
          300
        );
      }
    }
  }
}
