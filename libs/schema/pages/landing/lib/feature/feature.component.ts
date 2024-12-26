import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BadgeModule } from 'primeng/badge';

export type FeatureStatus = {
  Id: string;
  Name: string;
  Url: string;
};

@Component({
  imports: [CommonModule, AngularSvgIconModule, BadgeModule],
  selector: 'bp-feature',
  styles: [
    `
      svg {
        width: 20px;
        height: 20px;
        fill: rgb(255 255 255);
      }
    `,
  ],
  template: `
    <div class="flex space-x-4">
      <div
        class="flex size-12 min-w-12 items-center justify-center rounded-full "
        [ngStyle]="{
          background: bgColor(),
        }"
      >
        <svg-icon name="{{ iconName() }}"></svg-icon>
      </div>
      <div class="space-y-1">
        <div class="text-lg font-semibold">{{ featureName() }}</div>
        @if (featureStatus().Name && featureStatus().Name === 'Coming soon') {
        <div
          class="max-w-28 rounded-full px-1.5 py-1 text-center text-sm font-bold uppercase text-white"
          [ngStyle]="{
              background: bgColor(),
            }"
        >
          Coming soon
        </div>
        }
        <div class="text-secondary">
          {{ featureDescription() }}
        </div>
      </div>
    </div>
  `,
})
export class FeatureComponent {
  iconName = input<string>();
  bgColor = input<string>();
  featureName = input<string>();
  featureDescription = input<string>();
  featureStatus = input.required<FeatureStatus>();
}
