

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { Code_Integer} from '@bh/field/config';import { BreedGroup_BreedGroup} from '@bh/field/config';

import { BreedSection_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_BreedSection} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, BreedSection_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, BreedSection_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, BreedSection_Plugin.Description);
const Code  =
    merge({},
      Code_Integer, BreedSection_Plugin.Code);
const BreedGroup  =
    merge({},
      BreedGroup_BreedGroup, BreedSection_Plugin.BreedGroup);


export const BREEDSECTION_FIELD_CONFIG = {

  Id,
  Name,
  Description,
  Code,
  BreedGroup
} as const;


export const BREEDSECTION_ENTITY_COLUMNS = getColumns(BREEDSECTION_FIELD_CONFIG);

export const BREEDSECTION_DATE_FIELDS = [];


export const [, , BreedSection_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_BreedSection,
    fieldsConfig: BREEDSECTION_FIELD_CONFIG,
    entitiesColumns: BREEDSECTION_ENTITY_COLUMNS,
    dateColumns: getDateColumns(BREEDSECTION_FIELD_CONFIG),
  };
});

