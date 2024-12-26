import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { LinkComponent } from '@breedpride/link';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DateLocalePipe, ToDatePipe } from '@breedpride/pipes';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { FieldsetModule } from 'primeng/fieldset';
import { injectLitterPage } from '@bh/page-store';

@Component({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    FieldsetModule,
    LinkComponent,
    ToDatePipe,
    DateLocalePipe,
  ],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-litter-info',
  styles: [
    `
      .info-grid {
        grid-template-columns: 16px 42px auto;

        @screen sm {
          grid-template-columns: 22px 60px auto;
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
      <!-- Birth details -->
      <p-fieldset legend="Birth details">
        <div
          class="flex flex-col"
          [ngClass]="{
          'lg:flex-row': fullscreen(),
        }"
        >
          <div class="info-grid grid w-full items-center gap-3 px-4 pb-2">
            <svg-icon name="male"></svg-icon>
            <span class="text-secondary">Father</span>
            <bp-link
              [routerLink]="['/', page.Father?.Url]"
              [displayName]="page.Father?.Name"
              [entityRole]="'pet'"
            ></bp-link>
            <svg-icon name="female"></svg-icon>
            <span class="text-secondary">Mother</span>

            <bp-link
              [routerLink]="['/', page.Mother?.Url]"
              [displayName]="page.Mother?.Name"
              [entityRole]="'pet'"
            ></bp-link>
          </div>
          <p-divider
            styleClass=" border-[0.5px] border-secondary-200"
            layout="vertical"
            [ngClass]="{
            'lg:block': fullscreen(),
          }"
            class="hidden"
          ></p-divider>
          <div class="info-grid grid w-full items-center gap-3 px-4 pb-2">
            @if (!!page.DateOfBirth) {
            <svg-icon name="calendar"></svg-icon>
            <span class="text-secondary flex flex-row">DOB</span>
            <span>
              {{ page.DateOfBirth | toDate | appDateLocale }}
            </span>
            }
          </div>
        </div>
      </p-fieldset>

      <!-- Origin and Ownership -->
      <p-fieldset legend="Origin and Ownership">
        <div
          class="flex flex-col"
          [ngClass]="{
          'md:flex-row': fullscreen(),
        }"
        >
          <div class="info-grid grid w-full items-center gap-3 px-4 pb-2">
            <svg-icon name="breeder"></svg-icon>
            <span class="text-secondary">Breeder</span>
            <bp-link
              [routerLink]="['/', page.Breeder?.Url]"
              [displayName]="page.Breeder?.Name"
              [entityRole]="'breeder'"
            ></bp-link>
            <svg-icon name="kennel"></svg-icon>

            <span class="text-secondary">Kennel</span>

            <bp-link
              [routerLink]="['/', page.Kennel?.Url]"
              [displayName]="page.Kennel?.Name"
              [entityRole]="'breederKennel'"
            ></bp-link>

            <svg-icon name="place"></svg-icon>

            <span class="text-secondary flex flex-row">Country</span>

            <!-- <span>{{ entityPage.Country.Name }}</span> -->
          </div>
        </div>
      </p-fieldset>

      <!-- Additional data -->
      <p-fieldset legend="Additional data" class="">
        <div
          class="grid items-center gap-3 px-4 pb-2"
          [ngClass]="{
          'md:grid-cols-2': fullscreen(),
        }"
        >
          <div class="info-grid grid items-center gap-3">
            <svg-icon name="status"></svg-icon>
            <div class="text-secondary flex flex-row">Status</div>
            <div>{{ page.Status?.Name }}</div>
            @if (!!page.MaleAmount) {
            <svg-icon name="male"></svg-icon>
            <div class="text-secondary flex flex-row">Males</div>
            <div>{{ page.MaleAmount }}</div>
            } @if (!!page.FemaleAmount) {
            <svg-icon name="female"></svg-icon>
            <div class="text-secondary flex flex-row">Females</div>
            <div>{{ page.FemaleAmount }}</div>
            }
          </div>
        </div>
      </p-fieldset>
    </div>
    }
  `,
})
export class LitterInfoComponent {
  defaultOptions = {
    entityPage: injectLitterPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });
  entityPage = this.options().entityPage;
  fullscreen = injectFullscreen();
}
