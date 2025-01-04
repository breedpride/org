import { CommonModule, NgClass } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  Optional,
  Renderer2,
  ViewChild,
  computed,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ConfirmDialogComponent } from '@bp/cell/confirm-dialog-ui';
import { LoadingBarComponent } from '@breedpride/loading-bar';
import { NgxResize } from 'ngxtension/resize';
import { ToastModule } from 'primeng/toast';
import { Subscription, filter } from 'rxjs';
import { AppFooterComponent } from './app-footer.component';
import { AppLogoComponent } from './app-logo.component';
import { AppMenuComponent } from './app.menu.component';
import { MenuService } from './app.menu.service';
import { AppProfileSidebarComponent } from './app.profilesidebar.component';
import { AppSidebarComponent } from './app.sidebar.component';
import { AppTopbarComponent } from './app.topbar.component';
import { ContentComponent } from './content.component';
import { LayoutService } from './service/app.layout.service';
import { LAYOUT_TYPE, MENU_ORIENTATION } from '@bh/app/tokens';
// import { Message } from 'primeng/message';
@Component({
  selector: 'bp-layout',
  styles: `
    // :host ::ng-deep .p-message-success {
    //   background: white;
    //   border: solid rgb(var(--secondary-200));
    //   border-width: 1px 2px 1px 6px;
    //   color: rgb(var(--secondary-800));
    //   box-shadow: 0 1px 2px 0 rgb(var(--secondary-200));
    //   max-width: 250px;
    //   .p-message-icon {
    //     color: rgb(var(--secondary-800));
    //   }
    // }
  `,
  template: `
    <bp-loading-bar />
    <!-- Messages -->
    <!-- <div class="absolute left-10 bottom-15 z-50">
      <p-message severity="success" [closable]="false"> </p-message>
    </div> -->
    <bp-confirm-dialog />
    @if (!layoutType) {
    <div
      (ngxResize)="screenViewportHeight.set($event.height)"
      class="layout-container"
      [ngClass]="containerClass"
    >
      <app-sidebar class="xxxl:hidden" />
      <bp-app-logo
        class="
            hidden
            xxxl:block
          "
      />
      <div class="layout-content-wrapper">
        <!-- <div
            (ngxResize)="topBarViewportHeight.set($event.height)"> -->
        <bp-topbar
          #topbar
          (ngxResize)="topBarViewportHeight.set($event.height)"
        />
        <!-- </div> -->
        @if (ready()) {
        <div class="xxxl:flex xxxl:justify-center">
          <div
            class="
                  hidden w-[16rem] pr-5
                  xxxl:block
                "
          >
            <app-menu />
          </div>
          <bp-content
            [options]="{ height: getMainHeight() }"
            class="layout-content"
          >
          </bp-content>
          <div
            class="
                  hidden w-[16rem] pl-5
                  xxxl:block
                "
          ></div>
        </div>
        }
      </div>
      <app-profilemenu />
    </div>

    <div
      #footer
      (ngxResize)="footerViewportHeight.set($event.height)"
      class="
          absolute bottom-0 w-full pt-4
          md:pt-6
        "
    >
      <bp-app-footer class="bg-footer-ground" />
    </div>
    } @if (layoutType === 'home') {
    <div>
      <div
        appViewport
        storeProp="layout"
        class="layout-container"
        [ngClass]="containerClass"
      >
        <app-sidebar />
        <div class="layout-content-wrapper absolute z-50">
          <bp-topbar [home]="true" class="mt-5 md:mt-0" />
        </div>
        <div class="z-1 absolute top-0">
          <router-outlet />
        </div>
        <app-profilemenu />
      </div>
    </div>
    }
  `,
  imports: [
    NgxResize,
    LoadingBarComponent,
    NgClass,
    AppSidebarComponent,
    AppTopbarComponent,
    RouterOutlet,
    AppProfileSidebarComponent,
    ConfirmDialogComponent,
    // Message,
    ToastModule,
    CommonModule,
    AppLogoComponent,
    AppMenuComponent,
    ContentComponent,
    AppFooterComponent,
  ],
})
export class AppLayoutComponent implements OnDestroy {
  screenViewportHeight = signal<number>(-1);
  topBarViewportHeight = signal<number>(-1);
  footerViewportHeight = signal<number>(-1);
  caption = 'bp-layout';
  getMainHeight = computed(() => {
    const h =
      this.screenViewportHeight() -
      this.topBarViewportHeight() -
      this.footerViewportHeight();
    // console.log('H', h);
    return h ? h : -5;
  });

