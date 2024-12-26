/* eslint-disable no-unused-private-class-members */

import { Directive, inject } from '@angular/core';
import { hostBinding } from 'ngxtension/host-binding';
import { VIEWPORT } from './viewport.token';

@Directive({
  selector: '[withViewportHeight]',
  standalone: true,
})
export class WithViewportHeightDirective {
  viewportHeight = inject(VIEWPORT, { skipSelf: true }).height;

  #height = hostBinding('style.height.px', inject(VIEWPORT)['height']);
  #maxHeight = hostBinding('style.max-height.px', this.viewportHeight);
}
