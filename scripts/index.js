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
    
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__title').textContent = name;

  return cardElement;
}

cardsContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('card__delete-button')) {
    deleteCard(event);
  }
});

function deleteCard(event) {
  const cardElement = event.target.closest('.places__item');
  cardElement.remove();
}
  
displayCards(initialCards);