import { WithIcon } from "../iconing/type";
import { WithId } from "../identifying/with-id";

export type SortColumn = {
  column: string;
  direction: 0 | 1;
  position: number;
};

export type SortField = WithIcon &
  WithId & {
    name: string;
    sortColumns: SortColumn[];
  };
