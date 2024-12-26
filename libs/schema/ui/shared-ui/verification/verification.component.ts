import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  input,
} from '@angular/core';
import { VerificationStatus } from '@bh/entity/config';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { TooltipModule } from 'primeng/tooltip';

const VERIFIED_STATUS_ID = '13c697a5-4895-4ec8-856c-536b925fd54f';
const PRIMARY_COLOR = 'rgb(var(--primary))';
const SECONDARY_COLOR = 'rgb(var(--secondary-400))';

@Component({
  imports: [CommonModule, AngularSvgIconModule, TooltipModule],
  selector: 'bp-verification',
  styles: [],
  template: `
    <svg-icon
      [pTooltip]="tooltip()"
      tooltipPosition="top"
      [ngClass]="{
        hidden: !isActive(),
      }"
      name="verified"
      [svgStyle]="{
        'width.px': iconSize(),
        'height.px': iconSize(),
        fill: iconColor(),
      }"
    ></svg-icon>
  `,
})
export class VerificationComponent {
  tooltipIsNeeded = input<boolean>(true);
  verificationStatus = input<undefined | VerificationStatus>();
  iconSize = input<number>();
  isActive = computed(() => !!this.verificationStatus());
  iconColor = computed(() =>
    this.verificationStatus()?.Id === VERIFIED_STATUS_ID
      ? PRIMARY_COLOR
      : SECONDARY_COLOR
  );
  tooltip = computed(() =>
    this.tooltipIsNeeded()
      ? this.verificationStatus()?.Id === VERIFIED_STATUS_ID
        ? 'Verified'
        : 'On verification'
      : ''
  );
}
