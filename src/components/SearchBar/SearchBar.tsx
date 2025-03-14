import { FC, useEffect, useState } from "react";
import styles from "./SearchBar.module.css";

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

  useEffect(() => {
    // added debounce to avoid sending request on every key press
    const handler = setTimeout(() => {
      setSearch(inputValue);
    }, debounceDelay);

    // clear timeout on every key press
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, debounceDelay, setSearch]);

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
