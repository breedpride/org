export interface MetaPage {
  data: {
    EntityName: string; // Account,
    Id: string;
    Model: string; // Kennel
    Name: string; // single-item,
    RecordId: string;
    RedirectUrl: string;
  };
  error: string;
  isSerializedData: boolean;
  isSuccess: boolean;
}

export interface ICreatioMetaResponseResult {
  result: MetaPage;
}
