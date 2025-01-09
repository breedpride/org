import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trackByFn } from '@bh/list';
import { BreedPatronage, PublicContact } from '@bh/types';
import { VisibilityDirective } from '@breedpride/070-core-directive-feature';
import { PatronPlaceComponent } from '@breedpride/avatar';
import { PetAvatarPipe } from '@breedpride/pipes';
import {
  DotComponent,
  NoteFlagComponent,
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
    DotComponent,
    NoteFlagComponent,
    VerificationComponent,
    TierMarkComponent,
    PatronPlaceComponent,
    VisibilityDirective,
  ],
  selector: 'bp-contact-list-card',
  styles: [],
  template: `
    <bp-entity-list-card-wrapper [selected]="selected()">
      <div class="relative flex">
        <div
          class="outline-offset-2.5 flex-0 flex size-10 items-center justify-center overflow-hidden rounded-full border border-surface-border outline outline-2 outline-offset-2"
          [ngClass]="{
            'outline-primary-300 dark:outline-primary-400': entity().HasUser,
            'outline-surface-300 dark:outline-surface-400': !entity().HasUser,
          }"
        >
          <ng-container *ngIf="entity() | petAvatar">
            <img
              class="size-full object-cover"
              [src]="entity() | petAvatar"
              alt="Contact avatar"
            />
          </ng-container>
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
            <!-- <bp-dot
              [ngClass]="{ 'hidden ': !entity.PetStatus?.Name }"
              [dotNeeded]="false"
              >{{ entity.PetStatus?.Name }}</bp-dot
            >

            <bp-dot [ngClass]="{ 'hidden ': !entity.DateOfBirth }">{{
              entity.DateOfBirth | toDate | appDateLocale
            }}</bp-dot> -->

            <bp-dot
              [ngClass]="{
                'hidden ': !entity().Career?.Breeder,
              }"
              [dotNeeded]="false"
            >
              Breeder</bp-dot
            >
            @if (entity().Career?.Breeder && entity().Career?.Judge) {
            <span class="mr-2">&bull;</span>
            }

            <bp-dot
              [dotNeeded]="false"
              [ngClass]="{ 'hidden ': !entity().Career?.Judge }"
              >Judge</bp-dot
            >
          </div>
          <div class="ml-auto flex space-x-1">
            @for ( patronage of entity().BreedPatronage; track trackByFn($index,
            patronage) ) {
            <bp-patron-place
              [iconName]="geticonName(patronage)"
              iconSize="16"
              [pTooltip]="getToolTip(patronage)"
              tooltipPosition="bottom"
              mode="simple"
            />
            }
          </div>
        </div>
      </div>
      <bp-tier-mark
        [tierMarks]="entity().TierMarks"
        class="absolute top-3 right-0"
      />
    </bp-entity-list-card-wrapper>
  `,
})
export class ContactListCardComponent {
  selected = input<boolean>();
  entity = input.required<PublicContact>();
  i = input<number>();
  trackByFn = trackByFn;
  getToolTip(patronage: BreedPatronage) {
    return patronage.Breed.Name + '\n' + patronage.Place + ' place patron';
  }
  geticonName(patronage: { Place: number }) {
    return 'place-' + patronage.Place;
  }
}
