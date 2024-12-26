

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Value_Number} from '@bh/field/config';import { Day_Integer} from '@bh/field/config';import { Date_DateTime} from '@bh/field/config';import { Pet_Pet} from '@bh/field/config';import { MeasurementType_MeasurementType} from '@bh/field/config';import { Unit_Unit} from '@bh/field/config';import { ActiveSynchronization_Boolean} from '@bh/field/config'

import { PetMeasurement_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PetMeasurement} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PetMeasurement_Plugin.Id);
const Value  =
    merge({},
      Value_Number, PetMeasurement_Plugin.Value);
const Day  =
    merge({},
      Day_Integer, PetMeasurement_Plugin.Day);
const Date  =
    merge({},
      Date_DateTime, PetMeasurement_Plugin.Date);
const Pet  =
    merge({},
      Pet_Pet, PetMeasurement_Plugin.Pet);
const MeasurementType  =
    merge({},
      MeasurementType_MeasurementType, PetMeasurement_Plugin.MeasurementType);
const Unit  =
    merge({},
      Unit_Unit, PetMeasurement_Plugin.Unit);
const ActiveSynchronization  =
    merge({},
      ActiveSynchronization_Boolean, PetMeasurement_Plugin.ActiveSynchronization)


export const PETMEASUREMENT_FIELD_CONFIG = {

  Id,
  Value,
  Day,
  Date,
  Pet,
  MeasurementType,
  Unit,
  ActiveSynchronization
} as const;


export const PETMEASUREMENT_ENTITY_COLUMNS = getColumns(PETMEASUREMENT_FIELD_CONFIG);

export const PETMEASUREMENT_DATE_FIELDS = [];


export const [, , PetMeasurement_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PetMeasurement,
    fieldsConfig: PETMEASUREMENT_FIELD_CONFIG,
    entitiesColumns: PETMEASUREMENT_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PETMEASUREMENT_FIELD_CONFIG),
  };
});

