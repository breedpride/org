
import { merge } from 'lodash-es';
import { Lookup_Region } from '@bh/db/config';
import { Region_Field } from './region';
export const Region_Region = merge({}, Region_Field, Lookup_Region );
