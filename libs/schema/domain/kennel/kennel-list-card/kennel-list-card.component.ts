import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicKennel } from '@bh/types';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { VisibilityDirective } from '@breedpride/070-core-directive-feature';
import { DateYearPipe, PetAvatarPipe } from '@breedpride/pipes';
import {
  DotComponent,
  NoteFlagComponent,
  PetServicesPluginComponent,
  TierMarkComponent,
  VerificationComponent,
} from '@breedpride/shared';
import { EntityListCardWrapperComponent } from '@breedpride/wrapper';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  imports: [
    CommonModule,
    RouterModule,
    PetAvatarPipe,
    TooltipModule,
    EntityListCardWrapperComponent,
    AngularSvgIconModule,
    VerificationComponent,
    DateYearPipe,
    DotComponent,
    PetServicesPluginComponent,
    TierMarkComponent,
    NoteFlagComponent,
    VisibilityDirective,
  ],
  selector: 'bp-kennel-list-card',
  styles: [],
  template: `
    <bp-entity-list-card-wrapper [selected]="selected()">
      <div class="relative flex">
        <div
          class="outline-offset-2.5 flex-0 flex size-10 items-center justify-center overflow-hidden rounded-full border border-surface-border outline outline-2 outline-offset-2"
          [ngClass]="{
            'outline-primary-300': entity().HasUser,
            'outline-surface-300': !entity().HasUser,
          }"
        >
          @if (entity() | petAvatar) {
          <img
            class="size-full object-cover"
            [src]="entity() | petAvatar"
            alt="Contact avatar"
          />
          } @if (!(entity() | petAvatar)) {
          <div
            class="flex size-full items-center justify-center rounded-full bg-gray-200 text-lg uppercase text-gray-600 dark:bg-gray-700 dark:text-gray-200"
          >
            {{ entity().Name?.charAt(0) }}
          </div>
          }
        </div>
        <bp-verification
          class="absolute z-10 -bottom-[0.24rem] -right-[0.24rem]"
          [iconSize]="12"
          [verificationStatus]="entity().VerificationStatus"
          [tooltipIsNeeded]="false"
        />
      </div>
      <div class="ml-4 w-full space-y-0.5">
        <div
          class="flex w-[calc(100vw-160px)] space-x-1  sm:w-[calc(100vw-106px)] md:w-auto"
        >
          <span
            class="truncate"
            [pTooltip]="entity().Name"
            tooltipPosition="top"
          >
            {{ entity().Name }}
          </span>
          <bp-note-flag class=" text-sm " [isVisible]="entity().HasNotes" />
        </div>

        <div class="flex items-center">
          <div class="text-secondary flex space-x-1 truncate text-sm">
            <bp-dot
              [ngClass]="{ 'hidden ': !entity().Owner?.Name }"
              [dotNeeded]="false"
              >{{ entity().Owner?.Name }}</bp-dot
            >

            <bp-dot
              [ngClass]="{ 'hidden ': !entity().Federation?.AlternativeName }"
              >{{ entity().Federation?.AlternativeName }}</bp-dot
            >
            <!-- <bp-dot [ngClass]="{ 'hidden ': !entity().Country?.Name }">{{
              entity().Country?.Name
            }}</bp-dot> -->
            <bp-dot
              class=" hidden sm:block"
              [ngClass]="{ 'sm:hidden ': !entity().CompanyFoundationDate }"
            >
              Since {{ entity().CompanyFoundationDate | dateYear }}</bp-dot
            >
          </div>
          <bp-pet-services-plugin
            [petServices]="entity().Services"
            class="ml-auto"
          />
        </div>
      </div>
      <bp-tier-mark
        [tierMarks]="entity().TierMarks"
        class="absolute top-3 right-0"
      />
    </bp-entity-list-card-wrapper>
  `,
})
export class KennelListCardComponent {
  selected = input<boolean>();
  entity = input.required<PublicKennel>();
  i = input<number>();
}
