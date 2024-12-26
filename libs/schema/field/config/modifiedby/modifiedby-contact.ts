
import { merge } from 'lodash-es';
import { Lookup_Contact } from '@bh/db/config';
import { ModifiedBy_Field } from './modifiedby';
export const ModifiedBy_Contact = merge({}, ModifiedBy_Field, Lookup_Contact );
