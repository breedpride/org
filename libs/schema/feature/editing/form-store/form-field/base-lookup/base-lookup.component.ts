import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { And, byNameContain } from '@bh/filter';
import{ runFilterFn} from '@bh/filter';
import { ApiHelper } from '@breedpride/api';
import { getState } from '@ngrx/signals';
import { BaseNGComponent } from '../base-ng/base-ng.component';

@Component({
  imports: [],
  styles: [],
  template: ``,
})
export class BaseLookupComponent extends BaseNGComponent implements OnInit {
  helper = inject(ApiHelper);
  constructor() {
    super();
  }
  async changeQuery(query = ''): Promise<void> {
    const filters = And(
      byNameContain(query),
      await runFilterFn(this.store.config().filterFn, {
        form: this.mainForm(),
        helper: this.helper,
      })
    );
    this.store.loadFirstPage(filters);
  }
  ngOnInit(): void {
    console.log('service', getState(this.store));
  }
}
