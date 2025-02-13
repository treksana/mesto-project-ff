// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

import './styles/index.css';
import {openPopup, closePopup, closeOnOverlayClick} from './scripts/modal.js';
import { enableValidation, clearValidation } from './scripts/validation.js';
import { createCard } from './scripts/card.js';
import { getUserInfoFromServer, getCardsFromServer, addCard, editProfile, editProfilePicture } from './scripts/api.js';


const cardsContainer = document.querySelector('.places__list');

let userId;

function displayCards(initialCards) {
  const cardElements = initialCards.map(card => createCard(card, openPopupImage, userId));
  cardsContainer.append(...cardElements);
}

Promise.all([getUserInfoFromServer(), getCardsFromServer()])
  .then(([userInfo, cards]) => {
    userId = userInfo._id;
        displayCards(cards);
    })
    .catch(err => {
      console.log(err);
    })



const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAddCard = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_new-card');
const popupViewImage = document.querySelector('.popup_type_image');
const popupChangeAvatar = document.querySelector('.popup_type_change-avatar');

popupEdit.querySelector('.popup__close').addEventListener('click', () => closePopup(popupEdit));
popupAddCard.querySelector('.popup__close').addEventListener('click', () => closePopup(popupAddCard));
popupViewImage.querySelector('.popup__close').addEventListener('click', () => closePopup(popupViewImage));
popupChangeAvatar.querySelector('.popup__close').addEventListener('click', () => closePopup(popupChangeAvatar));

const popups = document.querySelectorAll('.popup');

popups.forEach((popup) => {
    popup.addEventListener('click', closeOnOverlayClick);
});

popups.forEach((popup) => {
  popup.classList.add('popup_is-animated');
})

function openPopupImage(link, name) {
  const popupImageElement = document.querySelector('.popup__image');
  const popupCaption = document.querySelector('.popup__caption');

  popupImageElement.src = link;
  popupImageElement.alt = name;
  popupCaption.textContent = name;

  openPopup(popupViewImage);
  clearValidation(profileFormElement, validationConfig);
}

const profileFormElement = popupEdit.querySelector('.popup__form');

const nameInput = profileFormElement.querySelector('.popup__input_type_name');
const jobInput = profileFormElement.querySelector('.popup__input_type_description');


const currentName = document.querySelector('.profile__title');
const currentJob = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');

const saveButton = document.querySelectorAll('.popup__button');

function openProfilePopup() {

  getUserInfoFromServer()
    .then(data => {
      nameInput.value = data.name;
      jobInput.value = data.about;
    })
    .catch(err => {
      console.log(err);
    })

  openPopup(popupEdit);
  clearValidation(profileFormElement, validationConfig);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const name = nameInput.value;
  const job = jobInput.value;

  saveButton.textContent = 'Сохранение...';
  
  editProfile(name, job)
    .then(data => {
      currentName.textContent = data.name;
      currentJob.textContent = data.about;

      closePopup(popupEdit);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      saveButton.textContent = 'Сохранить';
    });
}



profileFormElement.addEventListener('submit', handleProfileFormSubmit);

buttonEdit.addEventListener('click', openProfilePopup);

function initProfile() {
  getUserInfoFromServer()
      .then(data => {
          profileImage.style.backgroundImage = `url(${data.avatar})`;
          currentName.textContent = data.name;
          currentJob.textContent = data.about;
      })
      .catch(err => {
        console.log(err);
      });
}


const newCardForm = popupAddCard.querySelector('.popup__form');

newCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  const newCardName = newCardForm.querySelector('.popup__input_type_card-name').value;
  const newCardLink = newCardForm.querySelector('.popup__input_type_url').value;

  saveButton.textContent = 'Сохранение...';

  addCard(newCardName, newCardLink)
      .then(newCardData => {
          const newCard = createCard(newCardData, openPopupImage, userId);
          cardsContainer.prepend(newCard);
          closePopup(popupAddCard);
          clearValidation(newCardForm, validationConfig);
          newCardForm.reset();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        saveButton.textContent = 'Сохранить';
    });
});

function openAddCardPopup() {
  openPopup(popupAddCard);
  newCardForm.reset();
  clearValidation(newCardForm, validationConfig);
}

buttonAddCard.addEventListener('click', openAddCardPopup);

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

enableValidation(validationConfig);


const buttonChangeAvatar = document.querySelector('.profile__image');
const changeAvatarForm = popupChangeAvatar.querySelector('.popup__form');

const avatarInput = changeAvatarForm.querySelector('.popup__input_type_url');


function openChangeAvatarPopup() {
  openPopup(popupChangeAvatar);
  changeAvatarForm.reset();
  clearValidation(changeAvatarForm, validationConfig);
}

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();

  const newAvatarUrl = avatarInput.value;

  saveButton.textContent = 'Сохранение...';

  editProfilePicture(newAvatarUrl)
      .then(data => {
        profileImage.style.backgroundImage = `url(${data.avatar})`;
        closePopup(popupChangeAvatar); 
      })
      .catch(err => {
          console.log(err);
      })
      .finally(() => {
          saveButton.textContent = 'Сохранить';
      });
}

changeAvatarForm.addEventListener('submit', handleAvatarFormSubmit);

buttonChangeAvatar.addEventListener('click', openChangeAvatarPopup);

initProfile();