import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  input,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
@Component({
  imports: [CommonModule],
  selector: 'bp-close-button',
  styles: ``,
  template: `
    <button aria-label="Close">
      <i
        class="pi pi-times"
        [ngStyle]="{
          color: onTop() ? 'rgb(var(--secondary-500))' : 'white',
          'font-size': onTop() ? '1.3rem' : '1.5rem',
        }"
      ></i>
    </button>
  `,
})
// TODO -
export class CloseButtonComponent {
  fullscreen = injectFullscreen();
  private _activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);
  onTop = input<boolean>(false);
}
