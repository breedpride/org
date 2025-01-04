

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';

import { ProjectType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_ProjectType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, ProjectType_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, ProjectType_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, ProjectType_Plugin.Description);


export const PROJECTTYPE_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const PROJECTTYPE_ENTITY_COLUMNS = getColumns(PROJECTTYPE_FIELD_CONFIG);

export const PROJECTTYPE_DATE_FIELDS = [];


export const [, , ProjectType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_ProjectType,
    fieldsConfig: PROJECTTYPE_FIELD_CONFIG,
    entitiesColumns: PROJECTTYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PROJECTTYPE_FIELD_CONFIG),
  };
});

