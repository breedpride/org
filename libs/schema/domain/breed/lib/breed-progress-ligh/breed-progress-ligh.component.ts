import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  input,
} from '@angular/core';
import { BreedWithPlugins } from '@bh/types';
import { TooltipModule } from 'primeng/tooltip';

function findElementWithMaxPosition(arr: any[] | undefined) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null; // Return null for invalid or empty arrays
  }

  return arr.reduce((maxElement, currentElement) => {
    if (
      !maxElement ||
      currentElement.Achievement?.Position > maxElement?.Achievement?.Position
    ) {
      return currentElement;
    }
    return maxElement;
  }, null);
}
@Component({
  imports: [CommonModule, TooltipModule],
  selector: 'bp-breed-progress-light',
  styles: [],
  template: `
    @if (breed().AchievementProgress > 0) {
    <div
      class="
          border-primary flex h-[10px] w-24 items-center rounded-full border
        "
      [pTooltip]="toolTip()"
      tooltipPosition="bottom"
    >
      <div
        class="bg-primary mx-0.5 my-auto h-1.5 rounded-full"
        [ngStyle]="{
            width: breed().AchievementProgress + '%',
          }"
      ></div>
    </div>
    }
  `,
})
export class BreedProgressLightComponent {
  breed = input.required<BreedWithPlugins>();
  toolTip = computed(() => {
    const LastAchievement = findElementWithMaxPosition(
      this.breed().Achievements
    );
    return LastAchievement?.Achievement?.Name;
  });
}
