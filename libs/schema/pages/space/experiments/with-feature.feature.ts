export const experiment = [];
// interface WithFeature<
//   N = string,
//   T = 'property' | 'table' | 'entity' | 'collection',
//   D = any,
// > {
//   withName: N; // Назва фічі (наприклад, властивість або таблиця)
//   type: T; // Тип фічі: 'property', 'table', 'entity', 'collection'
//   dataType?: D | D[]; // Тип даних, який може бути простим типом або масивом типів
//   isRequired?: boolean;
//   isReadOnly?: boolean;
//   withFeatures?: WithFeature[]; // Для таблиць або складних фіч можна вказати список фіч
//   settings?: Record<string, any>; // Додаткові налаштування
// }
// type DebugType<T> = T;
// type DynamicType<F extends WithFeature> = F extends {
//   withFeatures: WithFeature[];
// }
//   ? {
//       [K in F['withFeatures'][number]['withName']]: F['withFeatures'][number]['type'] extends 'property'
//         ? F['withFeatures'][number]['dataType']
//         : F['withFeatures'][number]['type'] extends 'entity'
//           ? DynamicType<F['withFeatures'][number]>
//           : F['withFeatures'][number]['type'] extends 'collection'
//             ? DynamicType<F['withFeatures'][number]>[]
//             : never;
//     }
//   : F['dataType'];
