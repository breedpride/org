import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  input,
} from '@angular/core';
import { injectBreedPage } from '@bh/page-store';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { DateLocalePipe } from '@breedpride/pipes';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { PrimeIcons } from 'primeng/api';
import { Timeline, TimelineModule } from 'primeng/timeline';

@Component({
  imports: [CommonModule, TimelineModule, DateLocalePipe, Timeline],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-breed-support-levels',
  styles: [
    `
      :host {
        margin-top: 0.75rem;
        display: block;
        cursor: default;
        caret-color: transparent;
      }
      .custom-marker {
        display: flex;
        width: 2rem;
        height: 2rem;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        border-radius: 50%;
        border: 0.15rem solid #673ab7;
        z-index: 1;
      }

      ::ng-deep {
        .p-timeline-event-content,
        .p-timeline-event-opposite {
          line-height: 1;
        }
      }

      .timeline-right {
        ::ng-deep {
          .p-timeline.p-timeline-vertical .p-timeline-event-opposite {
            padding: 0 0 0 0rem;
          }
          .p-timeline.p-timeline-vertical .p-timeline-event-content {
            padding: 0 0 0 1rem;
          }

          .customized-timeline {
            .p-timeline-event:nth-child(even) {
              flex-direction: row !important;

              .p-timeline-event-content {
                text-align: left !important;
                padding: 5px 0 5px 1rem !important;
              }
            }

            .p-timeline-event-opposite {
              flex: 0;
              min-width: 0;
            }

            card {
              margin-top: 1rem;
            }
          }
        }
      }
    `,
  ],
  template: `
    @let page = entityPage(); @if (page) {
    <p-timeline
      [value]="page.Achievements"
      align="alternate"
      styleClass="customized-timeline"
      [ngClass]="{
        'timeline-right': !fullscreen() || rightTimeline,
      }"
    >
      <ng-template #marker let-achievement>
        <span
          class="custom-marker shadow-2"
          [ngClass]="{
            'bg-primary-500': achievement.Active,
          }"
        >
          <i [ngClass]="achievementIcon(achievement)"></i>
        </span>
      </ng-template>
      <ng-template #content let-achievement>
        <div
          class="
          card flex flex-col space-y-2 px-6 py-4
          md:mb-0
        "
        >
          <span class="text-2xl font-semibold">
            {{ achievement.Name }}
          </span>
          <span class="text-xl font-semibold">
            {{ achievement.IntValue | currency : 'USD' : 'symbol' : '1.2-2' }}
          </span>
          @if (!!achievement.Active) {
          <span class="text-secondary text-sm">
            {{ getDate(achievement.Date) | appDateLocale }}
          </span>
          }
          <span class="text-md leading-relaxed">
            {{ achievement.Description }}
          </span>
        </div>
      </ng-template>
    </p-timeline>
    }
  `,
})
export class BreedSupportLevelsComponent implements OnInit {
  rightTimeline!: boolean;
  fullscreen = injectFullscreen();
  defaultOptions = {
    entityPage: injectBreedPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;

  ngOnInit() {
    if (window.innerWidth < 960) {
      this.rightTimeline = true;
    } else {
      this.rightTimeline = false;
    }
  }
  achievementIcon(achivment: { Active: any }): string {
    return achivment.Active ? PrimeIcons.CHECK : '';
  }
  getDate(value: string) {
    return new Date(value);
  }
}
