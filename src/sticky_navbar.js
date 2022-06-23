const navbar = document.querySelector('.nav');
const gruda = navbar.offsetTop;

function grudaNavBar() {
  if (window.scrollY >= gruda) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

/* if window.siz */

window.onscroll = grudaNavBar();
