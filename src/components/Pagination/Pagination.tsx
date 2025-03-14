import { FC, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Pagination.module.css";

type PaginationProps = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

export const Pagination: FC<PaginationProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const updatePage = useCallback((newPage: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage.toString());
    setSearchParams(newParams);
  }, [searchParams, setSearchParams]);

  const handleNext = useCallback(
    () => updatePage(page + 1),
    [page, updatePage]
  );
  const handlePrevious = useCallback(
    // Ensure page is never less than 1
    () => updatePage(Math.max(page - 1, 1)),
    [page, updatePage]
  );

  return (
    <div className={styles.pagination}>
      <button onClick={handlePrevious} disabled={!hasPrevPage}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={handleNext} disabled={!hasNextPage}>
        Next
      </button>
    </div>
  );
};
