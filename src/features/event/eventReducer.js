
import { createReducer } from '../../app/common/util/reducerUtils';
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, EVENTS_FETCHED } from './eventActionsTypes';

const initialState = [];

const getEvents = (_, events) => [ ...events ];
const createEvent = (state, event) => [ ...state, event ];
const updateEvent = (state, event) => {
  return [ ...state.map(cachedEvent => cachedEvent.id === event.id ? event : cachedEvent) ];
}
const deleteEvent = (state, eventId) => [ ...state.filter(event => event.id !== eventId) ];

export default createReducer(initialState, {
  [EVENTS_FETCHED]: getEvents,
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
});