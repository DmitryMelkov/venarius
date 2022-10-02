export function aboutModal() {
  const modalBtn = document.querySelectorAll('.about__slide-play');
  const modalClose = document.querySelectorAll('.popup__close');

  modalBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      let currentBtn = item;
      let modalId = currentBtn.getAttribute('data-modal');
      let currentModal = document.querySelector(modalId);

      currentBtn.classList.add('active');
      currentModal.classList.add('active');

      modalClose.forEach(function (item) {
        item.addEventListener('click', function () {
          currentBtn.classList.remove('active');
          currentModal.classList.remove('active');
        });
      });
    });
  });
}
