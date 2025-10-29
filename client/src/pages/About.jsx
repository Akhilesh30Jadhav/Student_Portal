// src/pages/About.jsx
import { useState, useEffect } from 'react';

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', overflow: 'hidden' }}>
      {/* Hero Section */}
      <section style={{
        padding: isMobile ? '4rem 1rem' : '6rem 2rem',
        textAlign: 'center',
        position: 'relative',
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(167, 139, 250, 0.15), transparent)'
      }}>
        {/* Floating Orbs */}
        {!isMobile && (
          <>
            <div style={{
              position: 'absolute',
              width: '350px',
              height: '350px',
              background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15), transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(80px)',
              top: '5%',
              left: '10%',
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              transition: 'transform 0.3s ease-out',
              animation: 'float 18s ease-in-out infinite'
            }} />
            <div style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(249, 168, 212, 0.15), transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(80px)',
              top: '30%',
              right: '15%',
              transform: `translate(${mousePosition.x * -0.012}px, ${mousePosition.y * -0.012}px)`,
              transition: 'transform 0.3s ease-out',
              animation: 'float 22s ease-in-out infinite reverse'
            }} />
          </>
        )}

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.25rem',
            background: 'rgba(167, 139, 250, 0.1)',
            borderRadius: '50px',
            marginBottom: '2rem',
            border: '1px solid rgba(167, 139, 250, 0.2)',
            animation: 'fadeInDown 0.8s ease-out'
          }}>
            <span style={{ 
              color: '#a78bfa', 
              fontWeight: 700, 
              fontSize: '14px',
              letterSpacing: '0.05em'
            }}>
              🎓 STUDENT-BUILT SOLUTION
            </span>
          </div>

          <h1 style={{
            fontSize: isMobile ? '2.5rem' : '4.5rem',
            fontWeight: 900,
            marginBottom: '2rem',
            background: 'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            animation: 'fadeInUp 1s ease-out'
          }}>
            Solving Real Problems
            <br />
            <span style={{
              background: 'linear-gradient(90deg, #a78bfa, #f9a8d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              For Real Students
            </span>
          </h1>

          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.375rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: 1.7,
            animation: 'fadeInUp 1.2s ease-out'
          }}>
            Born from the frustration of a first-year CSE-AIML student who couldn't find previous year questions, 
            senior notes, or proper study resources. This platform bridges the gap between students and the 
            academic resources they desperately need.
          </p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section style={{ padding: isMobile ? '3rem 1rem' : '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '2rem'
          }}>
            <ProblemCard
              icon="❌"
              title="The Problem I Faced"
              points={[
                "No official previous year question papers available",
                "Senior students' notes were scattered and hard to find",
                "New subjects felt overwhelming without proper guidance",
                "College didn't provide centralized resource repository",
                "Fellow first-years struggling with the same issues"
              ]}
              gradient="linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(220, 38, 38, 0.1))"
              borderColor="rgba(239, 68, 68, 0.3)"
              isMobile={isMobile}
            />
            <ProblemCard
              icon="✨"
              title="My Solution"
              points={[
                "Built a comprehensive resource sharing platform",
                "Organized materials by branch, year, and semester",
                "Created a system for students to help each other",
                "Designed with D Y Patil University structure in mind",
                "Made it free and accessible for all students"
              ]}
              gradient="linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.1))"
              borderColor="rgba(16, 185, 129, 0.3)"
              isMobile={isMobile}
            />
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section style={{
        padding: isMobile ? '3rem 1rem' : '5rem 2rem',
        background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(249, 168, 212, 0.08), transparent)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: isMobile ? '2rem' : '3.5rem',
              fontWeight: 900,
              background: 'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}>
              My Journey: From Problem to Solution
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '1.125rem' }}>
              How a frustrated first-year student became a problem solver
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            <JourneyCard
              step="1"
              title="First Year Struggles"
              description="Started B.Tech CSE-AIML at D Y Patil University. Faced challenges finding study materials."
              icon="📚"
              color="#ef4444"
              isMobile={isMobile}
            />
            <JourneyCard
              step="2"
              title="Identified the Gap"
              description="Realized all first-year students were struggling with the same resource shortage."
              icon="🔍"
              color="#f59e0b"
              isMobile={isMobile}
            />
            <JourneyCard
              step="3"
              title="Built the Solution"
              description="Used programming skills and AI tools to create this platform with React, Node.js, and MongoDB."
              icon="💻"
              color="#10b981"
              isMobile={isMobile}
            />
            <JourneyCard
              step="4"
              title="Vision for Future"
              description="Now in 2nd year, hoping this becomes D Y Patil's official resource hub."
              icon="🚀"
              color="#a78bfa"
              isMobile={isMobile}
            />
          </div>
        </div>
      </section>

      {/* Impact Cards */}
      <section style={{ padding: isMobile ? '3rem 1rem' : '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            <ImpactCard
              icon="🎯"
              title="My Mission"
              description="To ensure no D Y Patil University student faces the same resource shortage I experienced. Every student deserves access to previous year papers, senior notes, and proper study materials."
              gradient="linear-gradient(135deg, #a78bfa, #8b5cf6)"
              isMobile={isMobile}
            />
            <ImpactCard
              icon="🌟"
              title="Current Impact"
              description="Already helping fellow students access organized study materials, previous year questions, and notes from seniors. Building a community where students help each other succeed."
              gradient="linear-gradient(135deg, #f9a8d4, #ec4899)"
              isMobile={isMobile}
            />
            <ImpactCard
              icon="🔮"
              title="Future Vision"
              description="I dream of this platform becoming D Y Patil University's official student resource hub, recognized by the college administration and used by all branches."
              gradient="linear-gradient(135deg, #fbbf24, #f59e0b)"
              isMobile={isMobile}
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section style={{
        padding: isMobile ? '3rem 1rem' : '5rem 2rem',
        background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(167, 139, 250, 0.08), transparent)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: isMobile ? '2rem' : '3rem',
                fontWeight: 900,
                background: 'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em'
              }}>
                Built with Modern Technology
              </h2>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1.125rem',
                lineHeight: 1.8,
                marginBottom: '2rem'
              }}>
                As a 2nd-year CSE-AIML student, I applied everything I've learned and researched 
                with AI tools to build this full-stack web application. This project demonstrates 
                my technical skills and problem-solving ability.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <TechBadge tech="React.js" icon="⚛️" />
                <TechBadge tech="Node.js" icon="🟢" />
                <TechBadge tech="MongoDB" icon="🍃" />
                <TechBadge tech="Express.js" icon="🚀" />
                <TechBadge tech="JWT Auth" icon="🔐" />
                <TechBadge tech="Responsive UI" icon="📱" />
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #a78bfa, #f9a8d4)',
              borderRadius: '24px',
              padding: '3rem',
              textAlign: 'center',
              boxShadow: '0 30px 60px rgba(167, 139, 250, 0.4)'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💼</div>
              <h3 style={{ 
                fontSize: '1.75rem', 
                fontWeight: 900, 
                marginBottom: '1rem',
                color: 'white'
              }}>
                Resume-Worthy Project
              </h3>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.95)', 
                lineHeight: 1.7, 
                marginBottom: '2rem',
                fontSize: '1.063rem'
              }}>
                Showcases full-stack development skills, user-centered design thinking, and 
                the ability to solve real-world problems.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  padding: '1.5rem 1rem'
                }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: 'white' }}>500+</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.9)' }}>Lines of Code</div>
                </div>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  padding: '1.5rem 1rem'
                }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: 'white' }}>15+</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.9)' }}>Features Built</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Quote */}
      <section style={{
        padding: isMobile ? '4rem 1rem' : '6rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: isMobile ? '3rem 2rem' : '4rem 3rem',
            borderRadius: '24px',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #a78bfa, #f9a8d4)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              fontSize: '3rem',
              boxShadow: '0 20px 40px rgba(167, 139, 250, 0.4)'
            }}>
              👨‍💻
            </div>
            <h2 style={{
              fontSize: isMobile ? '2rem' : '2.75rem',
              fontWeight: 900,
              marginBottom: '1.5rem',
              background: 'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em',
              lineHeight: 1.2
            }}>
              From Student Problem to Technical Solution
            </h2>
            <p style={{
              fontSize: isMobile ? '1.063rem' : '1.25rem',
              marginBottom: '2rem',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.8,
              fontStyle: 'italic'
            }}>
              "What started as a personal frustration during my first year has evolved into a 
              comprehensive platform that I hope will help thousands of D Y Patil University students. 
              This project represents not just my technical growth, but my commitment to solving real 
              problems through code."
            </p>
            <div style={{
              color: '#a78bfa',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '0.05em'
            }}>
              - AKHILESH JADHAV, 2ND YEAR B.TECH CSE-AIML, D Y PATIL UNIVERSITY
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: isMobile ? '4rem 1rem' : '6rem 2rem',
        textAlign: 'center',
        background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(167, 139, 250, 0.15), transparent)'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '3rem',
            fontWeight: 900,
            background: 'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            Join the Movement
          </h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1.125rem',
            marginBottom: '2.5rem',
            lineHeight: 1.7
          }}>
            Help me build the resource hub that D Y Patil University students deserve. Upload your notes, 
            share previous year papers, and let's ensure no future student faces the struggles we did.
          </p>
          <button
            style={{
              padding: isMobile ? '1rem 2rem' : '1.25rem 2.5rem',
              background: 'linear-gradient(135deg, #a78bfa, #f9a8d4)',
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              fontSize: '18px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              boxShadow: '0 15px 40px rgba(167, 139, 250, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-4px) scale(1.02)';
              e.target.style.boxShadow = '0 20px 50px rgba(167, 139, 250, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 15px 40px rgba(167, 139, 250, 0.4)';
            }}
            onClick={() => window.location.href = '/register'}
          >
            <span>🚀</span>
            Start Contributing Today
          </button>
        </div>
      </section>
    </div>
  );
}

