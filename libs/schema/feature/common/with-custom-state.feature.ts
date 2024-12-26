import { signalStoreFeature, withState } from '@ngrx/signals';

export function withCustomConfig<T>(options: { config: T; default: () => T }) {
  const defFn = options.default;
  return signalStoreFeature(
    withState((config = defFn ? defFn() : {}) => {
      return {
        config: { ...config, ...options.config },
      };
    })
  );
}
