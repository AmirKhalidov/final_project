import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useFiltersStore } from "@/stores/useFiltersStore";

export function useFilterSync() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setFromSearchParams, getSearchParamsObject } = useFiltersStore();

  // Initialize store from URL params on mount
  useEffect(() => {
    setFromSearchParams(searchParams);
  }, []); // Only run on mount

  // Subscribe to store changes and update URL
  useEffect(() => {
    const unsubscribe = useFiltersStore.subscribe(
      (state) => state,
      (state) => {
        const params = state.getSearchParamsObject();
        setSearchParams(params);
      },
      {
        // Only update URL when filter values change, not when actions change
        equalityFn: (a, b) => {
          const filterKeys = [
            "searchValue",
            "minYear",
            "maxYear",
            "minAge",
            "maxAge",
            "nationality",
            "club",
            "position",
            "competition",
          ];
          return filterKeys.every((key) => a[key] === b[key]);
        },
      }
    );

    return unsubscribe;
  }, [setSearchParams]);

  return { searchParams };
}
