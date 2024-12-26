

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { PetType_PetType} from '@bh/field/config';import { DifferByCoatColor_Boolean} from '@bh/field/config';import { DifferByCoatType_Boolean} from '@bh/field/config';import { DifferBySize_Boolean} from '@bh/field/config';import { Language_SysLanguage} from '@bh/field/config';import { AuthenticName_MediumText} from '@bh/field/config';import { DifferByBodyFeature_Boolean} from '@bh/field/config';import { PetProfileCount_Integer} from '@bh/field/config';import { Category_BreedCategory} from '@bh/field/config';import { KennelCount_Integer} from '@bh/field/config';import { HasRelatedBreed_Boolean} from '@bh/field/config';import { AdminName_MediumText} from '@bh/field/config';import { Url_LongText} from '@bh/field/config';import { Account_Account} from '@bh/field/config';import { PatronCount_Integer} from '@bh/field/config';import { AvatarUrl_LongText} from '@bh/field/config';import { Rating_Number} from '@bh/field/config';import { AchievementProgress_Number} from '@bh/field/config';import { Cover_Cover} from '@bh/field/config';import { PaymentRating_Number} from '@bh/field/config';import { PublicData_PublicData} from '@bh/field/config'

import { Breed_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Breed} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Breed_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, Breed_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, Breed_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, Breed_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, Breed_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, Breed_Plugin.Name);
const PetType  =
    merge({},
      PetType_PetType, Breed_Plugin.PetType);
const DifferByCoatColor  =
    merge({},
      DifferByCoatColor_Boolean, Breed_Plugin.DifferByCoatColor);
const DifferByCoatType  =
    merge({},
      DifferByCoatType_Boolean, Breed_Plugin.DifferByCoatType);
const DifferBySize  =
    merge({},
      DifferBySize_Boolean, Breed_Plugin.DifferBySize);
const Language  =
    merge({},
      Language_SysLanguage, Breed_Plugin.Language);
const AuthenticName  =
    merge({},
      AuthenticName_MediumText, Breed_Plugin.AuthenticName);
const DifferByBodyFeature  =
    merge({},
      DifferByBodyFeature_Boolean, Breed_Plugin.DifferByBodyFeature);
const PetProfileCount  =
    merge({},
      PetProfileCount_Integer, Breed_Plugin.PetProfileCount);
const Category  =
    merge({},
      Category_BreedCategory, Breed_Plugin.Category);
const KennelCount  =
    merge({},
      KennelCount_Integer, Breed_Plugin.KennelCount);
const HasRelatedBreed  =
    merge({},
      HasRelatedBreed_Boolean, Breed_Plugin.HasRelatedBreed);
const AdminName  =
    merge({},
      AdminName_MediumText, Breed_Plugin.AdminName);
const Url  =
    merge({},
      Url_LongText, Breed_Plugin.Url);
const Account  =
    merge({},
      Account_Account, Breed_Plugin.Account);
const PatronCount  =
    merge({},
      PatronCount_Integer, Breed_Plugin.PatronCount);
const AvatarUrl  =
    merge({},
      AvatarUrl_LongText, Breed_Plugin.AvatarUrl);
const Rating  =
    merge({},
      Rating_Number, Breed_Plugin.Rating);
const AchievementProgress  =
    merge({},
      AchievementProgress_Number, Breed_Plugin.AchievementProgress);
const Cover  =
    merge({},
      Cover_Cover, Breed_Plugin.Cover);
const PaymentRating  =
    merge({},
      PaymentRating_Number, Breed_Plugin.PaymentRating);
const PublicData  =
    merge({},
      PublicData_PublicData, Breed_Plugin.PublicData)


export const BREED_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  PetType,
  DifferByCoatColor,
  DifferByCoatType,
  DifferBySize,
  Language,
  AuthenticName,
  DifferByBodyFeature,
  PetProfileCount,
  Category,
  KennelCount,
  HasRelatedBreed,
  AdminName,
  Url,
  Account,
  PatronCount,
  AvatarUrl,
  Rating,
  AchievementProgress,
  Cover,
  PaymentRating,
  PublicData
} as const;


export const BREED_ENTITY_COLUMNS = getColumns(BREED_FIELD_CONFIG);

export const BREED_DATE_FIELDS = [];


export const [, , Breed_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Breed,
    fieldsConfig: BREED_FIELD_CONFIG,
    entitiesColumns: BREED_ENTITY_COLUMNS,
    dateColumns: getDateColumns(BREED_FIELD_CONFIG),
  };
});

