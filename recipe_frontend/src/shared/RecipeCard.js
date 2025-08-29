import React from 'react';

// PUBLIC_INTERFACE
export default function RecipeCard({ recipe }) {
  /** Card displaying summary info for a recipe and navigation to detail. */
  return (
    <article className="recipe-card" role="listitem">
      <img className="recipe-cover" src={recipe.image} alt={recipe.title} />
      <div className="recipe-body">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <span className="badge" title={recipe.category}>
            🏷 {recipe.category}
          </span>
          <span className="muted">{recipe.calories} kcal</span>
        </div>
        <h3 className="title">{recipe.title}</h3>
        <p className="muted">{recipe.description}</p>
        <div className="card-actions">
          <span className="row" style={{ gap: 8 }}>
            <span className="pill">⏱ {recipe.time}m</span>
            <span className="pill">⭐ {recipe.rating.toFixed(1)}</span>
          </span>
          <a className="btn" href={`#/recipe/${recipe.id}`} aria-label={`Open ${recipe.title}`}>View</a>
        </div>
      </div>
    </article>
  );
}
