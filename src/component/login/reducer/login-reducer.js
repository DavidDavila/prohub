import { LOGIN } from '../action/login-action';

export default function loginReducer(state = {}, action) {

  switch (action.type) {
    case LOGIN:
      console.log(action);
      return Object.assign({}, state, { response: action.project });
    default:
      return state;
  };
}
