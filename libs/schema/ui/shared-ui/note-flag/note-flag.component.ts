/* eslint-disable no-unused-private-class-members */
import {
  Component,
  computed,
  input,
} from '@angular/core';
import { hostBinding } from 'ngxtension/host-binding';

@Component({
  imports: [],
  selector: 'bp-note-flag',
  styles: [],
  template: ``,
})
export class NoteFlagComponent {
  isVisible = input<boolean>();
  visibleClasses = computed(() =>
    this.isVisible()
      ? 'pi pi-bookmark-fill text-primary top-0 z-30 text-sm'
      : 'hidden'
  );
  #class = hostBinding('class', this.visibleClasses);
}
