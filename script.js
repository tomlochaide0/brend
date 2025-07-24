// index.js

function toggleMenu() {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('#navbar .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if the navbar is currently shown and it's a mobile viewport
            // This ensures the menu only closes if it was open and on mobile
            const nav = document.getElementById('navbar');
            if (nav.classList.contains('show') && window.innerWidth < 768) {
                toggleMenu(); // Call toggleMenu to hide the menu
            }
        });
    });
});