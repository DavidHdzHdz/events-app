import React from 'react'
import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';
import { connect } from 'react-redux';

const EventDetailedPage = ({ event }) => {
  return event ? (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar
          attendees={(({ attendees }) => Array.isArray(attendees) ? attendees : [])(event)}
        />
      </Grid.Column>
    </Grid>
  ) : (
    <h1 style={{ color: 'red' }}>
      There is no event for this event id or it has already been removed
    </h1>
  )
}

// we can pass the component properties in the state callback and use them for parsing
const mapStateToProps = (state, ownProps) => {
  const { events } = state;
  const { match: { params: { id } } } = ownProps;
  if (events.length > 0 && events.some(event => event.id === id)) {
    return { event: events.find(event => event.id === id) }
  }
  return { event: null }
}

export default connect(mapStateToProps)(EventDetailedPage);
