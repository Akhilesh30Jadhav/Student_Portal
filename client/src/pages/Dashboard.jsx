import { useAuth } from '../context/AuthContext.jsx';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          color: '#0f172a',
          marginBottom: '0.5rem'
        }}>
          Welcome back, {user?.name}! 👋
        </h1>
        <p style={{ color: '#64748b', fontSize: '18px' }}>
          Here's your dashboard - more features coming soon!
        </p>
        
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '16px',
          marginTop: '2rem',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.1)'
        }}>
          <h3>Your Account Details:</h3>
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Role:</strong> {user?.role}</p>
          <p><strong>Student ID:</strong> {user?.studentId}</p>
          <p><strong>Course:</strong> {user?.course}</p>
        </div>
      </div>
    </div>
  );
}
