

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';

import { BodyFeature_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_BodyFeature} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, BodyFeature_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, BodyFeature_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, BodyFeature_Plugin.Description);


export const BODYFEATURE_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const BODYFEATURE_ENTITY_COLUMNS = getColumns(BODYFEATURE_FIELD_CONFIG);

export const BODYFEATURE_DATE_FIELDS = [];


export const [, , BodyFeature_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_BodyFeature,
    fieldsConfig: BODYFEATURE_FIELD_CONFIG,
    entitiesColumns: BODYFEATURE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(BODYFEATURE_FIELD_CONFIG),
  };
});

