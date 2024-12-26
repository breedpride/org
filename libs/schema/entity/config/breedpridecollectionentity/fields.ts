

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { RecordId_Guid} from '@bh/field/config';import { Collection_BreedprideCollection} from '@bh/field/config';import { Contact_Contact} from '@bh/field/config';import { Account_Account} from '@bh/field/config';import { Event_Event} from '@bh/field/config';import { Pet_Pet} from '@bh/field/config'

import { BreedprideCollectionEntity_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_BreedprideCollectionEntity} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, BreedprideCollectionEntity_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, BreedprideCollectionEntity_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, BreedprideCollectionEntity_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, BreedprideCollectionEntity_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, BreedprideCollectionEntity_Plugin.ModifiedBy);
const RecordId  =
    merge({},
      RecordId_Guid, BreedprideCollectionEntity_Plugin.RecordId);
const Collection  =
    merge({},
      Collection_BreedprideCollection, BreedprideCollectionEntity_Plugin.Collection);
const Contact  =
    merge({},
      Contact_Contact, BreedprideCollectionEntity_Plugin.Contact);
const Account  =
    merge({},
      Account_Account, BreedprideCollectionEntity_Plugin.Account);
const Event  =
    merge({},
      Event_Event, BreedprideCollectionEntity_Plugin.Event);
const Pet  =
    merge({},
      Pet_Pet, BreedprideCollectionEntity_Plugin.Pet)


export const BREEDPRIDECOLLECTIONENTITY_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  RecordId,
  Collection,
  Contact,
  Account,
  Event,
  Pet
} as const;


export const BREEDPRIDECOLLECTIONENTITY_ENTITY_COLUMNS = getColumns(BREEDPRIDECOLLECTIONENTITY_FIELD_CONFIG);

export const BREEDPRIDECOLLECTIONENTITY_DATE_FIELDS = [];


export const [, , BreedprideCollectionEntity_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_BreedprideCollectionEntity,
    fieldsConfig: BREEDPRIDECOLLECTIONENTITY_FIELD_CONFIG,
    entitiesColumns: BREEDPRIDECOLLECTIONENTITY_ENTITY_COLUMNS,
    dateColumns: getDateColumns(BREEDPRIDECOLLECTIONENTITY_FIELD_CONFIG),
  };
});

