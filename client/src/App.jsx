import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Materials from './pages/Materials.jsx';
import Upload from './pages/Upload.jsx';
import Admin from './pages/Admin.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Preview from './pages/preview.jsx';
import MaterialFiles from "./pages/MaterialFiles.jsx";

import ResourcesLite from "./pages/ResourcesLite.jsx"; 


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); 
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav style={{
      background: isScrolled 
        ? 'rgba(255, 255, 255, 0.98)' 
        : 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(16px)',
      borderBottom: `1px solid ${isScrolled ? 'rgba(15, 23, 42, 0.1)' : 'rgba(255, 255, 255, 0.2)'}`,
      padding: isMobile ? '1rem 0' : '1.25rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      transition: 'all 0.3s ease',
      boxShadow: isScrolled ? '0 4px 20px rgba(15, 23, 42, 0.1)' : 'none'
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: isMobile ? '0 1rem' : '0 2rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: isMobile ? '32px' : '40px',
            height: isMobile ? '32px' : '40px',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '800',
            fontSize: isMobile ? '14px' : '16px',
            boxShadow: '0 8px 20px rgba(15, 23, 42, 0.4)'
          }}>
            NX
          </div>
          <span style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: '800',
            fontSize: isMobile ? '18px' : '24px',
            letterSpacing: '-0.5px'
          }}>
            NOTEX
          </span>
        </div>
        
        {/* Desktop Menu */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
            <NavLink href="/" text="Home" />
            <NavLink href="/materials" text="Materials" />
            <NavLink href="/about" text="About" />
            <NavLink href="/contact" text="Contact" />
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <button style={{
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: '#1e293b',
                border: '2px solid #1e293b',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#1e293b';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(30, 41, 59, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#1e293b';
                e.target.style.transform = 'translateY(0px)';
                e.target.style.boxShadow = 'none';
              }}
              onClick={() => window.location.href = '/login'}>
                Login
              </button>
              
              <button style={{
                padding: '0.75rem 2rem',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(15, 23, 42, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 12px 35px rgba(15, 23, 42, 0.6)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0px)';
                e.target.style.boxShadow = '0 8px 25px rgba(15, 23, 42, 0.4)';
              }}
              onClick={() => window.location.href = '/register'}>
                Get Started
                <span style={{ marginLeft: '8px', fontSize: '16px' }}>✨</span>
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#1e293b'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(15, 23, 42, 0.1)',
          padding: '2rem 1rem',
          animation: 'fadeInUp 0.3s ease-out'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <MobileNavLink href="/" text="Home" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/materials" text="Materials" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/about" text="About" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/contact" text="Contact" onClick={() => setIsMobileMenuOpen(false)} />
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <button style={{
                padding: '0.75rem 1.5rem',
                background: 'transparent',
                color: '#1e293b',
                border: '2px solid #1e293b',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onClick={() => {
                window.location.href = '/login';
                setIsMobileMenuOpen(false);
              }}>
                Login
              </button>
              
              <button style={{
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(15, 23, 42, 0.4)'
              }}
              onClick={() => {
                window.location.href = '/register';
                setIsMobileMenuOpen(false);
              }}>
                Get Started ✨
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, text }) {
  return (
    <a 
      href={href} 
      style={{ 
        color: '#475569', 
        textDecoration: 'none', 
        fontWeight: '600',
        fontSize: '15px',
        transition: 'all 0.3s ease',
        position: 'relative',
        padding: '0.5rem 1rem',
        borderRadius: '8px'
      }} 
      onMouseOver={(e) => {
        e.target.style.color = '#0f172a';
        e.target.style.background = 'rgba(15, 23, 42, 0.05)';
      }}
      onMouseOut={(e) => {
        e.target.style.color = '#475569';
        e.target.style.background = 'transparent';
      }}
    >
      {text}
    </a>
  );
}

function MobileNavLink({ href, text, onClick }) {
  return (
    <a 
      href={href}
      onClick={onClick}
      style={{ 
        color: '#475569', 
        textDecoration: 'none', 
        fontWeight: '600',
        fontSize: '16px',
        padding: '0.75rem 1rem',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        display: 'block'
      }}
      onMouseOver={(e) => {
        e.target.style.color = '#0f172a';
        e.target.style.background = 'rgba(15, 23, 42, 0.05)';
      }}
      onMouseOut={(e) => {
        e.target.style.color = '#475569';
        e.target.style.background = 'transparent';
      }}
    >
      {text}
    </a>
  );
}

// MOBILE-RESPONSIVE HOME PAGE
function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* MOBILE-RESPONSIVE Hero Section */}
      <section style={{ 
        padding: isMobile ? '4rem 1rem' : '8rem 2rem', 
        textAlign: 'center', 
        position: 'relative', 
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)'
      }}>
        {/* Floating Elements - Hidden on mobile for performance */}
        {!isMobile && (
          <>
            <FloatingElement top="15%" left="8%" size="100px" color="rgba(15, 23, 42, 0.08)" delay="0s" />
            <FloatingElement top="25%" right="12%" size="150px" color="rgba(30, 41, 59, 0.06)" delay="2s" />
            <FloatingElement bottom="30%" left="15%" size="80px" color="rgba(51, 65, 85, 0.08)" delay="4s" />
            <FloatingElement top="40%" right="25%" size="120px" color="rgba(15, 23, 42, 0.05)" delay="1s" />
          </>
        )}
        
        <div style={{ 
          animation: 'fadeInUp 1.2s ease-out', 
          position: 'relative', 
          zIndex: 10,
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'inline-block',
            padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
            background: 'rgba(15, 23, 42, 0.05)',
            borderRadius: '50px',
            marginBottom: isMobile ? '1.5rem' : '2rem',
            border: '1px solid rgba(15, 23, 42, 0.1)'
          }}>
            <span style={{ 
              color: '#1e293b', 
              fontWeight: '600', 
              fontSize: isMobile ? '12px' : '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>🎓</span>
              Created Specially for R.A.I.T Students
            </span>
          </div>
          
          <h1 style={{
            fontSize: isMobile ? '2.5rem' : '5.5rem',
            fontWeight: '900',
            marginBottom: isMobile ? '1.5rem' : '2rem',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #475569 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.1',
            letterSpacing: isMobile ? '-1px' : '-2px'
          }}>
            Your Academic
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Success Hub
            </span>
          </h1>
          
          <p style={{ 
            fontSize: isMobile ? '1.1rem' : '1.4rem', 
            color: '#64748b', 
            marginBottom: isMobile ? '2rem' : '3rem', 
            maxWidth: isMobile ? '100%' : '700px', 
            margin: `0 auto ${isMobile ? '2rem' : '3rem'}`,
            lineHeight: '1.7',
            fontWeight: '400',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Transform your learning experience with our intelligent platform. Downlaod resources,high quality notes and accelerate your academic journey.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '1rem' : '1.5rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            marginBottom: isMobile ? '3rem' : '4rem',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center'
          }}>
            <PrimaryButton text="Start Learning Free" icon="🚀" isMobile={isMobile} />
            
          </div>

          {/* Stats - Mobile Responsive Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: isMobile ? '1rem' : '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <StatCard number="Deploying Soon" label="Study Materials" isMobile={isMobile} />
            <StatCard number="____" label="Active Students" isMobile={isMobile} />
            <StatCard number="____" label="Success Rate" isMobile={isMobile} />
            
          </div>
        </div>
      </section>

      {/* MOBILE-RESPONSIVE Features Section */}
      <section style={{ 
        padding: isMobile ? '4rem 1rem' : '8rem 2rem', 
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '5rem' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.25rem',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              <span style={{ color: '#3b82f6', fontWeight: '600', fontSize: '14px' }}>✨ FEATURES</span>
            </div>
            
            <h2 style={{
              fontSize: isMobile ? '2rem' : '3.5rem',
              fontWeight: '800',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-1px'
            }}>
              Everything You Need
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                To Excel
              </span>
            </h2>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.2rem', 
              color: '#64748b', 
              maxWidth: '600px', 
              margin: '0 auto',
              padding: isMobile ? '0 1rem' : '0'
            }}>
              Powerful tools designed to enhance your learning experience and boost your academic performance.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))', 
            gap: isMobile ? '1.5rem' : '2.5rem' 
          }}>
            <PremiumFeatureCard 
              icon="🎯"
              title="Quality Resources at Your Fingertips"
              description="Sorted pdfs, notes, and study materials curated by top students and educators."
              gradient="linear-gradient(135deg, #3b82f6, #1d4ed8)"
              features={[""]}
              isMobile={isMobile}
            />
            <PremiumFeatureCard 
              icon="🔍"
              title="Advanced Search Engine"
              description="Find exactly what you need with our intelligent search that understands context and academic relevance."
              gradient="linear-gradient(135deg, #8b5cf6, #7c3aed)"
              features={["Semantic search", "Filter by subject", "Instant results"]}
              isMobile={isMobile}
            />
           
          
            <PremiumFeatureCard 
              icon="🛡️"
              title="Secure & Private"
              description="Your data is protected . Focus on learning, we'll handle the rest."
              gradient="linear-gradient(135deg, #ef4444, #dc2626)"
              features={["End-to-end encryption", "Privacy controls", "Secure backup"]}
              isMobile={isMobile}
            />
            
          </div>
        </div>
      </section>

      {/* MOBILE-RESPONSIVE CTA Section */}
      <section style={{ 
        padding: isMobile ? '4rem 1rem' : '8rem 2rem', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
        }}></div>
        
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: isMobile ? '3rem 2rem' : '4rem 3rem',
            borderRadius: '24px',
            textAlign: 'center',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)'
          }}>
            <h2 style={{ 
              fontSize: isMobile ? '2rem' : '3rem', 
              fontWeight: '800', 
              marginBottom: '1.5rem',
              color: 'white',
              letterSpacing: '-1px'
            }}>
              Ready to Transform Your Learning?
            </h2>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.25rem', 
              marginBottom: '3rem', 
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto 3rem'
            }}>
              Join and contribute in our website to maken this platform better for everyone. Let's achieve academic excellence together!
            </p>
            
            <div style={{ 
              display: 'flex', 
              gap: isMobile ? '1rem' : '1.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center'
            }}>
              <button style={{
                padding: isMobile ? '1rem 2rem' : '1.25rem 3rem',
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: 'white',
                border: 'none',
                borderRadius: '16px',
                fontWeight: '700',
                fontSize: isMobile ? '16px' : '18px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 12px 30px rgba(59, 130, 246, 0.4)',
                width: isMobile ? '100%' : 'auto'
              }}
              onMouseOver={(e) => {
                if (!isMobile) {
                  e.target.style.transform = 'translateY(-4px) scale(1.02)';
                  e.target.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.6)';
                }
              }}
              onMouseOut={(e) => {
                if (!isMobile) {
                  e.target.style.transform = 'translateY(0px) scale(1)';
                  e.target.style.boxShadow = '0 12px 30px rgba(59, 130, 246, 0.4)';
                }
              }}
              onClick={() => window.location.href = '/register'}>
                Start 
                <span style={{ marginLeft: '12px', fontSize: '20px' }}>✨</span>
              </button>
              
              
            </div>
            
            <div style={{ 
              marginTop: '3rem', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              gap: isMobile ? '1rem' : '2rem',
              flexWrap: 'wrap',
              flexDirection: isMobile ? 'column' : 'row'
            }}>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span></span> 
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span></span> 
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span></span> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Component Definitions
function FloatingElement({ top, bottom, left, right, size, color, delay }) {
  return (
    <div style={{ 
      position: 'absolute', 
      top, bottom, left, right,
      width: size, 
      height: size, 
      background: color, 
      borderRadius: '50%', 
      animation: `float 8s ease-in-out infinite`,
      animationDelay: delay
    }}></div>
  );
}

