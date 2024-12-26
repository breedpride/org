
import { merge } from 'lodash-es';
import { Lookup_ContactSalutationType } from '@bh/db/config';
import { SalutationType_Field } from './salutationtype';
export const SalutationType_ContactSalutationType = merge({}, SalutationType_Field, Lookup_ContactSalutationType );
