import { PageSummary } from '../creatio.response.type';
import { PublicContact } from './extended/Contact';
export interface JCompetition {
  Id?: string;
  InternationalJudgment?: boolean;
  Name?: string;
  NationalJudgment?: boolean;

  Order?: number;

  SubCompetitions?: JCompetition[];
}

export interface ContactPage extends PublicContact {
  Career?: any;
  Emails: any[];
  FacebookLinks: any[];
  HasNotes: boolean;
  InstagramLinks: any[];
  Judge?: {
    Competitions: JCompetition[];
  }[];
  Languages: any[];
  PhoneNumbers: any[];
  summaryData?: PageSummary;
}
