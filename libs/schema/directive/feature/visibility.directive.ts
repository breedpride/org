/* eslint-disable no-unused-private-class-members */
import { Directive, computed, input } from '@angular/core';
import { hostBinding } from 'ngxtension/host-binding';

@Directive({
  selector: '[isVisible]',
  standalone: true,
})
export class VisibilityDirective {
  isVisible = input.required<boolean>();
  hidden = computed(() => !this.isVisible());
  #hidden = hostBinding('hidden', this.hidden);
}
