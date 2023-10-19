const url = 'https://friend-invite-express-server-f35149be8b17.herokuapp.com'

export default async function getFriends() {
  const response = await fetch(`${url}/friends`, {
    headers: {
      'x-api-key': 'NOFRIENDS'
    }
  });
  const data = await response.json();
  return data;
}