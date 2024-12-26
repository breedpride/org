import { Litter } from '@bh/entity/config';

export interface LitterPage extends Litter {
  Children: any[];
  Federation: any;
  HasNotes: boolean;
  HasUser?: boolean;
  LitterBreeds: any[];
  PetsForSale: any[];
  Services: any[];
}

export interface LitterWithPlugins extends LitterPage {
  TierMarks: any[];
}
