import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CounterComponent } from '../counter/counter.component';

@Component({
  imports: [CommonModule, CounterComponent, ProgressSpinnerModule],
  selector: 'bp-loading-counter',
  styles: [``],
  template: `
    @if (loading()) {
    <p-progress-spinner styleClass="w-[14px] h-[14px]" strokeWidth="4" />
    } @else {
    <bp-counter [value]="value()" [timer]="timer()" />
    }
  `,
})
export class LoadingCounterComponent {
  value = input.required<number>();
  timer = input<number>(2000);
  loading = input<boolean>(false);
}
