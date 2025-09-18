// Definición global para poder usarla en cualquier página
window.includeHtml = async function(id, file, callback) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`No se pudo cargar ${file}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
    if (callback) callback(); // Ejecuta código luego de cargar el fragmento
  } catch (err) {
    console.error("Error en includeHtml:", err);
  }
};

// Carga por defecto header y footer (puedes comentar/ajustar según la página)
window.addEventListener("DOMContentLoaded", () => {
  includeHtml("header", "header.html");
  includeHtml("footer", "footer.html");
});
