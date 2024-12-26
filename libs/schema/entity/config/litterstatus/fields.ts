

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Order_Integer} from '@bh/field/config'

import { LitterStatus_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_LitterStatus} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, LitterStatus_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, LitterStatus_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, LitterStatus_Plugin.Description);
const Order  =
    merge({},
      Order_Integer, LitterStatus_Plugin.Order)


export const LITTERSTATUS_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  Order
} as const;


export const LITTERSTATUS_ENTITY_COLUMNS = getColumns(LITTERSTATUS_FIELD_CONFIG);

export const LITTERSTATUS_DATE_FIELDS = [];


export const [, , LitterStatus_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_LitterStatus,
    fieldsConfig: LITTERSTATUS_FIELD_CONFIG,
    entitiesColumns: LITTERSTATUS_ENTITY_COLUMNS,
    dateColumns: getDateColumns(LITTERSTATUS_FIELD_CONFIG),
  };
});

