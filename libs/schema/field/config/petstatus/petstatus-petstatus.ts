
import { merge } from 'lodash-es';
import { Lookup_PetStatus } from '@bh/db/config';
import { PetStatus_Field } from './petstatus';
export const PetStatus_PetStatus = merge({}, PetStatus_Field, Lookup_PetStatus );
