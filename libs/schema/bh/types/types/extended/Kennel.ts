import { PublicAccount } from './Account';

export interface PublicKennel extends PublicAccount {
  HasNotes: boolean;
  HasUser?: boolean;
  Services?: any[];
  TierMarks: any[];
}
