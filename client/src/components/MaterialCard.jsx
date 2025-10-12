export default function MaterialCard({ m, onDownload }) {
  return (
    <div className="card" style={{ marginBottom: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ margin: '0 0 8px' }}>{m.title}</h3>
          <div style={{ opacity: 0.8, fontSize: 14 }}>
            {m.department} • Year {m.year} • {m.subject} • {m.category}
          </div>
          {m.description && <p style={{ marginTop: 8 }}>{m.description}</p>}
          <div style={{ fontSize: 13, opacity: 0.8 }}>Downloads: {m.downloads}</div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'start' }}>
          <a href={m.file_url} target="_blank" rel="noreferrer"><button>Open</button></a>
          <button onClick={() => onDownload(m._id)}>Download</button>
        </div>
      </div>
    </div>
  );
}
