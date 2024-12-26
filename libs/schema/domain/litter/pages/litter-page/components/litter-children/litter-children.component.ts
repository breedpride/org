import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { PetCardComponent } from '@breedpride/pet';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { injectLitterPage } from '@bh/page-store';

@Component({
  imports: [CommonModule, PetCardComponent],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-litter-children',
  styles: [],
  template: `
    <div
      class="mt-3 grid gap-3 sm:grid-cols-2"
      [ngClass]="{
        'lg:grid-cols-3 xxl:grid-cols-4': fullscreen(),
      }"
    >
      @for (pet of entityPage()?.Children; track pet) {
      <bp-pet-card mode="litter" [pet]="pet" />
      }
    </div>
  `,
})
export class LitterChildrenComponent {
  defaultOptions = {
    entityPage: injectLitterPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
  fullscreen = injectFullscreen();
}
