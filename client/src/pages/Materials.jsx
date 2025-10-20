import { useState, useEffect } from 'react';
import api from '../utils/api.js';

import FileList from "../components/FileList"; // adjust path if you're inside pages/
import { registerMaterials } from "../utils/materialsStore";
import { Link } from "react-router-dom";  

export default function Materials() {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
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
    fetchMaterials();
  }, [searchQuery, selectedType, selectedBranch, selectedYear, selectedSemester]);

  const fetchMaterials = async () => {
    try {
      setLoading(true);
      // In a real app, you'd filter based on these parameters
      const filters = {};
      if (searchQuery) filters.search = searchQuery;
      if (selectedType) filters.fileType = selectedType;
      if (selectedBranch) filters.branch = selectedBranch;
      if (selectedYear) filters.year = selectedYear;
      if (selectedSemester) filters.semester = selectedSemester;

      // Enhanced mock data with semester information
      setMaterials([
        {
          _id: '1',
          title: 'Engineering Chemistry ',
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
          year: '1st   Year',
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
          file : '/materials/DAA-FULL.pdf'
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
        
      ]);

      registerMaterials(materials);     

    } catch (error) {
      console.error('Error fetching materials:', error);
    } finally {
      setLoading(false);
    }
  };

  
  const branches = [
    'CSE', 
    'CSE AIML', 
    'CSE AIDS', 
    'CSE Business Studies'
  ];

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
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
      padding: isMobile ? '2rem 1rem' : '3rem 2rem'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '3rem' : '4rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.25rem',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            border: '1px solid rgba(59, 130, 246, 0.2)'
          }}>
            <span style={{ color: '#3b82f6', fontWeight: '600', fontSize: '14px' }}>
              📚 D Y PATIL UNIVERSITY MATERIALS
            </span>
          </div>
          
          <h1 style={{
            fontSize: isMobile ? '2.5rem' : '4rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-1px'
          }}>
            Discover & Share
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Knowledge
            </span>
          </h1>
          
          <p style={{
            fontSize: isMobile ? '1rem' : '1.2rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Access study materials from your fellow D Y Patil University students. Filter by your specific branch, year, and semester to find exactly what you need.
          </p>
        </div>

        {/* Enhanced Search & Filters */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: isMobile ? '2rem' : '2.5rem',
          boxShadow: '0 20px 50px rgba(15, 23, 42, 0.1)',
          border: '1px solid rgba(15, 23, 42, 0.05)',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr',
            gap: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            {/* Search Box */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#374151',
                fontWeight: '600',
                fontSize: '14px'
              }}>Search Materials</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, subject, or keyword..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 3rem',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
                <div style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#9ca3af'
                }}>
                  🔍
                </div>
              </div>
            </div>

            {/* Branch Filter */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#374151',
                fontWeight: '600',
                fontSize: '14px'
              }}>Branch</label>
              <select
                value={selectedBranch}
                onChange={(e) => {
                  setSelectedBranch(e.target.value);
                }}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '16px',
                  backgroundColor: 'white',
                  outline: 'none'
                }}
              >
                <option value="">All Branches</option>
                {branches.map(branch => (
                  <option key={branch} value={branch}>{branch}</option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#374151',
                fontWeight: '600',
                fontSize: '14px'
              }}>Year</label>
              <select
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  setSelectedSemester(''); 
                }}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '16px',
                  backgroundColor: 'white',
                  outline: 'none'
                }}
              >
                <option value="">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Second Row Filters */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
            gap: '1.5rem',
            alignItems: 'end'
          }}>
            {/* Semester Filter */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#374151',
                fontWeight: '600',
                fontSize: '14px'
              }}>
                Semester
                {selectedYear && (
                  <span style={{ 
                    color: '#3b82f6', 
                    fontSize: '12px', 
                    marginLeft: '0.5rem' 
                  }}>
                    ({selectedYear})
                  </span>
                )}
              </label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '16px',
                  backgroundColor: 'white',
                  outline: 'none'
                }}
              >
                <option value="">All Semesters</option>
                {availableSemesters.map(semester => (
                  <option key={semester} value={semester}>{semester}</option>
                ))}
              </select>
            </div>

            {/* File Type Filter */}
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: '#374151',
                fontWeight: '600',
                fontSize: '14px'
              }}>File Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '16px',
                  backgroundColor: 'white',
                  outline: 'none'
                }}
              >
                <option value="">All Types</option>
                {fileTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Clear Filters Button */}
            <div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedType('');
                  setSelectedBranch('');
                  setSelectedYear('');
                  setSelectedSemester('');
                }}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(245, 158, 11, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0px)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Clear Filters 🔄
              </button>
            </div>
          </div>
        </div>

        {/* Materials Grid */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem' }}>
            <div style={{
              width: '48px',
              height: '48px',
              border: '4px solid #e2e8f0',
              borderTop: '4px solid #3b82f6',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 1rem'
            }}></div>
            <p style={{ color: '#64748b', fontSize: '18px' }}>Loading materials...</p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <p style={{ color: '#64748b', fontSize: '16px' }}>
                Found {filteredMaterials.length} materials
                {selectedBranch && <span style={{ color: '#3b82f6', fontWeight: '600' }}> for {selectedBranch}</span>}
                {selectedYear && <span style={{ color: '#8b5cf6', fontWeight: '600' }}> ({selectedYear})</span>}
                {selectedSemester && <span style={{ color: '#10b981', fontWeight: '600' }}> - {selectedSemester}</span>}
              </p>
              
              {(selectedBranch || selectedYear || selectedSemester) && (
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  {selectedBranch && (
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {selectedBranch}
                    </span>
                  )}
                  {selectedYear && (
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {selectedYear}
                    </span>
                  )}
                  {selectedSemester && (
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {selectedSemester}
                    </span>
                  )}
                </div>
              )}
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {filteredMaterials.map((material) => (
                <MaterialCard key={material._id} material={material} isMobile={isMobile} />
              ))}
            </div>
          </>
        )}

        {filteredMaterials.length === 0 && !loading && (
          <div style={{
            textAlign: 'center',
            padding: '4rem',
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.1)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📚</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              No materials found
            </h3>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>
              Try adjusting your search criteria or explore different branches, years, and semesters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('');
                setSelectedBranch('');
                setSelectedYear('');
                setSelectedSemester('');
              }}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function MaterialCard({ material, isMobile }) {
  const getFileIcon = (fileType) => {
    switch (fileType) {
      case 'PDF': return '📄';
      case 'DOCX': return '📝';
      case 'PPTX': return '📊';
      case 'TXT': return '📃';
      default: return '📎';
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

  const getSemesterColor = (semester) => {
    const semesterNum = parseInt(semester.split(' ')[1]);
    const colors = {
      1: '#ef4444', 2: '#f97316', 3: '#f59e0b', 4: '#eab308',
      5: '#84cc16', 6: '#22c55e', 7: '#10b981', 8: '#14b8a6'
    };
    return colors[semesterNum] || '#64748b';
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: '0 10px 30px rgba(15, 23, 42, 0.1)',
      border: '1px solid rgba(15, 23, 42, 0.05)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative'
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
      {/* Branch Badge */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        padding: '0.25rem 0.75rem',
        background: getBranchColor(material.branch),
        color: 'white',
        borderRadius: '20px',
        fontSize: '10px',
        fontWeight: '600'
      }}>
        {material.branch}
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem', marginTop: '1rem' }}>
        <div style={{
          width: '48px',
          height: '48px',
          background: `${getBranchColor(material.branch)}20`,
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          flexShrink: 0
        }}>
          {getFileIcon(material.fileType)}
        </div>
        
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '0.75rem',
            wordBreak: 'break-word'
          }}>
            {material.title}
          </h3>
          
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              background: `${getBranchColor(material.branch)}20`,
              color: getBranchColor(material.branch),
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              {material.subject}
            </div>
            <div style={{
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              background: '#f3f4f6',
              color: '#6b7280',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              {material.year}
            </div>
            <div style={{
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              background: `${getSemesterColor(material.semester)}20`,
              color: getSemesterColor(material.semester),
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              {material.semester}
            </div>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.5rem',
        fontSize: '14px',
        color: '#64748b'
      }}>
        <div>
          👤 {material.uploadedBy?.name}
        </div>
        <div>
          📥 {material.downloadCount} downloads
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ fontSize: '12px', color: '#9ca3af' }}>
          {new Date(material.createdAt).toLocaleDateString()}
        </div>
        
        
                    {/* VIEW (opens PDF in a new tab) */}
           {/*  <a
              href={material.file}                
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "10px 14px",
                background: "#fff",
                color: "#6d28d9",
                border: "2px solid #e9d5ff",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                boxShadow: "0 6px 18px rgba(109,40,217,0.18)",
                marginRight: 8
              }}
            >
              View
            </a> */}

            {/* DOWNLOAD (keep your existing one as is) */}
            {/* <a
              href={material.file}
              download
              style={{
                padding: "10px 14px",
                background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(109,40,217,0.35)"
              }}
            >
              Download
            </a> */}
    {Array.isArray(material.files) && material.files.length > 0 && (
   <Link
    to={`/materials/${material._id}/files`}
    state={{ material }}
    onClick={() => {
      try {
        sessionStorage.setItem("notex_last_material", JSON.stringify(material));
      } catch {}
    }}
    style={{
      display: "inline-block",
      marginTop: 8,
      padding: "6px 10px",
      background: "#fff",
      color: getBranchColor(material.branch),
      border: `2px solid ${getBranchColor(material.branch)}`,
      borderRadius: 8,
      fontSize: 12,
      fontWeight: 700,
      textDecoration: "none"
    }}
  >
    More files ({material.files.length})
  </Link>
)}

                  
              

                  </div>
                   {/* Collapsible extra files (put this OUTSIDE the actions row) */}
      <FileList
        files={material.files || []}
        color={getBranchColor(material.branch)}
      />


                </div>
               
              );
            }
            


const materialsData = [
  {
    subject: "DBMS",
    materials: [
      {
       name: "My Handwritten Notes",
       file: "/materials/QB.pdf",
       type: "PDF",
       size: "X.X MB" 
       
       },
      // …other materials
    ]
  },
  {
    subject: "DAA",
    materials: [
      {
       name: "My Handwritten Notes",
       file: "/materials/DAA-FULL.pdf",
       type: "PDF",
       size: "X.X MB" 
       
       },
      // …other materials
    ]
  },
  // …other subjects
];
