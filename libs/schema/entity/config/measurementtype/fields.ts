

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';

import { MeasurementType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_MeasurementType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, MeasurementType_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, MeasurementType_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, MeasurementType_Plugin.Description);


export const MEASUREMENTTYPE_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const MEASUREMENTTYPE_ENTITY_COLUMNS = getColumns(MEASUREMENTTYPE_FIELD_CONFIG);

export const MEASUREMENTTYPE_DATE_FIELDS = [];


export const [, , MeasurementType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_MeasurementType,
    fieldsConfig: MEASUREMENTTYPE_FIELD_CONFIG,
    entitiesColumns: MEASUREMENTTYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(MEASUREMENTTYPE_FIELD_CONFIG),
  };
});

