// @index(['./**/*.{ts,tsx}', './*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}'`)
export * from './error-404/error-404.component';
export * from './error-404/error-404.routing';
export * from './error-500/error-500.component';
export * from './error-500/error-500.routing';
// @endindex
