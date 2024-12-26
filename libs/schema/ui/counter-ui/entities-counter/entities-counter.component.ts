import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { LoadingCounterComponent } from '../loading-counter/loading-counter.component';

@Component({
  imports: [CommonModule, LoadingCounterComponent],
  selector: 'bp-entities-counter',
  styles: ``,
  template: `
    <div
      class="text-secondary flex"
      [ngClass]="{ 'ml-2 p-3 space-x-1': mode() === 'component' }"
    >
      <div [ngClass]="{ 'min-w-9': mode() === 'space' }">
        <bp-loading-counter
          [value]="entitiesCount()"
          [timer]="timer()"
          [loading]="isLoading()"
        />
      </div>
      <span [ngClass]="{ 'ml-1 mr-3': mode() === 'space' }">/</span>
      <bp-loading-counter
        [value]="total()"
        [timer]="timer()"
        [loading]="isLoading() && total() === -1"
      >
      </bp-loading-counter>
    </div>
  `,
})
export class EntitiesCounterComponent {
  timer = input<number>(2000);
  mode = input<string>('space');
  entitiesCount = input.required<number>();
  isLoading = input.required<boolean>();
  total = input.required<number>();
}
