import React from "react";

const FILES = [
  { title: "QB.pdf", path: "/materials/QB.pdf" },
  { title: "DAA-FULL.pdf", path: "/materials/DAA-FULL.pdf" },
  { title: "OOP-MANUAL.pdf", path: "/materials/OOP-MANUAL.pdf" },
];

export default function ResourcesLite() {
  return (
    <div style={{ minHeight: "100vh", background: "#f1f5f9" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem" }}>
        <h1 style={{
          margin: 0, fontSize: 32, fontWeight: 800,
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          WebkitBackgroundClip: "text", backgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
          Resources
        </h1>

        <div style={{ marginTop: 16, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16 }}>
          {FILES.map((f) => (
            <div key={f.path}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
                       padding: "14px 16px", borderBottom: "1px solid #eef2f7" }}>
              <div style={{ fontWeight: 600, color: "#0f172a" }}>{f.title}</div>
              <div style={{ display: "flex", gap: 8 }}>
                <a href={f.path} target="_blank" rel="noreferrer"
                   style={btnOutline}>View</a>
                <a href={f.path} download style={btnSolid}>Download</a>
              </div>
            </div>
          ))}
        </div>

        <p style={{ color: "#64748b", fontSize: 14, marginTop: 12 }}>
          Put your PDFs here: <code>/client/public/materials/</code>
        </p>
      </div>
    </div>
  );
}

const btnSolid = {
  padding: "8px 12px",
  background: "#0f172a",
  color: "#fff",
  border: "1px solid #0f172a",
  borderRadius: 10,
  fontWeight: 700,
  textDecoration: "none"
};

const btnOutline = {
  padding: "8px 12px",
  background: "#fff",
  color: "#0f172a",
  border: "2px solid #0f172a",
  borderRadius: 10,
  fontWeight: 700,
  textDecoration: "none"
};
