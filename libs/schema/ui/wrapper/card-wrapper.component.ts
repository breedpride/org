import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { WithViewportHeightDirective } from '@bh/viewport';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'bp-card-wrapper',
  hostDirectives: [WithViewportHeightDirective],
  styles: ``,
  template: `
    <div
      class="size-full overflow-y-auto py-2"
      [ngClass]="{
        'px-5 ': mode() === 'full',
        'px-10 ': mode() === 'cropped',
        'px-5 flex justify-center': mode() === 'centrated',
      }"
    >
      <router-outlet name="header" />
      <router-outlet />
      <ng-content />
      <router-outlet name="footer" />
    </div>
  `,
})
export class CardWrapperComponent {
  mode = input<string>('full');
  @HostBinding('class') class = 'card';
}
