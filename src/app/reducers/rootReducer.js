import { combineReducers } from 'redux';
import testReducer from '../../features/reduxTestArea/testReducer';
import eventReducer from '../../features/event/eventReducer';

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer
});

export default rootReducer;