import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
export const isValidURL = (url: string | undefined): boolean => {
  try {
    if (url) {
      new URL(url);
    } else {
      return false;
    }
    return true;
  } catch {
    return false;
  }
};
@Component({
  imports: [CommonModule, ButtonModule, RouterModule],
  selector: 'bp-external-link',
  styles: [],
  template: `
    @if (isUrl()) {
    <a [href]="text()" target="_blank">
      @if (mode() === 'icon') {
      <i class="pi pi-external-link text-primary hover:text-primary-hover"></i>
      } @else {
      <span class="text-primary"> {{ text() }} </span>
      }
    </a>
    } @else {
    {{ text() }}
    }
  `,
})
export class ExternalLinkComponent {
  text = input.required<string | undefined>();
  mode = input<string>('icon');
  isUrl = computed(() => isValidURL(this.text()));
}

