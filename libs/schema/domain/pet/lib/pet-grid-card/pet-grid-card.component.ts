import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicPetWithPlugins } from '@bh/types';
import { VisibilityDirective } from '@breedpride/070-core-directive-feature';
import { DateLocalePipe, PetAvatarPipe, ToDatePipe } from '@breedpride/pipes';
import {
  DotComponent,
  NoteFlagComponent,
  PetServicesPluginComponent,
  TierMarkComponent,
  VerificationComponent,
} from '@breedpride/shared';
import { EntityGridCardWrapperComponent } from '@breedpride/wrapper';
import { TooltipModule } from 'primeng/tooltip';
import { PetSexMarkComponent } from '../pet-sex-mark/pet-sex-mark.component';

@Component({
  imports: [
    CommonModule,
    RouterModule,
    PetAvatarPipe,
    ToDatePipe,
    DateLocalePipe,
    TooltipModule,
    PetSexMarkComponent,
    EntityGridCardWrapperComponent,
    TierMarkComponent,
    PetServicesPluginComponent,
    DotComponent,
    VerificationComponent,
    NoteFlagComponent,
    VisibilityDirective,
  ],
  selector: 'bp-pet-grid-card',
  styles: [],
  template: `
    <bp-entity-grid-card-wrapper class="group">
      <div
        class="relative flex h-[206px] justify-center overflow-hidden rounded-xl border border-surface-border"
      >
        <bp-tier-mark
          [tierMarks]="entity().TierMarks"
          mode="grid"
          class=" mt-3"
        />

        @if (entity() | petAvatar) {
        <img
          class="w-[100%] h-auto max-h-[200%] duration-300 group-hover:scale-110 absolute inset-0 m-auto"
          [src]="entity() | petAvatar"
          alt="Pet avatar"
        />
        }
      </div>
      <div class="w-full p-2">
        <div class="flex space-x-1.5">
          <div
            class="w-auto truncate"
            tooltipPosition="top"
            pTooltip="{{ entity().Name }}"
          >
            {{ entity().Name }}
          </div>
          <bp-verification
            [iconSize]="12"
            [verificationStatus]="entity().VerificationStatus"
            [tooltipIsNeeded]="false"
          />
          <bp-note-flag class="text-sm" [isVisible]="entity().HasNotes" />
        </div>
        <div class="flex">
          <bp-pet-sex-mark
            [sex]="entity().Sex?.Code"
            class="mr-2"
            [style]="'round'"
          />
          <div class="text-secondary flex space-x-1 truncate text-sm">
            <bp-dot
              [ngClass]="{ 'hidden ': !entity().PetStatus?.Name }"
              [dotNeeded]="false"
              >{{ entity().PetStatus?.Name }}</bp-dot
            >

            <bp-dot [ngClass]="{ 'hidden ': !entity().DateOfBirth }">{{
              entity().DateOfBirth | toDate | appDateLocale
            }}</bp-dot>
          </div>
          <!-- TODO!!!!! -->
          <bp-pet-services-plugin
            [petServices]="entity().Services"
            class="ml-auto"
          />
        </div>
      </div>
    </bp-entity-grid-card-wrapper>
  `,
})
export class PetGridCardComponent {
  entity = input.required<PublicPetWithPlugins>();
  i = input<number>();
}
