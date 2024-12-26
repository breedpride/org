import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { injectEventPage } from '@bh/page-store';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { LinkComponent } from '@breedpride/link';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DateLocalePipe, PetAvatarPipe, ToDatePipe } from '@breedpride/pipes';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  imports: [
    CommonModule,
    FieldsetModule,
    AngularSvgIconModule,
    LinkComponent,
    ToDatePipe,
    DateLocalePipe,
    PetAvatarPipe,
  ],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-event-info',
  styles: [
    `
      .info-grid {
        grid-template-columns: 16px 42px auto;
        /* grid-template-rows: 36px 36px; */

        @screen sm {
          grid-template-columns: 22px 60px auto;
        }
      }
      .judges-grid {
        grid-template-columns: 42px auto;

        @screen sm {
          grid-template-columns: 42px auto;
        }
      }

      svg {
        width: 16px;
        height: 16px;
        fill: rgb(var(--secondary-400));
      }
    `,
  ],
  template: `
    @let page = entityPage(); @if (page) {
    <div class="flex flex-col space-y-5">
      <p-fieldset legend="Info">
        <div
          class="flex flex-col"
          [ngClass]="{
          'lg:flex-row': fullscreen(),
        }"
        >
          <div class="info-grid grid w-full items-center gap-3 px-4 pb-2">
            <svg-icon name="cup"></svg-icon>
            <span class="text-secondary">Category</span>
            <span>{{ page.Category?.Name }}</span>

            <svg-icon name="calendar"></svg-icon>
            <span class="text-secondary">Date</span>
            <span>{{ page.StartDate | toDate | appDateLocale }}</span>
          </div>
          <p-divider
            layout="vertical"
            [ngClass]="{
            'lg:block': fullscreen(),
          }"
            class="hidden"
          ></p-divider>
          <div class="info-grid grid w-full items-center gap-3 px-4 pb-2">
            <svg-icon name="place"></svg-icon>
            <span class="text-secondary flex flex-row">Country</span>
            <span>{{ page.Country?.Name }}</span>
            <svg-icon name="status"></svg-icon>
            <span class="text-secondary flex flex-row">Status</span>
            <span>{{ page.Status?.Name }}</span>
          </div>
        </div>
      </p-fieldset>
      <p-fieldset legend="Judges">
        @if (page.Judges.length > 0) {
        <div class="judges-grid grid w-full items-center gap-5 px-4 pb-2 ">
          @for (judge of page.Judges; track judge) {
          <div
            class="outline-offset-2.5 flex-0 flex size-10 items-center justify-center overflow-hidden rounded-full border outline outline-2 outline-offset-2 outline-slate-300"
          >
            @if (judge | petAvatar) {
            <img
              class="size-full object-cover"
              [src]="judge | petAvatar"
              alt="Contact avatar"
            />
            } @if (!(judge | petAvatar)) {
            <div
              class="flex size-full items-center justify-center rounded-full bg-gray-200 text-lg uppercase text-gray-600 dark:bg-gray-700 dark:text-gray-200"
            >
              {{ judge.Name.charAt(0) }}
            </div>
            }
          </div>
          <bp-link
            [routerLink]="['/', judge.Url]"
            [displayName]="judge.Name"
            [entityRole]="'judge'"
          ></bp-link>
          }
        </div>
        }
      </p-fieldset>
    </div>
    }
  `,
})
export class EventInfoComponent {
  defaultOptions = {
    entityPage: injectEventPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
  fullscreen = injectFullscreen();
}
