import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  imports: [CommonModule, AngularSvgIconModule],
  selector: 'bp-patron-place',
  styles: ``,
  template: ` @if (mode() === 'default') {
    <div class="bg-accent-600 rounded-full p-1">
      <svg-icon
        [name]="iconName()"
        [svgStyle]="{
            'width.px': iconSize(),
            'height.px': iconSize(),
            fill: 'rgb(255,255, 255)',
          }"
      ></svg-icon>
    </div>
    } @else {
    <svg-icon
      [name]="iconName()"
      [svgStyle]="{
          'width.px': iconSize(),
          'height.px': iconSize(),
          fill: 'rgb(var(--secondary-400))',
        }"
    ></svg-icon>
    }`,
})
export class PatronPlaceComponent {
  iconName = input<string>();
  iconSize = input<string>();
  mode = input<string>('default');
}
