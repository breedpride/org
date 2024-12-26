
import { merge } from 'lodash-es';
import { Lookup_PetServiceType } from '@bh/db/config';
import { ServiceType_Field } from './servicetype';
export const ServiceType_PetServiceType = merge({}, ServiceType_Field, Lookup_PetServiceType );
