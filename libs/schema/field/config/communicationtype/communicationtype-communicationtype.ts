
import { merge } from 'lodash-es';
import { Lookup_CommunicationType } from '@bh/db/config';
import { CommunicationType_Field } from './communicationtype';
export const CommunicationType_CommunicationType = merge({}, CommunicationType_Field, Lookup_CommunicationType );
