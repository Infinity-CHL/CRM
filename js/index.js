import { setData } from './functions/setData.js';
import { render } from './components/render.js';
import { createBase, createTitle } from './components/base.js';
import { createHeader } from './components/header.js';
import { createTable } from './components/table.js';
import { createBtn, createForm, createAddContacts, createDeleteForm } from './components/form.js';
import { deleteData } from "./functions/deleteData.js";
import { getClients } from './functions/getClients.js';

const BODY = document.body;
const URL = 'http://localhost:3000/api/clients';

const main = createBase().main;
const container = createBase().container;
const header = createHeader().headerContainer;

BODY.append(header, main);
main.append(container);

createTitle(container);
createTable(container);
createBtn(container);
createForm(main);

document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.querySelector('.tbody');
  getClients().then(data => data.forEach(client => render(client, tbody)));

  const formWrapper = document.querySelector('.form-wrapper')
  const addBtn = document.querySelector('.content-btn');
  const closeBtn = document.querySelector('.close-btn');
  const contactWrapper = document.querySelector('.contact-wrapper');
  const addContactBtn = document.querySelector('.add-btn');
  const clearBtn = document.querySelector('.clear-btn');
  const form = document.querySelector('.add-form');
  const name = document.querySelector('.name-input');
  const surname = document.querySelector('.surname-input');
  const lastName = document.querySelector('.lastName-input');

  const idTd = document.querySelector('.id');

  form.addEventListener('submit',async e => {
    e.preventDefault();
    const formInputs = document.querySelectorAll('.add-form__input')
    const btnTypes = document.querySelectorAll('.contact__name');
    const inputs = document.querySelectorAll('.contact__input');
    formWrapper.classList.remove('active');

    const response = setData(URL, name, surname, lastName, btnTypes, inputs);
    response
      .then(data => data.json())
      .then(json => render(json, tbody));

    const deleteBtn = document.querySelector('.delete-btn');

    if (deleteBtn !== null) {
      deleteBtn.addEventListener('click', () => {
      createDeleteForm(deleteBtn, container, deleteData, idTd);
      });
    };

    formInputs.forEach(el => el.value = '');
    contactWrapper.innerHTML = '';
  });

  addBtn.addEventListener('click', () => {
    formWrapper.classList.add('active');
    window.document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    formWrapper.classList.remove('active');
    window.document.body.style.overflow = '';
  });

  addContactBtn.addEventListener('click', () => {
    const contactsItems = document.querySelectorAll('.contact');

    if (contactsItems.length < 9) {
      createAddContacts(contactWrapper);
    } else {
      createAddContacts(contactWrapper);
      addContactBtn.classList.add('hidden');
    };

    const deleteBtns = document.querySelectorAll('.contact__btn');

    deleteBtns.forEach(e => {
      e.addEventListener('click', () => {
        if(deleteBtns.length < 11) {
          addContactBtn.classList.remove('hidden');
        };
      });
    });
  });

  clearBtn.addEventListener('click', () => {
    const contacts = document.querySelectorAll('.contact');
    const inputs = document.querySelectorAll('.add-form__input');

    inputs.forEach(e => e.value = '');
    if(contacts) {
      contacts.forEach(e => {e.remove()});
    };
  });


});
