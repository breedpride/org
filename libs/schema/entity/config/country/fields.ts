

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { BillingInfo_MaxSizeText} from '@bh/field/config';import { TimeZone_TimeZone} from '@bh/field/config';import { Code_ShortText} from '@bh/field/config';import { AlternateNames_MaxSizeText} from '@bh/field/config';import { GeoNamesTimeZone_GeoNamesTimeZone} from '@bh/field/config';import { GeoNamesCountryCode_ShortText} from '@bh/field/config';import { GeoNamesId_ShortText} from '@bh/field/config';import { Dem_Integer} from '@bh/field/config';import { Latitude_Number} from '@bh/field/config';import { Longitude_Number} from '@bh/field/config';import { Alpha2Code_ShortText} from '@bh/field/config';import { PublicData_PublicData} from '@bh/field/config';import { Url_LongText} from '@bh/field/config'

import { Country_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Country} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Country_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, Country_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, Country_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, Country_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, Country_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, Country_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, Country_Plugin.Description);
const BillingInfo  =
    merge({},
      BillingInfo_MaxSizeText, Country_Plugin.BillingInfo);
const TimeZone  =
    merge({},
      TimeZone_TimeZone, Country_Plugin.TimeZone);
const Code  =
    merge({},
      Code_ShortText, Country_Plugin.Code);
const AlternateNames  =
    merge({},
      AlternateNames_MaxSizeText, Country_Plugin.AlternateNames);
const GeoNamesTimeZone  =
    merge({},
      GeoNamesTimeZone_GeoNamesTimeZone, Country_Plugin.GeoNamesTimeZone);
const GeoNamesCountryCode  =
    merge({},
      GeoNamesCountryCode_ShortText, Country_Plugin.GeoNamesCountryCode);
const GeoNamesId  =
    merge({},
      GeoNamesId_ShortText, Country_Plugin.GeoNamesId);
const Dem  =
    merge({},
      Dem_Integer, Country_Plugin.Dem);
const Latitude  =
    merge({},
      Latitude_Number, Country_Plugin.Latitude);
const Longitude  =
    merge({},
      Longitude_Number, Country_Plugin.Longitude);
const Alpha2Code  =
    merge({},
      Alpha2Code_ShortText, Country_Plugin.Alpha2Code);
const PublicData  =
    merge({},
      PublicData_PublicData, Country_Plugin.PublicData);
const Url  =
    merge({},
      Url_LongText, Country_Plugin.Url)


export const COUNTRY_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  Description,
  BillingInfo,
  TimeZone,
  Code,
  AlternateNames,
  GeoNamesTimeZone,
  GeoNamesCountryCode,
  GeoNamesId,
  Dem,
  Latitude,
  Longitude,
  Alpha2Code,
  PublicData,
  Url
} as const;


export const COUNTRY_ENTITY_COLUMNS = getColumns(COUNTRY_FIELD_CONFIG);

export const COUNTRY_DATE_FIELDS = [];


export const [, , Country_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Country,
    fieldsConfig: COUNTRY_FIELD_CONFIG,
    entitiesColumns: COUNTRY_ENTITY_COLUMNS,
    dateColumns: getDateColumns(COUNTRY_FIELD_CONFIG),
  };
});

