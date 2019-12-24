import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../eventList/EventList';
import { PropTypes } from 'prop-types';
import { deleteEvent } from '../eventActions';

class EventDashboard extends Component {
  render() {
    const { events, deleteEvent } = this.props
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            events={events}
            handleDeleteEvent={deleteEvent}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <h2> recently activity feed </h2>
        </Grid.Column>
      </Grid>
    )
  }
}

EventDashboard.propTypes = {
  events: PropTypes.array.isRequired,
  deleteEvent: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  events: state.events
});

const mapActionsToProps = { deleteEvent }

export default connect(mapStateToProps, mapActionsToProps)(EventDashboard);
