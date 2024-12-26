import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { breedprideAnimations } from '@bp/core/consts';

@Component({
  animations: breedprideAnimations,

  imports: [CommonModule],
  selector: 'bp-expanded',
  styles: [],
  template: `
    <ng-container>
      <ng-content />
      @if (expanded()) {
        <div>
          <ng-content select="[breedprideCardExpansion]" />
        </div>
      }
    </ng-container>
  `
})
export class ExpandedComponent {
  expanded = input<boolean>(false);
}
