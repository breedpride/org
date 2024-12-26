

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { RedirectUrl_LongText} from '@bh/field/config';import { AvatarUrl_LongText} from '@bh/field/config';import { Type_CoverType} from '@bh/field/config';import { Owner_Contact} from '@bh/field/config';import { Url_LongText} from '@bh/field/config';import { Breed_Breed} from '@bh/field/config';import { IsDefault_Boolean} from '@bh/field/config'

import { Cover_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Cover} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Cover_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, Cover_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, Cover_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, Cover_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, Cover_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, Cover_Plugin.Name);
const RedirectUrl  =
    merge({},
      RedirectUrl_LongText, Cover_Plugin.RedirectUrl);
const AvatarUrl  =
    merge({},
      AvatarUrl_LongText, Cover_Plugin.AvatarUrl);
const Type  =
    merge({},
      Type_CoverType, Cover_Plugin.Type);
const Owner  =
    merge({},
      Owner_Contact, Cover_Plugin.Owner);
const Url  =
    merge({},
      Url_LongText, Cover_Plugin.Url);
const Breed  =
    merge({},
      Breed_Breed, Cover_Plugin.Breed);
const IsDefault  =
    merge({},
      IsDefault_Boolean, Cover_Plugin.IsDefault)


export const COVER_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  RedirectUrl,
  AvatarUrl,
  Type,
  Owner,
  Url,
  Breed,
  IsDefault
} as const;


export const COVER_ENTITY_COLUMNS = getColumns(COVER_FIELD_CONFIG);

export const COVER_DATE_FIELDS = [];


export const [, , Cover_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Cover,
    fieldsConfig: COVER_FIELD_CONFIG,
    entitiesColumns: COVER_ENTITY_COLUMNS,
    dateColumns: getDateColumns(COVER_FIELD_CONFIG),
  };
});

