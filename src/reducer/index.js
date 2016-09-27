import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import counterReducer from 'component/counter/reducer/counter-reducer';
import loginReducer from 'component/login/reducer/login-reducer';
import newProjectReducer from 'component/newProject/reducer/newProject-reducer';

export default combineReducers({
  counterReducer, loginReducer, newProjectReducer,
  routing: routeReducer
});
