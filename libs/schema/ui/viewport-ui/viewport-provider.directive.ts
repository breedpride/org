import { Directive, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { injectResize } from 'ngxtension/resize';
import { map } from 'rxjs';
import { getFullSize } from './utils';
import {
  VIEWPORT,
  provideViewport,
} from './viewport.token';


@Directive({
  selector: '[bpViewportProvider]',
  standalone: true,
  providers: [provideViewport()],
})
export class ViewportProviderDirective {
  viewport = inject(VIEWPORT);
  injectResize$ = injectResize()
    .pipe(takeUntilDestroyed(), map(getFullSize))
    .subscribe(dOMRect => this.viewport.updateFromResizeResult(dOMRect));
}
