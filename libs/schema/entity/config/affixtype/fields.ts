

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config'

import { AffixType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_AffixType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, AffixType_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, AffixType_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, AffixType_Plugin.Description)


export const AFFIXTYPE_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const AFFIXTYPE_ENTITY_COLUMNS = getColumns(AFFIXTYPE_FIELD_CONFIG);

export const AFFIXTYPE_DATE_FIELDS = [];


export const [, , AffixType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_AffixType,
    fieldsConfig: AFFIXTYPE_FIELD_CONFIG,
    entitiesColumns: AFFIXTYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(AFFIXTYPE_FIELD_CONFIG),
  };
});

