import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

// import { AvatarCardComponent } from '@breed/avatar-card.component';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { injectBreedPage } from '@bh/page-store';
import { AvatarCardComponent } from '../../../../lib/avatar-card/avatar-card.component';

@Component({
  imports: [CommonModule, AvatarCardComponent],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-breed-top-kennels',
  styles: [],
  template: `
    @let page = entityPage(); @if (page) { @if (page.TopKennels.length > 0) {
    <div
      class="
          mt-3 grid grid-cols-2 gap-y-6
          sm:grid-cols-3
        "
      [ngClass]="{
          'lg:grid-cols-4 xxl:grid-cols-5': fullscreen(),
        }"
    >
      @for (kennel of page.TopKennels; track kennel) {
      <bp-avatar-card [entity]="kennel" [model]="'kennel'" />
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
        There are no kennels in the Breed!
      </span>
    </div>
    } }
  `,
})
export class BreedTopKennelsComponent {
  fullscreen = injectFullscreen();
  defaultOptions = {
    entityPage: injectBreedPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
}
