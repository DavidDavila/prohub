import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import counterReducer from 'component/counter/reducer/counter-reducer';
import loginReducer from 'component/login/reducer/login-reducer';

export default combineReducers({
  counterReducer, loginReducer,
  routing: routeReducer
});
