import { Directive, inject } from '@angular/core';
import {
  VIEWPORT,
  provideViewport,
} from './viewport.token';
import { injectResize } from 'ngxtension/resize';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { getContentSize } from './utils';

@Directive({
  selector: '[bpViewportContentProvider]',
  standalone: true,
  providers: [provideViewport()],
})
export class ViewportContentProviderDirective {
  viewport = inject(VIEWPORT);
  injectResize$ = injectResize()
    .pipe(takeUntilDestroyed(), map(getContentSize))
    .subscribe((dOMRect) => this.viewport.updateFromResizeResult(dOMRect));
}
