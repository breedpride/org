import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'bp-major-point',
  styles: ``,
  template: `
    <div class="flex flex-col lg:flex-row lg:items-center">
      <div class=" w-30 lg:w-34 lg:border-r border-surface-border lg:p-3">
        <span class="text-lg font-bold uppercase  ">{{ name() }}</span>
        <div class="text-secondary hidden text-base lg:block">
          {{ secondaryName() }}
        </div>
      </div>
      <span class=" text-3xl font-semibold lg:p-3" [ngClass]="valueClass()">{{
        value()
      }}</span>
    </div>
  `,
})
export class MajorPointComponent {
  name = input<string>();
  secondaryName = input<string>();
  value = input<string>();
  valueClass = input<string>();
}
