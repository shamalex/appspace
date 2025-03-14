export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "Unknown",
}

export type StatusFilterProps = {
  selectedStatus: Status;
  setSelectedStatus: (status: Status) => void;
};
