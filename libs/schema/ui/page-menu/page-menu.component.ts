import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  Signal,
  WritableSignal,
  afterNextRender,
  computed,
  effect,
  inject,
  model,
  signal,
  viewChild,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EDIT_MODE } from '@bh/collection-store';
import { nullId } from '@bh/superfield';
import { BPNavStore } from '@bh/nav-store';
import { PageStore } from '@bh/page-store';
import { resizeOptionsWithScroll } from '@bh/utils';
import { IconComponent } from '@bp/icon';
import { PageTabStore, TabStoreV2 } from '@bp/page-tab-store';
import { injectQueryParams } from 'ngxtension/inject-query-params';
import { NgxResize } from 'ngxtension/resize';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  imports: [
    NgxResize,
    CommonModule,
    TabMenuModule,
    IconComponent,
    RouterModule,
  ],
  selector: 'bp-page-menu',
  styles: [
    `
      /* Hide scrollbar for Chrome, Safari and Opera */
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }

      /* Hide scrollbar for IE, Edge and Firefox */
      .no-scrollbar {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }
      :host {
        display: block;
        position: relative;
        width: 100%;
      }
    `,
  ],
  template: `
    <div
      #scroll
      id="scroll"
      (ngxResize)="width.set($event.width)"
      class=" flex w-full overflow-x-auto bg-card-ground no-scrollbar"
      [ngClass]="{
        'mb-5': !editMode || activeTab()?.fragment() === 'general',
      }"
      (scroll)="onScroll()"
    >
      <!-- Left button -->
      <button
        class="
          group absolute left-0 top-0 z-20  h-full bg-card-ground border-surface-border border-r
        "
        [ngClass]="{
          block: isFirstTabHiden(),
          hidden: !isFirstTabHiden(),
        }"
        (click)="next(-1)"
      >
        <i
          class="
            pi pi-angle-left pr-3 text-surface-400
            group-hover:text-primary
          "
        ></i>
      </button>
      <!-- Right button -->
      <button
        class="

          group absolute right-0 top-0 z-20 h-full bg-card-ground border-surface-border
          border-l
        "
        [ngClass]="{
          block: !isLastTabInvisible(),
          hidden: isLastTabInvisible(),
        }"
        (click)="next(1)"
      >
        <i
          class="
            pi pi-angle-right pl-3 text-surface-400
            group-hover:text-primary
          "
        ></i>
      </button>

      <!-- Tab menu -->
      <div class="flex w-full">
        @for ( item of visibleTabs(); track item.fragment() || item['url']; let
        index = $index ) {
        <button
          [id]="'tab' + item.fragment()"
          (ngxResize)="insideWidth[index].set($event.width)"
          class="group z-10 flex shrink-0 flex-col"
          (click)="onActiveItemChange(item)"
        >
          <!--
             [routerLink]="getRouterLink(item)"
            [fragment]="getFragment(item)" -->
          <a

            class="flex shrink-0 items-center justify-center px-5 py-3.5"
            [ngClass]="{
                'text-primary': isActive(item),
                'text-secondary': !isActive(item),
              }"
          >
            <bp-icon
              [iconName]="item.icon()"
              [iconColor]="getStyle(item)"
              iconSize="18"
              class="mr-1"
            />
            <span class="shrink-0 font-bold">{{ item.label() }}</span>
          </a>
          <div
            class="border-b"
            [ngClass]="{
                'border-transparent': !isActive(item),
                'border-primary': isActive(item),
                'group-hover:border-surface-400': !isActive(item),
              }"
          ></div>
        </button>
        }
      </div>
      <div
        class="absolute bottom-0 w-full border-b border-surface-border"
      ></div>
    </div>
  `,
})
export class PageMenuComponent {
  queryParams = injectQueryParams();
  getRouterLink(item: { url: Signal<string>; fragment: Signal<string> }) {
    if (item.url() === null) {
      return [];
    }
    if (this.editMode) {
      const u = item.url() ? [item.url()] : [];
      return [...u];
    } else {
      return [];
    }

    // console.log('URL', item.url());
  }
  getFragment(item: { url: Signal<string>; fragment: Signal<string> }) {
    if (this.editMode) {
      const u = item.url() ? '' : item.fragment();
      return u;
    } else {
      return item.fragment();
    }
  }
  //TODO - top NAME_BLOCK_HEIGHT;
  elemenfRef = inject(ElementRef);
  activatedRoute = inject(ActivatedRoute);
  navStore = inject(BPNavStore);
  tabStore = inject(TabStoreV2);
  activeTab = inject(TabStoreV2).activeTab;
  entityPage = inject(PageStore).entityPage;
  editMode = inject(EDIT_MODE);
  scrollRef = viewChild.required<ElementRef<HTMLElement>>('scroll');
  currentXOffset = signal(0);
  startX = signal(0);
  width = model<number>(0);
  endX = computed(() => this.startX() + this.width());
  insideWidth!: WritableSignal<number>[];
  buttonOffset = 27;
  isNewRecordEditing = computed(
    () => this.editMode && this.entityPage()?.Id === nullId
  );

