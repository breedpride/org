import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  input,
} from '@angular/core';
import { trackByFn } from '@bh/list';
import { injectPetPage } from '@bh/page-store';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { ExternalLinkComponent } from '@breedpride/link';
import { DateLocalePipe, ToDatePipe } from '@breedpride/pipes';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { ButtonModule } from 'primeng/button';

@Component({

  imports: [
    CommonModule,
    DateLocalePipe,
    ToDatePipe,
    ButtonModule,
    ExternalLinkComponent,
  ],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-pet-show-results',
  styles: [
    `
      .show-results-grid {
        grid-template-columns: 132px auto 44px;
      }

      .show-results-grid-full {
        grid-template-columns: 132px auto 44px;

        @screen lg {
          grid-template-columns: 132px 226px auto 176px 44px;
        }

        /* @screen xxl {
          grid-template-columns: 82px 226px auto 176px 176px 44px;
        } */
      }
    `,
  ],
  template: `
    <div
      class="card mt-3 flex flex-auto flex-col p-6 lg:px-8 cursor-default caret-transparent"
    >
      @if (results().length > 0) {
      <div class="grid">
        <!-- Header -->
        <div
          class="grid gap-3 border-b border-surface-border  px-6 py-3 font-bold text-secondary md:px-8"
          [ngClass]="{
              'show-results-grid-full': fullscreen(),
              'show-results-grid': !fullscreen(),
            }"
        >
          <span>Date</span>
          <span
            class="hidden"
            [ngClass]="{
                'lg:block': fullscreen(),
              }"
          >
            Show
          </span>
          <span>Result</span>
          <span
            class="hidden"
            [ngClass]="{
                'lg:block': fullscreen(),
              }"
          >
            Judge
          </span>
          <span>Details</span>
        </div>
        <!-- Rows -->
        @for (showResult of results(); track trackByFn($index, showResult)) {
        <div
          class=" grid items-center gap-3 rounded-md  px-6 py-2 bg-card-ground even:bg-even-card-ground md:px-8"
          [ngClass]="{
                'show-results-grid-full': fullscreen(),
                'show-results-grid': !fullscreen(),
              }"
        >
          <!-- Date -->
          <span>
            {{ showResult.Date | toDate | appDateLocale }}
          </span>
          <!-- Show -->
          <span
            class="hidden truncate"
            [ngClass]="{
                  'lg:block': fullscreen(),
                }"
          >
            {{ showResult.Project?.CountryCode }}
            {{ showResult.Project?.CityName }}
            {{ showResult.Project?.Category }}
          </span>
          <!-- Titles -->
          <span class="truncate">
            {{ showResult.Result }}
          </span>
          <!-- Judge -->
          <span
            class="hidden truncate"
            [ngClass]="{
                  'lg:block': fullscreen(),
                }"
          >
            {{ showResult.Judge?.Name }}
          </span>

          <bp-external-link [text]="showResult.WebLink" />
        </div>
        }
      </div>
      } @else {
      <span class="text-secondary p-8 text-center  font-medium">
        There are no show results!
      </span>
      }
    </div>
  `
})
export class PetShowResultsComponent {
  fullscreen = injectFullscreen();
  defaultOptions = {
    entityPage: injectPetPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });

  entityPage = this.options().entityPage;
  results = computed(() => {
    return this.entityPage()?.ShowResults || [];
  });
  // input<PublicShowResult[]>([]);
  trackByFn = trackByFn;
}
