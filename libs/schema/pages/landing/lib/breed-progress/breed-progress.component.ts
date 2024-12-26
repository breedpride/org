import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Breed } from '@bh/entity/config';
import { RatingModule } from 'primeng/rating';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  imports: [CommonModule, TooltipModule, RatingModule, FormsModule],
  selector: 'bp-breed-progress',
  styles: [],
  template: `
    <div
      class="flex w-full items-center py-0.5"
      [pTooltip]="toolTip()"
      tooltipPosition="top"
      [ngClass]="{
        'flex-col': mode() === 'row',
      }"
    >
      <div class="mr-2">
        @if (mode() === 'col') {
        <div class="lg:w-62 w-40  text-right  sm:w-52">
          {{ breed().Name }}
        </div>
        } @if (!simpleView()) {
        <div class="text-secondary text-md text-end">
          Pet profiles: {{ breed().PetProfileCount }}
        </div>
        }
      </div>
      @if (mode() === 'row') {
      <div class="flex w-full">
        <div class="flex w-full truncate ">
          {{ breed().Name }}
        </div>

        <div class=" w-13 text-end">{{ breed().AchievementProgress }}%</div>
      </div>
      }

      <div class="flex w-full items-center">
        <div
          class="from-primary-300 flex h-4 w-full items-center rounded-full bg-gradient-to-r via-pink-300 to-orange-300"
        >
          <div
            class="mx-1 flex h-2 w-full items-center rounded-full bg-white ring-2 ring-white ring-offset-0"
          >
            <div
              class="from-primary-400 my-auto h-2 rounded-full bg-gradient-to-r via-pink-400 to-orange-400"
              [ngStyle]="{
                width: breed().AchievementProgress + '%',
              }"
            ></div>
          </div>
        </div>
        @if (mode() === 'col') {
        <div class="ml-2">
          <div class="w-13 ">{{ breed().AchievementProgress }}%</div>
          @if (!simpleView()) {
          <div class="text-secondary text-md w-32">
            {{ breed().LastAchievement.Name }}
          </div>
          }
        </div>
        }
      </div>
    </div>
  `,
})
export class BreedProgressComponent {
  breed = input.required<Breed & { LastAchievement: { Name: string } }>();
  mode = input<string>('col');
  simpleView = input<boolean>(true);
  toolTip = computed(
    () =>
      this.breed().Name +
      '\n' +
      ' Pet profiles - ' +
      this.breed().PetProfileCount +
      '\n' +
      ' Kennels - ' +
      this.breed().KennelCount +
      '\n' +
      ' Patrons - ' +
      this.breed().PatronCount +
      '\n' +
      "Breed's support level - " +
      this.breed()?.['LastAchievement']?.Name
  );
}
