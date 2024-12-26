
import { merge } from 'lodash-es';
import { Lookup_Event } from '@bh/db/config';
import { Event_Field } from './event';
export const Event_Event = merge({}, Event_Field, Lookup_Event );
