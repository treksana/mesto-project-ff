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


const checkInputValidity = (formElement, inputElement, settings) => {
  const value = inputElement.value.trim();

  let errorMessage = '';


  if (inputElement.pattern && value) {
    const regex = new RegExp(inputElement.pattern);
    if (!regex.test(value)) {
        errorMessage = inputElement.dataset.errorMessage || 'Разрешены только латинские и кириллические буквы, знаки дефиса и пробелы.';
    }
  }

  if (!inputElement.validity.valid) {
    errorMessage = inputElement.validationMessage;
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
    disableSubmitButton(buttonElement, settings);
  } else {
    enableSubmitButton(buttonElement, settings);
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

  disableSubmitButton(buttonElement, settings);
}; 

const disableSubmitButton = (button, config) => {
  button.disabled = true;
  button.classList.add(config.inactiveButtonClass);
};

const enableSubmitButton = (button, config) => {
  button.disabled = false;
  button.classList.remove(config.inactiveButtonClass);
};


export { enableValidation, clearValidation }; 