import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  input,
} from '@angular/core';

@Component({

  imports: [CommonModule],
  selector: 'bp-dot',
  styles: ``,
  template: `
    @if (!!dotNeeded()) {
    <span
      [ngClass]="{
          'mr-2': margin2(),
          'mr-1': !margin2(),
        }"
      >&bull;</span
    >
    }
    <ng-content></ng-content>
  `,
})
export class DotComponent {
  @HostBinding('class') class = 'flex items-center';
  dotNeeded = input<boolean>(true);
  margin2 = input<boolean>(false);
}
