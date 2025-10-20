import { useMemo } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { getMaterialById } from "../utils/materialsStore";

/* ---------- Pretty title helpers ---------- */
const PRETTY_ACRONYMS = new Set(["DBMS","DSA","OOP","PYQ","CSE","AIML","LAB"]);
const toTitleCase = (s) =>
  s.replace(/\w\S*/g,(w)=>{
    const up = w[0].toUpperCase()+w.slice(1).toLowerCase();
    return PRETTY_ACRONYMS.has(up.toUpperCase()) ? up.toUpperCase() : up;
  });
function prettyTitle(f) {
  const raw = (f && typeof f === "object")
    ? (f.title?.trim() || (f.path?.split("/").pop() ?? ""))
    : String(f ?? "");
  const clean = raw.replace(/\.[^.]+$/,"").replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();
  return toTitleCase(clean).replace(/\bQb\b/g,"QB").replace(/\bPyq\b/g,"PYQ");
}
/* ----------------------------------------- */

/* ---------- Rename specific files here (no data change needed) ---------- */
const TITLE_OVERRIDES = {
  "/materials/QB.pdf": "WEEK-2 Question  Bank",
  "/materials/week3_qb.pdf": "Week 3 – QB",
  "/materials/syllabus_dbms.pdf": "DBMS Syllabus 2025",
};
/* ----------------------------------------------------------------------- */

export default function MaterialFiles() {
  const { id } = useParams();
  const { state } = useLocation();

  // Try: 1) router state, 2) sessionStorage, 3) local store
  const material = useMemo(() => {
    if (state?.material) return state.material;
    try {
      const raw = sessionStorage.getItem("notex_last_material");
      if (raw) {
        const obj = JSON.parse(raw);
        if (String(obj?._id) === String(id)) return obj;
      }
    } catch {}
    return getMaterialById(id);
  }, [state, id]);

  if (!material) {
    return (
      <div style={{ minHeight: "100vh", background: "#f1f5f9" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem" }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: "#0f172a" }}>Files</h1>
          <p style={{ color: "#64748b", marginTop: 8 }}>
            Material not found. Open the Materials page once to load items, then try again.
          </p>
          <Link to="/materials" style={backLink}>← Back to Materials</Link>
        </div>
      </div>
    );
  }

  const files = [
    ...(material.file ? [{ title: material.fileTitle || "Primary", path: material.file }] : []),
    ...(Array.isArray(material.files) ? material.files : [])
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f1f5f9" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem" }}>
        {/* Header */}
        <div style={{ marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h1 style={titleGrad}>{material.title}</h1>
            <div style={{ marginTop: 8 }}>
              {badge(material.subject)}
              {badge(material.year)}
              {badge(material.semester)}
            </div>
          </div>
          <Link to="/materials" style={backLink}>← Back</Link>
        </div>

        {/* Card */}
        <div style={card}>
          {/* Meta row */}
          <div style={metaRow}>
            <span>👤 {material.uploadedBy?.name || "—"}</span>
            <span style={{ margin: "0 8px" }}>•</span>
            <span>{new Date(material.createdAt).toLocaleDateString()}</span>
            <span style={{ margin: "0 8px" }}>•</span>
            <span>📥 {material.downloadCount} downloads</span>
          </div>

          {/* Files list */}
          {files.length === 0 ? (
            <div style={{ padding: 20, color: "#64748b" }}>No files available.</div>
          ) : files.map((f, i) => (
            <div key={f.path || i} style={row(i === 0)}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={iconBox}>{i === 0 && material.file ? "★" : "📄"}</span>
                <div>
                  <div style={{ fontWeight: 700, color: "#0f172a" }}>
                    {/* Use override name if present, else prettyTitle */}
                    {TITLE_OVERRIDES[f.path] || prettyTitle(i === 0 && material.file ? { title: material.fileTitle || material.title } : f)}
                  </div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>{f.path}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                <a href={f.path} target="_blank" rel="noreferrer" style={btnOutline}>View</a>
                <a href={f.path} download style={btnSolid}>Download</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* styles */
const titleGrad = { margin: 0, fontSize: 32, fontWeight: 900, background: "linear-gradient(135deg,#0f172a,#1e293b)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" };
const backLink = { textDecoration: "none", fontWeight: 700, color: "#334155", border: "2px solid #cbd5e1", padding: "8px 10px", borderRadius: 10 };
const card = { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, overflow: "hidden" };
const metaRow = { padding: "14px 16px", borderBottom: "1px solid #eef2f7", color: "#64748b", fontSize: 14 };
const row = (first) => ({ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderTop: first ? "none" : "1px solid #eef2f7" });
const iconBox = { width: 36, height: 36, borderRadius: 10, background: "#f8fafc", border: "1px solid #e5e7eb", display: "grid", placeItems: "center", fontWeight: 800, color: "#475569" };
const btnSolid = { padding: "8px 12px", background: "linear-gradient(135deg, #7c3aed, #6d28d9)", color: "#fff", border: "none", borderRadius: 10, fontWeight: 800, textDecoration: "none" };
const btnOutline = { padding: "8px 12px", background: "#fff", color: "#6d28d9", border: "2px solid #e9d5ff", borderRadius: 10, fontWeight: 800, textDecoration: "none" };
const badge = (text) => (<span style={{ display: "inline-block", padding: "4px 10px", borderRadius: 999, background: "#eef2ff", color: "#3730a3", fontWeight: 700, fontSize: 12, marginRight: 8 }}>{text}</span>);
