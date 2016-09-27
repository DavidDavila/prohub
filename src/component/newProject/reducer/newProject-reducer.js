import { SET_NAME_CLIENT, SET_NAME_PROJECT } from '../action/newProject-action';

export default function newProjectReducer(name = '', action, param) {
  switch (action.type) {
    case SET_NAME_CLIENT:
      return action;
      break;

    case SET_NAME_PROJECT:
      return action;
      break;

    default:
      return name;
  }
}
