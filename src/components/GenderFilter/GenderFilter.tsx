import { ChangeEvent, FC, useCallback } from "react";
import styles from "./GenderFilter.module.css";
import { Gender, GenderFilterProps } from "./GenderFilter.types";

export const GenderFilter: FC<GenderFilterProps> = ({
  selectedGender,
  setSelectedGender,
}) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setSelectedGender(e.target.value as Gender);
    },
    [setSelectedGender]
  );

  return (
    <label className={styles.label}>
      <span className={styles.labelText}>Filter by gender:</span>
      <select
        value={selectedGender}
        onChange={handleChange}
        className={styles.select}
      >
        <option value=''>All</option>
        {Object.values(Gender).map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </label>
  );
};
