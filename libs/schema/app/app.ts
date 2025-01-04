export const struct = {
  app: {
    spaceGoups: [
      {
        id: 'publicSpaces',
        name: 'public scpaces',
        description: ' Spaces for public menu',
        type: 'page',
        spaceIds: [
          'pets',
          'breeds',
          'litters',
          'kennels',
          'contacts',
          'events',
        ],
        path: '',
      },
      {
        id: 'privateSpaces',
        name: 'Group 2',
        description: 'Private menu spaces',
        type: 'page',
        spaceIds: ['3', '4'],
        path: 'my',
      },
    ],
  },
};
