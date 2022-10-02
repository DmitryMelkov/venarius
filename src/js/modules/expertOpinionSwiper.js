import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export function expertOpinionSwiper() {
  const introSwiper = new Swiper('.expert-opinion__swiper', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    slidesPerView: 'auto',
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 1000,

    pagination: {
      el: '.expert-opinion__pagination',
      clickable: true,
    },
  });
}
