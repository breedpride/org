
import { merge } from 'lodash-es';
import { Lookup_PetServiceStatus } from '@bh/db/config';
import { PetServiceStatus_Field } from './petservicestatus';
export const PetServiceStatus_PetServiceStatus = merge({}, PetServiceStatus_Field, Lookup_PetServiceStatus );
