/* eslint-disable no-unused-private-class-members */
import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { hostBinding } from 'ngxtension/host-binding';
//TODO @ann directive for using in div
@Component({
  imports: [CommonModule],
  selector: 'bp-two-fields-row',
  styles: [],
  template: ` <ng-content /> `,
})
export class TwoFieldsRowComponent {
  fullscreen = injectFullscreen();
  hostClasses = computed(() => {
    let classes = 'grid w-full gap-y-8';
    if (this.fullscreen()) {
      classes += ' lg:grid-cols-2 lg:gap-x-3 lg:gap-y-0';
    }
    return classes;
  });
  #clazz = hostBinding('class', this.hostClasses);
}
