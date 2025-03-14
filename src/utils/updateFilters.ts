export const updateFilters = (
  searchParams: URLSearchParams,
  setSearchParams: (params: URLSearchParams) => void,
  key: string,
  value: string
) => {
  const newParams = new URLSearchParams(searchParams);
  value ? newParams.set(key, value) : newParams.delete(key);
  setSearchParams(newParams);
};
