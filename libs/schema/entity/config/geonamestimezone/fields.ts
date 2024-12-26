

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { GMTOffset_Number} from '@bh/field/config';import { CountryCode_ShortText} from '@bh/field/config'

import { GeoNamesTimeZone_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_GeoNamesTimeZone} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, GeoNamesTimeZone_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, GeoNamesTimeZone_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, GeoNamesTimeZone_Plugin.Description);
const GMTOffset  =
    merge({},
      GMTOffset_Number, GeoNamesTimeZone_Plugin.GMTOffset);
const CountryCode  =
    merge({},
      CountryCode_ShortText, GeoNamesTimeZone_Plugin.CountryCode)


export const GEONAMESTIMEZONE_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  GMTOffset,
  CountryCode
} as const;


export const GEONAMESTIMEZONE_ENTITY_COLUMNS = getColumns(GEONAMESTIMEZONE_FIELD_CONFIG);

export const GEONAMESTIMEZONE_DATE_FIELDS = [];


export const [, , GeoNamesTimeZone_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_GeoNamesTimeZone,
    fieldsConfig: GEONAMESTIMEZONE_FIELD_CONFIG,
    entitiesColumns: GEONAMESTIMEZONE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(GEONAMESTIMEZONE_FIELD_CONFIG),
  };
});

