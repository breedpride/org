
import { merge } from 'lodash-es';
import { Lookup_Contact } from '@bh/db/config';
import { Contact_Field } from './contact';
export const Contact_Contact = merge({}, Contact_Field, Lookup_Contact );
