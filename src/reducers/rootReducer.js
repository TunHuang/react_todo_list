import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import triviaReducer from './triviaReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  trivias: triviaReducer
});

export default rootReducer;