$(function() {
  $('a[href="#standard-edition"]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var mainMenu = document.querySelector(".main-menu");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  mainMenu.classList.toggle("is-active");
  // Do something else, like open/close menu
});

var languageSelector = document.getElementById("language-select");
var languageDropdown = document.getElementById("dropdown-menu");

languageSelector.addEventListener("click", function() {
  languageDropdown.classList.toggle("active");
  languageSelector.classList.toggle("active");
});