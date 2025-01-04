

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';

import { PostState_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PostState} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PostState_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, PostState_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, PostState_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, PostState_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, PostState_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, PostState_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, PostState_Plugin.Description);


export const POSTSTATE_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  Description
} as const;


export const POSTSTATE_ENTITY_COLUMNS = getColumns(POSTSTATE_FIELD_CONFIG);

export const POSTSTATE_DATE_FIELDS = [];


export const [, , PostState_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PostState,
    fieldsConfig: POSTSTATE_FIELD_CONFIG,
    entitiesColumns: POSTSTATE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(POSTSTATE_FIELD_CONFIG),
  };
});

