import { useState, useEffect, useMemo, useCallback } from "react";
import { SortOrder } from "../components/SortOrderSelect/SortOrderSelect.types";
import { getCharacters } from "../utils/characterApi";
import { Character } from "../types/character";
import {
  generateCharacterQueryParams,
  sortCharacters,
} from "../utils/queryUtils";

export const useCharacters = (
  page: number,
  search: string,
  selectedStatus: string,
  selectedGender: string,
  sortOrder: SortOrder
) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);

  const queryParams = useMemo(
    () =>
      generateCharacterQueryParams(
        page,
        search,
        selectedStatus,
        selectedGender
      ),
    [page, search, selectedStatus, selectedGender]
  );

  const filteredCharacters = useMemo(
    () => sortCharacters(characters, sortOrder),
    [characters, sortOrder]
  );

  const fetchCharacters = useCallback(async () => {
    if (!queryParams) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { results, info } = await getCharacters(`?${queryParams}`);
      setCharacters(results || []);
      setHasNextPage(!!info?.next);
      setHasPrevPage(!!info?.prev);
    } catch (err) {
      console.error("Error fetching characters:", err);
      setError("Failed to load characters. Please try again.");
      setCharacters([]);
    } finally {
      setIsLoading(false);
    }
  }, [queryParams]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return { filteredCharacters, isLoading, error, hasNextPage, hasPrevPage };
};
