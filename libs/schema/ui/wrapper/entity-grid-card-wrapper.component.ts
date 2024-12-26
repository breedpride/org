/* eslint-disable no-unused-private-class-members */
import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { hostBinding } from 'ngxtension/host-binding';
// TODO - use const for 280px @ann

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'bp-entity-grid-card-wrapper',
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: 280px;
        padding: 0.75rem;
        border-radius: 0.375rem;
      }
    `,
  ],
  template: ` <ng-content /> `,
})
export class EntityGridCardWrapperComponent {
  selected = input<boolean>(false);
  selectedClass = computed(() =>
    this.selected()
      ? 'bg-primary-50/50'
      : 'hover:bg-[rgb(var(--hover-card-ground))]'
  );
  #hidden = hostBinding('class', this.selectedClass);
}
