import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  inject,
  input,
} from '@angular/core';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { PedigreePageComponent } from '@breedpride/pet';
import { PedigreeStore } from '@bp/pedigree-store';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { injectLitterPage } from '@bh/page-store';

@Component({
  imports: [CommonModule, PedigreePageComponent],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-litter-pedigree',
  styles: [],
  template: ` <bp-pedigree-page />`,
})
export class LitterPedigreeComponent {
  pedigreeStore = inject(PedigreeStore);
  defaultOptions = {
    entityPage: injectLitterPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
  constructor() {
    effect(
      () => {
        const entitytPage = this.entityPage();
        if (entitytPage) {
          this.pedigreeStore.buildLitterPedigree(entitytPage);
        }
      },

    );
  }
}
