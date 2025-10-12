import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const [form, setForm] = useState({ name:'', email:'', password:'', department:'', year:1 });
  const { register } = useAuth();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await register(form);
    nav('/');
  };

  return (
    <form onSubmit={submit} className="card" style={{ display: 'grid', gap: 8 }}>
      <h2>Register</h2>
      <input placeholder="Name" name="name" value={form.name} onChange={e=>setForm(f=>({...f,[e.target.name]:e.target.value}))} required />
      <input type="email" placeholder="Email" name="email" value={form.email} onChange={e=>setForm(f=>({...f,[e.target.name]:e.target.value}))} required />
      <input type="password" placeholder="Password" name="password" value={form.password} onChange={e=>setForm(f=>({...f,[e.target.name]:e.target.value}))} required />
      <input placeholder="Department" name="department" value={form.department} onChange={e=>setForm(f=>({...f,[e.target.name]:e.target.value}))} required />
      <input type="number" placeholder="Year" name="year" value={form.year} onChange={e=>setForm(f=>({...f,[e.target.name]:e.target.value}))} min={1} max={6} required />
      <button type="submit">Register</button>
    </form>
  );
}
