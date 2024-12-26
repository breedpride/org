import {
  Component,
  computed,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { BPFormGroupInterface } from '@bh/superfield';
import { injectFieldStore } from '@bh/collection-store';

@Component({
  selector: 'bp-base-ng',
  standalone: true,
  template: ``,
})
export class BaseNGComponent {
  private formGroupDirective = inject(FormGroupDirective);
  store = injectFieldStore();

  control = computed(
    () => this.mainForm().get(this.id()) as AbstractControl<any, any>
  );
  id = computed(() => this.store.config().id || '');
  mainForm = computed(() => this.parentForm as BPFormGroupInterface);
  required = computed(() => this.control()?.hasValidator(Validators.required));

  get parentForm(): BPFormGroupInterface {
    return this.formGroupDirective.form as BPFormGroupInterface;
  }
  placeholder = computed(() => this.store.config().placeholder);
}
