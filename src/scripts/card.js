import { addLikeOnCard, removeLikeOnCard, deleteCardFromServer } from "./api.js";

function createCard({ _id, name, link, owner, likes }, openPopupImage, userId) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    const buttonDelete = cardElement.querySelector('.card__delete-button');
    const buttonLike = cardElement.querySelector('.card__like-button');
    const cardImage = cardElement.querySelector('.card__image');
    const cardLikesCount = cardElement.querySelector('.card__likes-count');

    cardImage.src = link;
    cardImage.alt = name;
    cardElement.querySelector('.card__title').textContent = name;

    cardLikesCount.textContent = likes.length;

    if (owner._id === userId) {
        buttonDelete.classList.remove('card__delete-button-hidden');
    } else {
        buttonDelete.classList.add('card__delete-button-hidden');
    }

    if (likes && likes.some(like => like._id === userId)) {
        buttonLike.classList.add('card__like-button_is-active');
    }

    cardImage.addEventListener('click', () => openPopupImage(link, name));

    buttonDelete.addEventListener('click', () => {
        deleteCardFromServer(_id)
        .then(() => {
            cardElement.remove();
        })
        .catch(err => console.error(err));
    });

    buttonLike.addEventListener('click', () => {
        if (buttonLike.classList.contains('card__like-button_is-active')) {
            removeLikeOnCard(_id)
            .then(updatedCard => {
                buttonLike.classList.remove('card__like-button_is-active');
                cardLikesCount.textContent = updatedCard.likes.length;
            })
            .catch(err => console.error(err));
        } else {
            addLikeOnCard(_id).then(updatedCard => {
                buttonLike.classList.add('card__like-button_is-active');
                cardLikesCount.textContent = updatedCard.likes.length; 
            })
            .catch(err => console.error(err));
        }
    });

    return cardElement;
}

export { createCard };