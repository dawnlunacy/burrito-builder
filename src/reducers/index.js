import { combineReducers } from 'redux';
import { orders } from './orders';
import { errorMessage } from './errorMessage';

const rootReducer = combineReducers({
  orders,
  errorMessage
});

export default rootReducer;
