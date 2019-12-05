import React, { Component } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    const { events, handleDeleteEvent } = this.props;
    return (
      <div>
        <h1>Events List</h1>
        {
          events && events.map(event => (
            <EventListItem
              key={event.id}
              event={event}
              handleDeleteEvent={handleDeleteEvent}
            />
          ))
        }
      </div>
    )
  }
}

export default EventList;
