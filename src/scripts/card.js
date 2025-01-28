function createCard({name, link}, openPopupImage, deleteCard, likeCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const buttonDelete = cardElement.querySelector('.card__delete-button');
    const buttonLike = cardElement.querySelector('.card__like-button');
      
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = link;
    cardImage.alt = name;
  
    cardElement.querySelector('.card__title').textContent = name;
  
    cardImage.addEventListener('click', () => openPopupImage(link, name));
  
    buttonDelete.addEventListener('click', deleteCard); 
  
    buttonLike.addEventListener('click', likeCard);
  
    return cardElement;
}
  
function deleteCard(event) {
    event.target.closest('.places__item').remove();
}

function likeCard(event) {
    event.target.classList.toggle('card__like-button_is-active');
}

export {createCard, deleteCard, likeCard};