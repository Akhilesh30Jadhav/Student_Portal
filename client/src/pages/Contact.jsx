// src/pages/Contact.jsx
import { useState, useEffect } from 'react';

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', overflow: 'hidden', position: 'relative' }}>
      {/* Floating Orbs Background */}
      {!isMobile && (
        <>
          <div style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15), transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            top: '5%',
            left: '5%',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            transition: 'transform 0.3s ease-out',
            animation: 'float 20s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(249, 168, 212, 0.15), transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            top: '35%',
            right: '10%',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            transition: 'transform 0.3s ease-out',
            animation: 'float 25s ease-in-out infinite reverse'
          }} />
        </>
      )}

      {/* Hero Section */}
      <section style={{
        padding: isMobile ? '4rem 1rem' : '6rem 2rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
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
              💬 CONTACT US
            </span>
          </div>

          <h1 style={{
            fontSize: isMobile ? '2.5rem' : '4.5rem',
            fontWeight: 900,
            marginBottom: '1.5rem',
            background: 'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            animation: 'fadeInUp 1s ease-out'
          }}>
            Get In Touch
            <br />
            <span style={{
              background: 'linear-gradient(90deg, #a78bfa, #f9a8d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              With Us
            </span>
          </h1>

          <p style={{
            fontSize: isMobile ? '1.063rem' : '1.25rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7,
            animation: 'fadeInUp 1.2s ease-out'
          }}>
            Have questions, suggestions, or need support? We'd love to hear from you. Our team is here to help 
            you succeed in your academic journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ 
        padding: isMobile ? '2rem 1rem' : '3rem 2rem',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '2fr 1.2fr',
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Contact Form - Glass Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              padding: isMobile ? '2rem 1.5rem' : '3rem',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
              animation: 'fadeInUp 1.4s ease-out'
            }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: 900,
                background: 'linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.75rem',
                letterSpacing: '-0.01em'
              }}>
                Send us a message
              </h2>
              <p style={{
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: '2.5rem',
                fontSize: '15px'
              }}>
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <SuccessMessage onReset={() => setIsSubmitted(false)} isMobile={isMobile} />
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Name & Email Row */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: '1.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    <FormInput
                      label="Full Name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                    <FormInput
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 700,
                      fontSize: '14px',
                      letterSpacing: '0.05em'
                    }}>
                      SUBJECT *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.875rem 1.25rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        fontSize: '16px',
                        color: 'white',
                        outline: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)'
                      }}
                      onFocus={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                        e.target.style.borderColor = '#a78bfa';
                        e.target.style.boxShadow = '0 0 0 3px rgba(167, 139, 250, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="bug">Report a Bug</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{
                      display: 'block',
                      marginBottom: '0.75rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 700,
                      fontSize: '14px',
                      letterSpacing: '0.05em'
                    }}>
                      MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      style={{
                        width: '100%',
                        padding: '0.875rem 1.25rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '12px',
                        fontSize: '16px',
                        color: 'white',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                        e.target.style.borderColor = '#a78bfa';
                        e.target.style.boxShadow = '0 0 0 3px rgba(167, 139, 250, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Your message here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '1rem 1.5rem',
                      background: isSubmitting
                        ? 'linear-gradient(135deg, #6b7280, #4b5563)'
                        : 'linear-gradient(135deg, #a78bfa, #f9a8d4)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontWeight: 700,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      transition: 'all 0.4s ease',
                      boxShadow: isSubmitting 
                        ? '0 4px 15px rgba(0, 0, 0, 0.2)'
                        : '0 10px 30px rgba(167, 139, 250, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.target.style.transform = 'translateY(-4px) scale(1.02)';
                        e.target.style.boxShadow = '0 15px 40px rgba(167, 139, 250, 0.6)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = isSubmitting 
                        ? '0 4px 15px rgba(0, 0, 0, 0.2)'
                        : '0 10px 30px rgba(167, 139, 250, 0.4)';
                    }}
                  >
                    {isSubmitting ? (
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <span style={{ animation: 'spin 1s linear infinite' }}>⏳</span>
                        Sending...
                      </span>
                    ) : (
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                        <span>📨</span>
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <ContactCard
                icon="📧"
                title="Email Us"
                description="Get in touch via email"
                info="akhilesh30jadhav@gmail.com"
                gradient="linear-gradient(135deg, #a78bfa, #8b5cf6)"
                isMobile={isMobile}
              />
              
              <ContactCard
                icon="💬"
                title="Quick Response"
                description="We typically respond within"
                info="24 Hours"
                gradient="linear-gradient(135deg, #f9a8d4, #ec4899)"
                isMobile={isMobile}
              />
              
              <ContactCard
                icon="🚀"
                title="Based At"
                description="D Y Patil University"
                info="Pune, India"
                gradient="linear-gradient(135deg, #fbbf24, #f59e0b)"
                isMobile={isMobile}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section style={{
        padding: isMobile ? '2rem 1rem' : '3rem 2rem',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          background: 'rgba(167, 139, 250, 0.08)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(167, 139, 250, 0.2)',
          borderRadius: '20px',
          padding: isMobile ? '2rem 1.5rem' : '3rem',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: isMobile ? '1.5rem' : '2rem',
            fontWeight: 800,
            background: 'linear-gradient(90deg, #a78bfa, #f9a8d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem'
          }}>
            Have a Quick Question?
          </h3>
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1.063rem',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Check out our materials library or browse frequently asked questions. Your answer might be just a click away!
          </p>
        </div>
      </section>
    </div>
  );
}

