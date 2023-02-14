import { deleteContact, btnArrowDown, closeIcon, addUserIcon, addIcon } from "../svg.js";
import { editData } from "../functions/editData.js";
import { render } from "./render.js";
import { checkValidate } from "./validate.js";
import { removeForm } from "../functions/removerPopup.js";


export const createBtn = container => {
  const btn = document.createElement('button');
  btn.innerHTML = `${addUserIcon}Добавить клиента`;

  btn.classList.add('content-btn', 'btn-reset');
  btn.setAttribute('type', 'button');

  container.append(btn);
};

export const createForm = main => {
  const form = document.createElement('form'),
        background = document.createElement('div'),
        title = document.createElement('h3'),
        wrapper = document.createElement('div'),
        name = document.createElement('input'),
        surname = document.createElement('input'),
        lastName = document.createElement('input'),
        addWrapper = document.createElement('div'),
        addClient = document.createElement('button'),
        saveBtn = document.createElement('button'),
        clearBtn = document.createElement('button'),
        closeBtn = document.createElement('button'),
        namePlaceholder = document.createElement('div'),
        surnamePlaceholder = document.createElement('div'),
        lastNamePlaceholder = document.createElement('div'),
        nameIcon = document.createElement('span'),
        surnameIcon = document.createElement('span'),
        nameInputWrapper = document.createElement('div'),
        surnameInputWrapper = document.createElement('div'),
        lastNameInputWrapper = document.createElement('div'),
        btnWrapper = document.createElement('div');


  background.classList.add('form-wrapper');
  wrapper.classList.add('input-wrapper');
  addWrapper.classList.add('btn-wrapper');
  form.classList.add('add-form', 'form');
  title.classList.add('add-form__title');
  name.classList.add('add-form__input', 'name-input');
  surname.classList.add('add-form__input', 'surname-input');
  lastName.classList.add('add-form__input', 'lastName-input');
  btnWrapper.classList.add('contact-wrapper');
  addClient.classList.add('add-form__btn', 'btn-reset', 'add-btn');
  saveBtn.classList.add('add-form__btn', 'btn-reset', 'save-btn');
  clearBtn.classList.add('add-form__btn', 'btn-reset', 'clear-btn');
  closeBtn.classList.add('add-form__btn', 'btn-reset', 'close-btn');
  namePlaceholder.classList.add('placeholder');
  surnamePlaceholder.classList.add('placeholder');
  lastNamePlaceholder.classList.add('placeholder');
  nameInputWrapper.classList.add('inputWrapper');
  surnameInputWrapper.classList.add('inputWrapper');
  lastNameInputWrapper.classList.add('inputWrapper');

  title.textContent = 'Новый клиент';
  saveBtn.textContent = 'Сохранить';
  clearBtn.textContent = 'Отмена';
  namePlaceholder.textContent = 'Имя';
  surnamePlaceholder.textContent = 'Фамилия';
  lastNamePlaceholder.textContent = 'Отчество';
  nameIcon.textContent = '*';
  surnameIcon.textContent = '*';
  addClient.innerHTML = `${addIcon} Добавить контакт`;
  closeBtn.innerHTML = `${closeIcon}`;

  name.setAttribute('type', 'text');
  name.setAttribute('required', 'true');
  surname.setAttribute('type', 'text');
  surname.setAttribute('required', 'true');
  lastName.setAttribute('type', 'text');
  lastName.setAttribute('required', 'true');
  saveBtn.setAttribute('type', 'submit');
  saveBtn.setAttribute('disabled', 'true');
  clearBtn.setAttribute('type', 'button');
  closeBtn.setAttribute('type', 'button');
  addClient.setAttribute('type', 'button');

  checkValidate(addWrapper, name, surname, saveBtn)
  removeForm(background, form);

  nameInputWrapper.append(name);
  namePlaceholder.append(nameIcon)
  nameInputWrapper.append(namePlaceholder);
  surnameInputWrapper.append(surname);
  surnamePlaceholder.append(surnameIcon);
  surnameInputWrapper.append(surnamePlaceholder);
  lastNameInputWrapper.append(lastName, lastNamePlaceholder);

  wrapper.append(title, surnameInputWrapper, nameInputWrapper, lastNameInputWrapper);
  addWrapper.append(btnWrapper, addClient);
  form.append(wrapper, addWrapper, saveBtn, clearBtn, closeBtn);
  background.append(form);
  main.append(background);
};

