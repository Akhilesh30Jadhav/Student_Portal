import { useState, useEffect } from 'react';

export default function About() {
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
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: isMobile ? '4rem 1rem' : '6rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.25rem',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
            borderRadius: '50px',
            marginBottom: '2rem',
            border: '1px solid rgba(59, 130, 246, 0.2)'
          }}>
            <span style={{ color: '#3b82f6', fontWeight: '600', fontSize: '14px' }}>🎓 STUDENT-BUILT SOLUTION</span>
          </div>

          <h1 style={{
            fontSize: isMobile ? '2.5rem' : '4rem',
            fontWeight: '800',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-1px'
          }}>
            Solving Real Problems
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              For Real Students
            </span>
          </h1>

          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.3rem',
            color: '#64748b',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Born from the frustration of a first-year CSE-AIML student who couldn't find previous year questions, senior notes, or proper study resources. This platform bridges the gap between students and the academic resources they desperately need.
          </p>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section style={{ padding: isMobile ? '3rem 1rem' : '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <ProblemCard
              icon=""
              title="The Problem I Faced"
              points={[
                "No official previous year question papers available",
                "Senior students' notes were scattered and hard to find", 
                "New subjects felt overwhelming without proper guidance",
                "College didn't provide centralized resource repository",
                "Fellow first-years struggling with the same issues"
              ]}
              bgColor="#fef2f2"
              borderColor="#fecaca"
              isMobile={isMobile}
            />
            <ProblemCard
              icon="💡"
              title="My Solution"
              points={[
                "Built a comprehensive resource sharing platform",
                "Organized materials by branch, year, and semester",
                "Created a system for students to help each other",
                "Designed with D Y Patil University structure in mind",
                "Made it free and accessible for all students"
              ]}
              bgColor="#f0fdf4"
              borderColor="#bbf7d0"
              isMobile={isMobile}
            />
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section style={{
        padding: isMobile ? '3rem 1rem' : '4rem 2rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: isMobile ? '2rem' : '2.5rem',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              My Journey: From Problem to Solution
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
              How a frustrated first-year student became a problem solver
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            <JourneyStep
              step="1"
              title="First Year Struggles"
              description="Started B.Tech CSE-AIML at D Y Patil University. Faced challenges finding study materials and previous year papers."
              icon="📚"
              color="#ef4444"
              isMobile={isMobile}
            />
            <JourneyStep
              step="2"
              title="Identified the Gap"
              description="Realized this wasn't just my problem - all first-year students were struggling with the same resource shortage."
              icon="🔍"
              color="#f59e0b"
              isMobile={isMobile}
            />
            <JourneyStep
              step="3"
              title="Built the Solution"
              description="Used my programming skills and used the help of many AI tools across the internet to create this platform, combining React, Node.js, and MongoDB to solve a real problem."
              icon="💻"
              color="#10b981"
              isMobile={isMobile}
            />
            <JourneyStep
              step="4"
              title="Vision for Future"
              description="Now in 2nd year, hoping this becomes D Y Patil's official resource hub, helping all future students."
              icon="🚀"
              color="#8b5cf6"
              isMobile={isMobile}
            />
          </div>
        </div>
      </section>

      {/* Impact & Vision */}
      <section style={{ padding: isMobile ? '3rem 1rem' : '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            <ImpactCard
              icon="🎯"
              title="My Mission"
              description="To ensure no D Y Patil University student faces the same resource shortage I experienced during my first year. Every student deserves access to previous year papers, senior notes, and proper study materials."
              isMobile={isMobile}
            />
            <ImpactCard
              icon="🌟"
              title="Current Impact"
              description="Already helping fellow students access organized study materials, previous year questions, and notes from seniors. Building a community where students help each other succeed academically."
              isMobile={isMobile}
            />
            <ImpactCard
              icon="🔮"
              title="Future Vision"
              description="I dream of this platform becoming D Y Patil University's official student resource hub, recognized by the college administration and used by all branches and years."
              isMobile={isMobile}
            />
          </div>
        </div>
      </section>

      {/* Technical Achievement */}
      <section style={{
        padding: isMobile ? '3rem 1rem' : '4rem 2rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: isMobile ? '2rem' : '2.5rem',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '1.5rem'
              }}>
                Built with Modern Technology
              </h2>
              <p style={{
                color: '#64748b',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                marginBottom: '2rem'
              }}>
                As a 2nd-year CSE-AIML student,I applied everything I've learned and did my research and with the use of AI tools available across the internet to build this full-stack web application.This project demonstrates my technical skills, problem-solving ability,and commitment to creating solutions that matter.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <TechItem tech="React.js" icon="⚛️" />
                <TechItem tech="Node.js" icon="🟢" />
                <TechItem tech="MongoDB" icon="🍃" />
                <TechItem tech="Express.js" icon="🚀" />
                <TechItem tech="JWT Auth" icon="🔐" />
                <TechItem tech="Responsive UI" icon="📱" />
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              borderRadius: '20px',
              padding: '3rem',
              color: 'white',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                Resume-Worthy Project
              </h3>
              <p style={{ opacity: 0.9, lineHeight: '1.6', marginBottom: '2rem' }}>
                This project showcases full-stack development skills, user-centered design thinking, and the ability to identify and solve real-world problems.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>500+</div>
                  <div style={{ fontSize: '12px', opacity: 0.8 }}>Lines of Code</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>15+</div>
                  <div style={{ fontSize: '12px', opacity: 0.8 }}>Features Built</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section style={{
        padding: isMobile ? '3rem 1rem' : '4rem 2rem',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: isMobile ? '3rem 2rem' : '4rem 3rem',
            borderRadius: '24px',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem',
              fontSize: '2rem'
            }}>
              👨‍💻
            </div>
            <h2 style={{ 
              fontSize: isMobile ? '2rem' : '2.5rem', 
              fontWeight: '800', 
              marginBottom: '1.5rem',
              color: 'white',
              letterSpacing: '-1px'
            }}>
              From Student Problem to Technical Solution
            </h2>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.25rem', 
              marginBottom: '2rem', 
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.7'
            }}>
              "What started as a personal frustration during my first year has evolved into a comprehensive platform that I hope will help thousands of D Y Patil University students. This project represents not just my technical growth, but my commitment to solving real problems through code."
            </p>
            <div style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              - Akhilesh Jadhav, 2nd Year B.Tech CSE-AIML, D Y Patil University
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        padding: isMobile ? '3rem 1rem' : '4rem 2rem',
        background: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '2.5rem',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            Join the Movement
          </h2>
          <p style={{
            color: '#64748b',
            fontSize: '1.1rem',
            marginBottom: '2rem',
            lineHeight: '1.7'
          }}>
            Help me build the resource hub that D Y Patil University students deserve. Upload your notes, share previous year papers, and let's ensure no future student faces the struggles we did.
          </p>
          <button style={{
            padding: isMobile ? '1rem 2rem' : '1.25rem 2.5rem',
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)'
          }}
          onMouseOver={(e) => {
            if (!isMobile) {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.6)';
            }
          }}
          onMouseOut={(e) => {
            if (!isMobile) {
              e.target.style.transform = 'translateY(0px)';
              e.target.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.4)';
            }
          }}
          onClick={() => window.location.href = '/register'}>
            Start Contributing Today 🚀
          </button>
        </div>
      </section>
    </div>
  );
}

