import { combineReducers } from 'redux';
import testReducer from '../../features/reduxTestArea/testReducer';
import eventReducer from '../../features/event/eventReducer';
import modalsReducer from '../../features/modals/modalsReducers';
import authReducer from '../../features/auth/authReducers';
import asyncReducer from '../../features/async/asyncReducer';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  test: testReducer,
  events: eventReducer,
  form: formReducer,
  modals: modalsReducer,
  async: asyncReducer,
  toastr: toastrReducer
});

export default rootReducer;