import React, { ChangeEvent, FC, useCallback } from "react";
import styles from "./StatusFilter.module.css";
import { Status, StatusFilterProps } from "./StatusFilter.types";

export const StatusFilter: FC<StatusFilterProps> = ({
  selectedStatus,
  setSelectedStatus,
}) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setSelectedStatus(e.target.value as Status);
    },
    [setSelectedStatus]
  );

  return (
    <label className={styles.label}>
      <span className={styles.labelText}>Filter by status:</span>
      <select
        value={selectedStatus}
        onChange={handleChange}
        className={styles.select}
      >
        <option value=''>All</option>
        {Object.values(Status).map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </label>
  );
};
