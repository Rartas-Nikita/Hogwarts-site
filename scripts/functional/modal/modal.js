import {} from "./phone-mask.js"

const buttonElems = document.querySelectorAll('.btn');
const modalElem = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal__close');

export const closeModal = () => {
    modalElem.style.visibility = 'hidden';
    modalElem.style.opacity = 0;
}

const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
};

buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal);
})

closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('click', handleClick, false)

function handleClick(event) {
    let classClicked = event.srcElement.className;
    if (classClicked == 'modal') closeModal();
}

