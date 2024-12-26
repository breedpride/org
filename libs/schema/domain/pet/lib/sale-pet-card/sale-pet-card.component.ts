import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PublicPet } from '@bh/types';
import { LinkComponent } from '@breedpride/link';
import { DateYearPipe, PetAvatarPipe } from '@breedpride/pipes';
import { AngularSvgIconModule } from 'angular-svg-icon';
// import { PetServicesPluginComponent } from '@breedpride/shared';
import { TooltipModule } from 'primeng/tooltip';
import { PetSexMarkComponent } from '../pet-sex-mark/pet-sex-mark.component';
import { ServiceFeaturesComponent } from '../service-features/service-features.component';

@Component({
  imports: [
    CommonModule,
    AngularSvgIconModule,
    PetSexMarkComponent,
    // DateLocalePipe,
    PetAvatarPipe,
    LinkComponent,
    DateYearPipe,
    // PetServicesPluginComponent,
    ServiceFeaturesComponent,
    TooltipModule,
  ],
  selector: 'bp-sale-pet-card',
  styles: [``],
  template: `
    <div class="card flex w-full flex-auto flex-col items-center p-6 md:px-8 cursor-default caret-transparent">
      <!-- Pet info -->
      <div class="text-s mb-2 flex w-full">
        <bp-link
          [routerLink]="['/', pet().Breed?.Url]"
          [displayName]="pet().Breed?.Name"
          [entityRole]="'breed'"
        ></bp-link>
        <!-- TODO !!!!! -->
        <!-- TODO !!!!! -->
        <!-- <div class="ml-auto ">
          <bp-pet-services-plugin [petServices]="pet().Services" />
        </div> -->
      </div>
      <div
        class="h-45 w-45 flex items-center justify-center overflow-hidden rounded-xl border border-surface-border lg:size-56"
      >
        <img
          class="h-[100%] w-auto max-w-[150%]"
          src="{{ pet() | petAvatar }}"
          alt="Card cover image"
        />
      </div>
      <div
        class=" mb-2 mt-3 flex min-h-12 w-full items-center justify-center space-x-3"
      >
        @if (pet().Sex) {
        <bp-pet-sex-mark
          [sex]="pet().Sex?.Code"
          [style]="'round'"
        ></bp-pet-sex-mark>
        }
        <bp-link
          [routerLink]="['/', pet().Url]"
          [displayName]="pet().Name"
          [entityRole]="'pet'"
        ></bp-link>
      </div>
      <div
        class="text-secondary mb-3 mt-1 flex w-full justify-center border-t border-surface-border pt-3"
      >
        <em class=" text-secondary mb-1 text-center text-sm">
          {{ pet().CountryOfBirth?.Code }}
          {{ pet().DateOfBirth | dateYear }}</em
        >
      </div>
      <!-- Characteristics -->
      <bp-service-features
        [ServiceFeatures]="pet().ServiceFeatures"
        class="mb-6"
      />

      <!-- Parents -->
      <div class="flex flex-row gap-3">
        <div class="flex flex-col items-center">
          <div class="w-30 lg:w-28">
            <div
              class="h-30 flex items-center justify-center overflow-hidden rounded-xl border border-surface-border lg:h-28"
            >
              <img
                class="h-[100%] w-auto max-w-[150%]"
                src="{{ pet() | petAvatar }}"
                alt="Card cover image"
              />
            </div>
            <em class="text-secondary text-sm">Father</em>
          </div>
          <div
            class="sm:w-38 w-34 flex min-h-14 items-center text-center text-base lg:w-40"
          >
            <bp-link
              [routerLink]="['/', pet().Father?.Url]"
              [displayName]="pet().Father?.Name"
              [entityRole]="'pet'"
            ></bp-link>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-30 lg:w-28">
            <div
              class="h-30 flex items-center justify-center overflow-hidden rounded-xl border border-surface-border lg:h-28"
            >
              <img
                class="h-[100%] w-auto max-w-[150%]"
                src="{{ pet() | petAvatar }}"
                alt="Card cover image"
              />
            </div>
            <em class="text-secondary text-sm">Mother</em>
          </div>
          <div
            class="sm:w-38 w-34 flex min-h-14 items-center text-center text-base lg:w-40"
          >
            <bp-link
              [routerLink]="['/', pet().Mother?.Url]"
              [displayName]="pet().Mother?.Name"
              [entityRole]="'pet'"
            ></bp-link>
          </div>
        </div>
      </div>
    </div>
  `
})
export class SalePetCardComponent {
  pet = input.required<PublicPet>();
}
