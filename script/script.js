// script.js
// Código JS personalizado para o site Brendy's Buffet Livre

document.addEventListener("DOMContentLoaded", function () {
  console.log("Brendy's foi carregado com sucesso!");
  console.log("GitHub: https://github.com/tomlochaide0");

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (!hamburger || !navLinks) return; // segurança caso algum elemento não exista

  // Abrir/fechar menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');       // mostra/esconde menu
    hamburger.classList.toggle('active');    // animação do hamburger
  });

  // Fecha o menu quando um link é clicado
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        hamburger.classList.remove('active');
      }
    });
  });

  // Opcional: fecha o menu se clicar fora dele (fora do mobile)
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove('show');
      hamburger.classList.remove('active');
    }
  });
});
