

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';

import { VerificationStatus_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_VerificationStatus} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, VerificationStatus_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, VerificationStatus_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, VerificationStatus_Plugin.Description);


export const VERIFICATIONSTATUS_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const VERIFICATIONSTATUS_ENTITY_COLUMNS = getColumns(VERIFICATIONSTATUS_FIELD_CONFIG);

export const VERIFICATIONSTATUS_DATE_FIELDS = [];


export const [, , VerificationStatus_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_VerificationStatus,
    fieldsConfig: VERIFICATIONSTATUS_FIELD_CONFIG,
    entitiesColumns: VERIFICATIONSTATUS_ENTITY_COLUMNS,
    dateColumns: getDateColumns(VERIFICATIONSTATUS_FIELD_CONFIG),
  };
});

