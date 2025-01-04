

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Priority_Integer} from '@bh/field/config';import { Domain_ShortText} from '@bh/field/config';

import { DataSource_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_DataSource} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, DataSource_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, DataSource_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, DataSource_Plugin.Description);
const Priority  =
    merge({},
      Priority_Integer, DataSource_Plugin.Priority);
const Domain  =
    merge({},
      Domain_ShortText, DataSource_Plugin.Domain);


export const DATASOURCE_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  Priority,
  Domain
} as const;


export const DATASOURCE_ENTITY_COLUMNS = getColumns(DATASOURCE_FIELD_CONFIG);

export const DATASOURCE_DATE_FIELDS = [];


export const [, , DataSource_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_DataSource,
    fieldsConfig: DATASOURCE_FIELD_CONFIG,
    entitiesColumns: DATASOURCE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(DATASOURCE_FIELD_CONFIG),
  };
});

