

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Priority_Integer} from '@bh/field/config';import { System_Boolean} from '@bh/field/config';

import { CoverType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_CoverType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, CoverType_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, CoverType_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, CoverType_Plugin.Description);
const Priority  =
    merge({},
      Priority_Integer, CoverType_Plugin.Priority);
const System  =
    merge({},
      System_Boolean, CoverType_Plugin.System);


export const COVERTYPE_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  Priority,
  System
} as const;


export const COVERTYPE_ENTITY_COLUMNS = getColumns(COVERTYPE_FIELD_CONFIG);

export const COVERTYPE_DATE_FIELDS = [];


export const [, , CoverType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_CoverType,
    fieldsConfig: COVERTYPE_FIELD_CONFIG,
    entitiesColumns: COVERTYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(COVERTYPE_FIELD_CONFIG),
  };
});

