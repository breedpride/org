import { CustomIconMenuItem } from '@bh/types';

export const landingMenu: CustomIconMenuItem[] = [
  {
    id: 'app',
    label: 'App',
    mode: 'landingMenu',
    routerLink: 'app',
    visible: true,
    icon: 'pi pi-star',
  },
  {
    id: 'product',
    label: 'Product',
    mode: 'landingMenu',
    routerLink: 'product',
    visible: true,
    icon: 'pi pi-box',
  },
  // {
  //   id: 'learn',
  //   label: 'Learn',
  //   routerLink: '/',
  // },
  {
    id: 'pricing',
    label: 'Pricing',
    mode: 'landingMenu',
    routerLink: 'pricing',
    visible: true,
    icon: 'pi pi-dollar',
  },
  // {
  //   id: 'trending',
  //   label: 'Trending',
  //   routerLink: '/',
  // },
  // {
  //   id: 'blognews',
  //   label: 'Blog/News',
  //   routerLink: '/',
  // },
];
