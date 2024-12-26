export interface ITier {
  callToActionText?: string;
  description: string;
  features: IFeature[];
  featuresHeader: string;
  isComingSoon: boolean;
  isPopular: boolean;
  name: string;
  prices: IPrice[];
}

export interface IFeature {
  id?: string;
  name: string;
}

export interface IPrice {
  buyLink?: string;
  type: string;
  value: number;
}

export const TREE_YEARLY = '3 yearly';
export const YEARLY = 'yearly';
export const MONTHLY = 'monthly';
export const TIERS: ITier[] = [
  {
    callToActionText: 'Free Forever',
    description: 'Best for personal use',
    features: [
      {
        name: 'Unlimited pedigree generations',
      },
      {
        name: 'Test matings',
      },
      {
        name: 'Marketplace',
      },
    ],
    featuresHeader: '',
    isComingSoon: false,
    isPopular: false,
    name: 'Free forever',
    prices: [
      {
        type: TREE_YEARLY,
        value: 0,
      },
      {
        type: YEARLY,
        value: 0,
      },
      {
        type: MONTHLY,
        value: 0,
      },
    ],
  },
  {
    callToActionText: 'Get Started',
    description: 'Best for a professional breeder',
    features: [
      {
        name: 'Litter management',
      },
      {
        name: 'Kennel management',
      },
      {
        name: 'An ability to manage the publicity of your data',
      },
    ],
    featuresHeader: 'Everything in free forever and',
    isComingSoon: false,
    isPopular: true,
    name: 'Professional',
    prices: [
      {
        buyLink:
          'https://breedpride.sellfy.store/p/premium-kennel-site-gift-dcyzvq/',
        type: TREE_YEARLY,
        value: 6.67,
      },
      {
        buyLink: 'https://breedpride.sellfy.store/p/premium-kennel-site-year/',
        type: YEARLY,
        value: 9.99,
      },
      {
        buyLink:
          'https://breedpride.sellfy.store/p/premium-kennel-site-year-mounth/',
        type: MONTHLY,
        value: 13.32,
      },
    ],
  },
  {
    callToActionText: 'Become a Patron',
    description: 'Pay what you want',
    features: [
      {
        name: 'An ability to become a Top Patron of your favorite breed',
      },
      {
        name: 'An additional contribution to your favorite breed on its way to being a most supported one',
      },
    ],
    featuresHeader: 'Everything in professional and',
    isComingSoon: false,
    isPopular: false,
    name: 'Supreme Patron',
    prices: [
      {
        type: TREE_YEARLY,
        value: 0,
      },
      {
        type: YEARLY,
        value: 0,
      },
      {
        type: MONTHLY,
        value: 0,
      },
    ],
  },
  {
    callToActionText: 'Get Started',
    description: 'Best for a professional kennel',
    features: [
      {
        name: 'Kennel site',
      },
      {
        name: 'Various site skins',
      },
      {
        name: 'Pages visits analytics',
      },
    ],
    featuresHeader: 'Everything in professional and',
    isComingSoon: true,
    isPopular: false,
    name: 'Prime',
    prices: [
      {
        type: TREE_YEARLY,
        value: 9.99,
      },
      {
        type: YEARLY,
        value: 14.98,
      },
      {
        type: MONTHLY,
        value: 19.97,
      },
    ],
  },
];
