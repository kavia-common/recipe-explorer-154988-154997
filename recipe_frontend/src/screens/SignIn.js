import React, { useState } from 'react';
import { useAuth } from '../auth/AuthContext';

/**
 * Sign In screen:
 * - Reuses tokens and many class names from the Figma extraction, adapted for responsive web within our layout.
 * - Uses controlled inputs and AuthContext for sign-in.
 */

// PUBLIC_INTERFACE
export default function SignIn() {
  /** Render the sign-in page using adapted Figma styles and tokens. */
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      setBusy(true);
      await signIn({ email, password });
      window.location.hash = '#/'; // redirect to home
    } catch (err) {
      setError(err.message || 'Sign in failed');
    } finally {
      setBusy(false);
    }
  };

  const onForgot = () => {
    alert('Forgot Password flow not implemented.');
  };

  return (
    <section aria-label="Sign In" className="center-col" style={{ minHeight: '70vh' }}>
      <div className="screen sign-in" style={{ width: 'min(420px, 100%)', height: 'auto', padding: 24 }}>
        {/* Titles */}
        <section className="title-group" style={{ width: '100%', marginBottom: 24 }}>
          <h1 className="hello" style={{ position: 'relative', left: 0, top: 0 }}>Hello,</h1>
          <p className="welcome" style={{ position: 'relative', left: 0, top: 0, marginTop: 4 }}>Welcome Back!</p>
        </section>

        <form onSubmit={onSubmit} aria-label="Sign In form" style={{ display: 'grid', gap: 16 }}>
          {/* Email */}
          <div className="input-field" style={{ position: 'relative', width: '100%', height: 81 }}>
            <label className="input-label" htmlFor="email">Email</label>
            <div className="input-rect">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email"
                aria-label="Email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div className="input-field" style={{ position: 'relative', width: '100%', height: 81 }}>
            <label className="input-label" htmlFor="password">Enter Password</label>
            <div className="input-rect">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                aria-label="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="row" style={{ justifyContent: 'space-between', marginTop: -6 }}>
            <button type="button" className="forgot-password" onClick={onForgot}>
              Forgot Password?
            </button>
          </div>

          {error ? (
            <div role="alert" style={{ color: 'crimson', fontSize: 13 }}>{error}</div>
          ) : null}

          <button className="cta-button" id="sign-in-btn" type="submit" aria-label="Sign In"
                  style={{ width: '100%', height: 56 }}>
            <span className="cta-label">{busy ? 'Signing In...' : 'Sign In'}</span>
            <span className="cta-icon" aria-hidden="true" />
          </button>

          {/* Divider */}
          <div className="divider-group" aria-label="Or Sign in With"
               style={{ position: 'relative', width: '100%', height: 17, marginTop: 8 }}>
            <span className="line left" aria-hidden="true" />
            <span className="divider-text">Or Sign in With</span>
            <span className="line right" aria-hidden="true" />
          </div>

          {/* Social buttons */}
          <div className="row" style={{ gap: 16 }}>
            <button className="social-btn google" type="button" aria-label="Sign in with Google"
                    onClick={() => alert('Google sign-in not implemented.')}>
              <span className="social-inner" aria-hidden="true" />
            </button>
            <button className="social-btn facebook" type="button" aria-label="Sign in with Facebook"
                    onClick={() => alert('Facebook sign-in not implemented.')}>
              <span className="social-inner" aria-hidden="true" />
            </button>
          </div>

          {/* Bottom link */}
          <p className="bottom-auth-text" style={{ position: 'relative', width: '100%', height: 17 }}>
            Don’t have an account? <a href="#/signin" className="link">Sign up</a>
          </p>

          {/* Home indicator (decorative) */}
          <div className="home-indicator" aria-hidden="true" style={{ marginTop: 8 }}>
            <span className="home-line" />
          </div>
        </form>
      </div>
    </section>
  );
}
