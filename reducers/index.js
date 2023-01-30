import {combineReducers} from 'redux';
import userState from './userReducers';
import paymentState from './paymentReducers';

const appReducer = combineReducers({
    userState,
    paymentState
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;