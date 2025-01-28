// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

import './styles/index.css';
import { initialCards } from './scripts/cards.js';
import {createCard, deleteCard, likeCard} from './scripts/card.js';
import {openPopup, closePopup, closeOnOverlayClick, handleEscClose} from './scripts/modal.js';


const cardsContainer = document.querySelector('.places__list');

function displayCards(initialCards) {
  const cardElements = initialCards.map(card => createCard(card, openPopupImage, deleteCard, likeCard));
  cardsContainer.append(...cardElements);
}
  
displayCards(initialCards);

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_new-card');
const popupViewImage = document.querySelector('.popup_type_image');

buttonAddCard.addEventListener('click', () => openPopup(popupAddCard));

popupEdit.querySelector('.popup__close').addEventListener('click', () => closePopup(popupEdit));
popupAddCard.querySelector('.popup__close').addEventListener('click', () => closePopup(popupAddCard));
popupViewImage.querySelector('.popup__close').addEventListener('click', () => closePopup(popupViewImage));

const popups = [popupEdit, popupAddCard, popupViewImage];

popups.forEach(popup => {
    popup.addEventListener('click', (event) => closeOnOverlayClick(event, popups));
});

document.addEventListener('keydown', (event) => handleEscClose(event, popups));

function openPopupImage(link, name) {
  const popupImageElement = document.querySelector('.popup__image');
  const popupCaption = document.querySelector('.popup__caption');

  popupImageElement.src = link;
  popupImageElement.alt = name;
  popupCaption.textContent = name;

  openPopup(popupViewImage);
}

popupEdit.addEventListener('click', closeOnOverlayClick);
popupAddCard.addEventListener('click', closeOnOverlayClick);
popupViewImage.addEventListener('click', closeOnOverlayClick);



/*document.addEventListener('keydown', (event) => {
  if(event.key === 'Escape') {
    if (Array.isArray(popups)) {
      popups.forEach(popup => closePopup(popup));
    }
  }
});*/

const formElement = popupEdit.querySelector('.popup__form');

const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');

const currentName = document.querySelector('.profile__title');
const currentJob = document.querySelector('.profile__description');

function openProfilePopup() {
  if (currentName && currentJob) {
    nameInput.value = currentName.textContent;
    jobInput.value = currentJob.textContent;
  }

  openPopup(popupEdit);
}

function handleNameFormSubmit(evt) {
  evt.preventDefault();

  const name = nameInput.value;
  const job = jobInput.value;

  if (currentName && currentJob) {
    currentName.textContent = name;
    currentJob.textContent = job;
  }

  closePopup(popupEdit);
}

formElement.addEventListener('submit', handleNameFormSubmit);

buttonEdit.addEventListener('click', openProfilePopup);

popupEdit.querySelector('.popup__close').addEventListener('click', () => {
  closePopup(popupEdit);
});


const newCardForm = popupAddCard.querySelector('.popup__form');

newCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const newPlaceName = newCardForm.querySelector('.popup__input_type_card-name').value;
  const newPlaceLink = newCardForm.querySelector('.popup__input_type_url').value;

  const newCard = createCard({name: newPlaceName, link: newPlaceLink}, openPopupImage, deleteCard, likeCard);
  cardsContainer.prepend(newCard);

  closePopup(popupAddCard);
  newCardForm.reset();
});
