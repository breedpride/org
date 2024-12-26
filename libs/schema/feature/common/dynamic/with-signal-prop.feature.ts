import { computed, Signal } from '@angular/core';
import {
  signalStoreFeature,
  SignalStoreFeature,
  withComputed,
} from '@ngrx/signals';
import { withLogger } from '@bp/with-logger';
import { Withprop } from './with-prop.feature';


export function withComputedProp<prop extends string, ValueType>(options: {
  config: { prop: prop };
  initValue: Signal<ValueType | null>;
}): SignalStoreFeature<
  {
    state: NonNullable<unknown>;
    props: NonNullable<unknown>;
    methods: NonNullable<unknown>;
  },
  {
    state: {};
    props: Withprop<prop, ValueType>;
    methods: {};
  }
>;

export function withComputedProp<prop extends string, ValueType>(options: {
  config: { prop: prop };
  initValue: Signal<ValueType | null>;
}): SignalStoreFeature {
  const prop = options.config.prop as prop;
  const initValue = options.initValue;

  return signalStoreFeature(
    withComputed(store => ({
      [prop]: computed(() => initValue()),
    })),
    withLogger('SignlaProp')
  );
}
