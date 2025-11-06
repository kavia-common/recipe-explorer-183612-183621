import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

/**
 * App sets up theme toggling and routing for /login and / (home).
 * It renders a floating theme button consistent with the template.
 */

// PUBLIC_INTERFACE
function ThemeButton({ theme, onToggle }) {
  /** Floating theme toggle control shown on all pages. */
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

// PUBLIC_INTERFACE
function RoutedApp({ theme, onToggle }) {
  /** Inner app with routes to allow useNavigate hook */
  const navigate = useNavigate();

  // PUBLIC_INTERFACE
  const handleMockLogin = useCallback((payload) => {
    // Accept any login and navigate to home
    // payload: { email, passwordLength }
    navigate('/', { replace: true });
  }, [navigate]);

  return (
    <>
      <ThemeButton theme={theme} onToggle={onToggle} />
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleMockLogin} />} />
        <Route path="/" element={<HomePage />} />
        {/* Fallback to login for unknown routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className="App">
      <BrowserRouter>
        <RoutedApp theme={theme} onToggle={toggleTheme} />
      </BrowserRouter>
    </div>
  );
}

export default App;
