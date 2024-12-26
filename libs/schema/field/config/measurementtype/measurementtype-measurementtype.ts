
import { merge } from 'lodash-es';
import { Lookup_MeasurementType } from '@bh/db/config';
import { MeasurementType_Field } from './measurementtype';
export const MeasurementType_MeasurementType = merge({}, MeasurementType_Field, Lookup_MeasurementType );
