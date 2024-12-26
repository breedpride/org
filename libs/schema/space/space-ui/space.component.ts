import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  model,
} from '@angular/core';
import {
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { injectService, injectSpaceStore } from '@bh/collection-store';
import {  SpaceScrollerComponent,} from '@bh/collection-view-scroller';
import {
  ViewChangerComponent,
} from '@bh/collection-view-change';
import { injectFilterFormGroup, injectFiltersStore } from '@bh/collection-filtration';
import { BPNavStore } from '@bh/nav-store';
import { STORE_CONFIG } from '@bh/collection-store';
import { SUPER_STORE} from '@bh/collection-store';
import { SideBarStore } from '@bh/store-feature';
import { VIEWPORT } from '@bh/viewport';
import { MediaStore } from '@bp/media-store';
import { EntitiesCounterComponent } from '@bh/counter';
import { injectParams } from 'ngxtension/inject-params';
import { injectQueryParams } from 'ngxtension/inject-query-params';
import { NgxResize } from 'ngxtension/resize';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { AppStore } from '@bh/app';
import { ExpandedFiltersV2Component } from '@bh/collection-sort-filter';
import { getState } from '@ngrx/signals';

@Component({
  imports: [
    NgxResize,
    CommonModule,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    ViewChangerComponent,
    SpaceScrollerComponent,
    EntitiesCounterComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    MatSidenavModule,
    ExpandedFiltersV2Component,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    TooltipModule,
    ButtonModule,
  ],
  providers: [FormGroupDirective],
  selector: 'bp-space',
  styles: `
    .p-virtualscroller .p-virtualscroller-content {
      padding: 0;
    }
    :host ::ng-deep {
      .mat-drawer-backdrop.mat-drawer-shown {
        background-color: rgba(0, 0, 0, 0.4) !important;
        @media screen and (min-width: 960px) {
          border-radius: 12px;
        }
      }
    }
    .mat-drawer-side.mat-drawer-end {
      border-left: none !important;
    }
  `,
  template: `
    <mat-drawer-container
      (backdropClick)="onBackdropClicked()"
      class="size-full"
    >
      <mat-drawer
        class="size-full"
        [ngClass]="{
          'md:w-160 xxl:w-180': sidebar.opened(),
        }"
        [mode]="drawerMode()"
        [position]="'end'"
        [opened]="sidebar.opened()"
        [disableClose]="true"
      >
        <router-outlet />
      </mat-drawer>
      <mat-drawer-content
        class="flex flex-col cursor-default caret-transparent"
        [ngClass]="{
          'fake-card': needCardClass(),
          'card-surface ': !needCardClass(),
          'xl:mr-0 w-full': !sidebar.opened(),
          'xl:mr-165 xxl:mr-185': sidebar.opened(),
        }"
      >
        <div
          (ngxResize)="headerHeight.set($event.height)"
          class="
            z-20 flex flex-col justify-between border-b border-surface-border p-4
            sm:p-7
          "
        >
          <div class="w-full">
            <div class="flex w-full justify-between">
              <span class="text-4xl font-extrabold">
                {{ naming?.title }}
              </span>
              <bp-view-changer />
            </div>
            <bp-entities-counter
              [entitiesCount]="spaceStore.EntitiesCount()"
              [isLoading]="spaceStore.isLoading()"
              [total]="spaceStore.total()"
            />
          </div>
          <!-- Main actions -->
          <div class="mt-4 flex items-center space-x-3">
            <!-- Search -->

            <p-iconfield class="w-full">
              <p-inputicon styleClass="pi pi-search" />
              <input
                class="rounded-full w-full cursor-auto caret-current"
                type="text"
                pInputText
                placeholder="{{ naming?.searchPlaceholder }}"
              />
            </p-iconfield>
            <!-- Add  button -->
            @if (spaceStore.config().canAdd) {
            <button
              aria-label="action"
              pTooltip="Add new record"
              tooltipPosition="bottom"
              pButton
              pRipple
              type="button"
              icon="pi pi-plus"
              (click)="createNew()"
              class="font-bold p-button bp-small-button p-button-rounded"
              [ngClass]="{
          'size-[2.6rem]': !needCardClass(),
        }"
            >
              @if (needCardClass()) {
              <span>Add</span>
              }
            </button>
            }
          </div>

          <bp-filters [filterForm]="form" />
        </div>
        <div #divRef class="relative">
          <bp-space-scroller [scrollHeight]="scrollHeight()" />
          <div class="sm:h-6 bg-card-ground w-full absolute bottom-0"></div>
        </div>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
})
export class SpaceComponent {
  sidebar = inject(SideBarStore);
  pageHeight = inject(VIEWPORT).height;
  headerHeight = model<number>(-1);
  // pageHeight = inject(ViewportMediaStore2).height;
  scrollHeight = computed(() => {
    if (this.pageHeight() > 0 && this.headerHeight() > 0) {
      return this.pageHeight() - this.headerHeight() - 3 + 'px';
    } else {
      return '100%';
    }
  });
  media = inject(MediaStore);
  smallScreen = computed(() => this.media.lessThanMD());
  needCardClass = computed(() => this.media.moreThanMD());
  drawerMode = computed(() => (this.media.moreThanXL() ? 'side' : 'over'));
  queryParams = injectQueryParams();
  params = injectParams();
  activatedRoute = inject(ActivatedRoute);
  filterStore = injectFiltersStore();
  spaceStore = injectSpaceStore();
  naming = this.spaceStore.config().naming;
  navStore = inject(BPNavStore);
  form = injectFilterFormGroup();

  searchInputControl = computed(() => {
    // const form = this.form;
    // const ready = form.filterReady();
    // if (ready) {
    //   return form.get('Name');
    // } else {
    //   return new FormControl({ disabled: true, value: '' });
    // }
  });

  createNew(): void {
    const entityModel = this.spaceStore.model();
    if (entityModel === 'Note') {
      // const entityData = this.spaceStore.prepareNewEntityData1();
      // this.editorService.editWithCallBack(
      //   {
      //     editorComponent: 'NOTE',
      //     editorTemplete: null,
      //     entityData: entityData,
      //     entityId: nullId,
      //     entityStore: this.spaceStore,
      //   },
      //   () => {
      //     this.spaceStore.refresh();
      //   }
      // );
    } else {
      this.navStore.editRecord('new', entityModel, { year: 2021 });
    }
  }
  onBackdropClicked(): void {
    this.sidebar.closeSidebar();
    this.navStore.backSlashWithParams(this.activatedRoute);
  }
  constructor() {
    const service = inject(SUPER_STORE);
    console.log(service);
    const s2 = injectService();
    console.log(getState(s2));
    const config = inject(STORE_CONFIG);
    const appStore = inject(AppStore);
    appStore.addEntities([config]);
  }
}
