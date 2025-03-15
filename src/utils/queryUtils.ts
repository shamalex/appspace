import { SortOrder } from "../components/SortOrderSelect/SortOrderSelect.types";
import { Character } from "../types/character";

export const generateCharacterQueryParams = (
  page: number,
  search: string,
  selectedStatus: string,
  selectedGender: string
): string => {
  const params = new URLSearchParams();
  params.append("page", page.toString());
  if (search?.trim()) params.append("name", search);
  if (selectedStatus) {
    params.append("status", selectedStatus);
  }
  if (selectedGender) {
    params.append("gender", selectedGender);
  }

  return params.toString();
};

export const sortCharacters = (
  characters: Character[],
  sortOrder: SortOrder
): Character[] =>
  [...characters].sort((a, b) =>
    sortOrder === SortOrder.Asc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );
