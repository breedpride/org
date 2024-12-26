

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Private_Boolean} from '@bh/field/config';import { EntityName_ShortText} from '@bh/field/config';import { Auto_Boolean} from '@bh/field/config';import { Type_BreedprideCollectionType} from '@bh/field/config';import { AvatarUrl_LongText} from '@bh/field/config';import { Url_LongText} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Notes_MaxSizeText} from '@bh/field/config';import { UpdateDate_DateTime} from '@bh/field/config';import { Cover_Cover} from '@bh/field/config';import { Owner_Contact} from '@bh/field/config'

import { BreedprideCollection_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_BreedprideCollection} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, BreedprideCollection_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, BreedprideCollection_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, BreedprideCollection_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, BreedprideCollection_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, BreedprideCollection_Plugin.ModifiedBy);
const Private  =
    merge({},
      Private_Boolean, BreedprideCollection_Plugin.Private);
const EntityName  =
    merge({},
      EntityName_ShortText, BreedprideCollection_Plugin.EntityName);
const Auto  =
    merge({},
      Auto_Boolean, BreedprideCollection_Plugin.Auto);
const Type  =
    merge({},
      Type_BreedprideCollectionType, BreedprideCollection_Plugin.Type);
const AvatarUrl  =
    merge({},
      AvatarUrl_LongText, BreedprideCollection_Plugin.AvatarUrl);
const Url  =
    merge({},
      Url_LongText, BreedprideCollection_Plugin.Url);
const Name  =
    merge({},
      Name_MediumText, BreedprideCollection_Plugin.Name);
const Notes  =
    merge({},
      Notes_MaxSizeText, BreedprideCollection_Plugin.Notes);
const UpdateDate  =
    merge({},
      UpdateDate_DateTime, BreedprideCollection_Plugin.UpdateDate);
const Cover  =
    merge({},
      Cover_Cover, BreedprideCollection_Plugin.Cover);
const Owner  =
    merge({},
      Owner_Contact, BreedprideCollection_Plugin.Owner)


export const BREEDPRIDECOLLECTION_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Private,
  EntityName,
  Auto,
  Type,
  AvatarUrl,
  Url,
  Name,
  Notes,
  UpdateDate,
  Cover,
  Owner
} as const;


export const BREEDPRIDECOLLECTION_ENTITY_COLUMNS = getColumns(BREEDPRIDECOLLECTION_FIELD_CONFIG);

export const BREEDPRIDECOLLECTION_DATE_FIELDS = [];


export const [, , BreedprideCollection_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_BreedprideCollection,
    fieldsConfig: BREEDPRIDECOLLECTION_FIELD_CONFIG,
    entitiesColumns: BREEDPRIDECOLLECTION_ENTITY_COLUMNS,
    dateColumns: getDateColumns(BREEDPRIDECOLLECTION_FIELD_CONFIG),
  };
});

