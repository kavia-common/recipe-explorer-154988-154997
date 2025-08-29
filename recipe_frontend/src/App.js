import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import AppShell from './layout/AppShell';
import RouterView from './routes/RouterView';
import './index.css';

// PUBLIC_INTERFACE
export default function App() {
  /**
   * Root component: wraps the app with AuthProvider and renders the shell + routes.
   * This sets up the application layout and theming.
   */
  return (
    <AuthProvider>
      <AppShell>
        <RouterView />
      </AppShell>
    </AuthProvider>
  );
}
