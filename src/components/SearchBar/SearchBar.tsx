import { FC, useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { useDebounce } from "../../hooks/useDebounce";

const DEBOUNCE_DELAY = 300;

type SearchBarProps = {
  search: string;
  setSearch: (search: string) => void;
  debounceDelay?: number;
};

export const SearchBar: FC<SearchBarProps> = ({
  search,
  setSearch,
  debounceDelay = DEBOUNCE_DELAY,
}) => {
  const [inputValue, setInputValue] = useState(search);

  const debouncedValue = useDebounce(inputValue, debounceDelay);

  useEffect(() => {
    if (debouncedValue !== search) {
      setSearch(debouncedValue);
    }
  }, [debouncedValue, setSearch, search]);

  useEffect(() => {
    if (search === '') {
      setInputValue('');
    }
  }, [search]);

  return (
    <label className={styles.label}>
      <span className={styles.labelText}>Search by name:</span>

      <input
        type="text"
        placeholder="Search by name..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.search}
      />
    </label>
  );
};
