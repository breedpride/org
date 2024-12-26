import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { LitterWithPlugins } from '@bh/types';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { VisibilityDirective } from '@breedpride/070-core-directive-feature';
import {
  DotComponent,
  NoteFlagComponent,
  PetServicesPluginComponent,
  TierMarkComponent,
} from '@breedpride/shared';
import { EntityListCardWrapperComponent } from '@breedpride/wrapper';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  imports: [
    CommonModule,
    EntityListCardWrapperComponent,
    // LitterAvatarPipe,
    TooltipModule,
    DotComponent,
    PetServicesPluginComponent,
    AngularSvgIconModule,
    NoteFlagComponent,
    TierMarkComponent,
    VisibilityDirective,
  ],
  selector: 'bp-litter-list-card',
  styles: [
    `
      svg {
        width: 12px;
        height: 12px;
        fill: rgb(var(--secondary-400));
      }
    `,
  ],
  template: `
    <bp-entity-list-card-wrapper [selected]="selected()">
      <!-- <div class="relative flex">
        <div
          class="outline-offset-2.5 flex-0 flex size-10 items-center justify-center overflow-hidden rounded-full border outline outline-2 outline-offset-2"
          [ngClass]="{
            'outline-primary-300': entity().HasUser,
            'outline-slate-300': !entity().HasUser
          }">
          @if (entity | litterAvatar) {
            <img
              class="size-full object-cover"
              [src]="entity | litterAvatar"
              alt="Contact avatar" />
          }
          @if (!(entity | litterAvatar)) {
            <div
              class="flex size-full items-center justify-center rounded-full bg-gray-200 text-lg uppercase text-gray-600 dark:bg-gray-700 dark:text-gray-200">
              {{ entity().Name?.charAt(0) }}
            </div>
          }
        </div>
        <div class="absolute z-10 flex size-11 items-end justify-end"></div>
      </div> -->
      <div class="w-full space-y-0.5">
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
          <bp-note-flag class="text-sm" [isVisible]="entity().HasNotes" />
        </div>
        <div class="flex items-center">
          <div
            class="text-secondary flex w-[calc(100vw-132px)]  space-x-1 truncate text-sm sm:w-[calc(100vw-106px)] md:w-auto"
          >
            <bp-dot
              [ngClass]="{ 'hidden ': !entity().Status?.Name }"
              [dotNeeded]="false"
              >{{ entity().Status?.Name }}</bp-dot
            >
            <bp-dot [ngClass]="{ 'hidden ': !entity().Kennel?.Name }">
              {{ entity().Kennel?.Name }}</bp-dot
            >
            <!-- <bp-dot [ngClass]="{ 'hidden ': !entity().Father?.Name }">
              <svg-icon name="male"></svg-icon
              >{{ entity().Father?.Name }}</bp-dot
            >
            <bp-dot [ngClass]="{ 'hidden ': !entity().Mother?.Name }"
              ><svg-icon name="female"></svg-icon
              >{{ entity().Mother?.Name }}</bp-dot
            > -->
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
export class LitterListCardComponent {
  selected = input<boolean>();
  entity = input.required<LitterWithPlugins>();
  i = input<number>();
}