function PrimaryButton({ text, icon, isMobile }) {
  return (
    <button style={{
      padding: isMobile ? '1rem 2rem' : '1.25rem 2.5rem',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '16px',
      fontWeight: '700',
      fontSize: isMobile ? '16px' : '18px',
      cursor: 'pointer',
      boxShadow: '0 12px 30px rgba(15, 23, 42, 0.4)',
      transition: 'all 0.4s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      width: isMobile ? '100%' : 'auto'
    }}
    onMouseOver={(e) => {
      if (!isMobile) {
        e.target.style.transform = 'translateY(-4px) scale(1.02)';
        e.target.style.boxShadow = '0 20px 40px rgba(15, 23, 42, 0.6)';
      }
    }}
    onMouseOut={(e) => {
      if (!isMobile) {
        e.target.style.transform = 'translateY(0px) scale(1)';
        e.target.style.boxShadow = '0 12px 30px rgba(15, 23, 42, 0.4)';
      }
    }}
    onClick={() => window.location.href = '/register'}>
      <span>{icon}</span>
      {text}
    </button>
  );
}

function SecondaryButton({ text, icon, isMobile }) {
  return (
    <button style={{
      padding: isMobile ? '1rem 2rem' : '1.25rem 2.5rem',
      background: 'rgba(255, 255, 255, 0.9)',
      color: '#1e293b',
      border: '2px solid #e2e8f0',
      borderRadius: '16px',
      fontWeight: '600',
      fontSize: isMobile ? '16px' : '18px',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      backdropFilter: 'blur(10px)',
      width: isMobile ? '100%' : 'auto'
    }}
    onMouseOver={(e) => {
      e.target.style.background = '#1e293b';
      e.target.style.color = 'white';
      if (!isMobile) {
        e.target.style.transform = 'translateY(-4px)';
      }
      e.target.style.borderColor = '#1e293b';
    }}
    onMouseOut={(e) => {
      e.target.style.background = 'rgba(255, 255, 255, 0.9)';
      e.target.style.color = '#1e293b';
      if (!isMobile) {
        e.target.style.transform = 'translateY(0px)';
      }
      e.target.style.borderColor = '#e2e8f0';
    }}>
      <span>{icon}</span>
      {text}
    </button>
  );
}

