

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';

import { AccountCategory_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_AccountCategory} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, AccountCategory_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, AccountCategory_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, AccountCategory_Plugin.Description);


export const ACCOUNTCATEGORY_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const ACCOUNTCATEGORY_ENTITY_COLUMNS = getColumns(ACCOUNTCATEGORY_FIELD_CONFIG);

export const ACCOUNTCATEGORY_DATE_FIELDS = [];


export const [, , AccountCategory_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_AccountCategory,
    fieldsConfig: ACCOUNTCATEGORY_FIELD_CONFIG,
    entitiesColumns: ACCOUNTCATEGORY_ENTITY_COLUMNS,
    dateColumns: getDateColumns(ACCOUNTCATEGORY_FIELD_CONFIG),
  };
});

