import Swiper, { Navigation, Pagination } from 'swiper';

export function aboutSwiper() {
  const introSwiper = new Swiper('.about-swiper-js', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 30,

    centeredSlides: true,


    navigation: {
      nextEl: '.about__btn-next',
      prevEl: '.about__btn-prev',
    },
  });
}
