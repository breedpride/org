

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Description_MediumText} from '@bh/field/config';

import { Job_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Job} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Job_Plugin.Id);
const Name  =
    merge({},
      Name_MediumText, Job_Plugin.Name);
const Description  =
    merge({},
      Description_MediumText, Job_Plugin.Description);


export const JOB_FIELD_CONFIG = {

  Id,
  Name,
  Description
} as const;


export const JOB_ENTITY_COLUMNS = getColumns(JOB_FIELD_CONFIG);

export const JOB_DATE_FIELDS = [];


export const [, , Job_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Job,
    fieldsConfig: JOB_FIELD_CONFIG,
    entitiesColumns: JOB_ENTITY_COLUMNS,
    dateColumns: getDateColumns(JOB_FIELD_CONFIG),
  };
});

