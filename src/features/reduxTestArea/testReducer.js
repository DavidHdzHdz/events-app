import { INCREMENT_COUNTER, DECREMENT_COUNTER, SET_COUNTER } from './testActionsTypes';
import { createReducer } from '../../app/common/util/reducerUtils';

const initialState = {
  data: 28
}

/**
 * cleaner way to create reducers
 */
const incrementCounter = state => ({ ...state, data: state.data + 1 });
const decrementCounter = state => ({ ...state, data: state.data - 1 });
const setCounter = (state, payload) => ({ ...state, data: payload });

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter,
  [SET_COUNTER]: setCounter
});

/**
 * traditional way to create reducers
 */
/* const testReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case INCREMENT_COUNTER:
      return { ...state, data: state.data + 1 }
    case DECREMENT_COUNTER:
      return { ...state, data: state.data - 1 }
    case SET_COUNTER:
      return { ...state, data: payload }
    default:
      return { ...state }
  }
} */
