export const editData = async (url, id, name, surname, lastName, btnTypes, inputs) => {

  let contacts = [];

  for (let i = 0; i < btnTypes.length; i++) {
    const types = Array.from(btnTypes).map(el => {return el.getAttribute('data-type')});
    const values = Array.from(inputs).map(el => {return el.value});

    let contact = {
      type: types[i],
      value: values[i],
    };

    contacts.push(contact);
  };

  const client = {
    name: name,
    surname: surname,
    lastName: lastName,
    contacts: contacts,
  };

  let response = fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(client),
    })
    .then(res => res)
  return response;
}
