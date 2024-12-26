import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Project } from '@bh/entity/config';
import { VisibilityDirective } from '@breedpride/070-core-directive-feature';
import { DateLocalePipe, ToDatePipe } from '@breedpride/pipes';
import { DotComponent, NoteFlagComponent } from '@breedpride/shared';
import { EntityListCardWrapperComponent } from '@breedpride/wrapper';

import { TooltipModule } from 'primeng/tooltip';

@Component({
  imports: [
    CommonModule,
    RouterModule,
    // PetAvatarPipe,
    ToDatePipe,
    DateLocalePipe,
    TooltipModule,
    // LetDirective,
    EntityListCardWrapperComponent,
    DotComponent,
    NoteFlagComponent,
    VisibilityDirective,
  ],
  selector: 'bp-event-list-card',
  styles: [],
  template: `
    <bp-entity-list-card-wrapper [selected]="selected()">
      <!-- <div>
        <ng-container *ngIf="entity | petAvatar">
          <img
            class="h-full w-full object-cover"
            [src]="entity | petAvatar"
            alt="Contact avatar" />
        </ng-container>
        <ng-container *ngIf="!(entity | petAvatar)">
          <div
            class="flex h-full w-full items-center justify-center rounded-full bg-gray-200 text-lg uppercase text-gray-600 dark:bg-gray-700 dark:text-gray-200">
            {{ entity.Name.charAt(0) }}
          </div>
        </ng-container>
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
          <bp-note-flag class=" text-sm " [isVisible]="entity().HasNotes" />
        </div>
        <div class="text-secondary flex space-x-1 text-sm">
          <bp-dot
            [ngClass]="{ 'hidden ': !entity().Event?.StartDate }"
            [dotNeeded]="false"
            >{{ entity().Event?.StartDate | toDate | appDateLocale }}</bp-dot
          >
          <bp-dot [ngClass]="{ 'hidden ': !entity().Status?.Name }">{{
            entity().Status?.Name
          }}</bp-dot>
          <!-- <bp-dot [ngClass]="{ 'hidden ': !entity().Event?.Country?.Name }">{{
            entity().Event?.Country?.Name
          }}</bp-dot> -->
        </div>
      </div>
    </bp-entity-list-card-wrapper>
  `,
})
export class EventListCardComponent {
  entity = input.required<Project & { HasNotes: boolean }>();
  i = input<number>();
  selected = input<boolean>();
}
