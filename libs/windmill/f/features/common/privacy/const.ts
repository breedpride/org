import { WithPrivacy } from './type';

export const Public: WithPrivacy = { isPublic: true };
export const Private: WithPrivacy = { isPublic: false };
export const withDefaultPrivacy = Public;
