/**
 * custom typings so typescript knows about the schema-fields
 */

import { Signal } from '@angular/core';
import { RxCollection, RxDatabase, RxDocument } from 'rxdb';
import { RxDictionaryCollection } from './schemas/dictionary';
import { RxFeatureDocumentType } from './schemas/feature.schema';
import { RxHeroDocumentType } from './schemas/hero.schema';
import { RxTreeCollection } from './schemas/tree-schema';
import { RxConfigDocumentType } from './schemas/config';
// ORM methods
type RxHeroDocMethods = {
  hpPercent(): number;
};

export type RxHeroDocument = RxDocument<RxHeroDocumentType, RxHeroDocMethods>;

export type RxFeatureDocument = RxDocument<RxFeatureDocumentType>;

export type RxHeroCollection = RxCollection<
  RxHeroDocumentType,
  RxHeroDocMethods,
  unknown,
  unknown,
  Signal<unknown>
>;

export type RxFeatureCollection = RxCollection<
  RxFeatureDocumentType,
  unknown,
  unknown,
  unknown,
  Signal<unknown>
>;
export type RxHeroesCollections = {

  config: RxCollection<
  RxConfigDocumentType,
  unknown,
  unknown,
  unknown,
  Signal<unknown>
>;
  hero: RxHeroCollection;
  feature: RxFeatureCollection;
  tree: RxTreeCollection;
  dictionary: RxDictionaryCollection;
};

export type RxHeroesDatabase = RxDatabase<
  RxHeroesCollections,
  unknown,
  unknown,
  Signal<unknown>
>;
