// client/src/utils/materialsStore.js
let index = new Map();

export function registerMaterials(materials = []) {
  materials.forEach((m) => index.set(String(m._id), m));
  try {
    localStorage.setItem("notex_materials_index", JSON.stringify(materials));
  } catch {}
}

export function getMaterialById(id) {
  const key = String(id);
  if (index.has(key)) return index.get(key);

  // Fallback so it works after hard refresh
  try {
    const raw = localStorage.getItem("notex_materials_index");
    if (raw) {
      const arr = JSON.parse(raw);
      arr.forEach((m) => index.set(String(m._id), m));
      return index.get(key) || null;
    }
  } catch {}
  return null;
}
