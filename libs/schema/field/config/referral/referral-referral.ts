
import { merge } from 'lodash-es';
import { Lookup_Referral } from '@bh/db/config';
import { Referral_Field } from './referral';
export const Referral_Referral = merge({}, Referral_Field, Lookup_Referral );
