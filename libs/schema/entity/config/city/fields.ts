

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Country_Country} from '@bh/field/config';import { Region_Region} from '@bh/field/config';import { TimeZone_TimeZone} from '@bh/field/config';import { GeoNamesTimeZone_GeoNamesTimeZone} from '@bh/field/config';import { AlternateNames_MaxSizeText} from '@bh/field/config';import { GeoNamesId_ShortText} from '@bh/field/config';import { Dem_Integer} from '@bh/field/config';import { Latitude_Number} from '@bh/field/config';import { Longitude_Number} from '@bh/field/config';import { Population_Integer} from '@bh/field/config';

import { City_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_City} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, City_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, City_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, City_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, City_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, City_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, City_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, City_Plugin.Description);
const Country  =
    merge({},
      Country_Country, City_Plugin.Country);
const Region  =
    merge({},
      Region_Region, City_Plugin.Region);
const TimeZone  =
    merge({},
      TimeZone_TimeZone, City_Plugin.TimeZone);
const GeoNamesTimeZone  =
    merge({},
      GeoNamesTimeZone_GeoNamesTimeZone, City_Plugin.GeoNamesTimeZone);
const AlternateNames  =
    merge({},
      AlternateNames_MaxSizeText, City_Plugin.AlternateNames);
const GeoNamesId  =
    merge({},
      GeoNamesId_ShortText, City_Plugin.GeoNamesId);
const Dem  =
    merge({},
      Dem_Integer, City_Plugin.Dem);
const Latitude  =
    merge({},
      Latitude_Number, City_Plugin.Latitude);
const Longitude  =
    merge({},
      Longitude_Number, City_Plugin.Longitude);
const Population  =
    merge({},
      Population_Integer, City_Plugin.Population);


export const CITY_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  Description,
  Country,
  Region,
  TimeZone,
  GeoNamesTimeZone,
  AlternateNames,
  GeoNamesId,
  Dem,
  Latitude,
  Longitude,
  Population
} as const;


export const CITY_ENTITY_COLUMNS = getColumns(CITY_FIELD_CONFIG);

export const CITY_DATE_FIELDS = [];


export const [, , City_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_City,
    fieldsConfig: CITY_FIELD_CONFIG,
    entitiesColumns: CITY_ENTITY_COLUMNS,
    dateColumns: getDateColumns(CITY_FIELD_CONFIG),
  };
});

