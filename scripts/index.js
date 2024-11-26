// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardsContainer = document.querySelector('.places__list');

function displayCards(initialCards) {
  const cardElements = initialCards.map(createCard); 
  cardsContainer.append(...cardElements);
}

function createCard({name, link}) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
    
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__title').textContent = name;

  deleteButton.addEventListener("click", deleteCard); 

  return cardElement;
}

function deleteCard (event) { 
  event.target.closest(".card").remove(); 
};
  
displayCards(initialCards);