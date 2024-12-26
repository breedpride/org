
import { merge } from 'lodash-es';
import { Lookup_Cover } from '@bh/db/config';
import { Cover_Field } from './cover';
export const Cover_Cover = merge({}, Cover_Field, Lookup_Cover );
