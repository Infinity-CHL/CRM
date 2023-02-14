import { dataFilter } from "../functions/filter.js";


export const createHeader = () => {
  const headerContainer = document.createElement('header'),
        headerLink = document.createElement('a'),
        headerLogo = document.createElement('img'),
        headerInput = document.createElement('input');

  headerLink.setAttribute('href', '#');
  headerLogo.setAttribute('src', './img/logo.svg');
  headerInput.setAttribute('placeholder', 'Введите запрос');

  headerContainer.classList.add('header');
  headerLink.classList.add('header__link');
  headerLogo.classList.add('header__logo');
  headerInput.classList.add('header__input');

  dataFilter(headerInput)

  headerLink.append(headerLogo);
  headerContainer.append(headerLink, headerInput);

  return {
    headerInput,
    headerContainer,
  };
};
