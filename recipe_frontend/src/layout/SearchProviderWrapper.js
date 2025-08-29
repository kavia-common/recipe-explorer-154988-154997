import React from 'react';
import { SearchProvider } from '../store/search';

// PUBLIC_INTERFACE
export default function SearchProviderWrapper({ children }) {
  /** Provides global search context to the app. */
  return <SearchProvider>{children}</SearchProvider>;
}
