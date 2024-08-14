console.log("HOLA")

const modal = document.querySelector('.modal');

const buttonToOpenModal = document.querySelector('.create-reservation');
const buttonToCloseModal = document.querySelector('.close-modal');

buttonToOpenModal.addEventListener('click', function() {
    modal.style.display = "flex";
})

buttonToCloseModal.addEventListener('click', function() {
    modal.style.display = "none";
})