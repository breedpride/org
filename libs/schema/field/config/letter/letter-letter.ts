
import { merge } from 'lodash-es';
import { Lookup_Letter } from '@bh/db/config';
import { Letter_Field } from './letter';
export const Letter_Letter = merge({}, Letter_Field, Lookup_Letter );
