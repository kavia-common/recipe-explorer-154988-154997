import React from 'react';
import { useRecipes } from '../store/recipes';
import RecipeCard from '../shared/RecipeCard';
import { useSearch } from '../store/search';

// PUBLIC_INTERFACE
export default function Home() {
  /**
   * Home page: shows the recipe list filtered by the current search query.
   */
  const recipes = useRecipes();
  const { query, filtered } = useSearch(recipes);

  return (
    <section aria-label="Browse Recipes" style={{ display: 'grid', gap: 14 }}>
      <header className="row wrap" style={{ justifyContent: 'space-between' }}>
        <h2 className="title" style={{ fontSize: 20, margin: 0 }}>Browse Recipes</h2>
        <span className="muted">{filtered.length} result{filtered.length !== 1 ? 's' : ''}{query ? ` for “${query}”` : ''}</span>
      </header>

      <div className="grid" role="list">
        {filtered.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </section>
  );
}
