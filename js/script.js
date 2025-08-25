// Año automático en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle menú en móvil
const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
if (navToggle){
  navToggle.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    menu.style.flexDirection = 'column';
    navToggle.setAttribute('aria-expanded', String(!open));
  });
}

// Tema claro/oscuro
const root = document.documentElement;
const themeBtn = document.querySelector('.theme-toggle');
const stored = localStorage.getItem('theme');
if (stored) root.classList.toggle('light', stored === 'light');
themeBtn?.addEventListener('click', () => {
  const isLight = root.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
