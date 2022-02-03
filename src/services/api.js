import axios from 'axios';

axios.defaults.baseURL = 'https://61f1876a072f86001749f26d.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);

  return data;
}

export async function addContact(name, number) {
  const { data } = await axios.post(`/contacts`, {
    name,
    number,
  });
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
