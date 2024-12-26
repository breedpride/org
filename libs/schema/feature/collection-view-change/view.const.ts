import { ModelCodeType } from '@bh/consts';
import { EntitiesView } from '@bh/superfield';
export const LIST_ID = 'list';
export const GRID_ID = 'grid';
export const TABLE_ID = 'table';
export const MAP_ID = 'map';
export const GRAPH_ID = 'graph';

const withoutComponent = () => {
  // TODO: Implement the loadComponent function
};
export const DEFAULT_LIST: EntitiesView = {
  id: LIST_ID,
  name: 'list',
  icon: 'pi pi-bars',
  loadComponent: withoutComponent,
  card: ModelCodeType.UNKNOWN,
  viewStrategy: 'sidebar',
  height: 68,
  toolTip: 'List view',
};

export const DEFAULT_GRID: EntitiesView = {
  id: GRID_ID,
  name: 'grid',
  icon: 'pi pi-th-large',
  loadComponent: withoutComponent,
  card: ModelCodeType.UNKNOWN,
  viewStrategy: 'publicPage',
  height: 280,
  toolTip: 'Grid view',
};
export const DEFAULT_TABLE: EntitiesView = {
  id: TABLE_ID,
  name: 'table',
  icon: 'pi pi-table',
  loadComponent: withoutComponent,
  card: ModelCodeType.UNKNOWN,
  viewStrategy: 'modal',
  height: 68,
  toolTip: 'Table view',
};

export const DEFAULT_MAP: EntitiesView = {
  id: MAP_ID,
  name: 'map',
  icon: 'pi pi-map',
  loadComponent: withoutComponent,
  card: ModelCodeType.UNKNOWN,
  viewStrategy: 'none',
  height: 68,
  toolTip: 'Map view',
};

export const DEFAULT_GRAPH: EntitiesView = {
  id: GRAPH_ID,
  name: 'graph',
  icon: 'pi pi-share-alt',
  loadComponent: withoutComponent,
  card: ModelCodeType.UNKNOWN,
  viewStrategy: 'none',
  height: 68,
  toolTip: 'Graph view',
};
