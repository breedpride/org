import { Directive, input } from '@angular/core';

@Directive({
  selector: '[bpDisabledState]',
  standalone: true,

  host: {
    '[attr.disabled]': 'disabled || null',
    '[attr.aria-disabled]': 'disabled || null',
    '[class.rc-disabled]': 'disabled',
  },
})
export class DisabledStateDirective {
  disabled = input(false);
}
