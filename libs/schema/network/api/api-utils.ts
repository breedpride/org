import { tap } from 'rxjs';

export const logPage = tap((e: any) => {
  console.log(
    `PAGE:[${e.result?.data?.Name}]`,
    e.result?.data || e.error || e.result.error
  );
});

export const upperCasedScheme = ({
  entitySchemaName,
}: {
  entitySchemaName: string;
}): boolean => {
  return ['Account', 'Contact', 'Pet'].some((e) => e === entitySchemaName);
};

export const deserialize = (res: any): any =>
  res?.result?.isSerializedData
    ? JSON.parse(res.result.data as string)
    : res?.result?.data;

export const toLookupUpdateDateList = (o: { [key: string]: any }): any[] => {
  const list = [];
  for (const field in o) {
    if (o[field]) {
      list.push({
        lastModificationDate: new Date(o[field]),
        name: field,
      });
    }
  }
  return list;
};
