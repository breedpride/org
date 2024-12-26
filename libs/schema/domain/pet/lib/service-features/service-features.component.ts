import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ChipModule } from 'primeng/chip';

@Component({
  imports: [CommonModule, ChipModule],
  selector: 'bp-service-features',
  styles: [
    `
      :host ::ng-deep {
        .p-chip {
          background: rgb(var(--focus-card-ground)) !important;
          color: rgb(var(--secondary)) !important;
        }
        .p-chip .p-chip-text {
          margin-top: 0;
          margin-bottom: 0;
        }
      }
    `,
  ],
  template: `
    <div
      aria-label="service features"
      class="flex flex-wrap justify-center gap-2"
    >
      @for (feature of ServiceFeatures(); track feature) {
      <p-chip
        label="{{ feature.Name }}"
        class=" font-medium text-base dark:border dark:border-surface-border rounded-[16px]"
      ></p-chip>
      }
    </div>
  `,
})
export class ServiceFeaturesComponent {
  ServiceFeatures = input<{ Name: string }[]>();
}
