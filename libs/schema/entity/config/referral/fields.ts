

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Code_MediumText} from '@bh/field/config';import { Contact_Contact} from '@bh/field/config'

import { Referral_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Referral} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Referral_Plugin.Id);
const Code  =
    merge({},
      Code_MediumText, Referral_Plugin.Code);
const Contact  =
    merge({},
      Contact_Contact, Referral_Plugin.Contact)


export const REFERRAL_FIELD_CONFIG = {

  Id,
  Code,
  Contact
} as const;


export const REFERRAL_ENTITY_COLUMNS = getColumns(REFERRAL_FIELD_CONFIG);

export const REFERRAL_DATE_FIELDS = [];


export const [, , Referral_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Referral,
    fieldsConfig: REFERRAL_FIELD_CONFIG,
    entitiesColumns: REFERRAL_ENTITY_COLUMNS,
    dateColumns: getDateColumns(REFERRAL_FIELD_CONFIG),
  };
});

