// src/components/PDFQuickPreview.jsx
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function PDFQuickPreview() {
  const [file, setFile] = useState("");
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    window.openPreview = (url) => { setFile(url || ""); setOpen(!!url); };
    window.closePreview = () => setOpen(false);
    return () => { delete window.openPreview; delete window.closePreview; };
  }, []);

  if (!isOpen) return null;
  const isPdf = file.toLowerCase().endsWith(".pdf");

  return createPortal(
    <div className="qpv-backdrop" onClick={() => setOpen(false)}>
      <div className="qpv-modal" onClick={(e) => e.stopPropagation()}>
        <div className="qpv-header">
          <strong>Quick Preview</strong>
          <div className="qpv-actions">
            <a href={file} target="_blank" rel="noreferrer">Open</a>
            <a href={file} download>Download</a>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
        {isPdf ? (
          <iframe src={file} title="PDF" className="qpv-frame" />
        ) : (
          <div className="qpv-empty">This modal previews PDFs. Got: <code>{file}</code></div>
        )}
      </div>
      <style>{qpvStyles}</style>
    </div>,
    document.body
  );
}

const qpvStyles = `
.qpv-backdrop{position:fixed;inset:0;background:rgba(2,6,23,.6);backdrop-filter:blur(2px);display:grid;place-items:center;z-index:9999}
.qpv-modal{width:min(1100px,95vw);height:min(85vh,95vh);background:#0b1220;border:1px solid #1f2937;border-radius:16px;overflow:hidden;display:flex;flex-direction:column}
.qpv-header{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;background:#0f172a;color:#e2e8f0;border-bottom:1px solid #1f2937}
.qpv-actions{display:flex;gap:8px}
.qpv-actions a, .qpv-actions button{font-weight:700;font-size:13px;padding:8px 12px;border-radius:10px;border:1px solid #334155;background:#111827;color:#e5e7eb;text-decoration:none;cursor:pointer}
.qpv-actions a:hover, .qpv-actions button:hover{background:#1f2937}
.qpv-frame{flex:1;border:0;background:#fff}
.qpv-empty{flex:1;display:grid;place-items:center;color:#cbd5e1}
`;