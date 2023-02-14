export const getClients = async () => {
  const url = 'http://localhost:3000/api/clients';
  let response =  await fetch(url)
    .then(res => res)
    .then(res => res.json())

    return response;
}
