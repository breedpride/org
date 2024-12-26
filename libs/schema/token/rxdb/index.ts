// @index(['./**/*.{ts,tsx}', './*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}'`)
export * from './environments/environment';
export * from './environments/environment.type';
export * from './RxDB';
export * from './schemas/dictionary';
export * from './schemas/feature.schema';
export * from './schemas/hero.schema';
export * from './schemas/tree-schema';
export * from './services/database.services';
export * from './services/rxbd.reactiveity';
export * from './shared';
// @endindex
