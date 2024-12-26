

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { PetProfileCount_Integer} from '@bh/field/config';import { Url_LongText} from '@bh/field/config';import { OrganizationCount_Integer} from '@bh/field/config';import { ProfileCount_Integer} from '@bh/field/config';import { PatronCount_Integer} from '@bh/field/config';import { KennelCount_Integer} from '@bh/field/config';import { AvatarUrl_LongText} from '@bh/field/config';import { EventCount_Integer} from '@bh/field/config';import { PublicData_PublicData} from '@bh/field/config'

import { PetType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PetType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PetType_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, PetType_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, PetType_Plugin.Description);
const PetProfileCount  =
    merge({},
      PetProfileCount_Integer, PetType_Plugin.PetProfileCount);
const Url  =
    merge({},
      Url_LongText, PetType_Plugin.Url);
const OrganizationCount  =
    merge({},
      OrganizationCount_Integer, PetType_Plugin.OrganizationCount);
const ProfileCount  =
    merge({},
      ProfileCount_Integer, PetType_Plugin.ProfileCount);
const PatronCount  =
    merge({},
      PatronCount_Integer, PetType_Plugin.PatronCount);
const KennelCount  =
    merge({},
      KennelCount_Integer, PetType_Plugin.KennelCount);
const AvatarUrl  =
    merge({},
      AvatarUrl_LongText, PetType_Plugin.AvatarUrl);
const EventCount  =
    merge({},
      EventCount_Integer, PetType_Plugin.EventCount);
const PublicData  =
    merge({},
      PublicData_PublicData, PetType_Plugin.PublicData)


export const PETTYPE_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  PetProfileCount,
  Url,
  OrganizationCount,
  ProfileCount,
  PatronCount,
  KennelCount,
  AvatarUrl,
  EventCount,
  PublicData
} as const;


export const PETTYPE_ENTITY_COLUMNS = getColumns(PETTYPE_FIELD_CONFIG);

export const PETTYPE_DATE_FIELDS = [];


export const [, , PetType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PetType,
    fieldsConfig: PETTYPE_FIELD_CONFIG,
    entitiesColumns: PETTYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(PETTYPE_FIELD_CONFIG),
  };
});

