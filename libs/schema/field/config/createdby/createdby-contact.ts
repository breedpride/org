
import { merge } from 'lodash-es';
import { Lookup_Contact } from '@bh/db/config';
import { CreatedBy_Field } from './createdby';
export const CreatedBy_Contact = merge({}, CreatedBy_Field, Lookup_Contact );
