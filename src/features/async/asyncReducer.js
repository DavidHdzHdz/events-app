import { ASYNC_REQUEST_STARTED, ASYNC_REQUEST_FINISHED, ASYNC_REQUEST_ERROR } from './asyncActionsTypes';
import { createReducer } from '../../app/common/util/reducerUtils';

const initialState = { isLoading: false }

const requestStarted = (state, payload) => ({ ...state, isLoading: true, elementName: payload });
const requestFinished = (state, payload) => ({ ...state, isLoading: false, elementName: payload });
const requestError = (state, payload) => ({ ...state, isLoading: false, elementName: payload});

export default createReducer(initialState, {
  [ASYNC_REQUEST_STARTED]: requestStarted,
  [ASYNC_REQUEST_FINISHED]: requestFinished,
  [ASYNC_REQUEST_ERROR]: requestError
});