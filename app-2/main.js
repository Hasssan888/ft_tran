const mobileButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileButton.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
});