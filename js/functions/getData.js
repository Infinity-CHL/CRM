export const getData = async (id, url) => {
  let response =  await fetch(`${url}/${id}`)
    .then(res => res)
    .then(res => res.json())

    return response;
}
