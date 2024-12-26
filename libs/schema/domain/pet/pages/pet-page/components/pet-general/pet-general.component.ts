import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { injectPetPage } from '@bh/page-store';
import { ScrollableTabDirective } from '@bp/core/scrollable-tab';
import { injectFullscreen } from '@breedpride/fullscreen-ui';
import { LinkComponent } from '@breedpride/link';
import { DateLocalePipe, ToDatePipe } from '@breedpride/pipes';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { mergeInputs } from 'ngxtension/inject-inputs';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';

@Component({

  imports: [
    CommonModule,
    AngularSvgIconModule,
    FieldsetModule,
    ToDatePipe,
    DateLocalePipe,
    DividerModule,
    RouterModule,
    LinkComponent,
  ],
  hostDirectives: [ScrollableTabDirective],
  selector: 'bp-pet-general',
  styles: [
    `
      .info-grid {
        grid-template-columns: 16px 42px auto;
        /* grid-template-rows: 36px 36px; */

        @screen sm {
          grid-template-columns: 22px 60px auto;
        }
      }

      svg {
        width: 16px;
        height: 16px;
        fill: rgb(var(--secondary-400));
      }
      :host ::ng-deep {
        .p-fieldset-legend {
          background: none;
          border-style: none;
        }
      }
    `,
  ],
  template: `
    @let page = entityPage(); @if (page) {
    <div class="flex flex-col space-y-5 cursor-default caret-transparent">
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
            layout="vertical"
            [ngClass]="{
              'lg:block': fullscreen(),
            }"
            class="hidden"
          ></p-divider>
          <div class="info-grid grid w-full items-center gap-3 px-4 pb-2">
            <svg-icon name="sex"></svg-icon>
            <span class="text-secondary">Sex</span>
            <span>{{ page.Sex?.Name }}</span>
            <svg-icon name="calendar"></svg-icon>
            <span class="text-secondary flex flex-row">DOB</span>
            <span>
              {{ page?.DateOfBirth | toDate | appDateLocale }}
            </span>
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
            <div class="flex flex-col">
              <span class="text-secondary">Kennel</span>
              <span class="text-secondary text-sm">breeder</span>
            </div>
            <bp-link
              [routerLink]="['/', page.Kennel?.Url]"
              [displayName]="page.Kennel?.Name"
              [entityRole]="'breederKennel'"
            ></bp-link>

            <svg-icon name="place"></svg-icon>
            <div class="flex flex-col">
              <span class="text-secondary flex flex-row">Country</span>
              <span class="text-secondary text-sm">of birth</span>
            </div>
            <span>{{ page.CountryOfBirth?.Name }}</span>
          </div>
          <p-divider
            layout="vertical"
            [ngClass]="{
              'md:block': fullscreen(),
            }"
            class="hidden"
          ></p-divider>
          <p-divider
            [ngClass]="{
              hidden: fullscreen(),
            }"
            class=""
          ></p-divider>
          <div class="info-grid grid w-full items-center gap-3 px-4 pb-2">
            <svg-icon name="owner"></svg-icon>
            <span class="text-secondary">Owner</span>
            <bp-link
              [routerLink]="['/', page.Owner?.Url]"
              [displayName]="page.Owner?.Name"
              [entityRole]="'owner'"
            ></bp-link>
            <svg-icon name="kennel-owner"></svg-icon>
            <div class="flex flex-col">
              <span class="text-secondary flex flex-row">Kennel</span>
              <span class="text-secondary text-sm">owner</span>
            </div>
            <bp-link
              [routerLink]="['/', page.OwnerKennel?.Url]"
              [displayName]="page.OwnerKennel?.Name"
              [entityRole]="'ownerKennel'"
            ></bp-link>

            <svg-icon name="place"></svg-icon>
            <div class="flex flex-col">
              <span class="text-secondary flex flex-row">Country</span>
              <span class="text-secondary text-sm">of stay</span>
            </div>
            <span>{{ page.CountryOfStay?.Name }}</span>
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
            <span class="text-secondary flex flex-row">Status</span>
            <span>{{ page.PetStatus?.Name }}</span>
          </div>
          <div class="info-grid grid items-center gap-3">
            <svg-icon name="coat-type"></svg-icon>
            <span class="text-secondary">Coat type</span>
            <span>{{ page.CoatType?.Name }}</span>
          </div>
          <div class="info-grid grid items-center gap-3">
            <svg-icon name="coat-color"></svg-icon>
            <span class="text-secondary">Coat color</span>
            <span>{{ page.CoatColor?.Name }}</span>
          </div>
          <div class="info-grid grid items-center gap-3">
            <svg-icon name="weight"></svg-icon>
            <span class="text-secondary">Weight</span>
            <span>{{ page?.Weight }}</span>
          </div>
        </div>
      </p-fieldset>
    </div>
    }
  `
})
export class PetGeneralComponent {
  fullscreen = injectFullscreen();
  defaultOptions = {
    entityPage: injectPetPage(),
  };
  public options = input(this.defaultOptions, {
    transform: mergeInputs(this.defaultOptions),
  });

  entityPage = this.options().entityPage;
}
