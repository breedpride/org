
import { merge } from 'lodash-es';
import { Lookup_PostState } from '@bh/db/config';
import { State_Field } from './state';
export const State_PostState = merge({}, State_Field, Lookup_PostState );
