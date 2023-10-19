const fetch = require('node-fetch');
require('dotenv').config();

const url = 'https://friend-invite-express-server-f35149be8b17.herokuapp.com';

test('should return an array of friends', async () => {
  const response = await fetch(`${url}/friends`, {
    headers: {
      'x-api-key': `${process.env.API_KEY}`
    },
  });
  const friends = await response.json();
  expect(Array.isArray(friends)).toBe(true);
});

test('should return a message saying how many friends were invited', async () => {
  const response = await fetch(`${url}/friends/invite`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': `${process.env.API_KEY}`
    },
    body: JSON.stringify(['crank@panda.com', 'salad@candy.net']),
  });

  const data = await response.json();
  const message = 'You have invited 2 friend(s)!'
  expect(data.message).toEqual(message);
})