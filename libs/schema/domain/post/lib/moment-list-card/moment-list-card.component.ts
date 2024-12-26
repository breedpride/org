import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { LetDirective } from '@ngrx/component';
// import { DateLocalePipe, ToDatePipe } from '@breedpride/pipes';
import { EntityListCardWrapperComponent } from '@breedpride/wrapper';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  imports: [
    CommonModule,
    RouterModule,
    // ToDatePipe,
    // DateLocalePipe,
    TooltipModule,
    // LetDirective,
    EntityListCardWrapperComponent,
  ],
  selector: 'bp-moment-list-card',
  styles: [],
  template: `
    <bp-entity-list-card-wrapper [selected]="selected()">
      <div
        class="outline-offset-2.5 flex-0 flex size-10 items-center justify-center overflow-hidden rounded-full border outline outline-2 outline-offset-2 outline-slate-300"
      >
        <!-- <ng-container *ngIf="entity | petAvatar">
            <img
              class="h-full w-full object-cover"
              [src]="entity | petAvatar"
              alt="Contact avatar" />
          </ng-container> -->
        <!-- <ng-container *ngIf="!(entity | petAvatar)">
            <div
              class="flex h-full w-full items-center justify-center rounded-full bg-gray-200 text-lg uppercase text-gray-600 dark:bg-gray-700 dark:text-gray-200">
              {{ entity.Name.charAt(0) }}
            </div>
          </ng-container> -->
      </div>
      <div class="ml-4 w-full">
        <div class="w-auto truncate" pTooltip="{{ entity().Name }}">
          {{ entity | json }}
        </div>
        <!-- <div class="flex space-x-1 truncate text-sm text-secondary">
            {{ entity.PetStatus?.Name }}
            <span
              *ngIf="!!entity.DateOfBirth"
              class="ml-1">
              &bull;
              {{ entity.DateOfBirth | toDate | appDateLocale }}
            </span>
          </div> -->
      </div>
    </bp-entity-list-card-wrapper>
  `,
})
export class MomentListCardComponent {
  selected = input<boolean>();
  entity = input.required<any>();
  i = input<number>();
}
