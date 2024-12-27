import { signalStoreFeature, type } from "@ngrx/signals";
import { WithType } from "../typing";
import { WithId } from "@bh/identifying";
import { withFilledNamedCollection } from "@bh/collection-data";

export const withSpaces =0;// export type Space = { id: string };




export function collectionConfig<T extends WithType & WithId>(config: T) {
    return {
    entity: type<T>(),
    collection: type<T>().type,
    selectId: (c: T) => c.id,
}};

// const withTypedCollection<T extends FilterFieldConfig>(config: T) {
  
//   return withFilledNamedCollection<T, T['type']>(spaceCollectionConfig);
// }
// const collectionConfig<T extends WithType>(config: { entity: T; collection: string }) {

// export function collection<T>(config: T) {
//   const cConfig = collectionConfig<T>(config);
//    return signalStoreFeature(
//     withFilledNamedCollection<typeof cConfig, typeof config.collection>(config),
//    )
//   }