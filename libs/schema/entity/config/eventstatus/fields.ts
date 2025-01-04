

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Color_Color} from '@bh/field/config';

import { EventStatus_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_EventStatus} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, EventStatus_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, EventStatus_Plugin.Name);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, EventStatus_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, EventStatus_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, EventStatus_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, EventStatus_Plugin.ModifiedBy);
const Description  =
    merge({},
      Description_MediumText, EventStatus_Plugin.Description);
const Color  =
    merge({},
      Color_Color, EventStatus_Plugin.Color);


export const EVENTSTATUS_FIELD_CONFIG = {

  Id,
  Name,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Description,
  Color
} as const;


export const EVENTSTATUS_ENTITY_COLUMNS = getColumns(EVENTSTATUS_FIELD_CONFIG);

export const EVENTSTATUS_DATE_FIELDS = [];


export const [, , EventStatus_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_EventStatus,
    fieldsConfig: EVENTSTATUS_FIELD_CONFIG,
    entitiesColumns: EVENTSTATUS_ENTITY_COLUMNS,
    dateColumns: getDateColumns(EVENTSTATUS_FIELD_CONFIG),
  };
});

