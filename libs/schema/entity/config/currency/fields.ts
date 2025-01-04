

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Code_ShortText} from '@bh/field/config';import { ShortName_ShortText} from '@bh/field/config';import { Symbol_ShortText} from '@bh/field/config';import { RecalcDirection_Integer} from '@bh/field/config';import { Division_Integer} from '@bh/field/config';import { CurrecySymbolPosition_Integer} from '@bh/field/config';import { Rate_Number} from '@bh/field/config';

import { Currency_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Currency} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Currency_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, Currency_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, Currency_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, Currency_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, Currency_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, Currency_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, Currency_Plugin.Description);
const Code  =
    merge({},
      Code_ShortText, Currency_Plugin.Code);
const ShortName  =
    merge({},
      ShortName_ShortText, Currency_Plugin.ShortName);
const Symbol  =
    merge({},
      Symbol_ShortText, Currency_Plugin.Symbol);
const RecalcDirection  =
    merge({},
      RecalcDirection_Integer, Currency_Plugin.RecalcDirection);
const Division  =
    merge({},
      Division_Integer, Currency_Plugin.Division);
const CurrecySymbolPosition  =
    merge({},
      CurrecySymbolPosition_Integer, Currency_Plugin.CurrecySymbolPosition);
const Rate  =
    merge({},
      Rate_Number, Currency_Plugin.Rate);


export const CURRENCY_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  Description,
  Code,
  ShortName,
  Symbol,
  RecalcDirection,
  Division,
  CurrecySymbolPosition,
  Rate
} as const;


export const CURRENCY_ENTITY_COLUMNS = getColumns(CURRENCY_FIELD_CONFIG);

export const CURRENCY_DATE_FIELDS = [];


export const [, , Currency_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Currency,
    fieldsConfig: CURRENCY_FIELD_CONFIG,
    entitiesColumns: CURRENCY_ENTITY_COLUMNS,
    dateColumns: getDateColumns(CURRENCY_FIELD_CONFIG),
  };
});

