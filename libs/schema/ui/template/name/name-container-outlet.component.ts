import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { EDIT_MODE } from '@bh/collection-store';
import { NavButtonComponent } from '@breedpride/navigation';
import { resizeOptionsWithScroll } from '@bh/utils';
import { PageStore } from '@bh/page-store';
import { PageContentStore } from '@bp/page-content-store';
import { injectResize } from 'ngxtension/resize';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import { PageActionsComponent } from '../page-actions/page-actions.component';

@Component({
  selector: 'bp-name-container-outlet-v2',
  template: `
    <div
      class="relative bg-card-ground"
      [ngClass]="{
        'border-b border-surface-border': onTop(),
      }"
    >
      @if (isLoading()) {
      <div class="flex flex-col space-y-5 pb-3 pt-1">
        <!-- Additional info -->
        <p-skeleton
          width="7.5rem"
          height="0.95rem"
          styleClass="rounded-full"
        ></p-skeleton>
        <!-- Name -->
        <div class="space-y-2">
          <p-skeleton
            width="25rem"
            height="1.55rem"
            styleClass="rounded-full my-0.5"
          ></p-skeleton>
          <div class="flex items-center space-x-2">
            <p-skeleton
              width="1.25rem"
              height="1.25rem"
              styleClass="rounded-full"
            ></p-skeleton>
            <p-skeleton
              width="7.5rem"
              height="0.75rem"
              styleClass="rounded-full"
            ></p-skeleton>
          </div>
        </div>
      </div>
      } @else {
      <router-outlet name="name"></router-outlet>
      } @if (onTop()) {
      <bp-nav-button class="absolute right-0 top-0" />
      @if (!editMode) {
      <bp-page-actions mode="name" />
      } }
    </div>
  `,
  styles: ``,

  imports: [
    CommonModule,
    RouterModule,
    NavButtonComponent,
    ButtonModule,
    TooltipModule,
    PageActionsComponent,
    SkeletonModule,
  ],
})
export class NameContainerOutletComponent {
  injectResize$ = injectResize(resizeOptionsWithScroll);
  isLoading = inject(PageStore).isLoading;
  editMode = inject(EDIT_MODE);
  pageContentStore = inject(PageContentStore);
  onTop = inject(PageContentStore).nameOnTop;
  constructor() {
    this.injectResize$.pipe(takeUntilDestroyed()).subscribe((e) => {
      this.pageContentStore.setNameSize({ top: e.top } );
    });
  }
}
