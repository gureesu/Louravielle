
const navbar = document.querySelector('nav');
const navLinks = document.querySelector('ul');
const hamburger = document.querySelector('.hamburger');
let timeout;

// Function to handle scroll events
function handleScroll() {
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.classList.add('hide');
    navLinks.classList.add('hide');
  } else {
    navbar.classList.remove('hide');
    navLinks.classList.remove('hide');
  }

  lastScrollTop = Math.max(scrollTop, 0);

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    navbar.classList.remove('hide');
    navLinks.classList.remove('hide');
  }, 300);
}

// Function to handle hamburger menu click
function toggleHamburgerMenu() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  navLinks.classList.toggle('expanded');

  navbar.style.height = navLinks.classList.contains('expanded') ? '300px' : '140px';
}

// Function to handle window resize events
function handleResize() {
  if (window.innerWidth > 700) {
    navbar.style.height = '140px';
    navLinks.classList.remove('expanded', 'active');
    hamburger.classList.remove('active');
  }
}

// Event listeners
window.addEventListener('scroll', handleScroll);
hamburger.addEventListener('click', toggleHamburgerMenu);
window.addEventListener('resize', handleResize);
