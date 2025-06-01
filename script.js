
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

function toggleMenu() {
  navUl.classList.toggle('show');
}

menuToggle.addEventListener('click', toggleMenu);
menuToggle.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});