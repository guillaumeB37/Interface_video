const swiper = new Swiper('.swiper', {
  // Optional parameters
  spaceBetween: 5,
  slidesPerView: 2,
  loop: true,
  freeMode: true,
  loopAdditionalSlides: 5,
  soeed: 500,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    /*when window width is >= 640px*/
    770: {
      slidesPerView: 6,
      slidesPerGroup: 2,
      freeMode: false,
    }
  }
});
