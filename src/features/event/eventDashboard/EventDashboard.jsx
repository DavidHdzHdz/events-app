import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../eventList/EventList';
import { PropTypes } from 'prop-types';
import { deleteEvent } from '../eventActions';
import LoadingPage from '../../../app/layout/LoadingPage';
import EventActivity from '../eventActivity/EventActivity';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

const EventDashboard = ({ events, deleteEvent }) =>  {
  return (
    <Fragment>
      {
        (!isLoaded(events) &&  <LoadingPage />) ||
        (isEmpty(events) && <h2>There aren't events to show yet</h2>) ||
        (
          <Grid>
            <Grid.Column width={10}>
              <EventList
                events={events}
                handleDeleteEvent={deleteEvent}
              />
            </Grid.Column>
            <Grid.Column width={6}>
              <EventActivity />
            </Grid.Column>
          </Grid>
        )
      }
    </Fragment>
  )
}

EventDashboard.propTypes = {
  deleteEvent: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  events: state.firestore.ordered.events
});

const mapActionsToProps = { deleteEvent }

export default connect(
  mapStateToProps,
  mapActionsToProps
)(
  firestoreConnect([ { collection: 'events' } ])(EventDashboard)
);