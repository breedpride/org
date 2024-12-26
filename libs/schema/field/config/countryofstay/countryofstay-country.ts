
import { merge } from 'lodash-es';
import { Lookup_Country } from '@bh/db/config';
import { CountryOfStay_Field } from './countryofstay';
export const CountryOfStay_Country = merge({}, CountryOfStay_Field, Lookup_Country );
