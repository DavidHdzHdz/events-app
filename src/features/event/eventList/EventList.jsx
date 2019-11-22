import React, { Component } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    const { events, handleSelectedEvent } = this.props;
    return (
      <div>
        <h1>Events List</h1>
        {
          events.map(event => (
            <EventListItem
              key={event.id}
              event={event}
              handleSelectedEvent={handleSelectedEvent}
            />
          ))
        }
      </div>
    )
  }
}

export default EventList;