// Form Input Component
function FormInput({ label, name, type, value, onChange, placeholder, required }) {
  return (
    <div>
      <label style={{
        display: 'block',
        marginBottom: '0.75rem',
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: 700,
        fontSize: '14px',
        letterSpacing: '0.05em'
      }}>
        {label}
        {required && ' *'}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
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
          e.target.style.boxShadow = '0 0 0 3px rgba(167, 139, 250, 0.1)';
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

// Success Message Component
function SuccessMessage({ onReset, isMobile }) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '3rem 0',
      animation: 'fadeInUp 0.6s ease-out'
    }}>
      <div style={{
        fontSize: '4rem',
        marginBottom: '1.5rem',
        animation: 'bounce 0.8s ease infinite'
      }}>
        ✅
      </div>
      <h3 style={{
        fontSize: '1.75rem',
        fontWeight: 800,
        background: 'linear-gradient(90deg, #10b981, #059669)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '1rem'
      }}>
        Message Sent Successfully!
      </h3>
      <p style={{ 
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: '2rem',
        lineHeight: 1.7
      }}>
        Thank you for reaching out. We'll review your message and get back to you within 24 hours.
      </p>
      <button
        onClick={onReset}
        style={{
          padding: '0.875rem 1.75rem',
          background: 'linear-gradient(135deg, #a78bfa, #f9a8d4)',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontWeight: 700,
          cursor: 'pointer',
          fontSize: '15px',
          transition: 'all 0.3s ease',
          boxShadow: '0 8px 20px rgba(167, 139, 250, 0.4)'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-3px) scale(1.02)';
          e.target.style.boxShadow = '0 12px 30px rgba(167, 139, 250, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0) scale(1)';
          e.target.style.boxShadow = '0 8px 20px rgba(167, 139, 250, 0.4)';
        }}
      >
        Send Another Message
      </button>
    </div>
  );
}

// Contact Card Component
function ContactCard({ icon, title, description, info, gradient, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.4s ease',
        transform: isHovered && !isMobile ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 30px 60px rgba(0, 0, 0, 0.3)'
          : '0 10px 30px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer'
      }}
    >
      <div style={{
        width: '60px',
        height: '60px',
        background: gradient,
        borderRadius: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.75rem',
        marginBottom: '1.5rem',
        boxShadow: `0 10px 25px ${gradient}40`
      }}>
        {icon}
      </div>
      <h3 style={{
        fontSize: '1.25rem',
        fontWeight: 800,
        color: 'white',
        marginBottom: '0.5rem'
      }}>
        {title}
      </h3>
      <p style={{
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '13px',
        marginBottom: '1rem'
      }}>
        {description}
      </p>
      <div style={{
        background: gradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700,
        fontSize: '15px'
      }}>
        {info}
      </div>
    </div>
  );
}

// Add CSS animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0) translateX(0); }
    33% { transform: translateY(-30px) translateX(20px); }
    66% { transform: translateY(-10px) translateX(-20px); }
  }
  
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
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Select styling */
  select option {
    background: #1a1a1a;
    color: white;
  }
`;
document.head.appendChild(style);
