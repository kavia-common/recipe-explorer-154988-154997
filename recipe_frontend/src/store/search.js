import React, { createContext, useContext, useMemo, useState } from 'react';

/**
 * Search store: globally accessible query with helpers to compute filtered lists.
 */

const SearchContext = createContext(null);

// PUBLIC_INTERFACE
export function SearchProvider({ children }) {
  /** Provide global search state. */
  const [query, setQuery] = useState('');
  const value = useMemo(() => ({ query, setQuery }), [query]);
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

function useSearchContext() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error('Search hooks must be used within SearchProvider');
  return ctx;
}

// PUBLIC_INTERFACE
export function useSearchController() {
  /** Returns the search controller with query and setter. */
  return useSearchContext();
}

// PUBLIC_INTERFACE
export function useSearch(list) {
  /**
   * Returns { query, filtered } derived from provided list.
   * Filtering by title, category, and description, case-insensitive.
   */
  const { query } = useSearchContext();
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter((item) => {
      const hay = `${item.title} ${item.category} ${item.description}`.toLowerCase();
      return hay.includes(q);
    });
  }, [list, query]);

  return { query, filtered };
}
