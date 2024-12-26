

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config'

import { BreedprideCollectionType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_BreedprideCollectionType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, BreedprideCollectionType_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, BreedprideCollectionType_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, BreedprideCollectionType_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, BreedprideCollectionType_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, BreedprideCollectionType_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, BreedprideCollectionType_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, BreedprideCollectionType_Plugin.Description)


export const BREEDPRIDECOLLECTIONTYPE_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  Description
} as const;


export const BREEDPRIDECOLLECTIONTYPE_ENTITY_COLUMNS = getColumns(BREEDPRIDECOLLECTIONTYPE_FIELD_CONFIG);

export const BREEDPRIDECOLLECTIONTYPE_DATE_FIELDS = [];


export const [, , BreedprideCollectionType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_BreedprideCollectionType,
    fieldsConfig: BREEDPRIDECOLLECTIONTYPE_FIELD_CONFIG,
    entitiesColumns: BREEDPRIDECOLLECTIONTYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(BREEDPRIDECOLLECTIONTYPE_FIELD_CONFIG),
  };
});

