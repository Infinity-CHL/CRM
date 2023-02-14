export const checkValidate = (wrapper, name, surname, send) => {
  const nameErrMsg = document.createElement('span');
  const surnameErrMsg = document.createElement('span');

  nameErrMsg.classList.add('error-massage');
  surnameErrMsg.classList.add('error-massage');

  nameErrMsg.textContent = 'Поля для ввода имени должна содержать не менее 3х символов';
  surnameErrMsg.textContent = 'Поля для ввода фамилии должна содержать не менее 3х символов';

  name.addEventListener('input', () => {
    if (name.value.length <= 2) {
      name.classList.add('active');
      wrapper.append(nameErrMsg);
      send.setAttribute('disabled', 'true');
    } else {
      name.classList.remove('active');
      nameErrMsg.remove();
      if (surname.value.length > 2) {
        send.removeAttribute('disabled');
      }
    }
  });

  surname.addEventListener('input', () => {
    if (surname.value.length <= 2) {
      surname.classList.add('active');
      wrapper.append(surnameErrMsg);
      send.setAttribute('disabled', 'true');
    } else {
      surname.classList.remove('active');
      surnameErrMsg.remove();
      if (name.value.length > 2) {
        send.removeAttribute('disabled');
      }
    }
  });

};
