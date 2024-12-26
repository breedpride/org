import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { injectBreedPage } from '@bh/page-store';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { AvatarCardComponent } from '../../../../lib/avatar-card/avatar-card.component';

@Component({
  imports: [CommonModule, AvatarCardComponent],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-breed-patrons',
  styles: [
    `
      :host {
        display: block;
        cursor: default;
        caret-color: transparent;
      }
    `,
  ],
  template: `
    @let entity = entityPage(); @if (entity) { @if (entity.Patrons.length > 0) {
    <div
      class="
          mt-3 grid grid-cols-2 gap-y-6
          sm:grid-cols-3
        "
      [ngClass]="{
          'lg:grid-cols-4 xxl:grid-cols-5': fullscreen(),
        }"
    >
      @for (patron of entity.Patrons; track patron) {
      <bp-avatar-card [entity]="patron" [model]="'contact'" />
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
        There are no patrons in Breed!
      </span>
    </div>
    } }
  `,
})
export class BreedPatronsComponent {
  fullscreen = injectFullscreen();
  defaultOptions = {
    entityPage: injectBreedPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
}
