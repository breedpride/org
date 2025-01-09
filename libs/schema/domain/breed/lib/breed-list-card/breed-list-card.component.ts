import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { BreedWithPlugins } from '@bh/types';
import { VisibilityDirective } from '@breedpride/070-core-directive-feature';
import { BreedAvatarPipe } from '@breedpride/pipes';
import { DotComponent, NoteFlagComponent } from '@breedpride/shared';
import { EntityListCardWrapperComponent } from '@breedpride/wrapper';
import { TooltipModule } from 'primeng/tooltip';
import { BreedElementTopPatronsComponent } from '../breed-element-top-patrons/breed-element-top-patrons.component';
import { BreedProgressLightComponent } from '../breed-progress-ligh/breed-progress-ligh.component';

@Component({
  imports: [
    CommonModule,
    BreedAvatarPipe,
    TooltipModule,
    EntityListCardWrapperComponent,
    DotComponent,
    BreedProgressLightComponent,
    BreedElementTopPatronsComponent,
    NoteFlagComponent,
    VisibilityDirective,
  ],
  selector: 'bp-breed-list-card',
  styles: [],
  template: `
    <bp-entity-list-card-wrapper [selected]="selected()">
      <div
        class="
          outline-offset-2.5 flex-0 flex size-10 items-center justify-center
          overflow-hidden rounded-full border border-surface-border outline outline-2 outline-offset-2
        "
        [ngClass]="{
          'outline-primary-300 dark:outline-primary-400': entity().PatronCount > 0,
          'outline-surface-300 dark:outline-surface-400': entity().PatronCount === 0,
        }"
      >
        @if (entity() | breedAvatar) {
        <img
          class="size-full object-cover"
          [src]="entity() | breedAvatar"
          alt="Contact avatar"
        />
        } @if (!(entity() | breedAvatar)) {
        <div
          class="
              flex size-full items-center justify-center rounded-full
              bg-gray-200 text-lg uppercase text-gray-600
              dark:bg-gray-700 dark:text-gray-200
            "
        >
          {{ entity().Name?.charAt(0) }}
        </div>
        }
      </div>
      <div class="ml-4 w-full space-y-0.5">
        <div
          class="
            flex w-[calc(100vw-160px)] space-x-1
            md:w-auto
            sm:w-[calc(100vw-106px)]
          "
        >
          <span
            class="truncate"
            [pTooltip]="entity().Name"
            tooltipPosition="top"
          >
            {{ entity().Name }}
          </span>
          <bp-note-flag [isVisible]="entity().HasNotes" class="text-sm" />
        </div>
        <div class="flex items-center">
          <div class="text-secondary flex space-x-1 truncate text-sm">
            <bp-dot
              [ngClass]="{ 'hidden ': !entity().PetProfileCount }"
              [dotNeeded]="false"
            >
              Pet profiles - {{ entity().PetProfileCount }}
            </bp-dot>
            <span
              class="
              hidden
              sm:block
            "
            >
              <bp-dot [ngClass]="{ 'hidden ': !entity().KennelCount }"
                >Kennels - {{ entity().KennelCount }}</bp-dot
              >
            </span>
            <bp-dot>Patrons - {{ entity().PatronCount }}</bp-dot>
          </div>
          <bp-breed-progress-light [breed]="entity()" class="ml-auto" />
        </div>
      </div>

      <bp-breed-element-top-patrons
        [topPatrons]="entity().TopPatrons"
        class="absolute top-3 right-0"
      />
    </bp-entity-list-card-wrapper>
  `,
})
export class BreedListCardComponent {
  selected = input<boolean>();
  entity = input.required<BreedWithPlugins>();
  i = input<number>();
}
