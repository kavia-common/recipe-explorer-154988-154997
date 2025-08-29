import { useMemo } from 'react';

/**
 * Mock recipes data and utility hook.
 * Replace with API fetching if required in the future.
 */

const MOCK = [
  {
    id: 1,
    title: 'Avocado Toast Deluxe',
    category: 'Breakfast',
    description: 'Creamy avocado on toasted sourdough with cherry tomatoes and feta.',
    time: 10,
    difficulty: 'Easy',
    rating: 4.6,
    calories: 320,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=960&q=80&auto=format&fit=crop',
    ingredients: ['2 slices sourdough', '1 avocado', '6 cherry tomatoes', '30g feta', 'Salt & pepper', 'Olive oil'],
    steps: [
      'Toast the sourdough slices.',
      'Mash avocado with salt, pepper, and a drizzle of olive oil.',
      'Spread on toast, top with halved cherry tomatoes and crumbled feta.',
      'Serve immediately.'
    ]
  },
  {
    id: 2,
    title: 'Zesty Lemon Pasta',
    category: 'Lunch',
    description: 'Light pasta with lemon zest, garlic, and parmesan.',
    time: 20,
    difficulty: 'Medium',
    rating: 4.4,
    calories: 540,
    image: 'https://images.unsplash.com/photo-1521389508051-d7ffb5dc8bbf?w=960&q=80&auto=format&fit=crop',
    ingredients: ['200g spaghetti', '1 lemon (zest & juice)', '2 garlic cloves', '30g parmesan', 'Butter', 'Salt'],
    steps: [
      'Cook pasta al dente in salted water.',
      'Sauté minced garlic in butter, add lemon zest.',
      'Add cooked pasta with a splash of pasta water.',
      'Finish with lemon juice and parmesan.'
    ]
  },
  {
    id: 3,
    title: 'Herbed Roast Chicken',
    category: 'Dinner',
    description: 'Juicy roast chicken with aromatic herbs and crispy skin.',
    time: 60,
    difficulty: 'Hard',
    rating: 4.8,
    calories: 680,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=960&q=80&auto=format&fit=crop',
    ingredients: ['1 whole chicken', 'Thyme', 'Rosemary', 'Garlic', 'Butter', 'Salt & pepper'],
    steps: [
      'Preheat oven to 200°C.',
      'Rub chicken with butter, herbs, salt, and pepper.',
      'Roast until internal temperature reaches 75°C (~60 minutes).',
      'Rest 10 minutes before carving.'
    ]
  },
  {
    id: 4,
    title: 'Berry Smoothie Bowl',
    category: 'Snack',
    description: 'Refreshing bowl with mixed berries, banana, and granola.',
    time: 8,
    difficulty: 'Easy',
    rating: 4.2,
    calories: 280,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=960&q=80&auto=format&fit=crop',
    ingredients: ['1 banana', '1 cup mixed berries', '1/2 cup yogurt', 'Granola', 'Honey'],
    steps: [
      'Blend banana, berries, and yogurt until smooth.',
      'Pour into a bowl and top with granola and honey.'
    ]
  }
];

// PUBLIC_INTERFACE
export function useRecipes() {
  /** Returns the mock recipes. */
  return useMemo(() => MOCK, []);
}
