import { SpaceConfig } from '@bh/superfield';
import { merge } from 'lodash-es';
import { EmptySpaceConfig } from './const';

export const getSpaceConfig = (config: Partial<SpaceConfig>): SpaceConfig =>
  merge({}, EmptySpaceConfig, config);
