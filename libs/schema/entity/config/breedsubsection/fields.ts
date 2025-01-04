

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { BreedSection_BreedSection} from '@bh/field/config';import { BreedGroup_BreedGroup} from '@bh/field/config';import { Code_Integer} from '@bh/field/config';

import { BreedSubsection_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_BreedSubsection} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, BreedSubsection_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, BreedSubsection_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, BreedSubsection_Plugin.Description);
const BreedSection  =
    merge({},
      BreedSection_BreedSection, BreedSubsection_Plugin.BreedSection);
const BreedGroup  =
    merge({},
      BreedGroup_BreedGroup, BreedSubsection_Plugin.BreedGroup);
const Code  =
    merge({},
      Code_Integer, BreedSubsection_Plugin.Code);


export const BREEDSUBSECTION_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  BreedSection,
  BreedGroup,
  Code
} as const;


export const BREEDSUBSECTION_ENTITY_COLUMNS = getColumns(BREEDSUBSECTION_FIELD_CONFIG);

export const BREEDSUBSECTION_DATE_FIELDS = [];


export const [, , BreedSubsection_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_BreedSubsection,
    fieldsConfig: BREEDSUBSECTION_FIELD_CONFIG,
    entitiesColumns: BREEDSUBSECTION_ENTITY_COLUMNS,
    dateColumns: getDateColumns(BREEDSUBSECTION_FIELD_CONFIG),
  };
});

