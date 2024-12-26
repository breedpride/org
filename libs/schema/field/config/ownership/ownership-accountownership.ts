
import { merge } from 'lodash-es';
import { Lookup_AccountOwnership } from '@bh/db/config';
import { Ownership_Field } from './ownership';
export const Ownership_AccountOwnership = merge({}, Ownership_Field, Lookup_AccountOwnership );
