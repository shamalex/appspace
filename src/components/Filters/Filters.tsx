import { FC, useCallback, useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { StatusFilter } from "../StatusFilter/StatusFilter";
import { SortOrderSelect } from "../SortOrderSelect/SortOrderSelect";
import { SortOrder } from "../SortOrderSelect/SortOrderSelect.types";
import styles from "./Filters.module.css";
import { GenderFilter } from "../GenderFilter/GenderFilter";
import { Gender } from "../GenderFilter/GenderFilter.types";
import { Status } from "../StatusFilter/StatusFilter.types";
import { updateFilters } from "../../utils/updateFilters";

type FiltersProps = {
  searchParams: URLSearchParams;
  setSearchParams: (params: URLSearchParams) => void;
};

export const Filters: FC<FiltersProps> = ({
  searchParams,
  setSearchParams,
}) => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const toggleMobileFilters = useCallback(() => {
    setIsMobileFiltersOpen((prev) => !prev);
  }, []);

  const handleResetFilters = useCallback(
    () => {
      setSearchParams(new URLSearchParams());
    },
    [setSearchParams]
  );

  return (
    <>
      <button className={styles.toggleFiltersBtn} onClick={toggleMobileFilters}>
        {isMobileFiltersOpen ? "Hide Filters" : "Show Filters"}
      </button>

      <div
        className={`${styles.filters} ${
          isMobileFiltersOpen ? styles.filtersOpen : styles.filtersClosed
        }`}
      >
        <SearchBar
          search={searchParams.get("search") || ''}
          setSearch={(value) =>
            updateFilters(searchParams, setSearchParams, "search", value)
          }
        />
        <StatusFilter
          selectedStatus={(searchParams.get("status") as Status) || ''}
          setSelectedStatus={(value) =>
            updateFilters(searchParams, setSearchParams, "status", value)
          }
        />
        <GenderFilter
          selectedGender={(searchParams.get("gender") as Gender) || ''}
          setSelectedGender={(value) =>
            updateFilters(searchParams, setSearchParams, "gender", value)
          }
        />
        <SortOrderSelect
          sortOrder={
            (searchParams.get("sortOrder") as SortOrder) || SortOrder.Asc
          }
          setSortOrder={(value) =>
            updateFilters(searchParams, setSearchParams, "sortOrder", value)
          }
        />

        <button className={styles.resetBtn} onClick={handleResetFilters}>
          Reset
        </button>
      </div>
    </>
  );
};
