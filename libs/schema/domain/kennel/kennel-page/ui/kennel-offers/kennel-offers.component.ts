import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { SalePetCardComponent } from '@breedpride/pet';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { injectKennelPage } from '@bh/page-store';

@Component({
  imports: [CommonModule, SalePetCardComponent],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-kennel-offers',
  styles: [],
  template: `
    <div class="mt-3">
      @for (pet of entityPage()?.PetsForSale; track pet) {
      <bp-sale-pet-card [pet]="pet" />
      }
    </div>
  `,
})
export class KennelOffersComponent {
  fullscreen = injectFullscreen();
  defaultOptions = {
    entityPage: injectKennelPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
}
