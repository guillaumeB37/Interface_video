const sliders = document.querySelector(".tendance-1-box");
var scrollPerClick;

var scrollAmount = 0;

function sliderScrollLeft() {
  sliders.scrollTo({
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });

  if(scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight() {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
}
