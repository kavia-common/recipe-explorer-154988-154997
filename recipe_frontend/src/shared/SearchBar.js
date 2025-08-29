import React from 'react';
import { useSearchController } from '../store/search';

// PUBLIC_INTERFACE
export default function SearchBar() {
  /**
   * Top search bar controlling the global search query.
   */
  const { query, setQuery } = useSearchController();

  return (
    <label className="searchbar" aria-label="Search Recipes">
      <span role="img" aria-label="search">🔎</span>
      <input
        type="search"
        placeholder="Search recipes, ingredients, or tags..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query ? (
        <button type="button" className="btn ghost" onClick={() => setQuery('')} aria-label="Clear search">Clear</button>
      ) : null}
    </label>
  );
}
