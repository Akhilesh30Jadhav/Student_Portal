// src/pages/Materials.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FileList from "../components/FileList";
import { registerMaterials } from "../utils/materialsStore";

export default function Materials() {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
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

  useEffect(() => {
    fetchMaterials();
  }, [searchQuery, selectedType, selectedBranch, selectedYear, selectedSemester]);

  const fetchMaterials = async () => {
    try {
      setLoading(true);
      
      // Your existing materials data
      const materialsData = [
        {
          _id: '1',
          title: 'Engineering Chemistry',
          subject: 'ES',
          branch: 'CSE AIML',
          year: '1st Year',
          semester: 'Semester 2',
          fileType: 'PDF',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },
        {
          _id: '2',
          title: 'Engineering Mathematics II',
          subject: 'EM II',
          branch: 'CSE AIML',
          year: '1st Year',
          semester: 'Semester 2',
          fileType: 'PDF',
          uploadedBy: { name: '-----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },
        {
          _id: '3',
          title: 'Data Structures and Algorithms',
          subject: 'DSA',
          branch: 'CSE AIML',
          year: '1st Year',
          semester: 'Semester 2',
          fileType: 'PDF',
          uploadedBy: { name: '-----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },
        {
          _id: '4',
          title: 'Digital Logic Design',
          subject: 'DLD',
          branch: 'CSE AIML',
          year: '1st Year',
          semester: 'Semester 2',
          fileType: 'PPTX',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },
        {
          _id: '5',
          title: 'EC Lab ',
          subject: 'Chemistry',
          branch: 'CSE AIML',
          year: '1st Year',
          semester: 'Semester 2',
          fileType: 'PDF',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },
        {
          _id: '6',
          title: 'Data Structures LAB',
          subject: 'DSA LAB',
          branch: 'CSE AIML',
          year: '1st Year',
          semester: 'Semester 2',
          fileType: 'DOCX',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },
        {
          _id: '7',
          title: 'DLD LAB',
          subject: 'DLD',
          branch: 'CSE AIML',
          year: '1st Year',
          semester: 'Semester 2',
          fileType: 'PDF',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },
        
        
      
        {
          _id: '13',
          title: 'Engineering Mathematics I',
          subject: 'DBMS',
          branch: 'CSE AIML',
          year: '1st Year',
          semester: 'Semester 1',
          fileType: 'PDF',
          uploadedBy: { name: '-----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },
        {
          _id: '14',
          title: 'Engineering Physics ',
          subject: 'EP',
          branch: 'CSE AIML',
          year: '1st Year',
          semester: 'Semester 1',
          fileType: 'PDF',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },
        {
          _id: '15',
          title: 'Structured Programming in C',
          subject: 'SP',
          branch: 'CSE AIML',
          year: '1st Year',
          semester: 'Semester 1',
          fileType: 'PDF',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },
        {
          _id: '16',
          title: 'Principles of Electronics Engineering',
          subject: 'PEE',
          branch: 'CSE AIML',
          year: '1st Year',
          semester: 'Semester 1',
          fileType: 'PDF',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },
        {
          _id: '17',
          title: 'English for Engineers',
          subject: 'EE',
          branch: 'CSE AIML',
          year: '1st Year',
          semester: 'Semester 1',
          fileType: 'PDF',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },
        {
          _id: '18',
          title: 'EP - LAB',
          subject: 'EP',
          branch: 'CSE AIML',
          year: '1st Year',
          semester: 'Semester 1',
          fileType: 'PDF',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },
        {
          _id: '19',
          title: 'PEE - LAB',
          subject: 'PEE',
          branch: 'CSE AIML',
          year: '1st Year',
          semester: 'Semester 1',
          fileType: 'PDF',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },





        {
          _id: '20',
          title: 'Design and Analysis of Algorithms',
          subject: 'DAA',
          branch: 'CSE AIML',
          year: '2nd Year',
          semester: 'Semester 3',
          fileType: 'PDF',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0,
          file: '/materials/DAA-FULL.pdf',
          files: [
            { title: 'DAA_2024', path: '/materials/DAA_2024_MAY.pdf' },
            { title: 'DAA_DEC_2022', path: '/materials/DAA_DEC_2022.pdf' },
            { title: 'DAA LAB MANUAL', path: '/materials/DAA_Labmanual.pdf' },
            { title: 'DAA_MAY_2022', path: '/materials/DAA_May_2022.pdf' },
            { title: 'DAA_NOV_2023', path: '/materials/DAA_Nov_2023.pdf' },
            { title: 'DAA END SEM PRACTICE PAPER', path: '/materials/end_sem_practice_paper.pdf' },
          ]
        },
        {
          _id: '21',
          title: 'Database Management System',
          subject: 'DBMS',
          branch: 'CSE AIML',
          year: '2nd Year',
          semester: 'Semester 3',
          fileType: 'PDF',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0,
          file: '/materials/QB.pdf',
          files: [
            { title: 'week3_qb.pdf', path: '/materials/week3_qb.pdf' },
            { title: 'syllabus_dbms.pdf', path: '/materials/syllabus_dbms.pdf' },
            { title: 'DBMS_MAY_2024', path: '/materials/DBMS_MAY_2024.pdf' },
            { title: 'DBMS_NOV_2023', path: '/materials/DBMS_NOV_2023.pdf' },
            { title: 'DBMS_PYQ_3', path: '/materials/DBMS_PYQ_3.pdf' },
            { title: 'DBMS_PYQ_2024', path: '/materials/DBMS_PYQ_2024.pdf' },
            { title: 'DBMS_QB', path: '/materials/DBMS_QB.pdf' },
            { title: 'DBMS_REF_NOTES', path: '/materials/DBMS_REF_NOTES.pdf' },
          ]
        },

        
        {
          _id: '22',
          title: 'Skill Based Lab - JAVA',
          subject: 'SBL',
          branch: 'CSE AIML',
          year: '2nd Year',
          semester: 'Semester 3',
          fileType: 'PDF',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0,
          file: '/materials/OOP-MANUAL.pdf'
        },

        
        {
          _id: '23',
          title: 'Embedded Systems',
          subject: 'ES',
          branch: 'CSE AIML',
          year: '2nd Year',
          semester: 'Semester 3',
          fileType: 'PDF',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0,
          file : '/materials/ES_Module 4.pdf'

        },
        {
          _id: '24',
          title: 'DAA - LAB',
          subject: 'DAA',
          branch: 'CSE AIML',
          year: '2nd Year',
          semester: 'Semester 3',
          fileType: 'PDF',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },
        {
          _id: '25',
          title: 'DBMS - LAB',
          subject: 'DBMS',
          branch: 'CSE AIML',
          year: '2nd Year',
          semester: 'Semester 3',
          fileType: 'PDF',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },
        {
          _id: '26',
          title: 'SBL - LAB',
          subject: 'SBL',
          branch: 'CSE AIML',
          year: '2nd Year',
          semester: 'Semester 3',
          fileType: 'PDF',
          uploadedBy: { name: '----' },
          createdAt: new Date().toISOString(),
          downloadCount: 0
        },
        

        // Add rest of your materials here...
      ];

      setMaterials(materialsData);
      registerMaterials(materialsData);
    } catch (error) {
      console.error('Error fetching materials:', error);
    } finally {
      setLoading(false);
    }
  };

  const branches = ['CSE', 'CSE AIML', 'CSE AIDS', 'CSE Business Studies'];
  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  const semesters = [
    'Semester 1', 'Semester 2', 'Semester 3', 'Semester 4',
    'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'
  ];
  const fileTypes = ['PDF', 'DOCX', 'PPTX', 'TXT'];

  const availableSemesters = selectedYear 
    ? (() => {
        const yearMap = {
          '1st Year': ['Semester 1', 'Semester 2'],
          '2nd Year': ['Semester 3', 'Semester 4'], 
          '3rd Year': ['Semester 5', 'Semester 6'],
          '4th Year': ['Semester 7', 'Semester 8']
        };
        return yearMap[selectedYear] || semesters;
      })()
    : semesters;

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !selectedType || material.fileType === selectedType;
    const matchesBranch = !selectedBranch || material.branch === selectedBranch;
    const matchesYear = !selectedYear || material.year === selectedYear;
    const matchesSemester = !selectedSemester || material.semester === selectedSemester;
    return matchesSearch && matchesType && matchesBranch && matchesYear && matchesSemester;
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      padding: isMobile ? '2rem 1rem' : '3rem 2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
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
            top: '10%',
            left: '5%',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
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
            top: '40%',
            right: '10%',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            transition: 'transform 0.3s ease-out',
            animation: 'float 25s ease-in-out infinite reverse'
          }} />
        </>
      )}

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.25rem',
            background: 'rgba(167, 139, 250, 0.1)',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            border: '1px solid rgba(167, 139, 250, 0.2)',
            animation: 'fadeInDown 0.8s ease-out'
          }}>
            <span style={{ 
              color: '#a78bfa', 
              fontWeight: 700, 
              fontSize: '14px',
              letterSpacing: '0.05em'
            }}>
              📚 D Y PATIL UNIVERSITY MATERIALS
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
            Discover & Share
            <br />
            <span style={{
              background: 'linear-gradient(90deg, #a78bfa 0%, #f9a8d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Knowledge
            </span>
          </h1>
          
          <p style={{
            fontSize: isMobile ? '1rem' : '1.25rem',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7,
            animation: 'fadeInUp 1.2s ease-out'
          }}>
            Access study materials from fellow students. Filter by branch, year, and semester.
          </p>
        </div>

        {/* Search & Filters - Glass Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: isMobile ? '2rem 1.5rem' : '2.5rem',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '3rem',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          animation: 'fadeInUp 1.4s ease-out'
        }}>
          {/* Search Bar */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.75rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.05em'
            }}>
              🔍 SEARCH MATERIALS
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, subject, or keyword..."
                style={{
                  width: '100%',
                  padding: '1rem 1.5rem 1rem 3.5rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  fontSize: '16px',
                  color: 'white',
                  outline: 'none',
                  transition: 'all 0.3s ease'
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
              <div style={{
                position: 'absolute',
                left: '1.25rem',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '1.25rem'
              }}>
                🔍
              </div>
            </div>
          </div>

          {/* Filters Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: '1rem'
          }}>
            <FilterSelect
              label="Branch"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              options={['All Branches', ...branches]}
            />
            <FilterSelect
              label="Year"
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(e.target.value);
                setSelectedSemester('');
              }}
              options={['All Years', ...years]}
            />
            <FilterSelect
              label="Semester"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              options={['All Semesters', ...availableSemesters]}
            />
            <FilterSelect
              label="File Type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              options={['All Types', ...fileTypes]}
            />
          </div>

          {/* Clear Filters */}
          {(searchQuery || selectedBranch || selectedYear || selectedSemester || selectedType) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('');
                setSelectedBranch('');
                setSelectedYear('');
                setSelectedSemester('');
              }}
              style={{
                marginTop: '1.5rem',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 10px 30px rgba(245, 158, 11, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <span>🔄</span>
              Clear All Filters
            </button>
          )}
        </div>

        {/* Results Count */}
        {!loading && (
          <div style={{
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '16px' }}>
              Found <span style={{ color: '#a78bfa', fontWeight: 700 }}>{filteredMaterials.length}</span> materials
            </p>
            
            {(selectedBranch || selectedYear || selectedSemester) && (
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {selectedBranch && <Badge text={selectedBranch} color="#a78bfa" />}
                {selectedYear && <Badge text={selectedYear} color="#f9a8d4" />}
                {selectedSemester && <Badge text={selectedSemester} color="#fbbf24" />}
              </div>
            )}
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '5rem 0' }}>
            <div style={{
              width: '60px',
              height: '60px',
              border: '4px solid rgba(167, 139, 250, 0.2)',
              borderTop: '4px solid #a78bfa',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 1.5rem'
            }}></div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '18px' }}>
              Loading materials...
            </p>
          </div>
        ) : (
          <>
            {/* Materials Grid */}
            {filteredMaterials.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(380px, 1fr))',
                gap: '2rem'
              }}>
                {filteredMaterials.map((material) => (
                  <MaterialCard key={material._id} material={material} isMobile={isMobile} />
                ))}
              </div>
            ) : (
              <EmptyState onClear={() => {
                setSearchQuery('');
                setSelectedType('');
                setSelectedBranch('');
                setSelectedYear('');
                setSelectedSemester('');
              }} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

// Filter Select Component
function FilterSelect({ label, value, onChange, options }) {
  return (
    <div>
      <label style={{
        display: 'block',
        marginBottom: '0.5rem',
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: 600,
        fontSize: '13px',
        letterSpacing: '0.05em'
      }}>
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          fontSize: '15px',
          color: 'white',
          outline: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={index === 0 ? '' : option} style={{ background: '#1a1a1a' }}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

// Badge Component
function Badge({ text, color }) {
  return (
    <span style={{
      padding: '0.375rem 0.875rem',
      background: `${color}30`,
      color: color,
      borderRadius: '20px',
      fontSize: '13px',
      fontWeight: 700,
      border: `1px solid ${color}50`
    }}>
      {text}
    </span>
  );
}

// Material Card Component
function MaterialCard({ material, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);

  const getFileIcon = (fileType) => {
    const icons = { 'PDF': '📄', 'DOCX': '📝', 'PPTX': '📊', 'TXT': '📃' };
    return icons[fileType] || '📎';
  };

  const getBranchColor = (branch) => {
    const colors = {
      'CSE': '#3b82f6',
      'CSE AIML': '#a78bfa',
      'CSE AIDS': '#10b981',
      'CSE Business Studies': '#f59e0b'
    };
    return colors[branch] || '#64748b';
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        padding: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        transform: isHovered && !isMobile ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? `0 30px 60px ${getBranchColor(material.branch)}40`
          : '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
          <div style={{
            width: '56px',
            height: '56px',
            background: `linear-gradient(135deg, ${getBranchColor(material.branch)}, ${getBranchColor(material.branch)}dd)`,
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            flexShrink: 0,
            boxShadow: `0 10px 25px ${getBranchColor(material.branch)}40`
          }}>
            {getFileIcon(material.fileType)}
          </div>
          
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              color: 'white',
              marginBottom: '0.5rem',
              wordBreak: 'break-word'
            }}>
              {material.title}
            </h3>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <Badge text={material.subject} color={getBranchColor(material.branch)} />
              <Badge text={material.year} color="rgba(255, 255, 255, 0.3)" />
            </div>
          </div>
        </div>
        
        <div style={{
          padding: '0.375rem 0.75rem',
          background: `${getBranchColor(material.branch)}30`,
          color: getBranchColor(material.branch),
          borderRadius: '20px',
          fontSize: '11px',
          fontWeight: 700,
          whiteSpace: 'nowrap'
        }}>
          {material.branch}
        </div>
      </div>

      {/* Semester Badge */}
      <div style={{ marginBottom: '1.5rem' }}>
        <span style={{
          padding: '0.5rem 1rem',
          background: 'rgba(249, 168, 212, 0.15)',
          color: '#f9a8d4',
          borderRadius: '12px',
          fontSize: '13px',
          fontWeight: 700,
          border: '1px solid rgba(249, 168, 212, 0.3)'
        }}>
          📅 {material.semester}
        </span>
      </div>

      {/* Stats */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        marginBottom: '1rem',
        fontSize: '14px',
        color: 'rgba(255, 255, 255, 0.6)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>👤</span>
          {material.uploadedBy?.name}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>📥</span>
          {material.downloadCount} downloads
        </div>
      </div>

      {/* Actions */}
      {Array.isArray(material.files) && material.files.length > 0 && (
        <Link
          to={`/materials/${material._id}/files`}
          state={{ material }}
          style={{
            display: 'block',
            padding: '0.875rem',
            background: `linear-gradient(135deg, ${getBranchColor(material.branch)}, ${getBranchColor(material.branch)}dd)`,
            color: 'white',
            textAlign: 'center',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 700,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: `0 4px 15px ${getBranchColor(material.branch)}40`
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = `0 8px 25px ${getBranchColor(material.branch)}60`;
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = `0 4px 15px ${getBranchColor(material.branch)}40`;
          }}
        >
          📂 View Files ({material.files.length})
        </Link>
      )}

      {/* File List */}
      <FileList
        files={material.files || []}
        color={getBranchColor(material.branch)}
      />
    </div>
  );
}

// Empty State Component
function EmptyState({ onClear }) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '5rem 2rem',
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      border: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>📚</div>
      <h3 style={{ 
        fontSize: '2rem', 
        fontWeight: 800, 
        color: 'white', 
        marginBottom: '1rem',
        background: 'linear-gradient(90deg, #a78bfa, #f9a8d4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        No Materials Found
      </h3>
      <p style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: '2rem', lineHeight: 1.7 }}>
        Try adjusting your search criteria or explore different branches and semesters.
      </p>
      <button
        onClick={onClear}
        style={{
          padding: '1rem 2rem',
          background: 'linear-gradient(135deg, #a78bfa, #f9a8d4)',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-4px) scale(1.05)';
          e.target.style.boxShadow = '0 15px 40px rgba(167, 139, 250, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0) scale(1)';
          e.target.style.boxShadow = 'none';
        }}
      >
        Clear All Filters
      </button>
    </div>
  );
}

// Add spin animation to CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
