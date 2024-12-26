
import { merge } from 'lodash-es';
import { Lookup_Country } from '@bh/db/config';
import { CountryOfBirth_Field } from './countryofbirth';
export const CountryOfBirth_Country = merge({}, CountryOfBirth_Field, Lookup_Country );
