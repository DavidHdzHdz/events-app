import { combineReducers } from 'redux';
import testReducer from '../../features/reduxTestArea/testReducer';
import eventReducer from '../../features/event/eventReducer';
import modalsReducer from '../../features/modals/modalsReducers';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer,
  form: formReducer,
  modals: modalsReducer
});

export default rootReducer;