import { BreedprideCollection } from '@bh/entity/config';

export type BaseCollectionEntity = {
  AvatarUrl: string;
  Id: string;
  Name: string;
  Url: string;
};

export interface CollectionPage extends BreedprideCollection {
  Entities: BaseCollectionEntity[];
}
