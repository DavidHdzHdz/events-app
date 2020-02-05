import { ASYNC_REQUEST_STARTED, ASYNC_REQUEST_FINISHED, ASYNC_REQUEST_ERROR } from './asyncActionsTypes';

export const requestStarted = elementName => ({
  type: ASYNC_REQUEST_STARTED,
  payload: elementName
});

export const requestFinished = elementName => ({
  type: ASYNC_REQUEST_FINISHED,
  payload: elementName
});

export const requestError = () => ({
  type: ASYNC_REQUEST_ERROR,
});