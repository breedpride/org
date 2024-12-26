
import { merge } from 'lodash-es';
import { Lookup_AccountIndustry } from '@bh/db/config';
import { Industry_Field } from './industry';
export const Industry_AccountIndustry = merge({}, Industry_Field, Lookup_AccountIndustry );
