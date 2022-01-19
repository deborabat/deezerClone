import { combineReducers, createStore } from 'redux';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  user: UserReducer,
});

export default createStore(rootReducer);
