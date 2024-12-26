

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config'

import { FirebaseAuthProvider_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_FirebaseAuthProvider} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, FirebaseAuthProvider_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, FirebaseAuthProvider_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, FirebaseAuthProvider_Plugin.Description)


export const FIREBASEAUTHPROVIDER_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const FIREBASEAUTHPROVIDER_ENTITY_COLUMNS = getColumns(FIREBASEAUTHPROVIDER_FIELD_CONFIG);

export const FIREBASEAUTHPROVIDER_DATE_FIELDS = [];


export const [, , FirebaseAuthProvider_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_FirebaseAuthProvider,
    fieldsConfig: FIREBASEAUTHPROVIDER_FIELD_CONFIG,
    entitiesColumns: FIREBASEAUTHPROVIDER_ENTITY_COLUMNS,
    dateColumns: getDateColumns(FIREBASEAUTHPROVIDER_FIELD_CONFIG),
  };
});

