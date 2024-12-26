
import {
  BreedPage,
  CollectionPage,
  ContactPage,
  CoverPage,
  EventPage,
  KennelPage,
  LitterPage,
  PetPage,
  PetTypePage,
  ProjectPage,
} from './types';


export interface PageSummary {
  favorites?: number;
  likes?: number;
  url?: string;
  visits?: number;
}

export interface BaseResult {
  data: any;
  error: string;
  isSerializedData: boolean;
  isSuccess: boolean;
}
export interface SearchResult extends BaseResult {
  nextFrom: number;
  total: number;
  //"data":
}
export interface BaseCrmResponse {
  result: BaseResult;
}
export interface CrmResponse {
  result: CreatioPage;
}
// export type CrmEntitiesListResponse = {
//   result: AnyEnityList<any>;
// } & CrmResponseWithError &
//   CrmResponseWithSerilizedData &
//   CrmResponseWithSuccess;
export interface PersonalDataResult {
  result: PageSummary;
}

export type PublicPageData =
  | (
      | BreedPage
      | CollectionPage
      | ContactPage
      | CoverPage
      | EventPage
      | KennelPage
      | LitterPage
      | PetPage
      | PetTypePage
      | ProjectPage
    )
  | null;

export interface CrmNotificationsResponse {
  result: NotificationsResponse;
}
export interface NotificationsResponse {
  data: Notification[];
  error: string;
  isSerializedData: boolean;
  isSuccess: boolean;
  pageTemplateCode: string;
  personalData: any;
  redirectUrl: string;
}
export type CrmResponseWithError = { error: string };
export type CrmResponseWithSerilizedData = { isSerializedData: boolean };
export type CrmResponseWithSuccess = { isSuccess: boolean };
export interface CommonResponse {
  error: string;
  isSerializedData: boolean;
  isSuccess: boolean;
  model: string;
  pageTemplateCode: string;
  personalData: any;
  redirectUrl: string;
}
export interface CreatioPage extends CommonResponse {
  data: PublicPageData;
}

//result
// "nextFrom": 1,
//   "total": 1,
//   "isSuccess": true,
//   "isSerializedData": true,
//   "data": "[{\"Id\":\"1c0902b2-9bf4-47e2-91fd-c25f87151947\",\"Name\":\"Dog\",\"Url\":\"dog\"}]",
//   "error":
// export decoder =
