export type PublicConfItem = {
  Description: string;
  Id: string;
  InventoryNumber: string;
  Name: string;
  Status: {
    Id: string;
    Name: string;
    Url: string;
  };
  Url: string;
};

export type PublicProductService = {
  ConfItems: PublicConfItem[];
  Description: string;
  Id: string;
  Name: string;
  Url: string;
};
