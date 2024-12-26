// @index(['./**/*.{ts,tsx}', './*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}'`)
export * from './edit-v2.routing';
export * from './editor.guard';
export * from './entities/common.routing';
export * from './entities/edit-litter.routing';
export * from './entities/edit-pet.routing';
// @endindex
