import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';


export default function Preview() {
  const { filename } = useParams();
  const navigate = useNavigate();
  const [material, setMaterial] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Mock data - you can replace this with actual data fetching
    const mockMaterials = [
      {
        _id: '21',
        title: 'Database Management System',
        subject: 'DBMS',
        branch: 'CSE AIML',
        year: '2nd Year',
        semester: 'Semester 3',
        fileType: 'PDF',
        uploadedBy: { name: 'Anonymous' },
        createdAt: new Date().toISOString(),
        downloadCount: 0,
        file: '/materials/QB.pdf',
        description: 'Comprehensive notes covering all DBMS concepts including ER models, normalization, SQL queries, and transaction management.'
      },
      {
        _id: '24',
        title: 'Design and Analysis of Algorithms',
        subject: 'DAA',
        branch: 'CSE AIML',
        year: '2nd Year',
        semester: 'Semester 3',
        fileType: 'PDF',
        uploadedBy: { name: 'Anonymous' },
        createdAt: new Date().toISOString(),
        downloadCount: 0,
        file: '/materials/DAA-FULL.pdf',
        description: 'Complete DAA notes including sorting algorithms, graph algorithms, dynamic programming, and complexity analysis.'
      }
    ];

    const foundMaterial = mockMaterials.find(m => m.file.includes(filename));
    if (foundMaterial) {
      setMaterial(foundMaterial);
    }
  }, [filename]);

  const handleDownload = () => {
    if (material) {
      const link = document.createElement('a');
      link.href = material.file;
      link.download = filename;
      link.click();
    }
  };

  const getBranchColor = (branch) => {
    const colors = {
      'CSE': '#3b82f6',
      'CSE AIML': '#8b5cf6',
      'CSE AIDS': '#10b981',
      'CSE Business Studies': '#f59e0b'
    };
    return colors[branch] || '#64748b';
  };

  if (!material) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Material not found</h2>
          <Link to="/materials" style={{ color: '#3b82f6' }}>← Back to Materials</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
      padding: isMobile ? '1rem' : '2rem'
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: '2rem'
      }}>
        <Link 
          to="/materials" 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#64748b',
            textDecoration: 'none',
            marginBottom: '1rem',
            fontSize: '14px'
          }}
        >
          ← Back to Materials
        </Link>
        
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: isMobile ? '1.5rem' : '2rem',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.1)',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '2rem',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ flex: 1 }}>
              <h1 style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '1rem'
              }}>
                {material.title}
              </h1>
              
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  padding: '0.25rem 0.75rem',
                  background: `${getBranchColor(material.branch)}20`,
                  color: getBranchColor(material.branch),
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {material.subject}
                </span>
                <span style={{
                  padding: '0.25rem 0.75rem',
                  background: '#f3f4f6',
                  color: '#6b7280',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {material.year}
                </span>
                <span style={{
                  padding: '0.25rem 0.75rem',
                  background: '#fef3c7',
                  color: '#d97706',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {material.semester}
                </span>
                <span style={{
                  padding: '0.25rem 0.75rem',
                  background: '#dbeafe',
                  color: '#2563eb',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {material.fileType}
                </span>
              </div>

              <p style={{
                color: '#64748b',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                {material.description}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '14px',
                color: '#9ca3af'
              }}>
                <span>👤 {material.uploadedBy?.name}</span>
                <span>📅 {new Date(material.createdAt).toLocaleDateString()}</span>
                <span>📥 {material.downloadCount} downloads</span>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '1rem',
              flexDirection: isMobile ? 'row' : 'column'
            }}>
              <button
                onClick={handleDownload}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: `linear-gradient(135deg, ${getBranchColor(material.branch)}, ${getBranchColor(material.branch)}dd)`,
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = `0 8px 20px ${getBranchColor(material.branch)}40`;
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0px)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                📥 Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Preview */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.1)'
        }}>
          <div style={{
            padding: '1.5rem',
            borderBottom: '1px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              margin: 0
            }}>
              📄 Document Preview
            </h3>
            <a
              href={material.file}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.5rem 1rem',
                background: '#f3f4f6',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              🔗 Open in New Tab
            </a>
          </div>
          
          <div style={{ height: isMobile ? '60vh' : '80vh' }}>
            <iframe
              src={material.file}
              style={{
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              title={material.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
