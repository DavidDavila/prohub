import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function login() {
  return (dispatch, getState) => {
    axios.post('/api/client/Evercom/validate', {
      'email' : 'test@test.com',
      'password' : '1234'
    })
    .then((response) => {
      dispatch( { type: LOGIN, project : response.data }, getState());

    })
    .catch(function (error) {
      dispatch( { type: LOGIN_ERROR }, getState());
    });
  };
};
