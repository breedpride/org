
import { merge } from 'lodash-es';
import { Lookup_Account } from '@bh/db/config';
import { Organizer_Field } from './organizer';
export const Organizer_Account = merge({}, Organizer_Field, Lookup_Account );
