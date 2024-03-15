let mainSlide = new Swiper(".mainSlide", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".pg1",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

let subSlide = new Swiper(".subSlide", {
  slidesPerView: 3,
  spaceBetween: 30,
  // ========= 추가 부분 ==========
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // ============================
  pagination: {
    el: ".pg2",
    clickable: true,
  },
});
