

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { PetType_PetType} from '@bh/field/config'

import { AccountIndustry_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_AccountIndustry} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, AccountIndustry_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, AccountIndustry_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, AccountIndustry_Plugin.Description);
const PetType  =
    merge({},
      PetType_PetType, AccountIndustry_Plugin.PetType)


export const ACCOUNTINDUSTRY_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  PetType
} as const;


export const ACCOUNTINDUSTRY_ENTITY_COLUMNS = getColumns(ACCOUNTINDUSTRY_FIELD_CONFIG);

export const ACCOUNTINDUSTRY_DATE_FIELDS = [];


export const [, , AccountIndustry_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_AccountIndustry,
    fieldsConfig: ACCOUNTINDUSTRY_FIELD_CONFIG,
    entitiesColumns: ACCOUNTINDUSTRY_ENTITY_COLUMNS,
    dateColumns: getDateColumns(ACCOUNTINDUSTRY_FIELD_CONFIG),
  };
});

