function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    popup.style.visibility = 'visible';
    popup.style.opacity = 0;
  
    setTimeout(() => {
      popup.style.opacity = 1;
    }, 1);
}
  
function closePopup(popup) {
    if (popup.classList.contains('popup_is-opened')) {
      popup.style.opacity = 0;
      popup.addEventListener('transitionend', () => {
        popup.classList.remove('popup_is-opened');
        popup.style.visibility = 'hidden';
      }, { once: true });
    }
}
  
function closeOnOverlayClick(event, popups) {
    if (event.target === event.currentTarget) {
        if (Array.isArray(popups)) {
            popups.forEach(popup => closePopup(popup));
        }
    }
}

function handleEscClose(event, popups) {
    if (event.key === 'Escape') {
        if (Array.isArray(popups)) {
            popups.forEach(popup => closePopup(popup));
        }
    }
}

export {openPopup, closePopup, closeOnOverlayClick, handleEscClose};