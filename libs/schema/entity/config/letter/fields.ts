

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';

import { Letter_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Letter} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Letter_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, Letter_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, Letter_Plugin.Description);


export const LETTER_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const LETTER_ENTITY_COLUMNS = getColumns(LETTER_FIELD_CONFIG);

export const LETTER_DATE_FIELDS = [];


export const [, , Letter_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Letter,
    fieldsConfig: LETTER_FIELD_CONFIG,
    entitiesColumns: LETTER_ENTITY_COLUMNS,
    dateColumns: getDateColumns(LETTER_FIELD_CONFIG),
  };
});

