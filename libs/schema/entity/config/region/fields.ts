

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Country_Country} from '@bh/field/config';import { TimeZone_TimeZone} from '@bh/field/config';import { GeoNamesTimeZone_GeoNamesTimeZone} from '@bh/field/config';import { AlternateNames_MaxSizeText} from '@bh/field/config';import { GeoNamesId_ShortText} from '@bh/field/config';import { Dem_Integer} from '@bh/field/config';import { Latitude_Number} from '@bh/field/config';import { Longitude_Number} from '@bh/field/config';import { Code_ShortText} from '@bh/field/config';import { RegionAdmin1Code_ShortText} from '@bh/field/config'

import { Region_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Region} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Region_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, Region_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, Region_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, Region_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, Region_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, Region_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, Region_Plugin.Description);
const Country  =
    merge({},
      Country_Country, Region_Plugin.Country);
const TimeZone  =
    merge({},
      TimeZone_TimeZone, Region_Plugin.TimeZone);
const GeoNamesTimeZone  =
    merge({},
      GeoNamesTimeZone_GeoNamesTimeZone, Region_Plugin.GeoNamesTimeZone);
const AlternateNames  =
    merge({},
      AlternateNames_MaxSizeText, Region_Plugin.AlternateNames);
const GeoNamesId  =
    merge({},
      GeoNamesId_ShortText, Region_Plugin.GeoNamesId);
const Dem  =
    merge({},
      Dem_Integer, Region_Plugin.Dem);
const Latitude  =
    merge({},
      Latitude_Number, Region_Plugin.Latitude);
const Longitude  =
    merge({},
      Longitude_Number, Region_Plugin.Longitude);
const Code  =
    merge({},
      Code_ShortText, Region_Plugin.Code);
const RegionAdmin1Code  =
    merge({},
      RegionAdmin1Code_ShortText, Region_Plugin.RegionAdmin1Code)


export const REGION_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  Description,
  Country,
  TimeZone,
  GeoNamesTimeZone,
  AlternateNames,
  GeoNamesId,
  Dem,
  Latitude,
  Longitude,
  Code,
  RegionAdmin1Code
} as const;


export const REGION_ENTITY_COLUMNS = getColumns(REGION_FIELD_CONFIG);

export const REGION_DATE_FIELDS = [];


export const [, , Region_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Region,
    fieldsConfig: REGION_FIELD_CONFIG,
    entitiesColumns: REGION_ENTITY_COLUMNS,
    dateColumns: getDateColumns(REGION_FIELD_CONFIG),
  };
});

