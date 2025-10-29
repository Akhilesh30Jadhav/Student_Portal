// src/pages/Register.jsx
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', department: '', year: 1 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { register } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await register(form);
    setLoading(false);
    if (!res.success) {
      setError(res.message);
      return;
    }
    nav('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#0a0a0a',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating Gradient Orbs */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.2), transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        top: '15%',
        left: '5%',
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        transition: 'transform 0.3s ease-out',
        animation: 'float 15s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(249, 168, 212, 0.2), transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        bottom: '15%',
        right: '10%',
        transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
        transition: 'transform 0.3s ease-out',
        animation: 'float 20s ease-in-out infinite reverse'
      }} />

      {/* Register Card */}
      <form
        onSubmit={submit}
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          padding: '2.5rem 2rem',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)',
          maxWidth: 500,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          position: 'relative',
          zIndex: 10,
          animation: 'fadeInUp 0.8s ease-out'
        }}
      >
        {/* Logo & Header */}
        <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #a78bfa, #f9a8d4)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            fontSize: '2rem',
            boxShadow: '0 15px 35px rgba(167, 139, 250, 0.4)',
            animation: 'glow 3s ease-in-out infinite'
          }}>
            🎓
          </div>
          <h2 style={{
            fontWeight: 900,
            fontSize: '2.25rem',
            background: 'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            Create Your Account
          </h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '15px',
            lineHeight: 1.6
          }}>
            Join the academic community at R.A.I.T
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            color: '#fca5a5',
            padding: '12px 16px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            animation: 'shake 0.5s ease-in-out'
          }}>
            <span>⚠️</span>
            {error}
          </div>
        )}

        {/* Form Fields */}
        <FormInput
          label="FULL NAME"
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          placeholder="Your full name"
          required
        />

        <FormInput
          label="EMAIL ADDRESS"
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          placeholder="your@email.com"
          required
        />

        <FormInput
          label="PASSWORD"
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
          placeholder="Min. 6 characters"
          required
          minLength={6}
        />

        <FormInput
          label="DEPARTMENT"
          id="department"
          name="department"
          type="text"
          value={form.department}
          onChange={e => setForm(f => ({ ...f, department: e.target.value }))}
          placeholder="E.g. AI/ML, CSE"
          required
        />

        <FormInput
          label="YEAR"
          id="year"
          name="year"
          type="number"
          value={form.year}
          onChange={e => setForm(f => ({ ...f, year: e.target.value }))}
          min={1}
          max={6}
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: '0.5rem',
            width: '100%',
            background: loading
              ? 'linear-gradient(135deg, #6b7280, #4b5563)'
              : 'linear-gradient(135deg, #a78bfa, #f9a8d4)',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            border: 'none',
            fontWeight: 700,
            fontSize: 16,
            boxShadow: loading 
              ? '0 4px 15px rgba(0, 0, 0, 0.2)'
              : '0 10px 30px rgba(167, 139, 250, 0.4)',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'all 0.4s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem'
          }}
          onMouseEnter={(e) => {
            if (!loading) {
              e.target.style.transform = 'translateY(-3px) scale(1.02)';
              e.target.style.boxShadow = '0 15px 40px rgba(167, 139, 250, 0.6)';
            }
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = loading 
              ? '0 4px 15px rgba(0, 0, 0, 0.2)'
              : '0 10px 30px rgba(167, 139, 250, 0.4)';
          }}
        >
          {loading ? (
            <>
              <span style={{ animation: 'spin 1s linear infinite' }}>⏳</span>
              Creating Account...
            </>
          ) : (
            <>
              <span>✨</span>
              Create Account
            </>
          )}
        </button>

        {/* Login Link */}
        <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.6)', 
            fontSize: '14px',
            lineHeight: 1.6
          }}>
            Already have an account?{' '}
            <Link
              to="/login"
              style={{
                background: 'linear-gradient(90deg, #a78bfa, #f9a8d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textDecoration: 'none',
                fontWeight: 700,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                e.target.style.textDecoration = 'none';
              }}
            >
              Log in
            </Link>
          </p>
        </div>

        {/* Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(249, 168, 212, 0.1), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }} />
      </form>
    </div>
  );
}

// Form Input Component
function FormInput({ label, id, name, type, value, onChange, placeholder, required, minLength, min, max }) {
  return (
    <div>
      <label 
        htmlFor={id} 
        style={{
          display: 'block',
          fontWeight: 700,
          marginBottom: '0.75rem',
          color: 'rgba(255, 255, 255, 0.9)',
          fontSize: '14px',
          letterSpacing: '0.05em'
        }}
      >
        {label}
        {required && ' *'}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        min={min}
        max={max}
        style={{
          width: '100%',
          padding: '0.875rem 1.25rem',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          fontSize: '16px',
          color: 'white',
          outline: 'none',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)'
        }}
        onFocus={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.08)';
          e.target.style.borderColor = '#a78bfa';
          e.target.style.boxShadow = '0 0 0 3px rgba(167, 139, 250, 0.15)';
        }}
        onBlur={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.05)';
          e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
          e.target.style.boxShadow = 'none';
        }}
      />
    </div>
  );
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    33% {
      transform: translateY(-30px) translateX(20px);
    }
    66% {
      transform: translateY(-10px) translateX(-20px);
    }
  }
  
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 15px 35px rgba(167, 139, 250, 0.4);
    }
    50% {
      box-shadow: 0 20px 50px rgba(167, 139, 250, 0.7);
    }
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes shake {
    0%, 100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-10px);
    }
    75% {
      transform: translateX(10px);
    }
  }
`;
document.head.appendChild(style);
