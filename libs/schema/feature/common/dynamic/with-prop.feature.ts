import { Signal } from '@angular/core';
import {
  signalStoreFeature,
  SignalStoreFeature,
  withState,
} from '@ngrx/signals';
export type Withprop<prop extends string, ValueType> = {
  [K in prop as `${K}`]: Signal<ValueType | null>;
};

interface MaybeSignal {
  subscribe: (value: any) => void;
  // Інші специфічні властивості та методи сигналу
}

function isSignal(value: any): value is MaybeSignal {
  return value && typeof value.subscribe === 'function';
}

export function withProp<prop extends string, ValueType>(options: {
  config: { prop: prop };
  initValue: () => ValueType | Signal<ValueType> | ValueType;
}): SignalStoreFeature<
  {
    state: NonNullable<unknown>;
    props: NonNullable<unknown>;
    methods: NonNullable<unknown>;
  },
  {
    state: Withprop<prop, ValueType>;

    props: {};

    methods: {};
  }
>;

export function withProp<prop extends string, ValueType>(options: {
  config: { prop: prop };
  initValue: () => ValueType | Signal<ValueType> | ValueType;
}): SignalStoreFeature {
  const prop = options.config.prop as prop;
  const initValue = options.initValue;
  let nullableValue: ValueType | null | Signal<ValueType> = null;

  if (initValue instanceof Function) {
    if (initValue.name) {
      if (isSignal(initValue)) {
        // nullableValue = initValue as Signal<ValueType>;
      }
    } else {
      // Anunimous fucntion  - maybe use methods as Getter
    }
  } else {
    nullableValue = initValue;
  }

  return signalStoreFeature(withState({ [prop]: nullableValue }));
}
