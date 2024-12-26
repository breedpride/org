

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Code_ShortText} from '@bh/field/config';import { Offset_ShortText} from '@bh/field/config';import { CodeAmerican_ShortText} from '@bh/field/config'

import { TimeZone_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_TimeZone} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, TimeZone_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, TimeZone_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, TimeZone_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, TimeZone_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, TimeZone_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, TimeZone_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, TimeZone_Plugin.Description);
const Code  =
    merge({},
      Code_ShortText, TimeZone_Plugin.Code);
const Offset  =
    merge({},
      Offset_ShortText, TimeZone_Plugin.Offset);
const CodeAmerican  =
    merge({},
      CodeAmerican_ShortText, TimeZone_Plugin.CodeAmerican)


export const TIMEZONE_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  Description,
  Code,
  Offset,
  CodeAmerican
} as const;


export const TIMEZONE_ENTITY_COLUMNS = getColumns(TIMEZONE_FIELD_CONFIG);

export const TIMEZONE_DATE_FIELDS = [];


export const [, , TimeZone_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_TimeZone,
    fieldsConfig: TIMEZONE_FIELD_CONFIG,
    entitiesColumns: TIMEZONE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(TIMEZONE_FIELD_CONFIG),
  };
});

