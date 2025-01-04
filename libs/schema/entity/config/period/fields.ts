

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { StartDate_Date} from '@bh/field/config';import { DueDate_Date} from '@bh/field/config';import { PeriodType_PeriodType} from '@bh/field/config';import { Year_Period} from '@bh/field/config';import { Quarter_Period} from '@bh/field/config';import { Parent_Period} from '@bh/field/config';

import { Period_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Period} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Period_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, Period_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, Period_Plugin.Description);
const StartDate  =
    merge({},
      StartDate_Date, Period_Plugin.StartDate);
const DueDate  =
    merge({},
      DueDate_Date, Period_Plugin.DueDate);
const PeriodType  =
    merge({},
      PeriodType_PeriodType, Period_Plugin.PeriodType);
const Year  =
    merge({},
      Year_Period, Period_Plugin.Year);
const Quarter  =
    merge({},
      Quarter_Period, Period_Plugin.Quarter);
const Parent  =
    merge({},
      Parent_Period, Period_Plugin.Parent);


export const PERIOD_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  StartDate,
  DueDate,
  PeriodType,
  Year,
  Quarter,
  Parent
} as const;


export const PERIOD_ENTITY_COLUMNS = getColumns(PERIOD_FIELD_CONFIG);

export const PERIOD_DATE_FIELDS = [];


export const [, , Period_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Period,
    fieldsConfig: PERIOD_FIELD_CONFIG,
    entitiesColumns: PERIOD_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PERIOD_FIELD_CONFIG),
  };
});

