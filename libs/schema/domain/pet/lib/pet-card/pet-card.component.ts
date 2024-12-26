import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { PublicPet } from '@bh/types';
import { LinkComponent } from '@breedpride/link';
import { DateYearPipe, PetAvatarPipe } from '@breedpride/pipes';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TooltipModule } from 'primeng/tooltip';
import { PetSexMarkComponent } from '../pet-sex-mark/pet-sex-mark.component';

@Component({
  imports: [
    CommonModule,
    PetSexMarkComponent,
    AngularSvgIconModule,
    PetAvatarPipe,
    LinkComponent,
    TooltipModule,
    DateYearPipe,
  ],
  selector: 'bp-pet-card',
  styles: [
    `
      .box-four-rows {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
      }
      .info-grid {
        grid-template-columns: 44px auto;
      }
      svg {
        width: 16px;
        height: 16px;
        fill: rgb(var(--secondary-400));
      }
    `,
  ],
  template: `
    <div
      class=" card flex flex-col items-center justify-center px-6 py-3 sm:px-8 cursor-default caret-transparent"
    >
      <bp-pet-sex-mark
        [sex]="pet().Sex?.Code"
        [style]="'horizontal'"
        class="mb-4 w-36 sm:w-44"
      />
      <div class="flex h-auto flex-col items-center justify-center">
        <div
          class="flex size-36 items-center justify-center overflow-hidden rounded-xl border border-surface-border sm:size-44"
        >
          <img
            class="h-[100%] w-auto max-w-[150%]"
            src="{{ pet() | petAvatar }}"
            alt="Card cover image"
          />
        </div>
        <div
          class="my-3 flex min-h-12 w-48 items-center  justify-center text-center font-semibold md:w-52"
        >
          <bp-link
            pTooltip="{{ pet().Name }}"
            tooltipPosition="bottom"
            [routerLink]="['/', pet().Url]"
            [displayName]="pet().Name"
            [entityRole]="'pet'"
            [rows]="2"
          />
        </div>
        <div class=" flex w-full flex-col  border-t border-surface-border">
          <em class=" text-secondary mb-2 mt-3 text-center text-sm">
            {{ pet().CountryOfBirth?.Code }}
            {{ pet().DateOfBirth | dateYear }}
          </em>

          <div class=" h-30 flex items-start overflow-hidden text-base">
            <div class="items-start justify-start text-base">
              <div
                aria-label="pet titles"
                pTooltip=" {{ pet().TrimTitles }}"
                tooltipPosition="bottom"
                class="box-four-rows text-center leading-[1.75rem]"
              >
                {{ pet().TrimTitles }}
              </div>

              @if (!pet().TrimTitles && mode() === 'default') {
              <div class="info-grid grid w-full gap-y-3">
                <span class="text-secondary ">Father</span>
                <bp-link
                  [routerLink]="['/', pet().Father?.Url]"
                  [displayName]="pet().Father?.Name"
                  [entityRole]="'pet'"
                  [rows]="2"
                ></bp-link>
                <span class="text-secondary ">Mother</span>
                <bp-link
                  [routerLink]="['/', pet().Mother?.Url]"
                  [displayName]="pet().Mother?.Name"
                  entityRole="pet"
                  [rows]="2"
                ></bp-link>
              </div>
              }
            </div>

            @if (!pet().TrimTitles && mode() === 'litter') {
            <div class="info-grid grid w-full gap-y-3">
              <span class="text-secondary ">Breed</span>

              <bp-link
                [routerLink]="['/', pet().Breed?.Url]"
                [displayName]="pet().Breed?.Name"
                [entityRole]="'breed'"
              />
              <span class="text-secondary ">Status</span>
              <span>{{ pet().PetStatus?.Name }}</span>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  `
})
export class PetCardComponent {
  pet = input.required<PublicPet>();
  mode = input<string>('default');
}