// Component Definitions
function ProblemCard({ icon, title, points, gradient, borderColor, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: gradient,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${borderColor}`,
        borderRadius: '24px',
        padding: '2.5rem',
        transition: 'all 0.4s ease',
        transform: isHovered && !isMobile ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 30px 60px rgba(0, 0, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.2)'
      }}
    >
      <div style={{
        fontSize: '4rem',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: '1.75rem',
        fontWeight: 800,
        color: 'white',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>
        {title}
      </h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {points.map((point, index) => (
          <li key={index} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
            marginBottom: '1rem',
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '15px',
            lineHeight: 1.6
          }}>
            <span style={{ color: '#10b981', fontSize: '18px', marginTop: '2px' }}>✓</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function JourneyCard({ step, title, description, icon, color, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '20px',
        padding: '2rem',
        transition: 'all 0.4s ease',
        transform: isHovered && !isMobile ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? `0 20px 40px ${color}40` : '0 10px 30px rgba(0, 0, 0, 0.2)'
      }}
    >
      <div style={{
        width: '70px',
        height: '70px',
        background: color,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1rem',
        color: 'white',
        fontSize: '1.75rem',
        fontWeight: 900,
        boxShadow: `0 10px 30px ${color}60`
      }}>
        {step}
      </div>
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 800,
        color: 'white',
        marginBottom: '1rem'
      }}>
        {title}
      </h3>
      <p style={{
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '14px',
        lineHeight: 1.6
      }}>
        {description}
      </p>
    </div>
  );
}

function ImpactCard({ icon, title, description, gradient, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        padding: '2.5rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        textAlign: 'center',
        transition: 'all 0.4s ease',
        transform: isHovered && !isMobile ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 30px 60px rgba(0, 0, 0, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.2)'
      }}
    >
      <div style={{
        width: '80px',
        height: '80px',
        background: gradient,
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1.5rem',
        fontSize: '2.5rem',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)'
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: 800,
        color: 'white',
        marginBottom: '1rem'
      }}>
        {title}
      </h3>
      <p style={{
        color: 'rgba(255, 255, 255, 0.7)',
        lineHeight: 1.7
      }}>
        {description}
      </p>
    </div>
  );
}

function TechBadge({ tech, icon }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem 1rem',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      fontSize: '15px',
      fontWeight: 700,
      color: 'white',
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
      e.currentTarget.style.transform = 'translateX(4px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
      e.currentTarget.style.transform = 'translateX(0)';
    }}
    >
      <span style={{ fontSize: '1.25rem' }}>{icon}</span>
      {tech}
    </div>
  );
}
