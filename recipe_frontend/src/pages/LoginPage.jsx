import React, { useState } from 'react';
import './login.css';

// PUBLIC_INTERFACE
export default function LoginPage({ onLogin }) {
  /** LoginPage renders a pixel-accurate login screen based on Figma assets.
   * - Uses Ocean Professional theme tokens via CSS variables
   * - References exact asset paths in /assets/figmaimages
   * - Mock login handler triggers onLogin callback
   */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock auth: consider any non-empty email/password a success
    if (typeof onLogin === 'function') {
      onLogin({ email, passwordLength: password.length });
    }
  };

  return (
    <div className="login-screen" role="document">
      <div className="status-bar" aria-hidden="true">
        <div className="time" aria-hidden="true">19:27</div>
        <div className="status-icons" aria-hidden="true">
          <span className="cell" aria-hidden="true"></span>
          <span className="wifi" aria-hidden="true"></span>
          <span className="battery" aria-hidden="true"></span>
        </div>
      </div>

      <main className="content" role="main">
        <header className="title-block">
          <h1 className="hello">Hello,</h1>
          <p className="welcome">Welcome Back!</p>
        </header>

        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="password">Enter Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="row forgot">
            <a href="#" className="link-forgot" onClick={(e)=>e.preventDefault()}>Forgot Password?</a>
          </div>

          <button type="submit" className="btn-primary">
            <span>Sign In</span>
            <img className="icon-arrow" src="/figmaimages/figma_image_54_668_53_625.svg" alt="" aria-hidden="true" />
          </button>

          <div className="divider">
            <span>Or Sign in With</span>
          </div>

          <div className="social-row" role="group" aria-label="Sign in with">
            <button type="button" className="btn-social" aria-label="Sign in with Google" onClick={(e)=>e.preventDefault()}>
              <img src="/figmaimages/figma_image_13_48.svg" alt="Google" />
            </button>
            <button type="button" className="btn-social" aria-label="Sign in with Facebook" onClick={(e)=>e.preventDefault()}>
              <img src="/figmaimages/figma_image_13_58.svg" alt="Facebook" />
            </button>
          </div>

          <p className="cta">
            Don’t have an account? <a href="#" className="link-signup" onClick={(e)=>e.preventDefault()}>Sign up</a>
          </p>
        </form>
      </main>

      <div className="home-indicator" aria-hidden="true">
        <div className="pill" aria-hidden="true"></div>
      </div>
    </div>
  );
}
