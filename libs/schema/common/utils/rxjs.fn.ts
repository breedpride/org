import { MonoTypeOperatorFunction, Observable, tap } from 'rxjs';

export function tapOnce<T>(
  fn: (value: T) => void
): MonoTypeOperatorFunction<T> {
  let called = false;

  return (source: Observable<T>) =>
    source.pipe(
      tap(value => {
        if (!called) {
          called = true;
          fn(value);
        }
      })
    );
}
