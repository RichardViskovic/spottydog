document.addEventListener('DOMContentLoaded', function() {

    // Initialize navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Initialize Lucide icons
    lucide.createIcons();

    // Code to retrieve the current year
    const year = new Date().getFullYear();
    document.getElementById("copyright-year").textContent = year;

});
