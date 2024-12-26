import { afterNextRender, Directive, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { resizeOptionsWithScroll } from '@bh/utils';
import { PAGE_TAB, providePageTab } from '@bp/page-tab-store';
import { injectResize } from 'ngxtension/resize';

@Directive({
  selector: '[bpScrollableTab]',
  standalone: true,
  providers: [providePageTab()],
})
export class ScrollableTabDirective {
  pageTabStore = inject(PAGE_TAB, { optional: true, self: true });
  injectResize$ = injectResize(resizeOptionsWithScroll).pipe(
    takeUntilDestroyed()
  );

  constructor() {
    afterNextRender(() => {
      this.pageTabStore?.observeBodyVisibility(this.injectResize$);
    });
  }
}
