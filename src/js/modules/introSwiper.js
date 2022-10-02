import Swiper, { Navigation, Pagination } from "swiper";

export function introSwiper() {
  const introSwiper = new Swiper(".intro-swiper-js", {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: ".slider__btn-next",
      prevEl: ".slider__btn-prev",
    },

  });
}