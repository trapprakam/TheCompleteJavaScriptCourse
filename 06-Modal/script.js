'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBTN = document.querySelector('.close-modal');
const showModalBTNs = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Add a event listener for when any of the buttons are clicked to open the modal
for (let i = 0; i < showModalBTNs.length; i++) {
  showModalBTNs[i].addEventListener('click', openModal);
}
// Add a event handler to close the modal when the X in the modal is clicked
// or when the user click outside of the modal.
closeModalBTN.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// keyboard event
document.addEventListener('keydown', function (keyboardEvent) {
  if (keyboardEvent.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
