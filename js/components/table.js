import { createPreloader } from './preloader.js';
import { getClients } from '../functions/getClients.js';
import { tableSort } from '../functions/sort.js';

export const createTable = container => {
  const headers = ['ID', 'Фамилия Имя Отчество', 'Дата и время создания', 'Последние изменения', 'Контакты', 'Действия'];

  const table = document.createElement('table'),
        tableHead = document.createElement('thead'),
        tableBody = document.createElement('tbody');


  tableHead.setAttribute('cellpadding', '20px');
  tableBody.setAttribute('cellpadding', '0');
  tableBody.classList.add('tbody');
  headers.forEach(el => {
    const thItem = document.createElement('th'),
          btn = document.createElement('button');

    thItem.classList.add('table-title');
    btn.classList.add('table-btn', 'btn-reset');
    btn.textContent = el;

    btn.addEventListener('click', () => {
      getClients()
        .then(res => tableSort(res, btn));
    })

    thItem.append(btn);

    if (el === 'ID') {
      const arrow = document.createElement('img');
      arrow.setAttribute('src', './img/arrow-up.svg');
      thItem.style = 'width: 82px;';

      btn.style = 'color: var(--color-primary)';
      btn.id = 'id';
      btn.append(arrow);
      thItem.append(btn);
    };

    const arrowDown = document.createElement('img');
    arrowDown.setAttribute('src', './img/arrow-down.svg');

    if (el === 'Фамилия Имя Отчество') {
      const span = document.createElement('span');
      const txt = document.createElement('span');

      txt.textContent = 'А-Я';
      txt.classList.add('arrow-txt');
      btn.id = 'fio';

      span.appendChild(arrowDown);
      span.appendChild(txt);
      btn.append(span);
      thItem.append(btn);
    };

    if (el === 'Дата и время создания' || el === 'Последние изменения') {
      thItem.style = 'width: 190px';
      btn.id = 'date';
      btn.append(arrowDown);
      thItem.append(btn);
    };

    if (el === 'Контакты') {
      thItem.removeChild(btn);
      thItem.textContent = el;
      thItem.style = 'width: 155px';
    }

    if (el === 'Действия') {
      thItem.removeChild(btn);
      thItem.textContent = el;
      thItem.style = 'width: 229px';
    }

    tableHead.append(thItem);

    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
    });
  });


  createPreloader(tableBody);
  table.append(tableHead, tableBody);
  container.append(table);


  return {
    container,
    table,
    tableHead,
    tableBody
  };
};
