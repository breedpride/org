

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { ShortName_ShortText} from '@bh/field/config'

import { Unit_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Unit} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Unit_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, Unit_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, Unit_Plugin.Description);
const ShortName  =
    merge({},
      ShortName_ShortText, Unit_Plugin.ShortName)


export const UNIT_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  ShortName
} as const;


export const UNIT_ENTITY_COLUMNS = getColumns(UNIT_FIELD_CONFIG);

export const UNIT_DATE_FIELDS = [];


export const [, , Unit_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Unit,
    fieldsConfig: UNIT_FIELD_CONFIG,
    entitiesColumns: UNIT_ENTITY_COLUMNS,
    dateColumns: getDateColumns(UNIT_FIELD_CONFIG),
  };
});

