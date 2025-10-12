export default function SearchBar({ q, setQ, filters, setFilters, onSearch }) {
  return (
    <div className="card" style={{ marginBottom: 12 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr auto', gap: 8 }}>
        <input placeholder="Search..." value={q} onChange={(e) => setQ(e.target.value)} />
        <input placeholder="Subject" value={filters.subject} onChange={(e) => setFilters(s => ({ ...s, subject: e.target.value }))} />
        <input placeholder="Department" value={filters.department} onChange={(e) => setFilters(s => ({ ...s, department: e.target.value }))} />
        <input placeholder="Year" type="number" value={filters.year} onChange={(e) => setFilters(s => ({ ...s, year: e.target.value }))} />
        <select value={filters.category} onChange={(e) => setFilters(s => ({ ...s, category: e.target.value }))}>
          <option value="">All</option>
          <option value="PYQ">PYQ</option>
          <option value="Notes">Notes</option>
          <option value="Syllabus">Syllabus</option>
          <option value="Assignment">Assignment</option>
          <option value="Other">Other</option>
        </select>
        <button onClick={onSearch}>Search</button>
      </div>
    </div>
  );
}
