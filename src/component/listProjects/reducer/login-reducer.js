import { LOGIN, LOGIN_ERROR } from '../action/login-action';

export default function loginReducer(state = null, action) {

  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, action.project);
      break;
    case  LOGIN_ERROR:
      return false;
      break;
    default:
      return state;
  };
}
