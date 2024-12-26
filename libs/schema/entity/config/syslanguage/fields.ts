

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Code_ShortText} from '@bh/field/config';import { IsUsed_Boolean} from '@bh/field/config';import { SysCultureDefId_Guid} from '@bh/field/config'

import { SysLanguage_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_SysLanguage} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, SysLanguage_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, SysLanguage_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, SysLanguage_Plugin.Description);
const Code  =
    merge({},
      Code_ShortText, SysLanguage_Plugin.Code);
const IsUsed  =
    merge({},
      IsUsed_Boolean, SysLanguage_Plugin.IsUsed);
const SysCultureDefId  =
    merge({},
      SysCultureDefId_Guid, SysLanguage_Plugin.SysCultureDefId)


export const SYSLANGUAGE_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  Code,
  IsUsed,
  SysCultureDefId
} as const;


export const SYSLANGUAGE_ENTITY_COLUMNS = getColumns(SYSLANGUAGE_FIELD_CONFIG);

export const SYSLANGUAGE_DATE_FIELDS = [];


export const [, , SysLanguage_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_SysLanguage,
    fieldsConfig: SYSLANGUAGE_FIELD_CONFIG,
    entitiesColumns: SYSLANGUAGE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(SYSLANGUAGE_FIELD_CONFIG),
  };
});

