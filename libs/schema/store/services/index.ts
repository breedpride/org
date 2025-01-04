// @index(['./**/*.{ts,tsx}', './*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}'`)
export * from './action.service';
export * from './bpconfirmation.service';
export * from './firestore.service';
export * from './json-ld.service';
export * from './personalized-data.service';
// @endindex
