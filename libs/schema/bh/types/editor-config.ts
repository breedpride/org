import { Injector } from '@angular/core';
import { EditorComponentName } from './unsorted';

export interface EditorConfig {
  injector: Injector;
  editorComponent?: EditorComponentName;
  editComponent?: any;
  editorTemplete?: any;
  entityData?: any;
  // TODO in one situation we use entityId for parentEntity and in other entityStore
  entityId?: string;
  entityStore?: any; // SpaceStore or detail Store
  entitiesStore?: any;
  callBack?: any;
}
