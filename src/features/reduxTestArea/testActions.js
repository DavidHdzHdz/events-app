import { DECREMENT_COUNTER, INCREMENT_COUNTER, SET_COUNTER } from './testActionsTypes';
import { requestStarted, requestFinished } from '../async/asyncActions';

// actions generators
export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
  // we can put a payload if it is necessary
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
  // we can put a payload if it is necessary
});

export const setCounter = value => ({
  type: SET_COUNTER,
  payload: value
});

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const asyncIncrementCounter = elementName => async dispatch => {
  dispatch(requestStarted(elementName));
  await delay(1000);
  dispatch(incrementCounter());
  dispatch(requestFinished(elementName));
}
export const asyncDecrementCounter = elementName => async dispatch => {
  dispatch(requestStarted(elementName));
  await delay(1000);
  dispatch(decrementCounter());
  dispatch(requestFinished(elementName));
}