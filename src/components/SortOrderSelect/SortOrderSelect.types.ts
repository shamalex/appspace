export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export type SortOrderSelectProps = {
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
};
