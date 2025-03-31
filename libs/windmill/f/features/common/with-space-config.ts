import { FilterFieldConfig } from './filter-store-state';

import { EntitiesView } from './collection';

export interface ColumnField extends FilterFieldConfig {
  class?: string;
  ngClass?: string;
}

export interface MiniSpaceApiConfig {
  entitiesColumns?: string[];
  entityColumns?: string[];
  entitySchemaName?: string;
  filterFields?: FilterFieldConfig[];
  filterKey: string;
  id?: string;
}

export type SpaceConfig = FilterFieldConfig & {
  type: 'space';
  viewConfig?: EntitiesView[];
  canAdd?: boolean;
  canEdit?: boolean;
  // FOR detail
  // TODO  merge with entitiesColumns
  columns?: ColumnField[]; // Detail view columns
  defaultEntityData?: Record<string, (entity: Record<string, any>) => any>; // DetailApiConfig (parentEntity => entity)

  url?: string;
  // entitiesColumns?: string[];
  // TODO -  read from schema - use not list but Map for field in map  - with computed fiedls (for dates and etc)
  entityColumns?: string[];
  // TODO: - rework {id and schemaName entityModelView

  filterKey?: string; // DetailApiConfig
  naming?: SpaceNaming;
  queryExtensions?: MiniSpaceApiConfig[];
};

export interface SpaceNaming {
  editCompomentHeaderString?: string;
  noSearchResults?: string;
  plural?: {
    no?: string;
    one?: string;
    other?: string;
  };
  searchPlaceholder?: string;
  title?: string;
}

export type WithSpaceConfig = {
  config: SpaceConfig;
};
