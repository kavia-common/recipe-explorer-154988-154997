import React from 'react';
import { useAuth } from '../auth/AuthContext';
import SearchBar from '../shared/SearchBar';
import SearchProviderWrapper from './SearchProviderWrapper';

// PUBLIC_INTERFACE
export default function AppShell({ children }) {
  /**
   * Application shell with top navbar and content container.
   * Integrates search bar and auth actions.
   */
  const { user, signOut } = useAuth();

  return (
    <div className="app-shell">
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="brand" aria-label="Brand">
            <div className="brand-badge" aria-hidden>R</div>
            Recipe Explorer
          </div>
          <div className="spacer" />
          <SearchBar />
          <div className="spacer" />
          {user ? (
            <div className="row">
              <span className="pill" aria-label="User email">
                <span role="img" aria-label="user">👤</span>
                {user.email}
              </span>
              <button className="nav-button ghost" onClick={signOut} aria-label="Sign Out">
                Sign Out
              </button>
            </div>
          ) : (
            <a className="nav-button ghost" href="#/signin" aria-label="Go to Sign In">Sign In</a>
          )}
        </div>
      </nav>
      <main className="container" role="main">
        <SearchProviderWrapper>
          {children}
        </SearchProviderWrapper>
      </main>
    </div>
  );
}
