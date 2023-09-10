(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();

const swiper = new Swiper('.swiper', {
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    464: {
      slidesPerView: 3,
      spaceBetween: 10,

    },
    984: {
      slidesPerView: 4,
      spaceBetween: 4,
    },
        1248: {
          slidesPerView: 4,
          spaceBetween: 6,

    },
  },
  loop: true,

  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
  
 mousewheel: {
    invert: true,
  },
 
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});