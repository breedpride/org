import { signalStore } from '@ngrx/signals';
import { withSuperStoreFeatue } from '../../collection-data/with-tree.feature';


// const withTypedCollection<T extends FilterFieldConfig>(config: T) {

//   return withFilledNamedCollection<T, T['type']>(spaceCollectionConfig);
// }
// const collectionConfig<T extends WithType>(config: { entity: T; collection: string }) {

export const ConfigStore = signalStore( { providedIn: 'root' },withSuperStoreFeatue());
// export const configStore = new ConfigStore();
// type ConfigStore = InstanceType<typeof ConfigStore>;