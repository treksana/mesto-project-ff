(()=>{"use strict";function e(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",r)}function t(e){e.classList.contains("popup_is-opened")&&(e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",r))}function n(e){var n=e.target;n.classList.contains("popup")&&t(n)}function r(e){"Escape"===e.key&&t(document.querySelector(".popup_is-opened"))}var o=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},c=function(e,t,n){!function(e,t){return e.some((function(e){return!e.validity.valid||e.classList.contains(t.inputErrorClass)}))}(e,n)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},a=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){o(e,n,t)})),r.disabled=!0,r.classList.add(t.inactiveButtonClass)},u={baseURL:"https://nomoreparties.co/v1/wff-cohort-32",headers:{authorization:"22e04659-805d-44c0-ad1a-8811974e7812","Content-Type":"application/json; charset=UTF-8"}},i=function(){return fetch("".concat(u.baseURL,"/users/me"),{method:"GET",headers:u.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))};function s(e,t,n){var r=e._id,o=e.name,c=e.link,a=e.owner,i=e.likes,s=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),l=s.querySelector(".card__delete-button"),d=s.querySelector(".card__like-button"),p=s.querySelector(".card__image"),f=s.querySelector(".card__likes-count");return p.src=c,p.alt=o,s.querySelector(".card__title").textContent=o,f.textContent=i.length,a._id===n?l.classList.remove("card__delete-button-hidden"):l.classList.add("card__delete-button-hidden"),i&&i.some((function(e){return e._id===n}))&&d.classList.add("card__like-button_is-active"),p.addEventListener("click",(function(){return t(c,o)})),l.addEventListener("click",(function(){var e;(e=r,fetch("".concat(u.baseURL,"/cards/").concat(e),{method:"DELETE",headers:u.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(){s.remove()})).catch((function(e){return console.error(e)}))})),d.addEventListener("click",(function(){var e;d.classList.contains("card__like-button_is-active")?(e=r,fetch("".concat(u.baseURL,"/cards/likes/").concat(e),{method:"DELETE",headers:u.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){d.classList.remove("card__like-button_is-active"),f.textContent=e.likes.length})).catch((function(e){return console.error(e)})):function(e){return fetch("".concat(u.baseURL,"/cards/likes/").concat(e),{method:"PUT",headers:u.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(r).then((function(e){d.classList.add("card__like-button_is-active"),f.textContent=e.likes.length})).catch((function(e){return console.error(e)}))})),s}function l(e,t){if(e){if("string"==typeof e)return d(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var p,f=document.querySelector(".places__list");Promise.all([i(),fetch("".concat(u.baseURL,"/cards"),{method:"GET",headers:u.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))]).then((function(e){var t,n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(n,r)||l(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],a=o[1];p=c._id,t=a.map((function(e){return s(e,L,p)})),f.append.apply(f,function(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t))})).catch((function(e){console.log(e)}));var _=document.querySelector(".profile__edit-button"),m=document.querySelector(".profile__add-button"),y=document.querySelector(".popup_type_edit"),h=document.querySelector(".popup_type_new-card"),v=document.querySelector(".popup_type_image"),S=document.querySelector(".popup_type_change-avatar");y.querySelector(".popup__close").addEventListener("click",(function(){return t(y)})),h.querySelector(".popup__close").addEventListener("click",(function(){return t(h)})),v.querySelector(".popup__close").addEventListener("click",(function(){return t(v)})),S.querySelector(".popup__close").addEventListener("click",(function(){return t(S)}));var b=document.querySelectorAll(".popup");function L(t,n){var r=document.querySelector(".popup__image"),o=document.querySelector(".popup__caption");r.src=t,r.alt=n,o.textContent=n,e(v),a(q,T)}b.forEach((function(e){e.addEventListener("click",n)})),b.forEach((function(e){e.classList.add("popup_is-animated")}));var q=y.querySelector(".popup__form"),E=q.querySelector(".popup__input_type_name"),k=q.querySelector(".popup__input_type_description"),g=document.querySelector(".profile__title"),C=document.querySelector(".profile__description"),j=document.querySelector(".profile__image"),A=document.querySelectorAll(".popup__button");q.addEventListener("submit",(function(e){var n,r;e.preventDefault(),(n=E.value,r=k.value,fetch("".concat(u.baseURL,"/users/me"),{method:"PATCH",headers:u.headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){g.textContent=e.name,C.textContent=e.about,A.textContent="Сохранение...",t(y)})).catch((function(e){console.log(e)})).finally((function(){A.textContent="Сохранить"}))})),_.addEventListener("click",(function(){i().then((function(e){E.value=e.name,k.value=e.about})).catch((function(e){console.log(e)})),e(y),a(q,T)}));var x=h.querySelector(".popup__form");x.addEventListener("submit",(function(e){e.preventDefault();var n,r,o=x.querySelector(".popup__input_type_card-name").value,c=x.querySelector(".popup__input_type_url").value;A.textContent="Сохранение...",(n=o,r=c,fetch("".concat(u.baseURL,"/cards"),{method:"POST",headers:u.headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){var n=s(e,L,p);f.prepend(n),t(h),a(x,T),x.reset()})).catch((function(e){console.log(e)})).finally((function(){A.textContent="Сохранить"}))})),m.addEventListener("click",(function(){e(h),x.reset(),a(x,T)}));var P,T={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};P=T,Array.from(document.querySelectorAll(P.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t,n,r){var a=Array.from(e.querySelectorAll(t)),u=e.querySelector(n);c(a,u,r),a.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,n){var r=t.value.trim(),c=""===r,a=t.minLength,u=t.maxLength,i="";c?i="Это поле обязательно для заполнения.":["name-input","card-name-input","description-input"].includes(t.id)?/^[a-zA-Zа-яА-ЯёЁ\s-]+$/.test(r)?(r.length<a||r.length>u)&&(i="Должно быть от ".concat(a," до ").concat(u," символов. Длина текста сейчас: ").concat(r.length,".")):i="Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы.":["card-url-input","avatar-url-input"].includes(t.id)&&r&&(/^(http|https):\/\/[^ "]+$/.test(r)||(i="Введите адрес сайта.")),i?function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,i,n):o(e,t,n)}(e,t,r),c(a,u,r)}))}))}(e,P.inputSelector,P.submitButtonSelector,P)}));var U=document.querySelector(".profile__image"),w=S.querySelector(".popup__form"),R=w.querySelector(".popup__input_type_url");w.addEventListener("submit",(function(e){var n;e.preventDefault(),(n=R.value,fetch("".concat(u.baseURL,"/users/me/avatar"),{method:"PATCH",headers:u.headers,body:JSON.stringify({avatar:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){j.style.backgroundImage="url(".concat(e.avatar,")"),t(S),A.textContent="Сохранение..."})).catch((function(e){console.log(e)})).finally((function(){A.textContent="Сохранить"}))})),U.addEventListener("click",(function(){e(S),w.reset(),a(w,T)})),i().then((function(e){j.style.backgroundImage="url(".concat(e.avatar,")"),g.textContent=e.name,C.textContent=e.about})).catch((function(e){console.log(e)}))})();