
import { merge } from 'lodash-es';
import { Lookup_AffixType } from '@bh/db/config';
import { AffixType_Field } from './affixtype';
export const AffixType_AffixType = merge({}, AffixType_Field, Lookup_AffixType );
