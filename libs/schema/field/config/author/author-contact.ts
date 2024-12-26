
import { merge } from 'lodash-es';
import { Lookup_Contact } from '@bh/db/config';
import { Author_Field } from './author';
export const Author_Contact = merge({}, Author_Field, Lookup_Contact );
