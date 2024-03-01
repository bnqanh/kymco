"use strict";

$(document).ready(function () {
  $('#menu').slicknav({
    prependTo: '#mobi-menu',
    label: '',
    removeClasses: true,
    allowParentLinks: true,
    closedSymbol: "&#9660;",
    openedSymbol: "&#9660;"
  });
  $('#menu').slicknav('open'); //show mobi menu

  $('#burger-btn').click(function () {
    $('#nav-mobi').toggleClass("active");
    $('#overlay').toggleClass('active');
    $('#burger-btn').toggleClass('active');
  });
  $('#overlay').click(function () {
    $('#nav-mobi').removeClass("active");
    $('#overlay').removeClass('active');
    $('#burger-btn').removeClass('active');
  }); //show header lookup

  $('#show-header-lookup').click(function () {
    $('#header-lookup').toggleClass('show');
  }); // show scroll menu

  $(window).scroll(function () {
    var header = $('#header');

    if (pageYOffset > 70) {
      header.addClass('--scroll');
    } else header.removeClass('--scroll');
  });
}); // carousel hero homepage
// Get references to counter elements

var carouselIndex = document.getElementById('hero-carousel-index');
var carouselCount = document.getElementById('hero-carousel-count'); // Initialize Carousel

var myCarousel = new Carousel(document.getElementById('hero-carousel'), {
  transition: 'crossfade',
  Dots: false,
  on: {
    refresh: function refresh(carousel) {
      // Update counter
      if (carouselCount) {
        carouselCount.innerHTML = carousel.pages.length;
      }
    },
    change: function change(carousel, to, from) {
      // Update counter
      if (carouselIndex) {
        carouselIndex.innerHTML = carousel.page + 1 + "&nbsp;/&nbsp;";
      }
    }
  }
});
//# sourceMappingURL=main.dev.js.map
