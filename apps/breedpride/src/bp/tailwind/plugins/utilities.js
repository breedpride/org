import plugin from 'tailwindcss/plugin';

export default plugin(({ addComponents }) => {
  /*
   * Add base components. These are very important for everything to look
   * correct. We are adding these to the 'components' layer because they must
   * be defined before pretty much everything else.
   */
  addComponents({
    '.mat-icon': {
      '--tw-text-opacity': '1',
      color: 'rgba(var(--breedpride-mat-icon-rgb), var(--tw-text-opacity))',
    },
    '.text-default': {
      '--tw-text-opacity': '1 !important',
      color:
        'rgba(var(--breedpride-text-default-rgb), var(--tw-text-opacity)) !important',
    },
    // ".text-secondary": {
    //   "--tw-text-opacity": "1 !important",
    //   color:
    //     "rgba(var(--breedpride-text-secondary-rgb), var(--tw-text-opacity)) !important",
    // },
    '.text-hint': {
      '--tw-text-opacity': '1 !important',
      color:
        'rgba(var(--breedpride-text-hint-rgb), var(--tw-text-opacity)) !important',
    },
    '.text-disabled': {
      '--tw-text-opacity': '1 !important',
      color:
        'rgba(var(--breedpride-text-disabled-rgb), var(--tw-text-opacity)) !important',
    },
    '.divider': {
      color: 'var(--breedpride-divider) !important',
    },
    '.bg-default': {
      '--tw-bg-opacity': '1 !important',
      backgroundColor:
        'rgba(var(--breedpride-bg-default-rgb), var(--tw-bg-opacity)) !important',
    },
    '.bg-dialog': {
      '--tw-bg-opacity': '1 !important',
      backgroundColor:
        'rgba(var(--breedpride-bg-dialog-rgb), var(--tw-bg-opacity)) !important',
    },
    '.ring-bg-default': {
      '--tw-ring-opacity': '1 !important',
      '--tw-ring-color':
        'rgba(var(--breedpride-bg-default-rgb), var(--tw-ring-opacity)) !important',
    },
    '.ring-bg-card': {
      '--tw-ring-opacity': '1 !important',
      '--tw-ring-color':
        'rgba(var(--breedpride-bg-card-rgb), var(--tw-ring-opacity)) !important',
    },
  });

  addComponents({
    '.bg-hover': {
      backgroundColor: 'var(--breedpride-bg-hover) !important',
    },
  });
});