// Component Definitions
function ProblemCard({ icon, title, points, bgColor, borderColor, isMobile }) {
  return (
    <div style={{
      background: bgColor,
      border: `2px solid ${borderColor}`,
      borderRadius: '20px',
      padding: '2.5rem',
      height: '100%'
    }}>
      <div style={{
        fontSize: '3rem',
        marginBottom: '1.5rem',
        textAlign: 'center'
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#1f2937',
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
            color: '#374151',
            fontSize: '15px',
            lineHeight: '1.6'
          }}>
            <span style={{ color: '#10b981', fontSize: '16px', marginTop: '2px' }}>✓</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function JourneyStep({ step, title, description, icon, color, isMobile }) {
  return (
    <div style={{
      textAlign: 'center',
      position: 'relative'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        background: color,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1rem',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: '700'
      }}>
        {step}
      </div>
      <div style={{
        fontSize: '2rem',
        marginBottom: '1rem'
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: '700',
        color: '#1f2937',
        marginBottom: '1rem'
      }}>
        {title}
      </h3>
      <p style={{
        color: '#64748b',
        fontSize: '14px',
        lineHeight: '1.6'
      }}>
        {description}
      </p>
    </div>
  );
}

function ImpactCard({ icon, title, description, isMobile }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      padding: '2.5rem',
      boxShadow: '0 10px 30px rgba(15, 23, 42, 0.1)',
      border: '1px solid rgba(15, 23, 42, 0.05)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      height: '100%'
    }}
    onMouseOver={(e) => {
      if (!isMobile) {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(15, 23, 42, 0.2)';
      }
    }}
    onMouseOut={(e) => {
      if (!isMobile) {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(15, 23, 42, 0.1)';
      }
    }}>
      <div style={{
        fontSize: '3rem',
        marginBottom: '1.5rem'
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: '700',
        color: '#1f2937',
        marginBottom: '1rem'
      }}>
        {title}
      </h3>
      <p style={{
        color: '#64748b',
        lineHeight: '1.7'
      }}>
        {description}
      </p>
    </div>
  );
}

function TechItem({ tech, icon }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem',
      background: '#f8fafc',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#374151'
    }}>
      <span>{icon}</span>
      {tech}
    </div>
  );
}
