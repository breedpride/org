import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  HostBinding,
  inject,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ACTIVE_DETAIL } from '@bh/collection-store';
import { PageContentStore } from '@bp/page-content-store';
import { AvatarOutletComponent } from './avatar/avatar-outlet.component';
import { NameContainerOutletComponent } from './name/name-container-outlet.component';
import { PageAchievementsOutletComponent } from './page-achievements/page-achievements-outlet.component';
import { PageHeaderComponent } from './page-header/page-header.component';
@Component({
  selector: 'bp-page-template-v2',
  providers: [PageContentStore],
  styles: [
    `
      :host {
      }
    `,
  ],
  template: `
    @if (!hasActiveDetail()) {
    <div class="flex w-full items-center justify-center">
      <bp-page-header />
    </div>
    }
    <div
      class="
        flex flex-auto flex-col items-center
      "
      [ngClass]="{
        'px-4 pt-4 sm:px-6 sm:pt-6 ': !hasActiveDetail(),
      }"
    >
      <div
        class="
          w-full max-w-3xl
          lg:max-w-4xl
          xxl:max-w-5xl
        "
        [ngClass]="{
          'max-w-full lg:max-w-full xxl:max-w-full ':
            detailParam() === 'pedigree',
        }"
      >
        @if (!hasActiveDetail()) {
        <bp-avatar-outlet />
        }

        <bp-name-container-outlet-v2 class="sticky top-0 z-30" />
        @if (!hasActiveDetail()) {
        <bp-page-achievements-outlet />
        <router-outlet name="details" />
        }
        <router-outlet />
      </div>
    </div>
  `,
  imports: [
    CommonModule,
    PageHeaderComponent,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    NameContainerOutletComponent,
    AvatarOutletComponent,
    PageAchievementsOutletComponent,
  ],
})
export class PageTemplateV3Component {
  detailParam = inject(ACTIVE_DETAIL);
  hasActiveDetail = computed(
    () => this.detailParam() !== '' && this.detailParam() !== 'general'
  );
  @HostBinding('class') class = 'size-full';
  constructor() {
    effect(() => {
      console.log('detail', this.detailParam());
    });
  }
}
