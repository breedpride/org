import { CommonModule } from '@angular/common';
import { Component, computed, HostBinding, input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'bp-icon',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule],
  template: `@if (customIcon()) {
    <svg-icon
      [name]="iconName()"
      [svgStyle]="{
          'width.px': iconSize(),
          'height.px': iconSize(),
          fill: iconColor(),
        }"
    ></svg-icon>
    } @else {
    <i
      class="{{ iconName() }}"
      [ngStyle]="{
          'font-size': iconSize() + 'px',
          color: iconColor(),
        }"
    ></i>
    }`,
  styles: ``,
})
export class IconComponent {
  @HostBinding('class') class = 'flex items-center justify-center';
  iconName = input<string>();
  iconColor = input<string>();
  iconSize = input<string>();
  // piIconSize = computed(() => (Number(this.iconSize()) * 1).toString());
  customIcon = computed(() => Boolean(!this.iconName()?.includes('pi-')));
}
