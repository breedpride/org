

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';

import { EventType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_EventType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, EventType_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, EventType_Plugin.Name);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, EventType_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, EventType_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, EventType_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, EventType_Plugin.ModifiedBy);
const Description  =
    merge({},
      Description_MediumText, EventType_Plugin.Description);


export const EVENTTYPE_FIELD_CONFIG = {

  Id,
  Name,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Description
} as const;


export const EVENTTYPE_ENTITY_COLUMNS = getColumns(EVENTTYPE_FIELD_CONFIG);

export const EVENTTYPE_DATE_FIELDS = [];


export const [, , EventType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_EventType,
    fieldsConfig: EVENTTYPE_FIELD_CONFIG,
    entitiesColumns: EVENTTYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(EVENTTYPE_FIELD_CONFIG),
  };
});