function StatCard({ number, label, isMobile }) {
  return (
    <div style={{
      textAlign: 'center',
      padding: isMobile ? '1rem' : '1.5rem',
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '16px',
      border: '1px solid rgba(15, 23, 42, 0.1)',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{ 
        fontSize: isMobile ? '1.8rem' : '2.5rem', 
        fontWeight: '800', 
        color: '#0f172a',
        marginBottom: '0.5rem'
      }}>{number}</div>
      <div style={{ 
        fontSize: isMobile ? '12px' : '14px', 
        color: '#64748b',
        fontWeight: '600'
      }}>{label}</div>
    </div>
  );
}

function PremiumFeatureCard({ icon, title, description, gradient, features, isMobile }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '24px',
      padding: isMobile ? '2rem' : '2.5rem',
      boxShadow: '0 20px 50px rgba(15, 23, 42, 0.1)',
      border: '1px solid rgba(15, 23, 42, 0.05)',
      transition: 'all 0.4s ease',
      cursor: 'pointer'
    }}
    onMouseOver={(e) => {
      if (!isMobile) {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 30px 60px rgba(15, 23, 42, 0.2)';
      }
    }}
    onMouseOut={(e) => {
      if (!isMobile) {
        e.currentTarget.style.transform = 'translateY(0px) scale(1)';
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(15, 23, 42, 0.1)';
      }
    }}>
      <div style={{
        width: isMobile ? '60px' : '80px',
        height: isMobile ? '60px' : '80px',
        background: gradient,
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
        fontSize: isMobile ? '1.5rem' : '2rem',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
      }}>
        {icon}
      </div>
      
      <h3 style={{ 
        fontSize: isMobile ? '1.25rem' : '1.5rem', 
        fontWeight: '800', 
        marginBottom: '1rem', 
        color: '#0f172a',
        letterSpacing: '-0.5px'
      }}>{title}</h3>
      
      <p style={{ 
        color: '#64748b', 
        lineHeight: 1.7,
        marginBottom: '1.5rem',
        fontSize: '15px'
      }}>{description}</p>
      
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {features.map((feature, index) => (
          <li key={index} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '0.75rem',
            color: '#475569',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <span style={{ color: '#10b981', fontSize: '16px' }}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)'
        }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/preview/:filename"   element={<Preview  />} />
            <Route path="/resources" element={<ResourcesLite />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/materials/:id/files" element={<MaterialFiles />} />
            
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/upload" element={<Upload />} />
            </Route>
            
            <Route element={<ProtectedRoute roles={['admin']} />}>
              <Route path="/admin" element={<Admin />} />
            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
