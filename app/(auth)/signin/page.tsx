'use client';

import { useState, FormEvent } from 'react';
import './style.css';
import Link from 'next/link';

export default function LoginPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [role, setRole] = useState<'researcher' | 'university' | 'medical'>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleSelect = (value: 'researcher' | 'university' | 'medical') => {
    setRole(value);
    setStep(2);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ role, email, password });
  };

  return (
    <div className="page">
      <aside className="sidebar">
        <div className="logo"><img src="./logo.png" alt="" style={{ height: '125px' }} /></div>
      </aside>

      <main className="content">
        {step === 1 && (
          <div className="auth-content1">
            <h1 className="title">Lorem ipsum dolor self amet consectetur</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur elite
            </p>

            <div className="card-list">
              <button
                className="role-card"
                onClick={() => handleRoleSelect('researcher')}
              >
                <img src="./dummy/researcher.jpg" className="role-thumb" />
                <div className="role-text">
                  <div className="role-title">Researcher</div>
                  <div className="role-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </button>

              <button
                className="role-card"
                onClick={() => handleRoleSelect('university')}
              >
                <img src="./dummy/university.jpg" className="role-thumb" />
                <div className="role-text">
                  <div className="role-title">University / Organisation</div>
                  <div className="role-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </button>

              <button
                className="role-card"
                onClick={() => handleRoleSelect('medical')}
              >
                <img src="./dummy/medical.jpg" className="role-thumb" />
                <div className="role-text">
                  <div className="role-title">Medical Professional</div>
                  <div className="role-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </button>
              <div className='role-desc'>Lorem ipsum dolor sit amet, consectetur <span style={{ color: '#FF8D28' }}>adipiscing
                elit…</span></div>
            </div>

            <p className="foot-note role-desc">
              <span style={{ fontWeight: '500' }}>Do you know: </span>Lorem ipsum dolor sit amet, consectetur \adipiscing
              elit…
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="auth-content1">
            <h1 className="title">Lorem ipsum dolor self amet consectetur</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur elite
            </p>

            <form className="auth-form" onSubmit={handleSubmit}>
              <label className="field">
                <span className="field-label">Username / Email</span>
                <input
                  type="email"
                  placeholder="Placeholder"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              <label className="field">
                <span className="field-label">Password</span>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>

              <button type="submit" className="primary-btn">
                Sign in
              </button>

              <div className="form-footer">
                <label className="remember">
                  <input type="checkbox" /> Remember me
                </label>
                <button type="button" className="link-btn">
                  Forgot password?
                </button>
              </div>

              <div className="bottom-text">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="link-btn">
                  Sign up here
                </Link>

              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
