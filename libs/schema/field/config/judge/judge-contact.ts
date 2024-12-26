
import { merge } from 'lodash-es';
import { Lookup_Contact } from '@bh/db/config';
import { Judge_Field } from './judge';
export const Judge_Contact = merge({}, Judge_Field, Lookup_Contact );
