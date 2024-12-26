import {
  Component,
  HostListener,
  computed,
  input,
  signal,
} from '@angular/core';
import { hostBinding } from 'ngxtension/host-binding';
@Component({
  selector: 'bp-entity-list-card-wrapper',
  standalone: true,
  styles: [
    `
      :host {
        display: flex;
        position: relative;
        align-items: center !important;
        height: 100%;
        cursor: pointer;
        border-bottom-width: 1px;
        border-color: rgb(var(--surface-border));
        padding: 1rem;
        @media (min-width: 600px) {
          padding: 1.75rem;
        }
      }
    `,
  ],
  template: ` <ng-content /> `,
})
export class EntityListCardWrapperComponent {
  selected = input<boolean>();
  backgroundColor = computed(() =>
    this.selected() ? 'rgb(var(--focus-card-ground))' : this.hover_bg_color()
  );
  test = hostBinding('style.backgroundColor', this.backgroundColor);

  hover_bg_color = signal<string>('transparent');
  @HostListener('mouseenter') onEnter() {
    this.hover_bg_color.set('rgb(var(--hover-card-ground))');
  }
  @HostListener('mouseleave') onLeave() {
    this.hover_bg_color.set('transparent');
  }
}
