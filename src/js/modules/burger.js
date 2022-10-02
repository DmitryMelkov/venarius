export function burger() {
  const burgerOpen = document.querySelector('.gamburger__open-js');
  const burgerClose = document.querySelector('.gamburger__close-js');
  const burgerList = document.querySelector('.header__list-js');

  burgerOpen.addEventListener('click', function () {
    burgerList.classList.add('active');
    burgerClose.classList.add('active')
  });

  burgerClose.addEventListener('click', function () {
    burgerList.classList.remove('active');
    burgerClose.classList.remove('active')
  })
}
