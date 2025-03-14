import { ChangeEvent, FC, useCallback } from "react";
import styles from "./SortOrderSelect.module.css";
import { SortOrderSelectProps, SortOrder } from "./SortOrderSelect.types";

export const SortOrderSelect: FC<SortOrderSelectProps> = ({
  sortOrder,
  setSortOrder,
}) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) =>
      setSortOrder(event.target.value as SortOrder),
    [setSortOrder]
  );

  return (
    <label className={styles.label}>
      <span className={styles.labelText}>Sort by:</span>
      <select
        value={sortOrder}
        onChange={handleChange}
        className={styles.select}
      >
        {Object.values(SortOrder).map((order) => (
          <option key={order} value={order}>
            {order}
          </option>
        ))}
      </select>
    </label>
  );
};
