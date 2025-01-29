function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', handleEscClose);
}
  
function closePopup(popup) {
    if (popup.classList.contains('popup_is-opened')) {
        popup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', handleEscClose);
    }
}

function closeOnOverlayClick(event) {
    const popup = event.target;
    if (popup.classList.contains('popup')) {
        closePopup(popup);
    }
};

function handleEscClose(event) {
    if(event.key === 'Escape') {
       closePopup(document.querySelector('.popup_is-opened'));
    }
}

export {openPopup, closePopup, closeOnOverlayClick};