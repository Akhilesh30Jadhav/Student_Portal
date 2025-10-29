// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Home() {
  const { user } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', overflow: 'hidden', background: '#0a0a0a' }}>
      {/* Hero Section with Mesh Gradient */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        padding: isMobile ? '4rem 1.5rem' : '8rem 2rem',
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), transparent), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(249, 168, 212, 0.2), transparent), radial-gradient(ellipse 60% 80% at 20% 70%, rgba(147, 197, 253, 0.2), transparent), #0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Floating Orbs with Mouse Parallax */}
        {!isMobile && (
          <>
            <div style={{
              position: 'absolute',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(80px)',
              top: '10%',
              left: '10%',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              transition: 'transform 0.3s ease-out',
              animation: 'float 15s ease-in-out infinite'
            }} />
            <div style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(80px)',
              bottom: '15%',
              right: '15%',
              transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
              transition: 'transform 0.3s ease-out',
              animation: 'float 20s ease-in-out infinite reverse'
            }} />
            <div style={{
              position: 'absolute',
              width: '350px',
              height: '350px',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(80px)',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              transition: 'transform 0.3s ease-out',
              animation: 'float 18s ease-in-out infinite'
            }} />
          </>
        )}

        <div style={{ maxWidth: '1200px', width: '100%', position: 'relative', zIndex: 10, textAlign: 'center' }}>
          {/* Animated Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.5rem 1.25rem',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '50px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '2rem',
            animation: 'glow 3s ease-in-out infinite, fadeInDown 0.8s ease-out',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.05)'
          }}>
            <span style={{ fontSize: '1.25rem' }}>🎓</span>
            <span style={{ 
              color: 'white', 
              fontWeight: 700, 
              fontSize: isMobile ? '0.813rem' : '0.938rem',
              background: 'linear-gradient(90deg, #a78bfa, #f9a8d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Created for R.A.I.T Students
            </span>
          </div>

          {/* Main Heading with Gradient */}
          <h1 style={{
            fontSize: isMobile ? '2.75rem' : '6rem',
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: '1.5rem',
            background: 'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'fadeInUp 1s ease-out',
            letterSpacing: '-0.03em'
          }}>
            Your Academic
            <br />
            <span style={{
              background: 'linear-gradient(90deg, #a78bfa 0%, #f9a8d4 50%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradient 3s ease infinite',
              backgroundSize: '200% 200%'
            }}>
              Success Hub
            </span>
          </h1>

          {/* Glowing Subtitle */}
          <p style={{
            fontSize: isMobile ? '1.125rem' : '1.375rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            lineHeight: 1.7,
            fontWeight: 300,
            animation: 'fadeInUp 1.2s ease-out',
            textShadow: '0 0 30px rgba(167, 139, 250, 0.3)'
          }}>
            Transform your learning with <span style={{ color: '#a78bfa', fontWeight: 600 }}>curated materials</span>, 
            <span style={{ color: '#f9a8d4', fontWeight: 600 }}> high-quality notes</span>, and a 
            <span style={{ color: '#fbbf24', fontWeight: 600 }}> collaborative community</span>.
          </p>

          {/* Premium CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem',
            animation: 'fadeInUp 1.4s ease-out'
          }}>
            {user ? (
              <PremiumButton to="/dashboard" icon="🚀" text="Go to Dashboard" primary isMobile={isMobile} />
            ) : (
              <>
                <PremiumButton to="/register" icon="✨" text="Start Learning Free" primary isMobile={isMobile} />
                <PremiumButton to="/materials" icon="📚" text="Browse Materials" isMobile={isMobile} />
              </>
            )}
          </div>

          {/* Glass Stats Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '1rem',
            maxWidth: '900px',
            margin: '0 auto',
            animation: 'fadeInUp 1.6s ease-out'
          }}>
            <GlassStatCard number="Soon" label="Materials" color="#a78bfa" />
            <GlassStatCard number="___" label="Students" color="#f9a8d4" />
            <GlassStatCard number="___%" label="Success" color="#fbbf24" />
            <GlassStatCard number="24/7" label="Access" color="#60a5fa" />
          </div>
        </div>
      </section>

      {/* Features Section with Cards */}
      <section style={{
        padding: isMobile ? '5rem 1.5rem' : '8rem 2rem',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0f14 100%)',
        position: 'relative'
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.25rem',
            background: 'rgba(167, 139, 250, 0.1)',
            borderRadius: '50px',
            border: '1px solid rgba(167, 139, 250, 0.2)',
            marginBottom: '1.5rem'
          }}>
            <span style={{ 
              color: '#a78bfa', 
              fontWeight: 700, 
              fontSize: '0.875rem',
              letterSpacing: '0.05em'
            }}>
              ✨ FEATURES
            </span>
          </div>
          <h2 style={{
            fontSize: isMobile ? '2.5rem' : '4rem',
            fontWeight: 900,
            marginBottom: '1.5rem',
            background: 'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.6) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
            lineHeight: 1.1
          }}>
            Everything You Need
            <br />
            <span style={{
              background: 'linear-gradient(90deg, #a78bfa, #f9a8d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              To Excel
            </span>
          </h2>
          <p style={{
            fontSize: isMobile ? '1.063rem' : '1.25rem',
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: 1.7
          }}>
            Powerful tools designed to enhance your learning and boost academic performance.
          </p>
        </div>

        {/* 3D Feature Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <Feature3DCard
            icon="📚"
            title="Quality Resources"
            description="Curated PDFs, notes, and study materials from top students and educators."
            gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            glowColor="rgba(102, 126, 234, 0.5)"
          />
          <Feature3DCard
            icon="🔍"
            title="Advanced Search"
            description="Find exactly what you need with intelligent search and filtering."
            gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
            glowColor="rgba(240, 147, 251, 0.5)"
          />
          <Feature3DCard
            icon="🛡️"
            title="Secure & Private"
            description="Your data is protected with encryption and secure storage."
            gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
            glowColor="rgba(79, 172, 254, 0.5)"
          />
        </div>
      </section>

      {/* CTA Section */}
      {!user && (
        <section style={{
          padding: isMobile ? '6rem 1.5rem' : '10rem 2rem',
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(139, 92, 246, 0.15), transparent), #0a0a0a',
          position: 'relative',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <h2 style={{
              fontSize: isMobile ? '2.25rem' : '4rem',
              fontWeight: 900,
              marginBottom: '1.5rem',
              background: 'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              Ready to Transform
              <br />
              Your Learning?
            </h2>
            <p style={{
              fontSize: isMobile ? '1.063rem' : '1.375rem',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '3rem',
              lineHeight: 1.7
            }}>
              Join students achieving academic excellence.
              <br />
              Start your journey today!
            </p>
            <PremiumButton to="/register" icon="🚀" text="Create Free Account" primary large isMobile={isMobile} />
          </div>
        </section>
      )}
    </div>
  );
}

// Premium Button Component
function PremiumButton({ to, icon, text, primary, large, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={to}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: large 
          ? (isMobile ? '1.25rem 2.5rem' : '1.5rem 3rem')
          : (isMobile ? '1rem 2rem' : '1.125rem 2.25rem'),
        background: primary 
          ? 'linear-gradient(135deg, #a78bfa 0%, #f9a8d4 100%)'
          : 'rgba(255, 255, 255, 0.05)',
        backdropFilter: primary ? 'none' : 'blur(20px)',
        border: primary ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
        color: 'white',
        borderRadius: '1rem',
        fontWeight: 700,
        fontSize: large ? '1.125rem' : '1rem',
        textDecoration: 'none',
        boxShadow: primary 
          ? '0 20px 60px rgba(167, 139, 250, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          : '0 10px 30px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
        filter: isHovered && primary ? 'brightness(1.1)' : 'brightness(1)'
      }}
    >
      <span style={{ fontSize: '1.25rem' }}>{icon}</span>
      {text}
    </Link>
  );
}

// Glass Stat Card
function GlassStatCard({ number, label, color }) {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '1rem',
      padding: '1.5rem 1rem',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
      e.currentTarget.style.borderColor = color;
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = `0 20px 40px ${color}40`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}>
      <div style={{ 
        fontSize: '2rem', 
        fontWeight: 900, 
        color: color,
        marginBottom: '0.5rem',
        textShadow: `0 0 20px ${color}`
      }}>
        {number}
      </div>
      <div style={{ 
        fontSize: '0.875rem', 
        color: 'rgba(255, 255, 255, 0.6)', 
        fontWeight: 600,
        letterSpacing: '0.05em'
      }}>
        {label}
      </div>
    </div>
  );
}

// 3D Feature Card
function Feature3DCard({ icon, title, description, gradient, glowColor }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        borderRadius: '1.5rem',
        padding: '2.5rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-8px) rotateX(2deg)' : 'translateY(0) rotateX(0deg)',
        boxShadow: isHovered 
          ? `0 30px 60px ${glowColor}, 0 0 0 1px rgba(255, 255, 255, 0.1)`
          : '0 10px 30px rgba(0, 0, 0, 0.3)',
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <div style={{
        width: '4.5rem',
        height: '4.5rem',
        borderRadius: '1.25rem',
        background: gradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.25rem',
        marginBottom: '1.5rem',
        boxShadow: `0 20px 40px ${glowColor}`,
        transition: 'all 0.4s ease',
        transform: isHovered ? 'translateZ(20px) scale(1.1)' : 'translateZ(0) scale(1)'
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: 800,
        marginBottom: '1rem',
        color: 'white',
        letterSpacing: '-0.01em'
      }}>
        {title}
      </h3>
      <p style={{
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: 1.7,
        fontSize: '1rem'
      }}>
        {description}
      </p>
    </div>
  );
}
