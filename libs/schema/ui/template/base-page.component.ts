import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  effect,
  viewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ViewportProviderDirective,
  WithViewportHeightDirective,
  injectScroll,
  provideScroll,
} from '@bh/viewport';
// import { ScrollTopModule } from 'primeng/scrolltop';

@Component({
  selector: 'bp-base-page',
  imports: [
    CommonModule,
    RouterOutlet,
    ViewportProviderDirective,
    // ScrollTopModule,
  ],
  hostDirectives: [WithViewportHeightDirective],
  providers: [provideScroll()],
  template: `
    <div
      #scroll
      id="scroll"
      bpViewportProvider
      class="size-full overflow-y-auto"
    >
      <router-outlet />
      <!-- <p-scrolltop
        target="parent"
        [threshold]="100"
        icon="pi pi-arrow-up"
        [buttonProps]="{ severity: 'contrast', raised: true, rounded: true }"
        styleClass="bg-surface-600 border-surface-600 dark:bg-surface-400 dark:border-surface-400 z-20 text-white"
      /> -->
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,

})
export class BasePageComponent {
  scrollElement = viewChild.required<ElementRef<HTMLElement>>('scroll');
  scroll = injectScroll();
  @HostBinding('class') class = 'rounded-none md:rounded-xl card w-full';
  constructor() {
    effect(
      () => {
        this.scroll.updateScroll(this.scrollElement().nativeElement);
      },

    );
  }
}
