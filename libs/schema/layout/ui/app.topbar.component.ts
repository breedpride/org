import {
  Component,
  ElementRef,
  HostBinding,
  inject,
  input,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MATING, SPACE_URL_MARKETPLACE, SPACE_URL_MOMENT } from '@bh/space-url';
import { TreeComponent } from '@bh/collection-store';

import { CustomIconMenuItem } from '@bh/types';
import { AuthService } from '@bp/auth-store';
import { IconComponent } from '@bp/icon';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TabsModule } from 'primeng/tabs';
import { TooltipModule } from 'primeng/tooltip';
import { LayoutService } from './service/app.layout.service';

@Component({
  imports: [
    ButtonModule,
    TooltipModule,
    IconComponent,
    TabsModule,
    RouterModule,
  ],
  selector: 'bp-topbar',
  styles: [
    `
      :host ::ng-deep .p-tabs {
        .p-tab {
          border: transparent;
        }
      }
    `,
  ],
  template: `
    <div>
      <button
        #menubutton
        type="button"
        pTooltip="Menu"
        tooltipPosition="bottom"
        class="
            topbar-menubutton p-link p-trigger flex items-center justify-center
            md:hidden ml-3
          "
        (click)="onMenuButtonClick()"
        aria-label="Menu"
      >
        <i class="pi pi-bars text-sub-header-color text-[22px]"></i>
      </button>
    </div>
    @if (!home()) {
    <div class="flex">
      <p-tabs value="/dashboard">
        <p-tablist>
          @for(tab of items; track tab.routerLink){
          <p-tab
            [value]="tab.routerLink"
            [routerLink]="tab.routerLink"
            pTooltip="{{ tab.label }}"
            tooltipPosition="bottom"
            class="px-6
                    sm:px-10 md:px-16 lg:x-22"
          >
            <bp-icon
              [iconName]="tab.icon"
              [iconColor]="getStyle(tab)"
              iconSize="22"
              class="mr-1"
            />
          </p-tab>
          }
        </p-tablist>
      </p-tabs>
    </div>
    <button type="button" (click)="showTree()">Tree</button>
    <div class="flex xxxl:absolute xxxl:right-[2.15rem] mr-3 md:mr-0">
      <ul class="topbar-menu">
        <li>
          <p-button
            class="bg-primary"
            label="Dark"
            (onClick)="toggleDarkMode()"
          />
        </li>
        @if (user()) {
        <li class="size-10 overflow-hidden rounded-full border">
          <button
            type="button"
            class="p-link overflow-hidden"
            aria-label="Profile"
            (click)="onProfileButtonClick()"
          >
            <img [src]="user().avatar" alt="Profile" />
          </button>
        </li>
        }
      </ul>
    </div>
    }
  `
})
export class AppTopbarComponent {
  @HostBinding('class') class =
    'layout-topbar xxxl:justify-center w-full justify-between md:pt-2 lg:pb-2';
  dialogService = inject(DialogService);
  ref: DynamicDialogRef | undefined;
  showTree(): void {
    this.ref = this.dialogService.open(TreeComponent, {
      header: 'Select a Product',
    });
  }
  home = input<boolean>(false);
  @ViewChild('menubutton') menuButton!: ElementRef;
  items: CustomIconMenuItem[] = [
    {
      icon: 'pi pi-fw pi-home',
      id: 'home',
      label: 'Home',
      queryParams: { IsMoment: true },
      routerLink: '/' + SPACE_URL_MOMENT,
      tooltip: 'Home',
      tooltipPosition: 'Bottom',
    },
    {
      icon: 'marketplace',
      id: 'marketplace',
      label: 'Marketplace',
      routerLink: '/' + SPACE_URL_MARKETPLACE,
      tooltip: 'Marketplace',
      tooltipPosition: 'Bottom',
    },
    // {
    //   icon: 'post',
    //   id: 'posts',
    //   label: 'Posts',
    //   routerLink: '/' + SPACE_URL_POST,
    //   tooltip: 'Posts',
    //   tooltipPosition: 'Bottom',
    // },
    // {
    //   icon: 'pi pi-fw pi-images',
    //   id: 'moments',
    //   label: 'Moments',
    //   queryParams: { IsMoment: true },
    //   routerLink: '/' + SPACE_URL_MOMENT,
    //   tooltip: 'Moments',
    //   tooltipPosition: 'Bottom',
    // },
    // {
    //   icon: 'pi pi-fw  pi-clone',
    //   id: 'collections',
    //   label: 'Collections',
    //   routerLink: '/' + SPACE_URL_COLLECTION,
    //   tooltip: 'Collections',
    //   tooltipPosition: 'Bottom',
    // },
    {
      icon: 'sex',
      id: 'mating',
      label: 'Test mating',
      routerLink: '/' + MATING,
      tooltip: 'Matings',
      tooltipPosition: 'Bottom',
    },
  ];
  activeItem!: CustomIconMenuItem;

  //TODO - use userStore instead of authService
  user = inject(AuthService).user;
  route = inject(ActivatedRoute);

  constructor(public layoutService: LayoutService) {}

  onMenuButtonClick(): void {
    this.layoutService.onMenuToggle();
  }

  onProfileButtonClick(): void {
    this.layoutService.showProfileSidebar();
  }
  getStyle(item: CustomIconMenuItem): string {
    const active =
      '/'.concat(this.route.snapshot.url.join('/')) === item.routerLink;
    return active
      ? 'rgb(var(--sub-header-active))'
      : 'rgb(var(--sub-header-color))';
  }
  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('dark');
  }
}
