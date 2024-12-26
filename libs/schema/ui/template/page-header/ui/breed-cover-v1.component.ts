import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { trackByFn } from '@bh/list';
import { BPNavStore } from '@bh/nav-store';
import { BreedWithPlugins } from '@bh/types';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { CoverTemplateComponent } from './cover-template.component';
import { PatronAvatarComponent } from './patron-avatar.component';

@Component({
  imports: [
    CommonModule,
    PatronAvatarComponent,
    CoverTemplateComponent,
    ButtonModule,
    AngularSvgIconModule,
    TooltipModule,
  ],
  selector: 'bp-breed-cover-v1',
  styles: `
    // .p-button.p-button-secondary.p-button-outlined {
    //   color: white;
    // }
  `,
  template: `
    @if (breed()) {
    <bp-cover-template
      [coverImg]="coverImg()"
      [needGradient]="true"
      class="relateve"
    >
      <div
        class="
          z-10 ml-auto flex size-full flex-col justify-between pb-3
          sm:w-auto sm:pb-2 sm:pt-1
        "
      >
        <!-- Patrons -->
        <div
          class="
            flex w-full justify-between
            sm:flex-col sm:space-y-2
          "
        >
          <div
            class="
              text-md absolute top-5 sm:text-end font-semibold uppercase text-white max-w-64 text-left sm:max-w-full
              sm:static sm:text-xl
            "
            [ngClass]="{
              'sm:mt-3': fullscreen(),
            }"
          >
            {{ breed().Name }}
            @if (patronLength() > 0) { top patrons }
          </div>
          <div
            class="
              ml-auto mr-2 mt-2
              sm:mt-0
            "
          >
            @if (patronLength() > 0) {
            <div
              class="grid gap-2.5"
              [ngStyle]="{
                  'grid-template-columns':
                    'repeat(' + patronLength() + ', minmax(0, 1fr))',
                }"
            >
              @for ( patron of breed().TopPatrons.slice(0, 4); track
              trackByFn($index, patron) ) {
              <bp-patron-avatar [patron]="patron" />
              }
            </div>
            } @else {
            <div class="relative flex items-center space-x-3">
              <span
                class="
                    hidden text-end text-white
                    sm:block
                  "
              >
                There are no patrons in the breed <br />
                You may be the first one!
              </span>
              <div
                class="
                    group mt-2 flex size-11 items-center justify-center
                    overflow-hidden rounded-full border border-white bg-white/30
                    text-7xl text-white
                    sm:size-16
                  "
              >
                <svg-icon
                  class="
                      duration-300
                      group-hover:scale-125
                    "
                  name="question_mark"
                  [svgStyle]="{
                      'width.px': '36',
                      'height.px': '36',
                      fill: 'rgb(255,255, 255)',
                    }"
                ></svg-icon>
                <div
                  class="
                      bg-accent-600 absolute -right-2 top-0 rounded-full p-1
                    "
                >
                  <svg-icon
                    class="sm:hidden"
                    name="place-1"
                    [svgStyle]="{
                        'width.px': '14',
                        'height.px': '14',
                        fill: 'rgb(255,255, 255)',
                      }"
                  ></svg-icon>
                  <svg-icon
                    class="
                        hidden
                        sm:block
                      "
                    name="place-1"
                    [svgStyle]="{
                        'width.px': '18',
                        'height.px': '18',
                        fill: 'rgb(255,255, 255)',
                      }"
                  ></svg-icon>
                </div>
              </div>
            </div>
            }
          </div>
          @if (fullscreen()) {
          <span
            class="
                hidden pt-4 text-end text-white
                md:block
              "
          >
            Make a contribution to the development of your favorite breed
          </span>
          }
        </div>

        <!-- Call to action -->
        <div class="flex items-end">
          <button
            class="
              hidden p-button-info bp-small-button ml-auto p-button-rounded
              sm:flex
            "
            aria-label="Become a breed patron"
            pTooltip="Support your breed"
            tooltipPosition="bottom"
            pRipple
            pButton
            type="button"
            icon="pi pi-heart-fill"
            (click)="navStore.becomePatron(breed().Id || '')"
          >
            <span
              class="
                ml-2 hidden font-bold
                sm:block
              "
              >Become a breed patron</span
            >
          </button>
          <button
            class="
              p-button-info bp-small-button ml-auto p-button-rounded
              sm:hidden
            "
            aria-label="Become a breed patron"
            pTooltip="Support your breed"
            tooltipPosition="bottom"
            pRipple
            pButton
            type="button"
            icon="pi pi-heart-fill"
            (click)="navStore.becomePatron(breed().Id || '')"
          ></button>
        </div>
      </div>
    </bp-cover-template>
    }
  `,
})
export class BreedCoverV1Component {
  trackByFn = trackByFn;
  navStore = inject(BPNavStore);
  fullscreen = injectFullscreen();
  coverImg = input.required();
  breed = input.required<BreedWithPlugins>();
  patronLength = computed(() =>
    this.breed()?.TopPatrons
      ? window.screen.width < 600
        ? Math.min(this.breed()?.TopPatrons?.length, 3)
        : this.breed()?.TopPatrons?.length
      : 0
  );
}
