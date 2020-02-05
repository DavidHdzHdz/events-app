import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, EVENTS_FETCHED } from './eventActionsTypes';
import fetchEvents from '../../app/data/mockApi';
import { requestStarted, requestFinished, requestError } from '../async/asyncActions';
import { toastr } from 'react-redux-toastr';

export const createEvent = event => async dispatch => {
  try {
    dispatch({ type: CREATE_EVENT, payload: event });
    toastr.success('success!', 'event has been created');
  } catch (error) {
    toastr.error('error', error.message);
  }
}

export const updateEvent = event => async dispatch => {
  try {
    dispatch({ type: UPDATE_EVENT, payload: event });
    toastr.success('success!', 'event has been updated');
  } catch (error) {
    toastr.error('error', error.message);
  }
}

export const deleteEvent = eventId => ({
  type: DELETE_EVENT,
  payload: eventId
});

export const getEvents = () => async dispatch => {
  try {
    dispatch(requestStarted('eventsListLoader'));
    const events = await fetchEvents();
    dispatch({ type: EVENTS_FETCHED, payload: events });
    dispatch(requestFinished('eventsListLoader'));
  } catch (error) {
    console.error(error);
    dispatch(requestError());
  }
}
