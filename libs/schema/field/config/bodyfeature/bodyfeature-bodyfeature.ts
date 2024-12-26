
import { merge } from 'lodash-es';
import { Lookup_BodyFeature } from '@bh/db/config';
import { BodyFeature_Field } from './bodyfeature';
export const BodyFeature_BodyFeature = merge({}, BodyFeature_Field, Lookup_BodyFeature );
