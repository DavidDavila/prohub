import axios from 'axios';

export const LOGIN = 'LOGIN';

export function login() {
  return (dispatch, getState) => {
    axios.post('/api/client/Patch/validate', {
      'email' : 'test@test.com',
      'password' : '1234'
    })
    .then((response) => {
      dispatch( { type: LOGIN, project : response.data }, getState());

    });
  };
};
