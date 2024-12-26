import { MenuItem } from 'primeng/api';

export type CustomIconMenuItem = MenuItem & {
  badgeAdditional?: string;
  fillMode?: string;
  items?: CustomIconMenuItem[];
  mode?: string;
  needWrapper?: boolean;
};
