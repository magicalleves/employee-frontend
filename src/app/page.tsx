'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './store';
import { RootState, AppDispatch } from './store';
import Link from 'next/link';

export default function Home() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector((state: RootState) => state.user.token);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login('dummy-token'));
  };

  if (token) {
    return (
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">Welcome!</h1>
          <div className="welcome-message">
            <p>You're successfully logged in</p>
          </div>
          <button
            onClick={() => dispatch(logout())}
            className="submit-button"
            style={{ backgroundColor: '#dc2626' }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <div className="nav-link">
            Don't have an account? <Link href="/signup">Sign up</Link>
          </div>
          <button type="submit" className="submit-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}