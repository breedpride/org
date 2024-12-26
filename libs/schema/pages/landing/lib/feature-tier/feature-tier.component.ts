import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ITier } from '@bp/core/consts';

@Component({
  imports: [CommonModule],
  selector: 'bp-feature-tier',
  styles: [],
  template: `
    @if (featureTier()) { @if (!featureTier().length) {
    <div class="item">
      <i class="pi pi-check text-accent-400 font-bold"></i>
    </div>
    } @if (featureTier().length > 0) {
    <div class="item">
      {{ featureTier() }}
      <!-- <i class="pi pi-check font-bold text-accent-400"></i> -->
    </div>
    } } @if (!featureTier()) {
    <div class="item">
      <i class="pi pi-minus text-secondary-400 font-bold"></i>
    </div>
    }
  `,
})
export class FeatureTierComponent {
  featureTier = input.required<ITier[]>();
}
