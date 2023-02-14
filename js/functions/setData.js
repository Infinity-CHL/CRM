export const setData = async (url, name, surname, lastName, btnTypes, inputs) => {

  let contacts = [];

  for (let i = 0; i < btnTypes.length; i++) {
    const types = Array.from(btnTypes).map((el, i) => {return el.getAttribute('data-type')});
    const values = Array.from(inputs).map((el, i) => {return el.value});

    let contact = {
      type: types[i],
      value: values[i],
    };

    contacts.push(contact);
  };

  const client = {
    name: name.value,
    surname: surname.value,
    lastName: lastName.value,
    contacts: contacts,
  };

  let response = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(client),
    })
    .then(res => res)
  return response;
}
