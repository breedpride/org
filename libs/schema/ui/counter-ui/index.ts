// @index(['./**/*.{ts,tsx}', './*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}'`)
export * from './counter/counter.component';
export * from './entities-counter/entities-counter.component';
export * from './loading-counter/loading-counter.component';
// @endindex
