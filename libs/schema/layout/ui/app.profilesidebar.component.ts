import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SPACE_URL_KENNEL, URL_MY } from '@bh/space-url';
import { CustomIconMenuItem } from '@bh/types';
import {
  BillingPageMenuItem,
  CalendarPageMenuItem,
  GiftPageMenuItem,
  ReferralPageMenuItem,
  SettingsPageMenuItem,
} from '@bh/user';
import { AuthService } from '@bp/auth-store';
import { MyCollectionSpacePageMenuItem } from '@breedpride/collection';
import { CoverSpacePageMenuItem } from '@breedpride/cover';
import { MyLitterSpacePageMenuItem } from '@breedpride/litter';
import { LookupSpacePageMenuItem } from '@breedpride/lookup';
import { UserMenuComponent } from '@breedpride/menu';
import { NoteSpacePageMenuItem } from '@breedpride/note';
import {
  MyMarketplaceSpacePageMenuItem,
  MyPetSpacePageMenuItem,
} from '@breedpride/pet';
import { WelcomePageMenuItem } from '@breedpride/quest';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { SidebarModule } from 'primeng/sidebar';
import { filter } from 'rxjs';
import { LayoutService } from './service/app.layout.service';
@Component({
  imports: [
    SidebarModule,
    BadgeModule,
    CommonModule,
    DividerModule,
    UserMenuComponent,
    DrawerModule,
    Drawer,
  ],
  selector: 'app-profilemenu',
  styles: [``],
  template: `<p-drawer
    #drawerRef
    [(visible)]="visible"
    position="right"
    [transitionOptions]="'.3s cubic-bezier(0, 0, 0.2, 1)'"
    styleClass="w-full sm:w-[25rem] border-t"
  >
    <ng-template #header>
      @if (user()) {
      <div class="flex items-center w-full space-x-2">
        <div
          class="ml-3 mt-1 size-10 overflow-hidden rounded-full border border-surface-border"
          aria-label="Profile"
        >
          <img [src]="user().avatar" alt="Profile" />
        </div>
        <div class="min-w-66 truncate font-bold">
          {{ user().name }}
        </div>
      </div>
      }
    </ng-template>
    <div class=" flex flex-col">
      <bp-user-menu [menuItems]="navigationSignal()" />
    </div>
  </p-drawer> `
})
export class AppProfileSidebarComponent {
  // TODO - use userStore instead of authService
  user = inject(AuthService).user;
  router = inject(Router);
  navigationSignal = signal<CustomIconMenuItem[]>([]);
  navigation: CustomIconMenuItem[] = [
    WelcomePageMenuItem,
    {
      badge: 'Prime',
      disabled: true,
      icon: 'pi pi-globe',
      id: 'site-constructor',
      label: 'Site constructor',
      mode: 'userMenu',
    },
    {
      icon: 'kennel-owner',
      id: 'my-kennel',
      label: 'My kennel',
      mode: 'userMenu',
      queryParams: { mainFilter: 'OwnedByMe' },
      routerLink: ['/', URL_MY, SPACE_URL_KENNEL],
    },
    MyPetSpacePageMenuItem,
    MyLitterSpacePageMenuItem,
    CalendarPageMenuItem,
    MyMarketplaceSpacePageMenuItem,
    CoverSpacePageMenuItem,
    NoteSpacePageMenuItem,
    MyCollectionSpacePageMenuItem,
    {
      id: 'separator',
    },
    BillingPageMenuItem,
    ReferralPageMenuItem,
    GiftPageMenuItem,
    {
      id: 'separator',
    },
    SettingsPageMenuItem,
    LookupSpacePageMenuItem,
    {
      id: 'separator',
    },
    {
      icon: 'pi pi-sign-out',
      id: 'pricing',
      label: 'Sign Out',
      mode: 'userMenu',
      routerLink: '/sign-out',
      visible: true,
    },
  ];
  constructor(public layoutService: LayoutService) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.visible = false;
      });
    this.navigationSignal.set(this.navigation);
  }

  get visible(): boolean {
    return this.layoutService.state.profileSidebarVisible;
  }

  set visible(_val: boolean) {
    this.layoutService.state.profileSidebarVisible = _val;
  }
}
