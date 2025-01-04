

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';

import { Place_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Place} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Place_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, Place_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, Place_Plugin.Description);


export const PLACE_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const PLACE_ENTITY_COLUMNS = getColumns(PLACE_FIELD_CONFIG);

export const PLACE_DATE_FIELDS = [];


export const [, , Place_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Place,
    fieldsConfig: PLACE_FIELD_CONFIG,
    entitiesColumns: PLACE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PLACE_FIELD_CONFIG),
  };
});

