import { combineReducers, createStore } from 'redux';
import UserReducer from './user/UserReducer';

const rootReducer = combineReducers({
  user: UserReducer,
});

export default createStore(rootReducer);
