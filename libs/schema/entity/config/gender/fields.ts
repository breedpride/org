

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Order_Integer} from '@bh/field/config'

import { Gender_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Gender} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Gender_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, Gender_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, Gender_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, Gender_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, Gender_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, Gender_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, Gender_Plugin.Description);
const Order  =
    merge({},
      Order_Integer, Gender_Plugin.Order)


export const GENDER_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  Description,
  Order
} as const;


export const GENDER_ENTITY_COLUMNS = getColumns(GENDER_FIELD_CONFIG);

export const GENDER_DATE_FIELDS = [];


export const [, , Gender_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Gender,
    fieldsConfig: GENDER_FIELD_CONFIG,
    entitiesColumns: GENDER_ENTITY_COLUMNS,
    dateColumns: getDateColumns(GENDER_FIELD_CONFIG),
  };
});

