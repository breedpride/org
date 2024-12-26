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
import { DateLocalePipe, ToDatePipe } from '@breedpride/pipes';
import { mergeInputs } from 'ngxtension/inject-inputs';

@Component({

  imports: [CommonModule, DateLocalePipe, ToDatePipe],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-pet-health',
  styles: [
    `
      .pet-health-grid {
        grid-template-columns: 132px auto;

        @screen sm {
          grid-template-columns: 184px auto;
        }

        @screen md {
          grid-template-columns: 86px 184px auto;
        }
      }

      .pet-health-grid-full {
        grid-template-columns: 132px 184px auto;

        @screen lg {
          grid-template-columns: 132px 284px auto;
        }
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
          class=" grid gap-3 border-b border-surface-border px-6 py-3 font-bold text-secondary lg:px-8"
          [ngClass]="{
              'pet-health-grid-full': fullscreen(),
              'pet-health-grid': !fullscreen(),
            }"
        >
          <div class="hidden md:block">Date</div>
          <div>Object</div>
          <div>Result</div>
          <!-- <div
              class="hidden "
              [ngClass]="{
                'lg:block': fullscreen()
              }">
              Proved
            </div> -->
        </div>
        <!-- Rows -->
        @for (healthExam of results(); track trackByFn($index, healthExam)) {
        <ng-container class="">
          <div
            class=" grid items-center gap-3 px-6 py-2 bg-card-ground even:bg-even-card-ground  lg:px-8"
            [ngClass]="{
                  'pet-health-grid-full': fullscreen(),
                  'pet-health-grid': !fullscreen(),
                }"
          >
            <!-- Date -->
            <div class="hidden md:block">
              {{ healthExam.Date | toDate | appDateLocale }}
            </div>
            <!-- Object -->
            <div class="truncate">
              {{ healthExam.HealthExamObject?.Name }}
            </div>
            <!-- Result -->
            <div class="truncate">
              {{ healthExam.HealthExamResult?.Name }}
            </div>
            <!-- Proved -->
            <!-- <div
                class="hidden "
                [ngClass]="{
                  'lg:block': fullscreen()
                }">
              </div> -->
          </div>
        </ng-container>
        }
      </div>
      } @else {
      <span class="text-secondary p-8 text-center  font-medium">
        There are no health results!
      </span>
      }
    </div>
  `
})
export class PetHealthComponent {
  fullscreen = injectFullscreen();
  defaultOptions = {
    entityPage: injectPetPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });

  entityPage = this.options().entityPage;
  results = computed(() => this.entityPage()?.HealthExams || []);
  // input<PublicHealthExam[]>([]);
  trackByFn = trackByFn;
}
