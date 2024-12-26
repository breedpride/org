
import { merge } from 'lodash-es';
import { Lookup_ContactDecisionRole } from '@bh/db/config';
import { DecisionRole_Field } from './decisionrole';
export const DecisionRole_ContactDecisionRole = merge({}, DecisionRole_Field, Lookup_ContactDecisionRole );
