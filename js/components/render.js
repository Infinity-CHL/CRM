import { editIcon, deleteIcon, fbIcon, mailIcon, phoneIcon, userIcon, vkIcon} from '../svg.js';
import { deleteData } from '../functions/deleteData.js';
import { getData } from '../functions/getData.js';
import { createDeleteForm, createEditForm } from './form.js';


const URL = 'http://localhost:3000/api/clients';

export function ucFirst (str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
};

export async function editDate (el, container) {
  const dateBlock = document.createElement('span');
  const timeBlock = document.createElement('span');

  dateBlock.classList.add('date-block');

  let date = new Date(el);
  let dd = date.getDate();
  let mm = date.getMonth();
  let yy = date.getFullYear();

  let hh = date.getHours();
  let min = date.getMinutes();

  const addZero = num => {
    if (num < 10) {
      num = `${0}${num}`;
    }
    return num;
  }

  let trueDate = `${addZero(dd)}.${addZero(mm)}.${yy}`;
  let time = `${addZero(hh)}:${addZero(min)}`;


  timeBlock.style = 'color: var(--color-gray)'
  timeBlock.textContent = time;
  dateBlock.textContent = trueDate;
  container.append(dateBlock);
  container.append(timeBlock);

  return container;
}

export const render = async ({ id, name, surname, lastName, createdAt, updatedAt, contacts = [{ type, value}] }, content) => {
  const row = document.createElement('tr'),
        idTd = document.createElement('td'),
        fioTd = document.createElement('td'),
        contactsTd = document.createElement('td'),
        contactsList = document.createElement('ul'),
        btnsTd = document.createElement('td'),
        editContainer = document.createElement('div'),
        deleteContainer = document.createElement('div'),
        editBtn = document.createElement('button'),
        deleteBtn = document.createElement('button');

  let editDataTd = document.createElement('td'),
      createDataTd = document.createElement('td');

  row.classList.add('client-info');
  idTd.classList.add('id');
  btnsTd.classList.add('btns-container');
  editContainer.classList.add('edit-container');
  deleteContainer.classList.add('delete-container');
  editBtn.classList.add('edit-btn', 'btn-reset');
  deleteBtn.classList.add('delete-btn', 'btn-reset');
  contactsList.classList.add('contact-list', 'list-reset');

  row.setAttribute('data-id', id);

  contacts.forEach(el => {
    const icon = document.createElement('span'),
          tooltip = document.createElement('span'),
          item = document.createElement('li');

    icon.classList.add('contact-icon');
    tooltip.classList.add('tooltip');

    if (el.type === 'Телефон') {
      icon.innerHTML = `${phoneIcon}`;
      tooltip.innerHTML = `<span>Телефон: </span>${el.value}`;

      icon.append(tooltip);
      item.append(icon);
      contactsList.append(item);
    };

    if (el.type === 'Twitter') {
      icon.innerHTML = `${userIcon}`;
      tooltip.innerHTML = `<span>Twitter: </span>${el.value}`;

      icon.append(tooltip);
      item.append(icon);
      contactsList.append(item);
    };

    if (el.type === 'Facebook') {
      icon.innerHTML = `${fbIcon}`;
      tooltip.innerHTML = `<span>Facebook: </span>${el.value}`;

      icon.append(tooltip);
      item.append(icon);
      contactsList.append(item);
    };

    if (el.type === 'VK') {
      icon.innerHTML = `${vkIcon}`;
      tooltip.innerHTML = `<span>VK: </span>${el.value}`;

      icon.append(tooltip);
      item.append(icon);
      contactsList.append(item);
    };

    if (el.type === 'Email') {
      icon.innerHTML = `${mailIcon}`;
      tooltip.innerHTML = `<span>Email: </span>${el.value}`;

      icon.append(tooltip);
      item.append(icon);
      contactsList.append(item);
    };

    if (el.type === 'Доп.телефон') {
      icon.innerHTML = `${phoneIcon}`;
      tooltip.innerHTML = `<span>Телефон: </span>${el.value}`;

      icon.append(tooltip);
      item.append(icon);
      contactsList.append(item);
    };
  });

  if (contacts.length > 4) {
    const btn = document.createElement('button'),
          item = document.createElement('li');

    btn.classList.add('add-icon', 'btn-reset');
    btn.textContent = '+6';
    item.style = 'display: flex;'

    btn.addEventListener('click', () => {
      contactsList.classList.add('hidden');
      btn.remove();
    });

    item.append(btn);
    contactsList.append(item);
  }

  idTd.style = 'color: var(--color-gray);'
  idTd.textContent = id;
  fioTd.textContent = `${ucFirst(surname) + ' ' + ucFirst(name) + ' ' + ucFirst(lastName)}`;
  createDataTd = await editDate(createdAt, createDataTd);
  editDataTd = await editDate(updatedAt, editDataTd);
  contactsTd.append(contactsList);
  editBtn.innerHTML = 'Изменить';
  deleteBtn.innerHTML = 'Удалить';

  editBtn.addEventListener('click', () => {
    const main = document.querySelector('.main');

    createEditForm(main, getData, id);
  })

  deleteBtn.addEventListener('click', () => {
    const main = document.querySelector('.main');
    createDeleteForm(main, deleteData, id, row)
  });

  editContainer.innerHTML = `${editIcon}`;
  deleteContainer.innerHTML = `${deleteIcon}`;

  editContainer.append(editBtn);
  deleteContainer.append(deleteBtn);
  btnsTd.append(editContainer, deleteContainer);
  row.append(idTd, fioTd, createDataTd, editDataTd, contactsTd, btnsTd);
  content.append(row);
}

