import {
  SPACE_URL_BREED,
  SPACE_URL_CONTACT,
  SPACE_URL_EVENT,
  SPACE_URL_KENNEL,
  SPACE_URL_LITTER,
  SPACE_URL_PET,
  URL_DOG,
} from '@bh/space-url';
import { CustomIconMenuItem } from '@bh/types';

export const ngMenu: CustomIconMenuItem[] = [
  {
    id: 'spaces',
    items: [
      {
        icon: 'breed',
        id: 'breeds',
        label: 'Breeds',
        mode: 'mainMenu',
        needWrapper: true,
        queryParams: { PetType: URL_DOG },
        routerLink: '/' + SPACE_URL_BREED,
      },
      {
        icon: 'paw',
        id: 'pets',
        label: 'Pets',
        mode: 'mainMenu',
        needWrapper: true,
        // queryParams: { PetType: URL_DOG },
        routerLink: '/' + SPACE_URL_PET,
      },
      {
        icon: 'litter',
        id: 'litters',
        label: 'Litters',
        mode: 'mainMenu',
        needWrapper: true,
        routerLink: '/' + SPACE_URL_LITTER,
        // queryParams: { AccountType: dogUrl },
      },
      {
        icon: 'kennel-owner',
        id: 'kennels',
        label: 'Kennels',
        mode: 'mainMenu',
        needWrapper: true,
        routerLink: '/' + SPACE_URL_KENNEL,
        // queryParams: { AccountType: dogUrl },
      },
      {
        icon: 'breeder',
        id: 'contacts',
        label: 'Contacts',
        mode: 'mainMenu',
        needWrapper: true,
        routerLink: '/' + SPACE_URL_CONTACT,
        // queryParams: { AccountType: dogUrl },
      },
      {
        icon: 'cup',
        id: 'events',
        label: 'Events',
        mode: 'mainMenu',
        needWrapper: true,
        routerLink: '/' + SPACE_URL_EVENT,
        // queryParams: { AccountType: dogUrl },
      },
    ] as CustomIconMenuItem[],
    label: 'Spaces',
  },
];
