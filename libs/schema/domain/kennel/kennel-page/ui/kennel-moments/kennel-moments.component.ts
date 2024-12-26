import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { injectKennelPage } from '@bh/page-store';
import { MomentCardComponent } from '@bh/post';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { mergeInputs } from 'ngxtension/inject-inputs';

@Component({
  imports: [CommonModule, MomentCardComponent],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-kennel-moments',
  styles: [],
  template: ` <div
    class="mt-3 grid grid-cols-3 gap-2"
    [ngClass]="{
      'lg:grid-cols-4 xxl:grid-cols-5 xxl:gap-3': fullscreen(),
    }"
  >
    <bp-moment-card class="snap-start" [publicMode]="false"></bp-moment-card>
    <bp-moment-card class="snap-start" [publicMode]="false"></bp-moment-card>
    <bp-moment-card class="snap-start" [publicMode]="false"></bp-moment-card>
    <bp-moment-card class="snap-start" [publicMode]="false"></bp-moment-card>
    <bp-moment-card class="snap-start" [publicMode]="false"></bp-moment-card>
    <bp-moment-card class="snap-start" [publicMode]="false"></bp-moment-card>
    <bp-moment-card class="snap-start" [publicMode]="false"></bp-moment-card>
    <bp-moment-card class="snap-start" [publicMode]="false"></bp-moment-card>
    <bp-moment-card class="snap-start" [publicMode]="false"></bp-moment-card>
    <bp-moment-card class="snap-start" [publicMode]="false"></bp-moment-card>
    <bp-moment-card class="snap-start" [publicMode]="false"></bp-moment-card>
  </div>`,
})
export class KennelMomentsComponent {
  fullscreen = injectFullscreen();
  defaultOptions = {
    entityPage: injectKennelPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
}
