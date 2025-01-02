import { WithDisplayField } from '@bh/superfield';
const name = 'Name';
const nameColumn = [name];

export const Name_DisplayField = {
  displayField: 'Name',
  entitiesColumns: nameColumn,
} as const satisfies WithDisplayField & { entitiesColumns: string[] };
export const Code_DisplayField: WithDisplayField & {
  entitiesColumns: string[];
} = {
  displayField: 'Code' as const,
  entitiesColumns: ['Code'] as const,
} as const;
export const WithEmptyDisplayName: WithDisplayField & {
  entitiesColumns: string[];
} = {
  displayField: '' as const,
  entitiesColumns: [] as const,
} as const;
export const DisplayPublicName: WithDisplayField & {
  entitiesColumns: string[];
} = {
  displayField: 'PublicName' as const,
  entitiesColumns: ['PublicName'] as const,
} as const;
export const DisplayNumber: WithDisplayField & { entitiesColumns: string[] } = {
  displayField: 'Number' as const,
  entitiesColumns: ['Number'] as const,
} as const;
export const DisplayTitle: WithDisplayField & { entitiesColumns: string[] } = {
  displayField: 'Title' as const,
  entitiesColumns: ['Title'] as const,
} as const;
