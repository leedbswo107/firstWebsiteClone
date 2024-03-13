var swiper = new Swiper(".firstSwipe", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

var swiper = new Swiper(".secondSwipe", {
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
});