  ready = computed(
    () =>
      this.screenViewportHeight() >= 0 &&
      this.topBarViewportHeight() >= 0 &&
      this.footerViewportHeight() >= 0,
  );

  @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;

  @ViewChild(AppTopbarComponent) appTopbar!: AppTopbarComponent;

  menuOutsideClickListener: (() => void) | null = null;

  overlayMenuOpenSubscription: Subscription;

  constructor(
    private menuService: MenuService,
    public layoutService: LayoutService,
    public renderer: Renderer2,
    public router: Router,

    // TODO types for orientation

    @Optional() @Inject(MENU_ORIENTATION) private menuOrientation: string,
    @Optional() @Inject(LAYOUT_TYPE) public layoutType: string,
  ) {
    // this.layoutType = this.layoutType;
    this.overlayMenuOpenSubscription =
      this.layoutService.overlayOpen$.subscribe(() => {
        if (!this.menuOutsideClickListener) {
          this.menuOutsideClickListener = this.renderer.listen(
            'document',
            'click',
            event => {
              const isOutsideClicked = !(
                this.appSidebar.el.nativeElement.isSameNode(event.target) ||
                this.appSidebar.el.nativeElement.contains(event.target) ||
                this.appTopbar.menuButton.nativeElement.isSameNode(
                  event.target,
                ) ||
                this.appTopbar.menuButton.nativeElement.contains(event.target)
              );
              if (isOutsideClicked) {
                this.hideMenu();
              }
            },
          );
        }

        if (this.layoutService.state.staticMenuMobileActive) {
          this.blockBodyScroll();
        }
      });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.hideMenu();
      });
  }

  blockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
    } else {
      document.body.className += ' blocked-scroll';
    }
  }

  get containerClass() {
    return {
      'layout-colorscheme-menu':
        this.layoutService.config.menuTheme === 'colorScheme',
      'layout-dark': this.layoutService.config.colorScheme === 'dark',
      'layout-dim': this.layoutService.config.colorScheme === 'dim',
      'layout-horizontal': this.menuOrientation === 'horizontal',
      'layout-light': this.layoutService.config.colorScheme === 'light',
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      'layout-overlay': this.layoutService.config.menuMode === 'overlay',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-primarycolor-menu':
        this.layoutService.config.menuTheme === 'primaryColor',
      //Changes for horizontal menu

      // 'layout-horizontal': this.layoutService.config.menuMode === 'horizontal',
      'layout-reveal': this.layoutService.config.menuMode === 'reveal',
      'layout-reveal-active': this.layoutService.state.revealMenuActive,
      'layout-reveal-anchored': this.layoutService.state.anchored,
      // 'layout-static': this.layoutService.config.menuMode === 'static',
      'layout-slim': this.layoutService.config.menuMode === 'slim',
      'layout-static': this.menuOrientation === 'static',
      'layout-static-inactive':
        this.layoutService.state.staticMenuDesktopInactive &&
        this.layoutService.config.menuMode === 'static',
      'layout-transparent-menu':
        this.layoutService.config.menuTheme === 'transparent',
      'p-input-filled': this.layoutService.config.inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config.ripple,
    };
  }

  hideMenu() {
    this.layoutService.state.overlayMenuActive = false;
    this.layoutService.state.staticMenuMobileActive = false;
    this.layoutService.state.menuHoverActive = false;
    this.menuService.reset();
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    // this.unblockBodyScroll();
  }

  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }

    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }

  // unblockBodyScroll(): void {
  //   if (document.body.classList) {
  //     document.body.classList.remove('blocked-scroll');
  //   } else {
  //     document.body.className = document.body.className.replace(
  //       new RegExp(
  //         '(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)',
  //         'gi'
  //       ),
  //       ' '
  //     );
  //   }
  // }
}
