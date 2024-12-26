import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { injectBreedPage } from '@bh/page-store';
import { MomentCardComponent } from '@bh/post';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { mergeInputs } from 'ngxtension/inject-inputs';

@Component({
  imports: [CommonModule, MomentCardComponent],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-breed-moments',
  styles: [
    `
      :host {
        display: grid;
        // grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 0.5rem;
        margin-top: 0.75rem;
      }
    `,
  ],
  template: `
    <div
      class="mt-3 grid grid-cols-3 gap-2"
      [ngClass]="{
        'lg:grid-cols-4 xxl:grid-cols-5 xxl:gap-3': fullscreen()
      }"
    >
      <bp-moment-card class="snap-start" [publicMode]="false" />
      <bp-moment-card class="snap-start" [publicMode]="false" />
      <bp-moment-card class="snap-start" [publicMode]="false" />
      <bp-moment-card class="snap-start" [publicMode]="false" />
      <bp-moment-card class="snap-start" [publicMode]="false" />
      <bp-moment-card class="snap-start" [publicMode]="false" />
      <bp-moment-card class="snap-start" [publicMode]="false" />
      <bp-moment-card class="snap-start" [publicMode]="false" />
      <bp-moment-card class="snap-start" [publicMode]="false" />
      <bp-moment-card class="snap-start" [publicMode]="false" />
      <bp-moment-card class="snap-start" [publicMode]="false" />
    </div>
  `,
})
export class BreedMomentsComponent {
  fullscreen = injectFullscreen();
  // @HostBinding('class')
  // get classBindings(): string {
  //   return this.fullscreen()
  //     ? 'lg:grid-cols-4 xxl:grid-cols-5 xxl:gap-3'
  //     : 'grid-cols-3 ';
  // }
  defaultOptions = {
    entityPage: injectBreedPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
}
