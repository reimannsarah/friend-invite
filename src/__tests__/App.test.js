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
})