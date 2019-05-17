import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from '../eventList/EventList';

class EventDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <h1>Events List</h1>
          <EventList />
        </Grid.Column>
        <Grid.Column width={6} style={{backgroundColor: 'grey'}}>
          <h1>Columna Derecha</h1>
        </Grid.Column>
      </Grid>
    )
  }
}

export default EventDashboard;
