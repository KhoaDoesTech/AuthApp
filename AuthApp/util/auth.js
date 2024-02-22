import axios from 'axios';

const API_KEY =
  'df34bb52bbf8e41abf7e40b74fb2cb4a4dbcef732784294f4a1b29bea1067e995fcda13be56637bfccbe34f373a23f9792eea7183e43724cb3d8e572c8f731b0';

async function authenticate(mode, email, password) {
  const url = `http://localhost:8081/v1/api/shop/${mode}`;
  console.log(email);
  const response = await axios.post(
    url,
    {
      email: email,
      password: password,
      name: 'Khoa Shop',
      role: 'SHOP',
    },
    { headers: { 'x-api-key': `${API_KEY}` } }
  );

  const token = response.data.idToken;

  return token;
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}
