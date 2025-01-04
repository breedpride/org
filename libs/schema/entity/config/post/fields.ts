

// ----------------- AUTO GENERATED FILE-----------
// Changes will be overwritten
// ------------------------------------------------

import { merge } from 'lodash-es';
import { Id_Guid} from '@bh/field/config';import { CreatedOn_DateTime} from '@bh/field/config';import { CreatedBy_Contact} from '@bh/field/config';import { ModifiedOn_DateTime} from '@bh/field/config';import { ModifiedBy_Contact} from '@bh/field/config';import { PublicationDate_DateTime} from '@bh/field/config';import { Type_PostType} from '@bh/field/config';import { State_PostState} from '@bh/field/config';import { Text_MaxSizeText} from '@bh/field/config';import { Url_MediumText} from '@bh/field/config';import { MasterPost_Post} from '@bh/field/config';import { IsMoment_Boolean} from '@bh/field/config';import { Author_Contact} from '@bh/field/config';import { Name_MediumText} from '@bh/field/config';import { Date_Date} from '@bh/field/config';import { Event_Event} from '@bh/field/config';import { Latitude_Number} from '@bh/field/config';import { Longitude_Number} from '@bh/field/config';import { Photos_MaxSizeText} from '@bh/field/config';import { Participants_MaxSizeText} from '@bh/field/config';import { Cover_Cover} from '@bh/field/config';

import { Post_Plugin  } from './fields.plugin';
import { getColumns, getDateColumns } from '@bh/entity/consts';
import {createInjectionToken} from 'ngxtension/create-injection-token';
import {Lookup_Post} from '@bh/db/config';


const Id  =
    merge({},
      Id_Guid, Post_Plugin.Id);
const CreatedOn  =
    merge({},
      CreatedOn_DateTime, Post_Plugin.CreatedOn);
const CreatedBy  =
    merge({},
      CreatedBy_Contact, Post_Plugin.CreatedBy);
const ModifiedOn  =
    merge({},
      ModifiedOn_DateTime, Post_Plugin.ModifiedOn);
const ModifiedBy  =
    merge({},
      ModifiedBy_Contact, Post_Plugin.ModifiedBy);
const PublicationDate  =
    merge({},
      PublicationDate_DateTime, Post_Plugin.PublicationDate);
const Type  =
    merge({},
      Type_PostType, Post_Plugin.Type);
const State  =
    merge({},
      State_PostState, Post_Plugin.State);
const Text  =
    merge({},
      Text_MaxSizeText, Post_Plugin.Text);
const Url  =
    merge({},
      Url_MediumText, Post_Plugin.Url);
const MasterPost  =
    merge({},
      MasterPost_Post, Post_Plugin.MasterPost);
const IsMoment  =
    merge({},
      IsMoment_Boolean, Post_Plugin.IsMoment);
const Author  =
    merge({},
      Author_Contact, Post_Plugin.Author);
const Name  =
    merge({},
      Name_MediumText, Post_Plugin.Name);
const Date  =
    merge({},
      Date_Date, Post_Plugin.Date);
const Event  =
    merge({},
      Event_Event, Post_Plugin.Event);
const Latitude  =
    merge({},
      Latitude_Number, Post_Plugin.Latitude);
const Longitude  =
    merge({},
      Longitude_Number, Post_Plugin.Longitude);
const Photos  =
    merge({},
      Photos_MaxSizeText, Post_Plugin.Photos);
const Participants  =
    merge({},
      Participants_MaxSizeText, Post_Plugin.Participants);
const Cover  =
    merge({},
      Cover_Cover, Post_Plugin.Cover);


export const POST_FIELD_CONFIG = {

  Id,
  CreatedOn,
  CreatedBy,
  ModifiedOn,
  ModifiedBy,
  PublicationDate,
  Type,
  State,
  Text,
  Url,
  MasterPost,
  IsMoment,
  Author,
  Name,
  Date,
  Event,
  Latitude,
  Longitude,
  Photos,
  Participants,
  Cover
} as const;


export const POST_ENTITY_COLUMNS = getColumns(POST_FIELD_CONFIG);

export const POST_DATE_FIELDS = [];


export const [, , Post_SCHEMA] = createInjectionToken(() => {
  return {
    ...Lookup_Post,
    fieldsConfig: POST_FIELD_CONFIG,
    entitiesColumns: POST_ENTITY_COLUMNS,
    dateColumns: getDateColumns(POST_FIELD_CONFIG),
  };
});

