

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';import { TemplateText_MaxSizeText} from '@bh/field/config';

import { PostType_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_PostType} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, PostType_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, PostType_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, PostType_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, PostType_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, PostType_Plugin.ModifiedBy);
const Name  =
    merge({},
      Name_MediumText, PostType_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, PostType_Plugin.Description);
const TemplateText  =
    merge({},
      TemplateText_MaxSizeText, PostType_Plugin.TemplateText);


export const POSTTYPE_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  Name,
  Description,
  TemplateText
} as const;


export const POSTTYPE_ENTITY_COLUMNS = getColumns(POSTTYPE_FIELD_CONFIG);

export const POSTTYPE_DATE_FIELDS = [];


export const [, , PostType_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_PostType,
    fieldsConfig: POSTTYPE_FIELD_CONFIG,
    entitiesColumns: POSTTYPE_ENTITY_COLUMNS,
    dateColumns: getDateColumns(POSTTYPE_FIELD_CONFIG),
  };
});

