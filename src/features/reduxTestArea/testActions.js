import { DECREMENT_COUNTER, INCREMENT_COUNTER, SET_COUNTER } from './testActionsTypes';

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