  visibleTabs = computed(() => {
    // return this.tabStore.visibleTabs();
    if (!this.isNewRecordEditing()) {
      return this.tabStore.visibleTabs();
    } else {
      return this.tabStore
        .visibleTabs()
        .map((e) =>
          e.fragment() === 'general' ? e : { ...e, disabled: true }
        );
    }
  });

  isFirstTabHiden = computed(() => {
    if (this.width() < this.fullTabsWidth()) {
      return (
        this.currentXOffset() + this.insideWidth[0]() <=
        this.startX() + this.buttonOffset + 1
      );
    } else {
      return false;
    }
  });

  fullTabsWidth = computed(() => {
    let summ = 0;
    for (let i = 0; i < this.visibleTabs().length; i++) {
      const e = this.insideWidth[i];
      if (e && e instanceof Function) {
        summ = summ + this.insideWidth[i]();
      }
    }
    return summ;
  });

  isLastTabInvisible = computed(() => {
    // console.log(this.currentXOffset(), this.fullTabsWidth(), this.endX());
    if (this.currentXOffset() + this.fullTabsWidth() < this.endX()) {
      return true;
    } else {
      return (
        this.currentXOffset() + this.fullTabsWidth() - this.getLasTabWidth() <
        this.endX() - this.buttonOffset
      );
    }
  });
  scollableOptions = { ...resizeOptionsWithScroll, scroll: true };

  getLasTabWidth(): number {
    if (this.insideWidth) {
      const e = this.insideWidth.at(-1);
      if (e && e instanceof Function) {
        return e();
      }
    }
    return 0;
  }
  onScroll(): void {
    this.refreshFirstTabX();
    this.refreshStartX();
  }
  getItemRect(itemId: string) {
    return this.document.getElementById(itemId)?.getBoundingClientRect();
  }

  firstTabX() {
    const firstFramgentId = 'tab' + this.visibleTabs()[0].fragment();
    return this.getItemRect(firstFramgentId)?.x || 0;
  }

  next(leftOrRight: -1 | 1 | 0) {
    const visibleTabs = this.tabStore.visibleTabs();
    const activeTab = this.activeTab();
    console.log('next', leftOrRight, visibleTabs, activeTab);
    if (!activeTab) return;
    const nextIdex = visibleTabs.indexOf(activeTab) + leftOrRight;
    if (nextIdex >= 0 && nextIdex < visibleTabs.length) {
      this.onActiveItemChange(visibleTabs[nextIdex]);
    }
  }

  getStyle(item: PageTabStore): string {
    return this.tabStore.activeTab()?.fragment() === item.fragment()
      ? 'rgb(var(--primary))'
      : 'rgb(var(--secondary))';
  }

  isActive(item: PageTabStore): boolean {
    return this.tabStore.activeTab()?.fragment() === item.fragment();
  }

  onActiveItemChange(event: { fragment: Signal<string> }): void {
    console.log('onActiveItemChange', event.fragment());
    if (this.editMode) {
      // this.navStore.changeDetail(event.fragment(), this.activatedRoute);
    } else {
      this.navStore.changeFragment(event.fragment());
    }
  }

  currentRect = computed(() => {
    const currentFragment = this.tabStore.activeTab()?.fragment();
    return this.getTabRect(currentFragment);
  });

  getTabRect(fragment: string | undefined) {
    const currentId = 'tab' + fragment;
    const currentRect = this.getItemRect(currentId);
    return currentRect;
  }

  newLeft = computed(() => {
    // TODO - update currentXOffect function
    const currentXOffset = this.firstTabX();

    const currentRect = this.currentRect();
    if (currentRect && this.width() > 0) {
      const leftVisiblility =
        currentRect?.right + this.buttonOffset < this.endX();
      if (!leftVisiblility) {
        return currentRect?.left - this.buttonOffset - currentXOffset;
      } else {
        const rightVisiblility =
          currentRect.left > this.startX() + this.buttonOffset;
        if (!rightVisiblility)
          return currentRect?.left - this.buttonOffset - currentXOffset;
      }
    }
    return 0;
  });

  refreshStartX() {
    const scrollStartX = this.getItemRect('scroll')?.x;
    if (scrollStartX && this.startX() !== scrollStartX) {
      this.startX.set(scrollStartX);
    }
  }
  refreshFirstTabX() {
    const currentXOffset = this.firstTabX();
    if (currentXOffset && this.currentXOffset() !== currentXOffset) {
      this.currentXOffset.set(currentXOffset);
    }
  }
  constructor(@Inject(DOCUMENT) private document: Document) {
    afterNextRender(() => {
      this.refreshFirstTabX();
      this.refreshStartX();
    });
    // TODO - use pageTabStore
    this.insideWidth = [];
    for (let i = 0; i < this.visibleTabs().length; i++) {
      this.insideWidth[i] = signal(0);
    }

    effect(
      () => {
        // console.log('TABMENU', this.tabStore.SelectedEntity());
        if (!this.editMode) {
          const left = this.newLeft();
          if (left) this.scrollRef().nativeElement.scrollTo({ left });
        }
      },

    );
  }
}
