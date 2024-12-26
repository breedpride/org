

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MaxSizeText} from '@bh/field/config';import { Notes_MaxSizeText} from '@bh/field/config';import { Pet_Pet} from '@bh/field/config';import { Project_Project} from '@bh/field/config';import { Event_Event} from '@bh/field/config';import { Contact_Contact} from '@bh/field/config';import { Account_Account} from '@bh/field/config';import { Breed_Breed} from '@bh/field/config';import { Owner_Contact} from '@bh/field/config';import { Cover_Cover} from '@bh/field/config';import { RecordId_Guid} from '@bh/field/config';import { EntitySchema_EntitySchemaLookup} from '@bh/field/config';import { Litter_Litter} from '@bh/field/config'

import { Note_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Note} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Note_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, Note_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, Note_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, Note_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, Note_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MaxSizeText, Note_Plugin.Name);
const Notes  =
    merge({},
      Notes_MaxSizeText, Note_Plugin.Notes);
const Pet  =
    merge({},
      Pet_Pet, Note_Plugin.Pet);
const Project  =
    merge({},
      Project_Project, Note_Plugin.Project);
const Event  =
    merge({},
      Event_Event, Note_Plugin.Event);
const Contact  =
    merge({},
      Contact_Contact, Note_Plugin.Contact);
const Account  =
    merge({},
      Account_Account, Note_Plugin.Account);
const Breed  =
    merge({},
      Breed_Breed, Note_Plugin.Breed);
const Owner  =
    merge({},
      Owner_Contact, Note_Plugin.Owner);
const Cover  =
    merge({},
      Cover_Cover, Note_Plugin.Cover);
const RecordId  =
    merge({},
      RecordId_Guid, Note_Plugin.RecordId);
const EntitySchema  =
    merge({},
      EntitySchema_EntitySchemaLookup, Note_Plugin.EntitySchema);
const Litter  =
    merge({},
      Litter_Litter, Note_Plugin.Litter)


export const NOTE_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  Notes,
  Pet,
  Project,
  Event,
  Contact,
  Account,
  Breed,
  Owner,
  Cover,
  RecordId,
  EntitySchema,
  Litter
} as const;


export const NOTE_ENTITY_COLUMNS = getColumns(NOTE_FIELD_CONFIG);

export const NOTE_DATE_FIELDS = [];


export const [, , Note_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Note,
    fieldsConfig: NOTE_FIELD_CONFIG,
    entitiesColumns: NOTE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(NOTE_FIELD_CONFIG),
  };
});

