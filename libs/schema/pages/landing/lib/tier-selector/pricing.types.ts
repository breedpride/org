export interface Tier {
  callToActionText?: string;
  description: string;
  features: Feature[];
  featuresHeader: string;
  isComingSoon: boolean;
  isPopular: boolean;
  name: string;
  prices: Price[];
}

export interface Feature {
  id?: string;
  name: string;
}

export interface Price {
  buyLink?: string;
  type: string;
  value: number;
}
