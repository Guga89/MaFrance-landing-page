window.onscroll = function () {
  applySticky();
};

// Get the navbar
var navbar = document.getElementById('navbar');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function applySticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

//============== Form validity check ==============================
const inputs = document.getElementsByClassName('form-input');

for (let input of inputs) {
  // Just before submit, the invalid event will fire, let's apply our class there.
  input.addEventListener(
    'invalid',
    (event) => {
      input.classList.add('error');
    },
    false
  );

  input.addEventListener('blur', (event) => {
    input.checkValidity();
  });
}
