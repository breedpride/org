import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { injectEventPage } from '@bh/page-store';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { ExternalLinkComponent, LinkComponent } from '@breedpride/link';
import { mergeInputs } from 'ngxtension/inject-inputs';

@Component({
  imports: [CommonModule, LinkComponent, ExternalLinkComponent],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-event-results',
  styles: [
    `
      .result-grid {
        grid-template-columns: auto 84px 24px;

        @screen sm {
          grid-template-columns: auto 204px 24px;
        }
        @screen md {
          grid-template-columns: auto 124px 24px;
        }
      }

      .result-grid-full {
        grid-template-columns: auto 84px 24px;

        @screen lg {
          grid-template-columns: auto 84px 24px;
        }
      }
    `,
  ],
  template: `
    @for (breed of entityPage()?.Breeds; track breed) {
    <div class=" mt-3 ">
      <div class="bg-secondary-100 w-full rounded-full px-4 py-2.5">
        {{ breed.Name }}
      </div>
      @for (competitor of breed.BreedCompetitors; track competitor) {
      <div
        class="mt-4 grid w-full items-center gap-3 px-4 pb-2"
        [ngClass]="{
              'result-grid-full': fullscreen(),
              'result-grid': !fullscreen(),
            }"
      >
        <div class="flex min-h-10 items-center">
          <bp-link
            [routerLink]="['/', competitor.Pet.Url]"
            [displayName]="competitor.Pet.Name"
            [entityRole]="'pet'"
          ></bp-link>
        </div>
        <span
          class="hidden"
          [ngClass]="{
                'lg:block': fullscreen(),
              }"
        >
          {{ competitor.Class.Name }}
        </span>
        <span
          class="hidden"
          [ngClass]="{
                'lg:block': fullscreen(),
              }"
        >
          {{ competitor.Number }}
        </span>
        <div class="flex items-center">
          <span>
            {{ competitor.Result }}
          </span>
        </div>

        <div
          class="hidden items-center"
          [ngClass]="{
                ' flex lg:block': fullscreen(),
              }"
        >
          <bp-link
            [routerLink]="['/', competitor.Judge.Url]"
            [displayName]="competitor.Judge.Name"
            [entityRole]="'judge'"
          ></bp-link>
        </div>
        <bp-external-link [text]="competitor.WebLink" />
      </div>
      }
    </div>
    }
  `,
})
export class EventResultsComponent {
  defaultOptions = {
    entityPage: injectEventPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
  fullscreen = injectFullscreen();
}
