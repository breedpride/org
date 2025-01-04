

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { EventType_EventType} from '@bh/field/config';

import { ProjectCategory_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_ProjectCategory} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, ProjectCategory_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, ProjectCategory_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, ProjectCategory_Plugin.Description);
const EventType  =
    merge({},
      EventType_EventType, ProjectCategory_Plugin.EventType);


export const PROJECTCATEGORY_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  EventType
} as const;


export const PROJECTCATEGORY_ENTITY_COLUMNS = getColumns(PROJECTCATEGORY_FIELD_CONFIG);

export const PROJECTCATEGORY_DATE_FIELDS = [];


export const [, , ProjectCategory_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_ProjectCategory,
    fieldsConfig: PROJECTCATEGORY_FIELD_CONFIG,
    entitiesColumns: PROJECTCATEGORY_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PROJECTCATEGORY_FIELD_CONFIG),
  };
});

