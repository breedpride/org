// @index(['./*.{ts,tsx}', './**/*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}'`)
export * from './config';
export * from './display-field';
// @endindex