export const createAddContacts = (formBtnWrapper, contact) => {
  const wrapper = document.createElement('div'),
        contactType = document.createElement('div'),
        contactName = document.createElement('button'),
        list = document.createElement('ul'),
        phone = document.createElement('li'),
        others = document.createElement('li'),
        email = document.createElement('li'),
        vk = document.createElement('li'),
        fb = document.createElement('li'),
        tw = document.createElement('li'),
        contactInput = document.createElement('input'),
        deleteBtn = document.createElement('button'),
        tooltip = document.createElement('span');

  contactName.type = 'button';

  wrapper.classList.add('contact');
  contactType.classList.add('contact__type');
  contactName.classList.add('contact__name',  'btn-reset');
  list.classList.add('contact__list', 'list-reset', 'hidden');
  phone.classList.add('contact__item');
  others.classList.add('contact__item');
  email.classList.add('contact__item');
  vk.classList.add('contact__item');
  fb.classList.add('contact__item');
  tw.classList.add('contact__item');
  contactInput.classList.add('contact__input');
  deleteBtn.classList.add('contact__btn', 'btn-reset');
  tooltip.classList.add('tooltip');

  contactName.textContent = 'Телефон';
  phone.textContent = 'Телефон';
  email.textContent = 'Email';
  vk.textContent = 'VK';
  fb.textContent = 'Facebook';
  tw.textContent = 'Twitter';
  others.textContent = 'Доп.телефон';

  contactName.setAttribute('data-type', 'Телефон');
  contactInput.type = 'text';
  contactInput.placeholder = 'Введите данные контакта';
  contactInput.required = true;
  deleteBtn.type = 'button';
  deleteBtn.innerHTML = deleteContact;
  tooltip.textContent = 'Удалить контакт';
  contactName.innerHTML = `Телефон`;

  deleteBtn.append(tooltip);
  contactType.innerHTML = `${btnArrowDown}`
  contactType.prepend(contactName, list);
  wrapper.append(contactType, contactInput, deleteBtn);
  list.append(tw, fb, vk, email, others, phone)
  formBtnWrapper.append(wrapper);

  contactName.addEventListener('click', () => {
    contactType.classList.toggle('active');
    list.classList.toggle('hidden');
  });

  deleteBtn.addEventListener('click', () => {
    wrapper.remove();
  });

  const switchType = (btn, type) => {
    type.addEventListener('click', () => {
      btn.setAttribute('data-type', `${type.textContent}`)
      list.classList.add('hidden');
      contactType.classList.toggle('active');
      btn.innerHTML = `${type.textContent}`;
    });
  };

  switchType(contactName, tw);
  switchType(contactName, fb);
  switchType(contactName, vk);
  switchType(contactName, email);
  switchType(contactName, others);
  switchType(contactName, phone);

  if (formBtnWrapper.classList.contains('edit-contact__wrapper')) {

    contactName.classList.add('edit-contact__name');
    contactInput.classList.add('edit-contact__input');

    contactName.textContent = `${contact.type}`;
    contactName.setAttribute('data-type',`${contact.type}`);
    contactInput.value = `${contact.value}`;
  };
};

export const createDeleteForm = (container, deleteData, id, row) => {
  const URL = 'http://localhost:3000/api/clients';

  const wrapper = document.createElement('div'),
        form = document.createElement('form'),
        title = document.createElement('h3'),
        text = document.createElement('p'),
        deleteBtn = document.createElement('button'),
        cancelBtn = document.createElement('button'),
        closeBtn = document.createElement('button');

  wrapper.classList.add('delete-wrapper');
  form.classList.add('delete-form');
  title.classList.add('delete-form__title');
  text.classList.add('delete-form__text');
  deleteBtn.classList.add('delete-form__btn', 'btn-reset', 'delete-btn');
  cancelBtn.classList.add('delete-form__btn', 'btn-reset', 'cancel-btn');
  closeBtn.classList.add('delete-form__btn', 'btn-reset', 'close-btn');

  deleteBtn.type = 'submit';
  cancelBtn.type = 'button';
  closeBtn.type = 'button';
  title.textContent = 'Удалить клиента';
  text.textContent = 'Вы действительно хотите удалить данного клиента?';
  deleteBtn.textContent = 'Удалить';
  cancelBtn.textContent = 'Отмена';
  closeBtn.innerHTML = `${closeIcon}`;

  form.addEventListener('submit', e => {
    e.preventDefault();

    deleteData(URL, id);
    row.remove();
    wrapper.remove();
  });

  closeBtn.addEventListener('click', () => {
    wrapper.remove();
  })

  form.append(title, text, deleteBtn, cancelBtn, closeBtn);
  wrapper.append(form);
  container.append(wrapper);
};

