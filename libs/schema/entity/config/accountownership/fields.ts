

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Country_Country} from '@bh/field/config'

import { AccountOwnership_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_AccountOwnership} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, AccountOwnership_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, AccountOwnership_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, AccountOwnership_Plugin.Description);
const Country  =
    merge({},
      Country_Country, AccountOwnership_Plugin.Country)


export const ACCOUNTOWNERSHIP_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  Country
} as const;


export const ACCOUNTOWNERSHIP_ENTITY_COLUMNS = getColumns(ACCOUNTOWNERSHIP_FIELD_CONFIG);

export const ACCOUNTOWNERSHIP_DATE_FIELDS = [];


export const [, , AccountOwnership_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_AccountOwnership,
    fieldsConfig: ACCOUNTOWNERSHIP_FIELD_CONFIG,
    entitiesColumns: ACCOUNTOWNERSHIP_ENTITY_COLUMNS,
    dateColumns: getDateColumns(ACCOUNTOWNERSHIP_FIELD_CONFIG),
  };
});

