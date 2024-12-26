
import { merge } from 'lodash-es';
import { Lookup_GeoNamesTimeZone } from '@bh/db/config';
import { GeoNamesTimeZone_Field } from './geonamestimezone';
export const GeoNamesTimeZone_GeoNamesTimeZone = merge({}, GeoNamesTimeZone_Field, Lookup_GeoNamesTimeZone );
