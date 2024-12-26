import {
  Directive,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { BPFormGroupInterface, FilterFieldConfig } from '@bh/superfield';
import { hostBinding } from 'ngxtension/host-binding';
import { Observable, takeUntil } from 'rxjs';

@Directive({
  selector: '[bpHidden]',
  standalone: true,
})
export class HiddenDirective {
  formGroupDirective = inject(FormGroupDirective);
  config = input<FilterFieldConfig>();
  hiddenFn = computed(() => this.config()?.hidden);
  #hidden = hostBinding('hidden', signal(false));
  formValueChange: Observable<any> | null = null;

  constructor() {
    effect(
      () => {
        const hiddenFn = this.hiddenFn();
        if (hiddenFn === undefined || hiddenFn === null) {
          this.#hidden.set(false);
        } else {

          const form = this.formGroupDirective.form as BPFormGroupInterface;
          if (form && !this.formValueChange) {
            this.#hidden.set(!!hiddenFn(form));
            this.formValueChange = form.valueChanges.pipe(
              takeUntil(form.unsubscribe)
            );
            this.formValueChange.subscribe(() => {
              const newValue = !!hiddenFn(form);
              this.#hidden.set(newValue);
            });
          }
        }
      },

    );
  }
}
