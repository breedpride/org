

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { DivisionByColor_Boolean} from '@bh/field/config';import { Breed_Breed} from '@bh/field/config';import { IsMain_Boolean} from '@bh/field/config';import { DivisionByBodyFeature_Boolean} from '@bh/field/config';import { DivisionBySize_Boolean} from '@bh/field/config';import { DivisionByCoatType_Boolean} from '@bh/field/config';import { BreedStandard_BreedStandard} from '@bh/field/config'

import { BreedDivision_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_BreedDivision} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, BreedDivision_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, BreedDivision_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, BreedDivision_Plugin.Description);
const DivisionByColor  =
    merge({},
      DivisionByColor_Boolean, BreedDivision_Plugin.DivisionByColor);
const Breed  =
    merge({},
      Breed_Breed, BreedDivision_Plugin.Breed);
const IsMain  =
    merge({},
      IsMain_Boolean, BreedDivision_Plugin.IsMain);
const DivisionByBodyFeature  =
    merge({},
      DivisionByBodyFeature_Boolean, BreedDivision_Plugin.DivisionByBodyFeature);
const DivisionBySize  =
    merge({},
      DivisionBySize_Boolean, BreedDivision_Plugin.DivisionBySize);
const DivisionByCoatType  =
    merge({},
      DivisionByCoatType_Boolean, BreedDivision_Plugin.DivisionByCoatType);
const BreedStandard  =
    merge({},
      BreedStandard_BreedStandard, BreedDivision_Plugin.BreedStandard)


export const BREEDDIVISION_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  DivisionByColor,
  Breed,
  IsMain,
  DivisionByBodyFeature,
  DivisionBySize,
  DivisionByCoatType,
  BreedStandard
} as const;


export const BREEDDIVISION_ENTITY_COLUMNS = getColumns(BREEDDIVISION_FIELD_CONFIG);

export const BREEDDIVISION_DATE_FIELDS = [];


export const [, , BreedDivision_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_BreedDivision,
    fieldsConfig: BREEDDIVISION_FIELD_CONFIG,
    entitiesColumns: BREEDDIVISION_ENTITY_COLUMNS,
    dateColumns: getDateColumns(BREEDDIVISION_FIELD_CONFIG),
  };
});

