import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import styles from "./ListingPage.module.css";
import { Pagination } from "../../components/Pagination/Pagination";
import { SortOrder } from "../../components/SortOrderSelect/SortOrderSelect.types";
import { useCharacters } from "../../hooks/useCharacters";
import { Filters } from "../../components/Filters/Filters";

const ListingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = useMemo(
    () => ({
      page: Number(searchParams.get("page")) || 1,
      search: searchParams.get("search") || '',
      selectedStatus: searchParams.get("status") || '',
      selectedGender: searchParams.get("gender") || '',
      sortOrder: (searchParams.get("sortOrder") as SortOrder) || SortOrder.Asc,
    }),
    [searchParams]
  );

  const {
    filteredCharacters,
    isLoading,
    error,
    hasNextPage,
    hasPrevPage,
  } = useCharacters(
    filters.page,
    filters.search,
    filters.selectedStatus,
    filters.selectedGender,
    filters.sortOrder
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Character List</h1>

      <Filters searchParams={searchParams} setSearchParams={setSearchParams} />

      {!isLoading && (error || filteredCharacters.length === 0) && (
        <p className={styles.noResults}>No characters found.</p>
      )}

      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className={styles.grid}>
          {filteredCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              searchParams={searchParams}
            />
          ))}
        </div>
      )}

      {!isLoading && filteredCharacters.length > 0 && (
        <Pagination hasNextPage={hasNextPage} hasPrevPage={hasPrevPage} />
      )}
    </div>
  );
};

export default ListingPage;
