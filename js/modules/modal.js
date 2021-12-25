export default function modalAdd() {
  const addNewTransaction = document.querySelector('[data-btn="add"]');
  const removeActiveModal = document.querySelectorAll('[data-btn="close"]');
  const activeClassModal = document.querySelector('[data-modal="add-active"]');

  function addTransaction(event) {
    event.preventDefault();
    activeClassModal.classList.add('active');
  }

  function closeModal(event) {
    event.preventDefault();
    activeClassModal.classList.remove('active');
  }

  function clickOutModal(event) {
    if (event.target === this) {
      return closeModal(event);
    }
  }

  addNewTransaction.addEventListener('click', addTransaction);
  activeClassModal.addEventListener('click', clickOutModal);
  removeActiveModal.forEach((item) => {
    item.addEventListener('click', closeModal);
  });
}
