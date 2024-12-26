import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicPetWithPlugins } from '@bh/types';
import { DateLocalePipe, ToDatePipe } from '@breedpride/pipes';
import {
  DotComponent,
  NoteFlagComponent,
  PetServicesPluginComponent,
  TierMarkComponent,
  VerificationComponent,
} from '@breedpride/shared';
import { EntityListCardWrapperComponent } from '@breedpride/wrapper';
import { TooltipModule } from 'primeng/tooltip';
import { PetAvatarSmallComponent } from '../pet-avatar-small.component';

@Component({
  selector: 'bp-pet-list-card',
  styles: [],
  template: `
    <bp-entity-list-card-wrapper [selected]="selected()">
      <div class="relative flex">
        <bp-pet-avatar-small [entity]="entity()" />
        <bp-verification
          class="absolute z-10 -bottom-[0.24rem] -right-[0.24rem]"
          [iconSize]="12"
          [verificationStatus]="entity().VerificationStatus"
          [tooltipIsNeeded]="false"
        />
      </div>
      <div class="ml-4 w-full space-y-0.5">
        <div class="relative flex  w-[calc(100vw-122px)] space-x-1 md:w-auto">
          <span
            class="truncate"
            [pTooltip]="entity().Name"
            tooltipPosition="top"
          >
            {{ entity().Name }}
          </span>
          <bp-note-flag [isVisible]="entity().HasNotes" />
        </div>
        <div class="flex items-center">
          <div class="text-secondary flex space-x-1 truncate text-sm">
            <bp-dot
              [ngClass]="{ 'hidden ': !entity().PetStatus?.Name }"
              [dotNeeded]="false"
              >{{ entity().PetStatus?.Name }}</bp-dot
            >

            <bp-dot [ngClass]="{ 'hidden ': !entity().DateOfBirth }">{{
              entity().DateOfBirth | toDate | appDateLocale
            }}</bp-dot>
            <bp-dot
              [ngClass]="{ 'sm:hidden ': !entity().COI }"
              class=" hidden sm:block"
              >COI - {{ entity().COI }}</bp-dot
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
  imports: [
    CommonModule,
    RouterModule,
    ToDatePipe,
    DateLocalePipe,
    TooltipModule,
    EntityListCardWrapperComponent,
    DotComponent,
    PetServicesPluginComponent,
    TierMarkComponent,
    VerificationComponent,
    NoteFlagComponent,
    PetAvatarSmallComponent,
  ],
})
export class PetListCardComponent {
  selected = input<boolean>();
  entity = input.required<PublicPetWithPlugins>();
  i = input<number>();
}
