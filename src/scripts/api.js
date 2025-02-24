const config = {
    baseURL: 'https://nomoreparties.co/v1/wff-cohort-32',
    headers: {
        authorization: '22e04659-805d-44c0-ad1a-8811974e7812',
        'Content-Type': 'application/json; charset=UTF-8'
      }
};

const handleResponse = (res) => {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

const getUserInfoFromServer = () => {
    return fetch(`${config.baseURL}/users/me`, {
        method: "GET",
        headers: config.headers
    })
    .then((res) => handleResponse(res));
}

const getCardsFromServer = () => {
    return fetch(`${config.baseURL}/cards`, {
        method: "GET",
        headers: config.headers
    })
    .then((res) => handleResponse(res));
}

const editProfile = (name, about) => {
    return fetch(`${config.baseURL}/users/me`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
            name,
            about
        })
    })
    .then((res) => handleResponse(res));
}

const editProfilePicture = (avatar) => {
    return fetch(`${config.baseURL}/users/me/avatar`, {
        method: "PATCH",
        headers: config.headers,
        body: JSON.stringify({
            avatar
        })
    })
    .then((res) => handleResponse(res));
}

const addCard = (name, link) => {
    return fetch(`${config.baseURL}/cards`, {
        method: "POST",
        headers: config.headers,
        body: JSON.stringify({
            name,
            link,
        })
    })
    .then((res) => handleResponse(res));
}

const addLikeOnCard = (cardId) => {
    return fetch(`${config.baseURL}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: config.headers
    })
    .then((res) => handleResponse(res));
}

const removeLikeOnCard = (cardId) => {
    return fetch(`${config.baseURL}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: config.headers
    })
    .then((res) => handleResponse(res));
}

const deleteCardFromServer = (cardId) => {
    return fetch(`${config.baseURL}/cards/${cardId}`, {
        method: "DELETE",
        headers: config.headers
    })
    .then((res) => handleResponse(res));
}

export {getUserInfoFromServer, getCardsFromServer, editProfile, editProfilePicture, addCard, addLikeOnCard, removeLikeOnCard, deleteCardFromServer}