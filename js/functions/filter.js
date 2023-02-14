import { getClients } from "./getClients.js";
import { render } from "../components/render.js";

export const dataFilter = async input => {
  let timeoutID = null;

  input.addEventListener('input', () => {
    const value = input.value;
    if (timeoutID) clearTimeout(timeoutID);

    const filter = async () => {
      const result = [];
      const arr = await getClients();
      const idArr = arr.map(el => el.id);
      const fioArr = arr.map(el => `${el.surname.toLowerCase()} ${el.name.toLowerCase()} ${el.lastName.toLowerCase()}`);
      const createdAtArr = arr.map(el => el.createdAt);
      const updateAtArr = arr.map(el => el.updatedAt);

      arr.forEach((el, index) => {
        if (idArr[index].includes(value)
        || fioArr[index].includes(value.toLowerCase())
        || createdAtArr[index].includes(value)
        || updateAtArr[index].includes(value)) {
          result.push(el);
        };
      });

      const container = document.querySelector('.tbody');
      container.innerHTML = '';
      result.forEach(el => render(el, container))
    };

    timeoutID = setTimeout(filter, 300);
  });
};
