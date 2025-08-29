import React, { useEffect, useMemo, useState } from 'react';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import RecipeDetail from '../screens/RecipeDetail';

/**
 * Simple hash router to avoid bringing in react-router dependency.
 * Supports:
 * - #/        -> Home
 * - #/signin  -> SignIn
 * - #/recipe/:id -> RecipeDetail
 */

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash || '#/');

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return hash;
}

// PUBLIC_INTERFACE
export default function RouterView() {
  /** Renders the appropriate page for the current hash route. */
  const hash = useHash();

  const route = useMemo(() => {
    const clean = hash.replace(/^#/, '');
    // Normalize
    const parts = clean.split('/').filter(Boolean);
    if (parts.length === 0) return { page: 'home' };
    if (parts[0] === 'signin') return { page: 'signin' };
    if (parts[0] === 'recipe' && parts[1]) return { page: 'recipe', id: parts[1] };
    return { page: 'home' };
  }, [hash]);

  if (route.page === 'signin') return <SignIn />;
  if (route.page === 'recipe') return <RecipeDetail recipeId={route.id} />;
  return <Home />;
}
