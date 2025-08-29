import React, { useMemo } from 'react';
import { useRecipes } from '../store/recipes';

// PUBLIC_INTERFACE
export default function RecipeDetail({ recipeId }) {
  /**
   * Recipe detail modal-like page rendered by the router.
   */
  const recipes = useRecipes();
  const recipe = useMemo(() => recipes.find((r) => String(r.id) === String(recipeId)), [recipes, recipeId]);

  if (!recipe) {
    return (
      <section className="center-col" style={{ minHeight: '60vh', gap: 10 }}>
        <h2 className="title" style={{ fontSize: 20 }}>Recipe not found</h2>
        <a className="btn ghost" href="#/">Back to list</a>
      </section>
    );
  }

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`Recipe detail for ${recipe.title}`}>
      <article className="modal">
        <header className="modal-header">
          <button className="btn ghost" onClick={() => (window.location.hash = '#/')} aria-label="Close detail">← Back</button>
          <h3 className="title" style={{ margin: 0 }}>{recipe.title}</h3>
          <div className="spacer" />
          <span className="pill">⏱ {recipe.time} min</span>
          <span className="pill">👨‍🍳 {recipe.difficulty}</span>
        </header>
        <div className="modal-body">
          <div className="row wrap" style={{ gap: 16 }}>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-cover"
              style={{ maxWidth: 380, borderRadius: 12, border: '1px solid var(--border)' }}
            />
            <div className="grow" style={{ minWidth: 240 }}>
              <p className="muted" style={{ marginTop: 0 }}>{recipe.description}</p>
              <h4 className="title" style={{ marginTop: 16, marginBottom: 8 }}>Ingredients</h4>
              <ul>
                {recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
              </ul>
              <h4 className="title" style={{ marginTop: 16, marginBottom: 8 }}>Steps</h4>
              <ol>
                {recipe.steps.map((st, idx) => <li key={idx} style={{ marginBottom: 6 }}>{st}</li>)}
              </ol>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
