const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
 breakpoints: {
    // when window width is >= 320px
    1900: {
      slidesPerView: 6,
    },
    // when window width is >= 480px
    1600: {
      slidesPerView: 5,
    },
    // when window width is >= 640px
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

});
const pswiper = new Swiper('.recommended-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
breakpoints: {
    // when window width is >= 320px
    1600: {
      slidesPerView: 3,
    },
    // when window width is >= 480px
    1100: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },

});
const searchBtn = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
mobileSearch.classList.toggle('is-open');

if (document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  pswiper.destroy();
}
});