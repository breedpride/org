
import { merge } from 'lodash-es';
import { Lookup_EventType } from '@bh/db/config';
import { EventType_Field } from './eventtype';
export const EventType_EventType = merge({}, EventType_Field, Lookup_EventType );
