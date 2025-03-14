export enum Gender {
  Male = "Male",
  Female = "Female",
  Unknown = "unknown",
}

export type GenderFilterProps = {
  selectedGender: Gender;
  setSelectedGender: (status: Gender) => void;
};