export const createEditForm = async (container, getData, id) => {
  const url = 'http://localhost:3000/api/clients';

  const form = document.createElement('form'),
        background = document.createElement('div'),
        title = document.createElement('h3'),
        clientId = document.createElement('span'),
        wrapper = document.createElement('div'),
        name = document.createElement('input'),
        surname = document.createElement('input'),
        lastName = document.createElement('input'),
        addWrapper = document.createElement('div'),
        addClient = document.createElement('button'),
        saveBtn = document.createElement('button'),
        clearBtn = document.createElement('button'),
        closeBtn = document.createElement('button'),
        addIcon = document.createElement('img'),
        closeIcon = document.createElement('img'),
        namePlaceholder = document.createElement('div'),
        surnamePlaceholder = document.createElement('div'),
        lastNamePlaceholder = document.createElement('div'),
        nameIcon = document.createElement('span'),
        surnameIcon = document.createElement('span'),
        nameInputWrapper = document.createElement('div'),
        surnameInputWrapper = document.createElement('div'),
        lastNameInputWrapper = document.createElement('div'),
        btnWrapper = document.createElement('div');


  background.classList.add('edit-wrapper');
  wrapper.classList.add('input-wrapper');
  addWrapper.classList.add('btn-wrapper');
  form.classList.add('add-form', 'form', 'edit-form');
  title.classList.add('add-form__title');
  name.classList.add('add-form__input', 'name-input');
  surname.classList.add('add-form__input', 'surname-input');
  lastName.classList.add('add-form__input', 'lastName-input');
  btnWrapper.classList.add('contact-wrapper', 'edit-contact__wrapper');
  addClient.classList.add('add-form__btn', 'btn-reset', 'add-btn');
  saveBtn.classList.add('add-form__btn', 'btn-reset', 'save-btn');
  clearBtn.classList.add('add-form__btn', 'btn-reset', 'clear-btn');
  closeBtn.classList.add('add-form__btn', 'btn-reset', 'close-btn');
  namePlaceholder.classList.add('placeholder');
  surnamePlaceholder.classList.add('placeholder');
  lastNamePlaceholder.classList.add('placeholder');
  nameInputWrapper.classList.add('inputWrapper');
  surnameInputWrapper.classList.add('inputWrapper');
  lastNameInputWrapper.classList.add('inputWrapper');
  clientId.classList.add('edit-id')

  const client = await getData(id, url);

  name.value = client.name;
  surname.value = client.surname;
  lastName.value = client.lastName;
  clientId.textContent = `ID: ${client.id}`;

  client.contacts.forEach(contact => {
    createAddContacts(btnWrapper, contact);
  })

  addClient.addEventListener('click', () => {
    const contacts = document.querySelectorAll('.edit-contact__input');
    if (contacts.length >= 0) {
      saveBtn.removeAttribute('disabled');
    }
    createAddContacts(btnWrapper)
  });

  checkValidate(addWrapper, name, surname, saveBtn);
  removeForm(background, form);
  form.addEventListener('submit', async e => {
    e.preventDefault();

    const btnTypes = document.querySelectorAll('.edit-contact__name');
    const inputs = document.querySelectorAll('.edit-contact__input');
    const tableBody = document.querySelector('.tbody');
    await editData(url, id, name.value, surname.value, lastName.value, btnTypes, inputs)
      .then(response => response.json())
      .then(json => {
        const client = document.querySelectorAll('.client-info');

        client.forEach(el => {
          if (el.getAttribute('data-id') === id) {
            el.remove();
            render(json, tableBody)
          };
        });
      });

      background.remove();
  });

  title.textContent = 'Изменить данные';
  addClient.textContent = 'Добавить контакт';
  saveBtn.textContent = 'Сохранить';
  clearBtn.textContent = 'Отмена';
  namePlaceholder.textContent = 'Имя';
  surnamePlaceholder.textContent = 'Фамилия';
  lastNamePlaceholder.textContent = 'Отчество';
  nameIcon.textContent = '*';
  surnameIcon.textContent = '*';

  name.setAttribute('type', 'text');
  name.setAttribute('required', 'true');
  surname.setAttribute('type', 'text');
  surname.setAttribute('required', 'true');
  lastName.setAttribute('type', 'text');
  addIcon.setAttribute('src', './img/add.svg');
  closeIcon.setAttribute('src', './img/close.svg');
  saveBtn.setAttribute('type', 'submit');
  saveBtn.setAttribute('disabled', 'true');
  clearBtn.setAttribute('type', 'button');
  closeBtn.setAttribute('type', 'button');
  addClient.setAttribute('type', 'button');

  nameInputWrapper.append(name);
  namePlaceholder.append(nameIcon)
  nameInputWrapper.append(namePlaceholder);
  surnameInputWrapper.append(surname);
  surnamePlaceholder.append(surnameIcon);
  surnameInputWrapper.append(surnamePlaceholder);
  lastNameInputWrapper.append(lastName, lastNamePlaceholder);

  closeBtn.addEventListener('click', () => {
    background.remove()
  });

  addClient.prepend(addIcon);
  closeBtn.append(closeIcon);

  wrapper.append(title, clientId, surnameInputWrapper, nameInputWrapper, lastNameInputWrapper);
  addWrapper.append(btnWrapper, addClient);
  form.append(wrapper, addWrapper, saveBtn, clearBtn, closeBtn);
  background.append(form);
  container.append(background);
};
