import {
  Component,
  effect,
  inject,
} from '@angular/core';
import { PedigreeStore } from '@bp/pedigree-store';
import { CardWrapperComponent } from '@breedpride/wrapper';
import { injectQueryParams } from 'ngxtension/inject-query-params';
import { PedigreePageComponent } from '../../lib/pedigree-page/pedigree-page.component';
@Component({
  imports: [PedigreePageComponent, CardWrapperComponent],
  selector: 'bp-mating-page',
  styles: ``,
  template: `
    <bp-card-wrapper mode="cropped">
      <bp-pedigree-page mode="mating" />
    </bp-card-wrapper>
  `,
})
export class MatingPageComponent {
  queryParams = injectQueryParams();
  pedigreeStore = inject(PedigreeStore);
  constructor() {
    effect(
      () => {
        this.pedigreeStore.buildMatingPedigree(this.queryParams());
      },

    );
  }
}
