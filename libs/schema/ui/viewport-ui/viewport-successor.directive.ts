import { Directive, inject, input } from '@angular/core';
import { VIEWPORT } from './viewport.token';

@Directive({
  selector: '[bpViewportSuccessor]',
  standalone: true,
})
export class ViewportSuccessorDirective {
  viewport = inject(VIEWPORT);
  fields = input([]);
}
