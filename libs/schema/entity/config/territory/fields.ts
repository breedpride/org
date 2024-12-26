

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config'

import { Territory_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Territory} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Territory_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, Territory_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, Territory_Plugin.Description)


export const TERRITORY_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const TERRITORY_ENTITY_COLUMNS = getColumns(TERRITORY_FIELD_CONFIG);

export const TERRITORY_DATE_FIELDS = [];


export const [, , Territory_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Territory,
    fieldsConfig: TERRITORY_FIELD_CONFIG,
    entitiesColumns: TERRITORY_ENTITY_COLUMNS,
    dateColumns: getDateColumns(TERRITORY_FIELD_CONFIG),
  };
});

