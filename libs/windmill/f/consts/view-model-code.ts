export const ModelCodeType = {
  BREED: 3,
  COLLECTION: 10,
  CONTACT: 1,
  COVER: 8,
  EVENT: 4, //Proejct
  KENNEL: 5,
  LITTER: 6,
  LOOKUP: 11,
  MOMENT: 12,
  NOTE: 9,
  PET: 2,
  POST: 13,
  SETTINGS: 7,
  UNKNOWN: 0,
};

export type ModelCodeType = (typeof ModelCodeType)[keyof typeof ModelCodeType];
