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
        buttonDelete.addEventListener('click', () => { deleteCallback (_id, cardElement)});
    } else {
        buttonDelete.classList.add('card__delete-button-hidden');
    }


    const isLiked = likes && likes.some(like => like._id === userId);
    updateLikeButton(buttonLike, cardLikesCount, isLiked, likes.length);

    buttonLike.addEventListener('click', () => {
        const currentIsLiked = buttonLike.classList.contains('card__like-button_is-active');
        handleLike(_id, buttonLike, cardLikesCount, currentIsLiked);
    });


    cardImage.addEventListener('click', () => openPopupImage(link, name));

    return cardElement;

}

const deleteCallback = (id, cardElement) => {
    deleteCardFromServer(id)
    .then(() => { 
             cardElement.remove(); 
    }) 
    .catch(err => console.error(err));
 }


const handleLike = (cardId, buttonLike, cardLikesCount, isLiked) => {
    const likeMethod = isLiked ? removeLikeOnCard : addLikeOnCard;

    likeMethod(cardId)
        .then(updatedCard => {
            const newIsLiked = !isLiked;
            updateLikeButton(buttonLike, cardLikesCount, newIsLiked, updatedCard.likes.length);
        })
        .catch(err => console.log(err));
};

const updateLikeButton = (buttonLike, cardLikesCount, isLiked, likesCount) => {
    buttonLike.classList.toggle('card__like-button_is-active', isLiked);
    cardLikesCount.textContent = likesCount;
};


export { createCard };