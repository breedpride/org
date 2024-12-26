
import { merge } from 'lodash-es';
import { Lookup_VerificationStatus } from '@bh/db/config';
import { VerificationStatus_Field } from './verificationstatus';
export const VerificationStatus_VerificationStatus = merge({}, VerificationStatus_Field, Lookup_VerificationStatus );
