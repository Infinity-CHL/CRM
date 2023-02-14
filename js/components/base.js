export const createBase = () => {
  const main = document.createElement('main'),
        container = document.createElement('div');

  main.classList.add('main');
  container.classList.add('container');

  return {main, container};
}

export const createTitle = container => {
  const mainTitle = document.createElement('h1'),
        title = document.createElement('h2');

  mainTitle.classList.add('visually-hidden');
  title.classList.add('title');

  mainTitle.textContent = 'CRM Skillbox';
  title.textContent = 'Клиенты';

  container.append(mainTitle, title);
}
