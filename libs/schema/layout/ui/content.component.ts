/* eslint-disable no-unused-private-class-members */
import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  inject,
  input,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VIEWPORT, ViewportProviderDirective } from '@bh/viewport';
import { hostBinding } from 'ngxtension/host-binding';


@Component({
  selector: 'bp-content',
  imports: [CommonModule, RouterOutlet],
  template: ` <router-outlet /> `,
  providers: [],
  hostDirectives: [{ directive: ViewportProviderDirective, inputs: [] }],
  styles: `
    :host {
      display: block;
    }
  `,

})
export class ContentComponent {
  options = input.required<{ height: number }>();
  computedHeight = computed(() => this.options().height);
  #height = hostBinding('style.height.px', this.computedHeight);
  #maxHeight = hostBinding('style.max-height.px', this.computedHeight);
  viewport = inject(VIEWPORT, { self: true });

  constructor() {
    effect(
      () => {
        this.viewport.patchHeight(this.computedHeight());
      }
    );
  }
}
