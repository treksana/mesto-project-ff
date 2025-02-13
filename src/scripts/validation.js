const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = '';
};

const isValidUrl = (url) => {
  const urlPattern = /^(http|https):\/\/[^ "]+$/;
  return urlPattern.test(url);
};

const checkInputValidity = (formElement, inputElement, settings) => {
  const value = inputElement.value.trim();
  const isRequired = value === '';
  const minLength = inputElement.minLength;
  const maxLength = inputElement.maxLength;

  let errorMessage = '';

  if (isRequired) {
      errorMessage = 'Это поле обязательно для заполнения.';
  } 
  else if (['name-input', 'card-name-input', 'description-input'].includes(inputElement.id)) {
      const isCorrectFormat = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/.test(value);
      if (!isCorrectFormat) {
          errorMessage = 'Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы.';
      } else if (value.length < minLength || value.length > maxLength) {
          errorMessage = `Должно быть от ${minLength} до ${maxLength} символов. Длина текста сейчас: ${value.length}.`;
      }
  } 
  else if (['card-url-input', 'avatar-url-input'].includes(inputElement.id) && value) {
      if (!isValidUrl(value)) {
          errorMessage = 'Введите адрес сайта.';
      }
  }

  if (errorMessage) {
      showInputError(formElement, inputElement, errorMessage, settings);
  } else {
      hideInputError(formElement, inputElement, settings);
  }
};

const hasInvalidInput = (inputList, settings) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid || inputElement.classList.contains(settings.inputErrorClass);
  });
};

const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList, settings)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(settings.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(settings.inactiveButtonClass);
  }
};

const setEventListeners = (formElement, inputSelector, buttonSelector, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(buttonSelector);
  
  toggleButtonState(inputList, buttonElement, settings);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
  });
});
};

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
    });
    setEventListeners(formElement, settings.inputSelector, settings.submitButtonSelector, settings);
  });
};

const clearValidation = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  inputList.forEach(input => {
    hideInputError(formElement, input, settings);
  });
  buttonElement.disabled = true;
  buttonElement.classList.add(settings.inactiveButtonClass);
};

export { enableValidation, clearValidation };