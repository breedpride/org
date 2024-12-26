import {
  SignalStoreFeature,
  patchState,
  signalStoreFeature,
  withMethods,
  withState,
} from '@ngrx/signals';
import { capitalize } from 'lodash-es';

type DynamicFieldsState = {
  [key: string]: any;
};

type DynamicFieldSetters = {
  [key: string]: (value: any) => void;
};

type DynamicFieldFeatureResult = {
  state: DynamicFieldsState;
  methods: DynamicFieldSetters;
  props: {};
};

export function createDynamicFieldFeature(
  fields: string[]
): SignalStoreFeature<
    { state: {}; props: {}; methods: {} },
    DynamicFieldFeatureResult
  > {
  const initialState: DynamicFieldsState = fields.reduce((state, field) => {
    state[field] = null;
    return state;
  }, {} as DynamicFieldsState);
  return signalStoreFeature(
    withState(initialState),
    withMethods((store) => {
      const setters: DynamicFieldSetters = fields.reduce((methods, field) => {
        methods[`set${capitalize(field)}`] = (value: any) => {
          patchState(store, { [field]: value });
        };
        return methods;
      }, {} as DynamicFieldSetters);
      return setters;
    })
  );
}
