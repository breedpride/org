import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { injectPetPage } from '@bh/page-store';
import { VIEWPORT } from '@bh/viewport';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { SafeHtmlPipe } from '@breedpride/pipes';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { TimelineModule } from 'primeng/timeline';

@Component({

  imports: [
    CommonModule,
    TimelineModule,
    AngularSvgIconModule,
    // LinkComponent,
    SafeHtmlPipe,
  ],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-pet-timeline',
  styles: [
    `
      .custom-marker {
        display: flex;
        width: 2rem;
        height: 2rem;
        align-items: center;
        justify-content: center;
        color: rgb(var(--primary));
        border-radius: 50%;
        border: 0.15rem solid rgb(var(--primary));
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
      svg {
        width: 16px;
        height: 16px;
        fill: white;
      }
    `,
  ],
  template: `
    <div class="mt-3">
      <p-timeline
        [value]="timeline2()"
        align="alternate"
        styleClass="customized-timeline"
        [ngClass]="{
          'timeline-right': rightTimeline(),
        }"
      >
        <ng-template #marker let-event>
          @if (event.Id) {
          <span class="custom-marker shadow-2 bg-primary">
            <svg-icon [name]="event.IconName"></svg-icon>
          </span>
          } @else {
          <span class="custom-marker shadow-2">
            <i class="pi pi-info"></i
          ></span>
          }
        </ng-template>
        <ng-template #content let-event>
          <div
            class="card flex flex-col space-y-2 px-6 py-4 bg-even-card-ground cursor-default caret-transparent"
          >
            <div class="text-2xl font-semibold">
              {{ event.Name }}
            </div>
            <div class="text-secondary text-md">
              {{ event.Date }}
            </div>
            <div class="flex leading-relaxed">
              @if (event.Type.Id === '5b23dcaf-2b4d-44c8-ada7-7b0077975a7c') {
              <div [innerHTML]="'<h1>Hello World!</h1>' | safeHtml"></div>
              } @else {
              {{ event.Text }}
              }
            </div>
          </div>
        </ng-template>
      </p-timeline>
    </div>
  `
})
export class PetTimelineComponent {
  viewport = inject(VIEWPORT);
  rightTimeline = computed(() => (this.viewport.width() < 960 ? true : false));
  defaultOptions = {
    entityPage: injectPetPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
  timeline = computed(() => {
    // console.log('TIMELINE', this.entityPage()?.Timeline);
    return this.entityPage()?.Timeline || [];
  });
  timeline2 = computed(() => {
    const res = this.timeline()?.map((e) => {
      let IconName = '';
      switch (e.Type?.Id) {
        case '52de412c-be03-42fb-861d-62bda67a9745':
          IconName = 'birthday';
          break;
        case 'de388cd8-05be-47ee-bcce-55bbe7fc6ca8':
          IconName = 'cup';
          break;
        case '5b23dcaf-2b4d-44c8-ada7-7b0077975a7c':
          IconName = 'litter';
          break;
        case '62c2cad4-9fcf-4c75-b8ef-dcf9d44f346f':
          IconName = 'date-of-death';
          break;
      }
      return { ...e, IconName };
    });
    res?.unshift({
      Text: "Special events from your pet's life will be displayed here",
      Type: {
        Name: '',
        Id: '',
      },
      Date: 'Coming soon',
      PublicationDate: '',
      Name: 'More exciting events up to come',
      Id: '',
      IconName: '',
    });
    // console.log('TIMELINE2', res);
    return res;
  });
}
