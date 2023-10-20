const url = 'https://friend-invite-express-server-f35149be8b17.herokuapp.com'

export async function getFriends() {
  const response = await fetch(`${url}/friends`, {
    headers: {
      'x-api-key': 'NOFRIENDS'
    }
  });
  const data = await response.json();
  return data;
}

export async function inviteFriends(friendsArr) {
  try{
  const response = await fetch(`${url}/friends/invite`, {
    method: 'POST',
    headers: {
      'x-api-key': 'NOFRIENDS',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(friendsArr),
  });
  const data = await response.json();
  console.log(data);
  return data.message;
  } catch (error) {
    console.log(error);
    throw error;
  }
}