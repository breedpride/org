import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FeatureComponent } from '../feature/feature.component';
import { PublicProductService } from './types';

@Component({
  imports: [CommonModule, FeatureComponent],
  selector: 'bp-feature-block',
  styles: [],
  template: `<div class="flex flex-col">
    <div
      class=" rounded-full px-5 py-3 text-xl font-bold uppercase"
      [ngStyle]="{
        background: service()?.Description,
      }"
    >
      {{ service()?.Name }}
    </div>
    <div class="mt-5 grid gap-10 py-5 md:grid-cols-2 lg:grid-cols-3">
      @for (feature of service()?.ConfItems; track feature) {
      <bp-feature
        [iconName]="feature?.InventoryNumber"
        bgColor="{{ service()?.Description }}"
        [featureName]="feature.Name"
        [featureDescription]="feature.Description"
        [featureStatus]="feature.Status"
      />
      }
    </div>
  </div>`,
})
export class FeatureBlockComponent {
  service = input<PublicProductService>();
}
