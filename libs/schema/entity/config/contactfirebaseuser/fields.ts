

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { FirebaseUId_ShortText} from '@bh/field/config';import { Contact_Contact} from '@bh/field/config';import { FirebaseAuthProvider_FirebaseAuthProvider} from '@bh/field/config';import { Email_LongText} from '@bh/field/config';import { Referral_Referral} from '@bh/field/config'

import { ContactFirebaseUser_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_ContactFirebaseUser} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, ContactFirebaseUser_Plugin.Id);
const FirebaseUId  =
    merge({},
      FirebaseUId_ShortText, ContactFirebaseUser_Plugin.FirebaseUId);
const Contact  =
    merge({},
      Contact_Contact, ContactFirebaseUser_Plugin.Contact);
const FirebaseAuthProvider  =
    merge({},
      FirebaseAuthProvider_FirebaseAuthProvider, ContactFirebaseUser_Plugin.FirebaseAuthProvider);
const Email  =
    merge({},
      Email_LongText, ContactFirebaseUser_Plugin.Email);
const Referral  =
    merge({},
      Referral_Referral, ContactFirebaseUser_Plugin.Referral)


export const CONTACTFIREBASEUSER_FIELD_CONFIG = {

  Id,
  FirebaseUId,
  Contact,
  FirebaseAuthProvider,
  Email,
  Referral
} as const;


export const CONTACTFIREBASEUSER_ENTITY_COLUMNS = getColumns(CONTACTFIREBASEUSER_FIELD_CONFIG);

export const CONTACTFIREBASEUSER_DATE_FIELDS = [];


export const [, , ContactFirebaseUser_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_ContactFirebaseUser,
    fieldsConfig: CONTACTFIREBASEUSER_FIELD_CONFIG,
    entitiesColumns: CONTACTFIREBASEUSER_ENTITY_COLUMNS,
    dateColumns: getDateColumns(CONTACTFIREBASEUSER_FIELD_CONFIG),
  };
});

