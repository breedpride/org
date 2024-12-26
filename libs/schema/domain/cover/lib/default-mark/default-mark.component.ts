import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  imports: [CommonModule, TooltipModule],
  selector: 'bp-default-mark',
  styles: ``,
  template: ` @if (isDefault()) {
    <div class="bg-primary absolute right-0 z-10 flex rounded-l-full">
      <div
        pTooltip="Is default cover"
        tooltipPosition="top"
        class="bg-primary flex items-center space-x-2 rounded-l-full px-3  py-1 text-xs font-bold uppercase  text-white"
      >
        <span> default </span>
      </div>
    </div>
    }`,
})
export class DefaultMarkComponent {
  isDefault = input<boolean | undefined>(false);
}
