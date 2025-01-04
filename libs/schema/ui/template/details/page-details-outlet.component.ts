import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  afterNextRender,
  computed,
  inject,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { EDIT_MODE, injectService } from '@bh/collection-store';
import { PageStore } from '@bh/page-store';
import { ACTIVE_DETAIL } from '@bh/collection-store';

import{ injectPageModel} from '@bh/page-store';

import { NAME_BLOCK_HEIGHT, TAB_MENU_HEIGHT,  } from '@bh/utils';
import { scollableOptions } from '@bp/core/consts';
import { PageContentStore } from '@bp/page-content-store';
import { PageMenuComponent } from '@bp/page-menu';
import { TabStoreV2 } from '@bp/page-tab-store';
import { NgxResize, ResizeResult, injectResize } from 'ngxtension/resize';
import { SkeletonModule } from 'primeng/skeleton';
import { TabHeaderComponent } from '../tab-header.component';

const DETAIL_OUTLET_NAMES = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
];

// TODO!! - unique id for each tab!!!!
@Component({
  selector: 'bp-page-details-outlet',
  providers: [TabStoreV2],
  imports: [
    CommonModule,
    RouterOutlet,
    TabHeaderComponent,
    NgxResize,
    PageMenuComponent,
    SkeletonModule,
  ],
  template: `
    @if (isLoading()) {
    <div class="space-y-5 pt-5">
      <div class="flex space-x-6">
        <p-skeleton
          width="5rem"
          height="1rem"
          styleClass="rounded-full"
        ></p-skeleton>
        <p-skeleton
          width="5rem"
          height="1rem"
          styleClass="rounded-full"
        ></p-skeleton>
      </div>
      <div class="w-full">
        <p-skeleton
          width="100%"
          height="0.2rem"
          styleClass="rounded-full"
        ></p-skeleton>
      </div>
    </div>

    <div class="flex flex-auto flex-col space-y-5 pt-5">
      <p-skeleton
        styleClass="rounded-xl"
        width="100%"
        height="40px"
      ></p-skeleton>
      <p-skeleton
        styleClass="rounded-xl"
        width="100%"
        height="90px"
      ></p-skeleton>
      <p-skeleton
        styleClass="rounded-xl"
        width="100%"
        height="90px"
      ></p-skeleton>
      <p-skeleton
        styleClass="rounded-xl"
        width="100%"
        height="40px"
      ></p-skeleton>
      <p-skeleton
        styleClass="rounded-xl"
        width="100%"
        height="90px"
      ></p-skeleton>
      <p-skeleton
        styleClass="rounded-xl"
        width="100%"
        height="90px"
      ></p-skeleton>
      <p-skeleton
        styleClass="rounded-xl"
        width="100%"
        height="40px"
      ></p-skeleton>
      <p-skeleton
        styleClass="rounded-xl"
        width="100%"
        height="90px"
      ></p-skeleton>
      <p-skeleton
        styleClass="rounded-xl"
        width="100%"
        height="90px"
      ></p-skeleton>
    </div>
    } @else {
    <bp-page-menu
      (ngxResize)="onResize($event)"
      [ngxResizeOptions]="scollableOptions"
      id="page-tab-menu"
      class="sticky z-30"
      [ngStyle]="{
          top: nameBlockHeight - 1 + 'px',
        }"
    />
    @if (editMode) {
    <router-outlet />
    <router-outlet name="0" />
    } @else {
    <div #sections>
      @for (tab of entities(); track tab.fragment(); let i = $index) { @if
      (!tab.hidden()) {
      <section class="relative">
        <bp-tab-header
          [i]="i"
          [tab]="tab"
          class="sticky z-20"
          [ngStyle]="{
                    top: tabFragmentTop() + 'px',
                  }"
        />
        <router-outlet [name]="detailNames[i]"></router-outlet>
      </section>
      } }
    </div>
    } }
  `,
  styles: ``,

})
export class PageDetailsOutletComponent {
  onResize($event: ResizeResult): void {
    this.pageContentStore.setScrollTop($event.top );
  }
  getRndName(length = 13): string {
    return Math.random()
      .toString(length + 2)
      .substring(2);
  }
  detail = inject(ACTIVE_DETAIL);
  isGeneralDetail = computed(
    () => this.detail() === 'general' || this.detail() === ''
  );
  model = injectPageModel();
  @HostBinding('class') class = 'w-full ';
  // TODO - rework for token
  isLoading = inject(PageStore).isLoading;
  // isLoading = loadingWithLag(1000);

  editMode = inject(EDIT_MODE);

  nameOnTop = inject(PageContentStore).nameOnTop;

  tabStore = inject(TabStoreV2);
  entities = this.tabStore.Entities;

  detailNames = DETAIL_OUTLET_NAMES;
  scollableOptions = scollableOptions;

  // TODO - menu - Bottom!!!!
  nameBlockHeight = NAME_BLOCK_HEIGHT;
  pageContentStore = inject(PageContentStore);

  resize$ = injectResize({ ...scollableOptions, scroll: true });

  router = inject(Router);
  tabFragmentTop = computed(() =>
    this.nameOnTop()
      ? NAME_BLOCK_HEIGHT + TAB_MENU_HEIGHT
      : NAME_BLOCK_HEIGHT + TAB_MENU_HEIGHT
  );
  service = injectService();
  constructor() {
    afterNextRender(() => {
      console.log('pageDetailsOutlet', this.service);
      this.tabStore.enableScroll();
      // this.tabStore.follow({
      //   selected: this.tabStore.activeTab(),
      //   first: this.tabStore.firstViewportTab(),
      // });
      // this.tabStore.followSelected(this.tabStore.activeTab());
    });
    // console.log('editMode', this.editMode);
    // this.router.events
    //   .pipe(filter(event => event instanceof NavigationEnd))
    //   .subscribe(() => {
    //     this.tabStore.scrollToFragment(this.fragment());
    //   });
  }
}
