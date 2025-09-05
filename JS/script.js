document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".sidebar li");
  const sections = document.querySelectorAll(".section");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      // Quitar activos
      menuItems.forEach(i => i.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));

      // Activar el clicado
      item.classList.add("active");
      document.getElementById(item.dataset.section).classList.add("active");
    });
  });
});
