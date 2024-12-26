

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { ForContact_Boolean} from '@bh/field/config';import { ForAccount_Boolean} from '@bh/field/config';import { Color_Color} from '@bh/field/config'

import { AddressType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_AddressType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, AddressType_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, AddressType_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, AddressType_Plugin.Description);
const ForContact  =
    merge({},
      ForContact_Boolean, AddressType_Plugin.ForContact);
const ForAccount  =
    merge({},
      ForAccount_Boolean, AddressType_Plugin.ForAccount);
const Color  =
    merge({},
      Color_Color, AddressType_Plugin.Color)


export const ADDRESSTYPE_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  ForContact,
  ForAccount,
  Color
} as const;


export const ADDRESSTYPE_ENTITY_COLUMNS = getColumns(ADDRESSTYPE_FIELD_CONFIG);

export const ADDRESSTYPE_DATE_FIELDS = [];


export const [, , AddressType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_AddressType,
    fieldsConfig: ADDRESSTYPE_FIELD_CONFIG,
    entitiesColumns: ADDRESSTYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(ADDRESSTYPE_FIELD_CONFIG),
  };
});

