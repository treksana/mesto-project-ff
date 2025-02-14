(()=>{"use strict";function e(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",r)}function t(e){e.classList.contains("popup_is-opened")&&(e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",r))}function n(e){var n=e.target;n.classList.contains("popup")&&t(n)}function r(e){"Escape"===e.key&&t(document.querySelector(".popup_is-opened"))}var o=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},c=function(e,t,n){!function(e,t){return e.some((function(e){return!e.validity.valid||e.classList.contains(t.inputErrorClass)}))}(e,n)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},a=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){o(e,n,t)})),r.disabled=!0,r.classList.add(t.inactiveButtonClass)},u={baseURL:"https://nomoreparties.co/v1/wff-cohort-32",headers:{authorization:"22e04659-805d-44c0-ad1a-8811974e7812","Content-Type":"application/json; charset=UTF-8"}},i=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},l=function(){return fetch("".concat(u.baseURL,"/users/me"),{method:"GET",headers:u.headers}).then((function(e){return i(e)}))},s=function(e){return fetch("".concat(u.baseURL,"/cards/likes/").concat(e),{method:"PUT",headers:u.headers}).then((function(e){return i(e)}))},d=function(e){return fetch("".concat(u.baseURL,"/cards/likes/").concat(e),{method:"DELETE",headers:u.headers}).then((function(e){return i(e)}))};function p(e,t,n){var r=e._id,o=e.name,c=e.link,a=e.owner,u=e.likes,i=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),l=i.querySelector(".card__delete-button"),p=i.querySelector(".card__like-button"),_=i.querySelector(".card__image"),m=i.querySelector(".card__likes-count");return _.src=c,_.alt=o,i.querySelector(".card__title").textContent=o,m.textContent=u.length,a._id===n?(l.classList.remove("card__delete-button-hidden"),l.addEventListener("click",(function(){f(r,i)}))):l.classList.add("card__delete-button-hidden"),u&&u.some((function(e){return e._id===n}))&&p.classList.add("card__like-button_is-active"),_.addEventListener("click",(function(){return t(c,o)})),p.addEventListener("click",(function(){(p.classList.contains("card__like-button_is-active")?d:s)(r).then((function(e){p.classList.toggle("card__like-button_is-active"),m.textContent=e.likes.length})).catch((function(e){return console.log(e)}))})),i}var f=function(e,t){var n;(n=e,fetch("".concat(u.baseURL,"/cards/").concat(n),{method:"DELETE",headers:u.headers}).then((function(e){return i(e)}))).then((function(){t.remove()})).catch((function(e){return console.error(e)}))};function _(e,t){if(e){if("string"==typeof e)return m(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var y,h=document.querySelector(".places__list");Promise.all([l(),fetch("".concat(u.baseURL,"/cards"),{method:"GET",headers:u.headers}).then((function(e){return i(e)}))]).then((function(e){var t,n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(n,r)||_(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],a=o[1];y=c._id,w.style.backgroundImage="url(".concat(c.avatar,")"),T.textContent=c.name,U.textContent=c.about,t=a.map((function(e){return p(e,C,y)})),h.append.apply(h,function(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||_(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t))})).catch((function(e){console.log(e)}));var v=document.querySelector(".profile__edit-button"),S=document.querySelector(".profile__add-button"),b=document.querySelector(".popup_type_edit"),L=document.querySelector(".popup_type_new-card"),q=document.querySelector(".popup_type_image"),E=document.querySelector(".popup_type_change-avatar");b.querySelector(".popup__close").addEventListener("click",(function(){return t(b)})),L.querySelector(".popup__close").addEventListener("click",(function(){return t(L)})),q.querySelector(".popup__close").addEventListener("click",(function(){return t(q)})),E.querySelector(".popup__close").addEventListener("click",(function(){return t(E)}));var g=document.querySelectorAll(".popup");function C(t,n){var r=document.querySelector(".popup__image"),o=document.querySelector(".popup__caption");r.src=t,r.alt=n,o.textContent=n,e(q),a(k,I)}g.forEach((function(e){e.addEventListener("click",n)})),g.forEach((function(e){e.classList.add("popup_is-animated")}));var k=b.querySelector(".popup__form"),A=k.querySelector(".popup__input_type_name"),x=k.querySelector(".popup__input_type_description"),T=document.querySelector(".profile__title"),U=document.querySelector(".profile__description"),w=document.querySelector(".profile__image"),R=document.querySelectorAll(".popup__button");k.addEventListener("submit",(function(e){e.preventDefault();var n=A.value,r=x.value;R.textContent="Сохранение...",function(e,t){return fetch("".concat(u.baseURL,"/users/me"),{method:"PATCH",headers:u.headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return i(e)}))}(n,r).then((function(e){T.textContent=e.name,U.textContent=e.about,t(b)})).catch((function(e){console.log(e)})).finally((function(){R.textContent="Сохранить"}))})),v.addEventListener("click",(function(){l().then((function(e){A.value=e.name,x.value=e.about})).catch((function(e){console.log(e)})),e(b),a(k,I)}));var j=L.querySelector(".popup__form");j.addEventListener("submit",(function(e){e.preventDefault();var n,r,o=j.querySelector(".popup__input_type_card-name").value,c=j.querySelector(".popup__input_type_url").value;R.textContent="Сохранение...",(n=o,r=c,fetch("".concat(u.baseURL,"/cards"),{method:"POST",headers:u.headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return i(e)}))).then((function(e){var n=p(e,C,y);h.prepend(n),t(L),a(j,I),j.reset()})).catch((function(e){console.log(e)})).finally((function(){R.textContent="Сохранить"}))})),S.addEventListener("click",(function(){e(L),j.reset(),a(j,I)}));var B,I={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};B=I,Array.from(document.querySelectorAll(B.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t,n,r){var a=Array.from(e.querySelectorAll(t)),u=e.querySelector(n);c(a,u,r),a.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n){var r=t.value.trim(),c=""===r,a=t.minLength,u=t.maxLength,i="";c?i="Это поле обязательно для заполнения.":["name-input","card-name-input","description-input"].includes(t.id)?/^[a-zA-Zа-яА-ЯёЁ\s-]+$/.test(r)?(r.length<a||r.length>u)&&(i="Должно быть от ".concat(a," до ").concat(u," символов. Длина текста сейчас: ").concat(r.length,".")):i="Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы.":["card-url-input","avatar-url-input"].includes(t.id)&&r&&(/^(http|https):\/\/[^ "]+$/.test(r)||(i="Введите адрес сайта.")),i?function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,i,n):o(e,t,n)}(e,t,r),c(a,u,r)}))}))}(e,B.inputSelector,B.submitButtonSelector,B)}));var O=document.querySelector(".profile__image"),D=E.querySelector(".popup__form"),P=D.querySelector(".popup__input_type_url");D.addEventListener("submit",(function(e){e.preventDefault();var n,r=P.value;R.textContent="Сохранение...",(n=r,fetch("".concat(u.baseURL,"/users/me/avatar"),{method:"PATCH",headers:u.headers,body:JSON.stringify({avatar:n})}).then((function(e){return i(e)}))).then((function(e){w.style.backgroundImage="url(".concat(e.avatar,")"),t(E)})).catch((function(e){console.log(e)})).finally((function(){R.textContent="Сохранить"}))})),O.addEventListener("click",(function(){e(E),D.reset(),a(D,I)}))})();