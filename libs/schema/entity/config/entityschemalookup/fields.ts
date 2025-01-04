

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { IsPublic_Boolean} from '@bh/field/config';import { PublicName_ShortText} from '@bh/field/config';

import { EntitySchemaLookup_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_EntitySchemaLookup} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, EntitySchemaLookup_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, EntitySchemaLookup_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, EntitySchemaLookup_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, EntitySchemaLookup_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, EntitySchemaLookup_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, EntitySchemaLookup_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, EntitySchemaLookup_Plugin.Description);
const IsPublic  =
    merge({},
      IsPublic_Boolean, EntitySchemaLookup_Plugin.IsPublic);
const PublicName  =
    merge({},
      PublicName_ShortText, EntitySchemaLookup_Plugin.PublicName);


export const ENTITYSCHEMALOOKUP_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  Description,
  IsPublic,
  PublicName
} as const;


export const ENTITYSCHEMALOOKUP_ENTITY_COLUMNS = getColumns(ENTITYSCHEMALOOKUP_FIELD_CONFIG);

export const ENTITYSCHEMALOOKUP_DATE_FIELDS = [];


export const [, , EntitySchemaLookup_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_EntitySchemaLookup,
    fieldsConfig: ENTITYSCHEMALOOKUP_FIELD_CONFIG,
    entitiesColumns: ENTITYSCHEMALOOKUP_ENTITY_COLUMNS,
    dateColumns: getDateColumns(ENTITYSCHEMALOOKUP_FIELD_CONFIG),
  };
});

