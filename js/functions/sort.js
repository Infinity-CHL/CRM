import { render } from '../components/render.js';

export const tableSort = async (response, btn) => {
  const clients = [];
  const clientsID = document.querySelectorAll('.id');
  const container = document.querySelector('.tbody');

  response.forEach(data => {
    clientsID.forEach(el => {
      if (data.id === el.textContent) {
        clients.push(data);
      };
    });
  });

  const sortID = (arr, btn, container) => {
    const sortedArr = [];
    const newArr = arr.map(el => el.id);
    if (btn.classList.contains('active')) {
      newArr.sort((a, b) => b - a);
    } else {
      newArr.sort((a, b) => a - b);
    };

    for (const item of newArr) {
      const id = item;
      for (const item of arr) {
        if (id === item.id) {
          sortedArr.push(item);
        };
      };
    };

    sortedArr.forEach(el => {
      container.innerHTML = '';
      render(el, container);
    });
  };

  const sortFio = (arr, container) => {
    const sortedArr = [];
    const newArr = arr.map(el => {
      const fio = `${el.surname} ${el.name} ${el.lastName}`;
      return fio;
    });

    if (btn.classList.contains('active')) {
      newArr.sort((a, b) => b - a);
    } else {
      newArr.reverse((a, b) => a - b);
    };

    for (const item of newArr) {
      const fio = item;
      for (const item of arr) {
        if (fio === `${item.surname} ${item.name} ${item.lastName}`) {
          sortedArr.push(item);
        };
      };
    };

    sortedArr.forEach(el => {
      container.innerHTML = '';
      render(el, container);
    });
  };

  const sortDate = arr => {
    const sortedArr = [];
    const newArr = arr.map(el => el.createdAt);
    if (btn.classList.contains('active')) {
      newArr.sort((a, b) => b - a);
    } else {
      newArr.reverse((a, b) => a - b);
    };

    for (const item of newArr) {
      const date = item;
      for (const item of arr) {
        if (date === item.createdAt || date === item.updatedAt) {
          sortedArr.push(item);
        };
      };
    };

    sortedArr.forEach(el => {
      container.innerHTML = '';
      render(el, container);
    });
  }

  if (btn.id === 'id') {
    sortID(clients, btn, container);
  };

  if (btn.id === 'fio') {
    sortFio(clients, container);
  };

  if (btn.id === 'date') {
    sortDate(clients)
  };

}
