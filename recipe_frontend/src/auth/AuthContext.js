import React, { createContext, useContext, useMemo, useState } from 'react';

/**
 * Simple local authentication context with mock sign-in/out.
 * In a real app, replace with API integration and token storage.
 */

const AuthContext = createContext(null);

// PUBLIC_INTERFACE
export function useAuth() {
  /** Return the current auth context with user, signIn, signOut. */
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}

// PUBLIC_INTERFACE
export function AuthProvider({ children }) {
  /**
   * Provider component that supplies authentication state to the app.
   */
  const [user, setUser] = useState(null);

  // PUBLIC_INTERFACE
  const signIn = async ({ email, password }) => {
    /**
     * Mock sign-in: accepts any non-empty credentials.
     * Replace with real API call.
     */
    if (!email || !password) {
      throw new Error('Please enter both email and password.');
    }
    // Simulate async call
    await new Promise((r) => setTimeout(r, 300));
    setUser({ id: 'u1', email });
    return true;
  };

  // PUBLIC_INTERFACE
  const signOut = () => {
    /** Clears the current user. */
    setUser(null);
  };

  const value = useMemo(() => ({ user, signIn, signOut }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
