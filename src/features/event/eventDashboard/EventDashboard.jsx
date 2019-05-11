import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class EventDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10} style={{backgroundColor: 'green'}}>
          <h1>Columna Izquierda</h1>
        </Grid.Column>
        <Grid.Column width={6} style={{backgroundColor: 'red'}}>
          <h1>Columna Derecha</h1>
        </Grid.Column>
      </Grid>
    )
  }
}

export default EventDashboard;
