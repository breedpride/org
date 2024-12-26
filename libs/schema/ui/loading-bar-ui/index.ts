// @index(['./**/*.{ts,tsx}', './*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}'`)
export * from './loading-bar.component';
export * from './loading/loading.interceptor';
export * from './loading/loading.service';
// @endindex
