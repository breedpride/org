import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { PetCardComponent } from '@breedpride/pet';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { injectBreedPage } from '@bh/page-store';

@Component({
  imports: [CommonModule, PetCardComponent],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-breed-top-pets',
  styles: [],
  template: `
    @let entity = entityPage(); @if (entity) { @if (entity.TopPets.length > 0) {
    <div
      class="
          mt-3 grid gap-3
          sm:grid-cols-2
        "
      [ngClass]="{
          'lg:grid-cols-3 xxl:grid-cols-4': fullscreen(),
        }"
    >
      @for (pet of entity.TopPets; track pet) {
      <bp-pet-card [pet]="pet" />
      }
    </div>
    } @else {
    <div
      class="
        card mt-5 flex flex-auto flex-col p-6
        lg:px-8
      "
    >
      <span class="text-secondary p-8 text-center font-medium">
        There are no pets in the Breed!
      </span>
    </div>
    }}
  `,
})
export class BreedTopPetsComponent {
  fullscreen = injectFullscreen();
  defaultOptions = {
    entityPage: injectBreedPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
}
