
import { merge } from 'lodash-es';
import { Lookup_Contact } from '@bh/db/config';
import { Owner_Field } from './owner';
export const Owner_Contact = merge({}, Owner_Field, Lookup_Contact );
