import { CommonModule } from '@angular/common';
import {
  Component,
  DestroyRef,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, take } from 'rxjs';

@Component({
  imports: [CommonModule],
  selector: 'bp-counter',
  styles: [],
  template: `{{ currentValue() }}`,
})
export class CounterComponent {
  destroyRef = inject(DestroyRef);

  timer = input<number>(2000);
  value = input.required<number>();
  currentValue = signal('');
  // TODO - rework with computed
  public start(): void {
    const intervalPeriod = 150;
    const intervalCount = Math.round(this.timer() / intervalPeriod); // 50
    const delta = this.value() / intervalCount;

    interval(intervalPeriod)
      .pipe(takeUntilDestroyed(this.destroyRef), take(intervalCount + 1))
      .subscribe((e) => {
        const v = Math.round(e * delta);
        const res = Math.min(v, this.value());

        const resString = String(res).replace(/(?!^)(?=(?:\d{3})+$)/g, ' ');

        this.currentValue.set(resString);
      });
  }
  constructor() {
    effect(() => this.start());
  }
}
