import { v4 as uuid } from 'uuid';
export const createUUID = (): string => uuid();
export const isValidUUID = (UrlOrId: string | null): boolean =>
  UrlOrId
    ? Boolean(
      UrlOrId.match(
        new RegExp(
          '^({{0,1}([0-9a-fA-F]){8}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){4}-([0-9a-fA-F]){12}}{0,1})$',
          'gi'
        )
      )
    )
    : false;
