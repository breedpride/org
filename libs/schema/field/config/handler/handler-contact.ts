
import { merge } from 'lodash-es';
import { Lookup_Contact } from '@bh/db/config';
import { Handler_Field } from './handler';
export const Handler_Contact = merge({}, Handler_Field, Lookup_Contact );
