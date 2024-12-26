
import { merge } from 'lodash-es';
import { Lookup_EventType } from '@bh/db/config';
import { Type_Field } from './type';
export const Type_EventType = merge({}, Type_Field, Lookup_EventType );
