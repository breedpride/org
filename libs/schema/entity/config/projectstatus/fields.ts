

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { IsFinal_Boolean} from '@bh/field/config'

import { ProjectStatus_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_ProjectStatus} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, ProjectStatus_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, ProjectStatus_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, ProjectStatus_Plugin.Description);
const IsFinal  =
    merge({},
      IsFinal_Boolean, ProjectStatus_Plugin.IsFinal)


export const PROJECTSTATUS_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  IsFinal
} as const;


export const PROJECTSTATUS_ENTITY_COLUMNS = getColumns(PROJECTSTATUS_FIELD_CONFIG);

export const PROJECTSTATUS_DATE_FIELDS = [];


export const [, , ProjectStatus_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_ProjectStatus,
    fieldsConfig: PROJECTSTATUS_FIELD_CONFIG,
    entitiesColumns: PROJECTSTATUS_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PROJECTSTATUS_FIELD_CONFIG),
  };
});

