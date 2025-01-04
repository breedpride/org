

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Subsection_BreedSubsection} from '@bh/field/config';import { Section_BreedSection} from '@bh/field/config';import { Group_BreedGroup} from '@bh/field/config';import { Code_ShortText} from '@bh/field/config';import { Provider_Account} from '@bh/field/config';import { Breed_Breed} from '@bh/field/config';import { Effective_Date} from '@bh/field/config';import { Approved_Date} from '@bh/field/config';import { Link_MediumText} from '@bh/field/config';import { WorkingTrial_Boolean} from '@bh/field/config';import { Status_BreedStandardStatus} from '@bh/field/config';import { HasVariableDivisions_Boolean} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';

import { BreedStandard_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_BreedStandard} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, BreedStandard_Plugin.Id);
const Subsection  =
    merge({},
      Subsection_BreedSubsection, BreedStandard_Plugin.Subsection);
const Section  =
    merge({},
      Section_BreedSection, BreedStandard_Plugin.Section);
const Group  =
    merge({},
      Group_BreedGroup, BreedStandard_Plugin.Group);
const Code  =
    merge({},
      Code_ShortText, BreedStandard_Plugin.Code);
const Provider  =
    merge({},
      Provider_Account, BreedStandard_Plugin.Provider);
const Breed  =
    merge({},
      Breed_Breed, BreedStandard_Plugin.Breed);
const Effective  =
    merge({},
      Effective_Date, BreedStandard_Plugin.Effective);
const Approved  =
    merge({},
      Approved_Date, BreedStandard_Plugin.Approved);
const Link  =
    merge({},
      Link_MediumText, BreedStandard_Plugin.Link);
const WorkingTrial  =
    merge({},
      WorkingTrial_Boolean, BreedStandard_Plugin.WorkingTrial);
const Status  =
    merge({},
      Status_BreedStandardStatus, BreedStandard_Plugin.Status);
const HasVariableDivisions  =
    merge({},
      HasVariableDivisions_Boolean, BreedStandard_Plugin.HasVariableDivisions);
const Name  =
    merge({},
      Name_MediumText, BreedStandard_Plugin.Name);


export const BREEDSTANDARD_FIELD_CONFIG = {

  Id,
  Subsection,
  Section,
  Group,
  Code,
  Provider,
  Breed,
  Effective,
  Approved,
  Link,
  WorkingTrial,
  Status,
  HasVariableDivisions,
  Name
} as const;


export const BREEDSTANDARD_ENTITY_COLUMNS = getColumns(BREEDSTANDARD_FIELD_CONFIG);

export const BREEDSTANDARD_DATE_FIELDS = [];


export const [, , BreedStandard_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_BreedStandard,
    fieldsConfig: BREEDSTANDARD_FIELD_CONFIG,
    entitiesColumns: BREEDSTANDARD_ENTITY_COLUMNS,
    dateColumns: getDateColumns(BREEDSTANDARD_FIELD_CONFIG),
  };
});

