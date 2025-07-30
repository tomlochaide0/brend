// script.js
// Código JS personalizado para o site Brendy's Buffet Livre

document.addEventListener("DOMContentLoaded", function () {
  console.log("Brendy's site carregado com sucesso!");

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Fecha o menu quando um link é clicado (útil para menus de página única)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  });
});
