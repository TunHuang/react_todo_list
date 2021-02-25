const URL = 'http://localhost:3000/users/';

const register = (firstName, lastName, email, password) => {
  const body = {
    firstName,
    lastName,
    email,
    password
  };
  const bodyJson = JSON.stringify(body);
  return window.fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: bodyJson
  });
};

const login = (email, password) => {
  const body = {
    email,
    password
  };
  const bodyJson = JSON.stringify(body);
  return window.fetch(URL + 'login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: bodyJson
  })
    .then(response => response.json())
    .then(response => {
      if (response.token) {
        // todo: nachricht aus responst entfernen
        localStorage.setItem('user', JSON.stringify(response));
      }

      return response;
    });
};

const logout = () => localStorage.removeItem('user');

export default {
  register,
  login,
  logout
};